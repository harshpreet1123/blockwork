import { useState } from "react";
import Cookies from "js-cookie";
import ApiService from "../../services/api";
import { useNavigate } from "react-router-dom";

const AddProfileFreelancer = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [social, setSocial] = useState("");
  const [socialList, setSocialList] = useState([]);
  const [skills, setSkills] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [wallet, setWallet] = useState("");
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
    console.log(selectedFile);
  };

  const handleCreateProfile = async () => {
    try {
      const response = await ApiService.createProfileFreelancer(
        selectedFile,
        username,
        firstname,
        lastname,
        bio,
        skillList,
        phone,
        location,
        socialList,
        wallet,
        token
      );
      console.log("response:" + response);
      if (response == true) {
        navigate("/fr/home");
      } else {
        // navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveSkill = (index) => {
    const newList = [...skillList];
    newList.splice(index, 1);
    setSkillList(newList);
  };

  const handleRemoveSocial = (index) => {
    const newList = [...socialList];
    newList.splice(index, 1);
    setSocialList(newList);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 rounded-xl border border-purple-200">
        <div className="md:col-span-4 p-10">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Create<span className="text-purple-600"> Profile</span>
          </h3>
          <div className="flex-col items-center py-5">
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
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Username
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Jhon"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Doe"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="phone"
                placeholder="+91 XXXXX-XXXXX"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Kochi"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="w-full px-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Wallet
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Polygon Wallet Address"
              onChange={(e) => {
                setWallet(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Social List
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="https://www.abcd.com"
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
              />
            </div>
          </div>
          <div className="pb-4 flex flex-wrap">
            {socialList.map((str, index) => (
              <div key={index} className="relative">
                <span className="rounded  bg-slate-200">{str}</span>
                <button
                  className="text-black w-5 hover:text-red-700 relative bottom-4 mr-5 ml-1 border-solid border-2 rounded-sm bg-red-50 text-base "
                  onClick={() => handleRemoveSocial(index)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Skills
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Add Skills"
                onChange={(e) => {
                  setSkills(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSkillList([...skillList, skills]);
                    setSkills("");
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
          <div className="pb-4 flex flex-wrap">
            {skillList.map((str, index) => (
              <div key={index} className="relative">
                <span className="rounded  bg-slate-200">{str}</span>
                <button
                  className="text-black w-5 hover:text-red-700 relative bottom-4 mr-5 ml-1 border-solid border-2 rounded-sm bg-red-50 text-base "
                  onClick={() => handleRemoveSkill(index)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Bio
              </label>
              <textarea
                rows="3"
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => {
                  setBio(e.target.value);
                }}
                required
              ></textarea>
            </div>
            <div className="flex justify-end w-full p-3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-xl"
                type="submit"
                onClick={handleCreateProfile}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProfileFreelancer;
