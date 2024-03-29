import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const AddProfileClient = () => {
  // const [imagePreview, setImagePreview] = useState(null);
  // const [selectedFile, setSelectedFile] = useState(null);
  const [imgcrop, setimagecrop] = useState(false);
  const [setImage] = useState(" ");
  const [src] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);

  const profileFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setpview(null);
  };

  const onCrop = (view) => {
    setpview(view);
  };

  const saveCropImage = () => {
    setprofile([...profile, { pview }]);
    setimagecrop(false);
  };

  const [social, setSocial] = useState("");
  const [socialList, setSocialList] = useState([]);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [companyName, setCompanyname] = useState("");
  const [info, setInfo] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  // const pinataJWT =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmYjIxZGViMC0xNWQzLTRmMDMtOWNkMS00Yjc4MDIzMzBkNjQiLCJlbWFpbCI6ImhhcnNocHJlZXQuNzV3YXlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI3MzE3MjNmMWUwYmExMjllNWEwIiwic2NvcGVkS2V5U2VjcmV0IjoiYTk0ZWZmMjNmNGEyNDU0ZDE3NjE3YWY1MjI3MGVjZDg5M2YxMGI2OWEwNDI1Mzk5ODc0YTZlZGJiMTRiMzQ0NCIsImlhdCI6MTcwOTIwMDA3MH0.kI5_9Ihjy9kUN95aVGpD5jeMNCLS_3SkVgZLtCew7Vs";
  const token = Cookies.get("token");
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedFile(e.target.files[0]);
  //   if (file && file.type.startsWith("image/")) {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       setImagePreview(reader.result);
  //     };

  //     reader.readAsDataURL(file);
  //   } else {
  //     // Reset image preview if file is not an image
  //     setImagePreview(null);
  //   }
  // };

  // const handleImageUpload = async () => {
  //   if (selectedFile) {
  //     // setIsLoading(true);
  //     try {
  //       const formData = new FormData();
  //       formData.append("file", selectedFile);
  //       const pinataMetadata = JSON.stringify({
  //         name: `${username}_profile_img`,
  //       });
  //       formData.append("pinataMetadata", pinataMetadata);
  //       const pinataOptions = JSON.stringify({ cidVersion: 0 });
  //       formData.append("pinataOptions", pinataOptions);
  //       const res = await axios.post(
  //         "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //         formData,
  //         {
  //           maxBodyLength: Infinity,
  //           headers: {
  //             "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
  //             Authorization: `Bearer ${pinataJWT}`,
  //           },
  //         }
  //       );
  //       console.log(res.data);
  //       return res.data.IpfsHash;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } else {
  //     alert("Select a image to upload");
  //   }
  // };

  const handleCreateProfile = async () => {
    // const IpfsHash = await handleImageUpload();
    // console.log(IpfsHash);
    try {
      var response = axios.post(
        "http://localhost:5000/fr/add-profile",
        {
          username: username,
          firstname: firstname,
          lastname: lastname,
          info: info,
          companyName: companyName,
          // profileImg: `ipfs.io/ipfs/${IpfsHash}`,
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
        <div className="bg-white m-5">
          <h1 className="text-gray-800 font-bold text-2xl mb-5">
            Hello Again! - Create Your Profile
          </h1>
          {/* <div className="flex items-center">
            <div className="inset-0 flex items-center justify-center mx-3 mb-4">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-20 h-20 rounded-full border-2 border-gray-200"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm18 0a10 10 0 11-20 0 10 10 0 0120 0zM8 8a1 1 0 00-2 0v4a1 1 0 102 0V8zm8 0a1 1 0 10-2 0v4a1 1 0 102 0V8z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="flex border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                id="imageInput"
                className="w-full"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <img
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid blue",
              }}
              onClick={() => setimagecrop(true)}
              src={
                profileFinal.length
                  ? profileFinal
                  : "src/assets/images/image.png"
              }
              alt=""
            />
            <label htmlFor="" className="mt-3 font-semibold text-lg">
              Karan Kumar
            </label>
            <Dialog
              visible={imgcrop}
              header={() => (
                <p className="text-lg font-semibold textColor">
                  Update Profile
                </p>
              )}
              onHide={() => setimagecrop(false)}
            >
              <div className="confirmation-content flex flex-col items-center">
                <Avatar
                  width={100}
                  height={100}
                  onCrop={onCrop}
                  onClose={onClose}
                  src={src}
                  shadingColor={"#474649"}
                  backgroundColor={"#474649"}
                />
                <div className="flex flex-col items-center mt-5 w-12">
                  <div className="flex justify-around w-12 mt-4">
                    <Button
                      onClick={saveCropImage}
                      label="Save"
                      icon="pi pi-check"
                    />
                  </div>
                </div>
              </div>
            </Dialog>

            <InputText
              type="file"
              accept="/image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
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
          <ConnectWallet />
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
