import axios from "axios";
const BASE_URL = "http://localhost:5000";

const ApiService = {
  register: async (email, password, userType) => {
    const paramas = { email: email, password: password };
    const response = await axios.post(
      `${BASE_URL}/${userType}/register`,
      paramas
    );
    console.log(response.body);
    return response;
  },

  login: async (email, password, userType) => {
    const paramas = { email: email, password: password };
    const response = await axios.post(`${BASE_URL}/${userType}/login`, paramas);
    console.log(response.body);
    return response;
  },

  exchangeData: async (page) => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          per_page: 12,
          page: page,
          sparkline: false,
        },
      }
    );
    return response;
  },

  newsData: async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=blockchain&q=crypto&language=en&sortBy=popularity&pageSize=10&page=1&apiKey=79b953060c674330b0ccc948ff6cdd0e"
    );
    const data = await response.json();
    return data;
  },

  uploadFile: async (selectedFile, fileName) => {
    const pinataJWT =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmYjIxZGViMC0xNWQzLTRmMDMtOWNkMS00Yjc4MDIzMzBkNjQiLCJlbWFpbCI6ImhhcnNocHJlZXQuNzV3YXlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI3MzE3MjNmMWUwYmExMjllNWEwIiwic2NvcGVkS2V5U2VjcmV0IjoiYTk0ZWZmMjNmNGEyNDU0ZDE3NjE3YWY1MjI3MGVjZDg5M2YxMGI2OWEwNDI1Mzk5ODc0YTZlZGJiMTRiMzQ0NCIsImlhdCI6MTcwOTIwMDA3MH0.kI5_9Ihjy9kUN95aVGpD5jeMNCLS_3SkVgZLtCew7Vs";
    if (selectedFile) {
      // setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const pinataMetadata = JSON.stringify({
          name: fileName,
        });
        formData.append("pinataMetadata", pinataMetadata);
        const pinataOptions = JSON.stringify({ cidVersion: 0 });
        formData.append("pinataOptions", pinataOptions);
        const res = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            maxBodyLength: Infinity,
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
              Authorization: `Bearer ${pinataJWT}`,
            },
          }
        );
        console.log(res.data);
        return res.data.IpfsHash;
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Select a file to upload");
    }
  },

  //client add profile
  createProfileClient: async (
    selectedFile,
    username,
    firstname,
    lastname,
    info,
    companyName,
    phone,
    location,
    socialList,
    token
  ) => {
    const IpfsHash = await ApiService.uploadFile(
      selectedFile,
      `${username}_profile_img`
    );
    console.log(IpfsHash);
    try {
      var response = axios.post(
        "http://localhost:5000/fr/add-profile",
        {
          username: username,
          firstname: firstname,
          lastname: lastname,
          info: info,
          companyName: companyName,
          profileImg: `ipfs.io/ipfs/${IpfsHash}`,
          phone: parseInt(phone),
          location: location,
          wallets: [],
          social: socialList,
        },
        { headers: { Authorization: token } }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  },

  //Freelancer add profile
  createProfileFreelancer: async (
    selectedFile,
    username,
    firstname,
    lastname,
    bio,
    skillsList,
    phone,
    location,
    socialList,
    token
  ) => {
    const IpfsHash = await ApiService.uploadFile(
      selectedFile,
      `${username}_profile_img`
    );
    console.log(IpfsHash);
    try {
      var response = axios.post(
        "http://localhost:5000/fr/add-profile",
        {
          username: username,
          firstname: firstname,
          lastname: lastname,
          bio: bio,
          skills: skillsList,
          profileImg: `ipfs.io/ipfs/${IpfsHash}`,
          phone: parseInt(phone),
          location: location,
          wallets: [],
          social: socialList,
        },
        { headers: { Authorization: token } }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  },
};
export default ApiService;
