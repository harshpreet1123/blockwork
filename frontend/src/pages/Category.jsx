import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <div className=" w-full bg-gradient-to-br  -my-2 from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500">
      <div className="pt-10">
        <h1 className=" text-3xl text-white font-bold text-center ">
          {state.route == "/register" ? "Register" : "Login"} as
        </h1>
      </div>
      <div className="flex items-center justify-center align-middle text-center justify-items-center h-screen">
        <div className="flex-1 border-r h-40 border-purple-400">
          <p className="text-white mb-16 text-lg">
          Elevate Your Freelancing Experience - Join BlocWork as a Client Today
          </p>
          <button className="relative inline-flex items-center justify-center overflow-hidden py-1  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <Link to={state.route} state={{ userType: "cl" }}>
              <span className="relative px-3 py-2.5  transition-all ease-in duration-75 bg-white  rounded-sm group-hover:bg-opacity-0">
                Client
              </span>
            </Link>
          </button>
        </div>
        <div className="flex-1 border-l h-40 border-purple-400">
          <p className="text-white mb-16 text-lg">
          Join BlocWork - Elevate Your Freelance Career with Blockchain Transactions!
          </p>
          <button className="relative inline-flex items-center justify-center overflow-hidden py-1  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <Link to={state.route} state={{ userType: "fr" }}>
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                Freelancer
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
