import { Link } from "react-router-dom";

const Category= () => {
  return (
    <div className="flex items-center justify-center align-middle text-center justify-items-center h-screen">
      <div className="flex-1 border-r border-purple-400">
      <Link to="/Loginpage">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            Client
          </span>
        </button>
        </Link>
      </div>
      <div className="flex-1 border-l border-purple-400">
        <Link to="/FreelancerPage">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            Freelancer
          </span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
