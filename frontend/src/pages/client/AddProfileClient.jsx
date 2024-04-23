import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import Cookies from "js-cookie";
import ApiService from "../../services/api";
import { useNavigate } from "react-router-dom";

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
  const token = Cookies.get("token");
  const navigate = useNavigate();

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

  const handleCreateProfile = async () => {
    try {
      const response = await ApiService.createProfileClient(
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
      );
      console.log("response:" + response);
      if (response == true) {
        navigate("/cl/home");
      } else {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-tr from-blue-300 to-purple-300">
      <h1 className="text-gray-800 font-bold text-2xl mb-5 m-8">
        Hello Again! - Create Your Profile
      </h1>
      <div className="flex w-1/2 justify-center items-center bg-white rounded-none py-4">
        <div className="bg-white ">
          <div className="flex-col items-center">
            <div className="flex felx-row">
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
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>

              <div className="mx-auto max-w-xs">
                <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
                  <div className="space-y-1 text-center">
                    <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-600">
                      <a
                        href="#"
                        className="font-medium text-primary-500 hover:text-primary-700"
                      >
                        Click to upload
                      </a>{" "}
                      or drag and drop
                    </div>
                    <p className="text-sm text-gray-500">
                      {" "}
                      PNG, JPG, JPEG, WEBP,SVG
                    </p>
                  </div>
                  <input
                    id="example5"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
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
