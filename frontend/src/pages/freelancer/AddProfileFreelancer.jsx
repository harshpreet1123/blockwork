import { ConnectWallet } from "@thirdweb-dev/react";

const AddProfileFreelancer = () => {
  return (
    <div className="h-screen flex bg-gradient-to-tr from-blue-200 to-purple-200 items-center justify-center">
      <div className=" flex w-1/4 justify-center items-center bg-white rounded-lg py-4">
        <div className="bg-white ">
          <h1 className="text-gray-800 font-bold text-2xl mb-5">
            Hello Again! - Create Your Profile
          </h1>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Username"
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="First Name"
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Bio"
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="file"
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <label >Add Banner image<img src="" alt=""/></label>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <label><input type="text" placeholder="Add your location"/></label>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <label><input type="array" placeholder="Add Skills"/></label>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <label><input type="number" placeholder="Mobile number"/></label>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <label><input type="array" placeholder="Add Social"/></label>
          </div>
          <ConnectWallet/>
          <div>
        <button
            type="button"
            className="text-white bg-gradient-to-tr from-blue-800 to-purple-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-200  rounded-lg text-md px-5 py-2.5 mt-2 inline-flex justify-center w-full text-center font-mono font-bold"
          >
           Save 
        </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AddProfileFreelancer 