import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AddProfileClient = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [social, setSocial] = useState("");
  const [socialList, setSocialList] = useState([]);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [companyName, setCompanyname] = useState("");
  const [info, setInfo] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const pinataJWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmYjIxZGViMC0xNWQzLTRmMDMtOWNkMS00Yjc4MDIzMzBkNjQiLCJlbWFpbCI6ImhhcnNocHJlZXQuNzV3YXlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI3MzE3MjNmMWUwYmExMjllNWEwIiwic2NvcGVkS2V5U2VjcmV0IjoiYTk0ZWZmMjNmNGEyNDU0ZDE3NjE3YWY1MjI3MGVjZDg5M2YxMGI2OWEwNDI1Mzk5ODc0YTZlZGJiMTRiMzQ0NCIsImlhdCI6MTcwOTIwMDA3MH0.kI5_9Ihjy9kUN95aVGpD5jeMNCLS_3SkVgZLtCew7Vs";
  const token = Cookies.get("token");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(e.target.files[0]);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      // Reset image preview if file is not an image
      setImagePreview(null);
    }
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      // setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const pinataMetadata = JSON.stringify({
          name: `${username}_profile_img`,
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
      alert("Select a image to upload");
    }
  };

  const handleCreateProfile = async () => {
    const IpfsHash = await handleImageUpload();
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
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-1/2 justify-center items-center bg-white rounded-xl py-4">
        <div className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-5">
            Hello Again! - Create Your Profile
          </h1>
          <div className="flex-col items-center">
            <div className="inset-0 flex items-center justify-center mx-3 mb-4">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-48 h-48 rounded-full border-2 border-gray-200"
                />
              ) : (
                <div className="justify-center items-center w-40 h-40 overflow-hidden bg-gray-100 rounded-full">
                  <svg
                    className="w-40 h-40 text-gray-400 justify-center items-center -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
            <div className="flex py-2 px-3 mb-4 rounded-2xl">
              {/* <input
                id="imageInput"
                className="w-full"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              /> */}
              <input
                className="flex w-full text-gray-900 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
                id="file_input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              ></input>
            </div>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex">
            <div className="flex w-1/2 items-center border-2 py-2 px-3 rounded-2xl mb-4 mr-1">
              <input
                className="pl-2 outline-none border-none w-full"
                type="text"
                name="firstname"
                placeholder="First Name"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex w-1/2 items-center border-2 py-2 px-3 rounded-2xl mb-4 ml-1">
              <input
                className="pl-2 outline-none border-none w-full"
                type="text"
                name="lastname"
                placeholder="Last Name"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="companyname"
              placeholder="Company Name (optional)"
              onChange={(e) => {
                setCompanyname(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <textarea
              className="pl-2 outline-none border-none w-full"
              name="info"
              placeholder="Info"
              rows="1"
              cols="60"
              onChange={(e) => {
                setInfo(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex">
            <div className="flex w-1/2 items-center border-2 py-2 px-3 rounded-2xl mb-4 mr-1">
              <input
                className="pl-2 outline-none border-none w-full"
                type="text"
                name="location"
                placeholder="Location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex w-1/2 items-center border-2 py-2 px-3 rounded-2xl mb-4 ml-1">
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="p-2">
            {socialList.map((str, index) => (
              <span key={index} className="p-1 mr-1 bg-slate-400">
                {str}
              </span>
            ))}
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              onChange={(e) => {
                setSocial(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSocialList([...socialList, social]);
                  setSocial("");
                  e.target.value = "";
                }
              }}
              className="outline-none border-none w-full"
              type="text"
              name="socialList"
              placeholder="Social Media Links"
              required
            />
          </div>
          <ConnectWallet
            btnTitle={"Choose Wallet"}
            modalTitle={"Choose a Wallet to Continue"}
            modalSize={"wide"}
            welcomeScreen={{
              title: "BlocWork",
              subtitle: "The Decentralised Workplace ",
            }}
            modalTitleIconUrl={""}
            showThirdwebBranding={false}
          />
          <button
            onClick={handleCreateProfile}
            type="button"
            className="text-white bg-gradient-to-tr from-blue-800 to-purple-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-200  rounded-lg text-md px-5 py-2.5 mt-2 inline-flex justify-center w-full text-center font-mono font-bold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddProfileClient;
