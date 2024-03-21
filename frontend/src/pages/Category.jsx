import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ClientSvg from "../assets/svg/client.svg";
import FreelancerSvg from "../assets/svg/freelancer.svg";

const Category = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 shadow sm:p-8">
        <h5 className="mb-4 text-xl font-medium text-gray-500 ">Hire Talent</h5>
        <img src={ClientSvg} className="h-96 w-96 border" />
        <div className="flex items-center text-center justify-center text-gray-900 ">
          <p>Continue as</p>
        </div>
        <Link to={state.route} state={{ userType: "fr" }}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Client
          </button>
        </Link>
      </div>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 shadow sm:p-8">
        <h5 className="mb-4 text-xl font-medium text-gray-500 ">Find Work</h5>
        <img src={FreelancerSvg} className="h-96 w-96 border" />
        <div className="flex items-center text-center justify-center text-gray-900 ">
          <p>Continue as</p>
        </div>
        <Link to={state.route} state={{ userType: "fr" }}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Freelancer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
