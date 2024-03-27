const AddProfileClient = () => {
  return (
    <div className="h-screen flex bg-gradient-to-tr from-blue-200 to-purple-200 items-center justify-center">
      <div className="flex w-1/4 justify-center items-center bg-white rounded-lg ">
        <div className="bg-white">
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
              placeholder="Company Name"
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Info"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProfileClient;
