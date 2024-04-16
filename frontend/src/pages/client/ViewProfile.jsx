import React from "react";
import { useLocation } from "react-router-dom";

const ViewProfile = () => {
  const location = useLocation();
  const state = location.state;
  const userData = state.userData;
  return (
    <>
      <div className="h-screen  bg-gray-200 pt-12">
        <div className="max-w-sm mx-auto bg-white  rounded-lg overflow-hidden shadow-lg">
          <div className="border-b px-4 py-6">
            <div className="text-center my-4">
              <img
                className="h-32 w-32 rounded-full border-4 border-white  mx-auto my-4"
                src={userData.profileImg}
                alt={`${userData.username}'s Profile Image`}
              />
              <div className="py-2">
                <h3 className="font-bold text-3xl text-gray-800  mb-1">
                  {userData.username}
                </h3>
                <div className="inline-flex text-gray-700  items-center">
                  <svg
                    className="h-5 w-5 text-gray-400  mr-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className=""
                      d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </svg>
                  {userData.location}
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-400">Comapny Name: </span>
              <span>{userData.companyName}</span>
            </div>
            <div>
              <span className="text-sm text-gray-400">Info: </span>
              <span>{userData.info}</span>
            </div>
            <div>
              <span className="text-sm text-gray-400">Phone: </span>
              <span>{userData.phone}</span>
            </div>
            <div>
              <span className="text-sm text-gray-400">Social: </span>
              <span>{userData.social.toString()}</span>
            </div>
            <br />
            <div className="flex gap-2 px-2">
              <button className="flex-1 rounded-full bg-purple-600  text-white  antialiased font-bold hover:bg-purple-700 px-4 py-2">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
