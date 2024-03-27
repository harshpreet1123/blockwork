const AddProfileClient = () => {
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">BlocWork</h1>
          <p className="text-white mt-1">Add Client Profile -</p>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
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
