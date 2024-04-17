import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import Cookies from "js-cookie";
import ApiService from "../../services/api";
import { useNavigate } from "react-router-dom";

const AddProfileFreelancer = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [social, setSocial] = useState("");
  const [skills, setSkills] = useState("");
  const [socialList, setSocialList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [bio, setBio] = useState("");
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
        bio,
        skillsList,
        phone,
        location,
        socialList,
        token
      );
      console.log("response:" + response);
      if (response == true) {
        navigate("/fr/home");
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
        <div className="bg-white">
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
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
            <div className="flex py-2 px-3 mb-4 rounded-2xl">
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
            <textarea
              className="pl-2 outline-none border-none w-full"
              name="bio"
              placeholder="Bio"
              rows="1"
              cols="60"
              onChange={(e) => {
                setBio(e.target.value);
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
            {skillsList.map((str, index) => (
              <span key={index} className="p-1 mr-1 bg-slate-400">
                {str}
              </span>
            ))}
          </div>
          <div className="items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              onChange={(e) => {
                setSkills(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSkillsList([...skillsList, skills]);
                  setSkills("");
                  e.target.value = "";
                }
              }}
              className="outline-none border-none w-full"
              type="text"
              name="skills"
              placeholder="Skills"
              required
            />
          </div>
          <div className="p-2">
            {socialList.map((str, index) => (
              <span key={index} className="p-1 mr-1 bg-slate-400">
                {str}
              </span>
            ))}
          </div>
          <div className="items-center border-2 py-2 px-3 rounded-2xl mb-4">
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

export default AddProfileFreelancer;
