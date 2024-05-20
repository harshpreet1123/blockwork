import axios from "axios";
const BASE_URL = "http://192.168.137.144:5000";

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
        `${BASE_URL}/cl/add-profile`,
        {
          username: username,
          firstname: firstname,
          lastname: lastname,
          info: info,
          companyName: companyName,
          profileImg: `https://lavender-magnificent-parakeet-19.mypinata.cloud/ipfs/${IpfsHash}`,
          phone: parseInt(phone),
          location: location,
          wallets: [],
          social: socialList,
        },
        { headers: { Authorization: token } }
      );
      console.log(response);
      return true;
    } catch (e) {
      console.log(e);
      return false;
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
    wallet,
    token
  ) => {
    const IpfsHash = await ApiService.uploadFile(
      selectedFile,
      `${username}_profile_img`
    );
    console.log(IpfsHash);
    try {
      var response = axios.post(
        `${BASE_URL}/fr/add-profile`,
        {
          username: username,
          firstname: firstname,
          lastname: lastname,
          bio: bio,
          skills: skillsList,
          profileImg: `https://lavender-magnificent-parakeet-19.mypinata.cloud/ipfs/${IpfsHash}`,
          phone: parseInt(phone),
          location: location,
          wallet: wallet,
          social: socialList,
        },
        { headers: { Authorization: token } }
      );
      console.log(response);
      return true;
    } catch (e) {
      console.log(e);
    }
  },

  checkProfileExists: async (token, userType) => {
    try {
      var response = await axios.get(`${BASE_URL}/${userType}/check-profile`, {
        headers: { Authorization: token },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  },

  getProfleDetails: async (token, userType) => {
    try {
      var response = await axios.get(`${BASE_URL}/${userType}/get-profile`, {
        headers: { Authorization: token },
      });
      console.log("Getting Profile Details", response);
      return response;
    } catch (e) {
      console.log(e);
      return false;
    }
  },

  createJob: async (
    token,
    title,
    description,
    attachments,
    tags,
    budget,
    time
  ) => {
    try {
      const params = {
        title: title,
        description: description,
        attachments: attachments,
        tags: tags,
        budget: budget,
        time: time,
      };
      console.log("herr");
      const response = await axios.post(`${BASE_URL}/jobs/create-job`, params, {
        headers: { Authorization: token },
      });
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  getJobs: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/jobs/get-jobs`);
      return response.data.jobs;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  sendContactEmail: async (name, email, message) => {
    try {
      const response = await axios.post(`${BASE_URL}/contact-us/`, {
        name: name,
        email: email,
        message: message,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return { success: false, message: "Failed to send email." };
    }
  },
};
export default ApiService;
