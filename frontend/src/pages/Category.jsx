import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AnimationClient from "../assets/animations/AnimationClient.json";
import AnimationFreeLancer from "../assets/animations/AnimationFreeLancer.json";
import AnimationBgCategory from "../assets/animations/AnimationBgCategory.json";
import Lottie from "lottie-react";


const Category = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-tr from-blue-500/25 to-purple-400">
      <Lottie
        className="absolute inset-0 z-0"
        animationData={AnimationBgCategory}
      />
      <div className="w-3/4 lg:w-full relative max-w-md p-4 bg-white bg-opacity-25 rounded-2xl m-8 md:max-w-sm md:p-8 lg:max-w-lg">
        <h5 className="mb-4 text-md font-bold font-mono text-black text-center">
          Hire Exceptional Talent
        </h5>
        <Lottie animationData={AnimationClient} className="w-40 lg:w-80 lg:h-80 mx-auto" />
        <div className="flex items-center justify-center text-gray-900 mb-2">
          <p className="font-mono text-md font-bold">Continue as</p>
        </div>
        <Link to={state.route} state={{ userType: "cl" }}>
          <button
            type="button"
            className="text-white bg-gradient-to-tr from-blue-800 to-purple-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-lg text-md px-5 py-2.5 w-full font-mono font-bold"
          >
            Client
          </button>
        </Link>
      </div>
      <div className="w-3/4 lg:w-full relative max-w-md p-4 bg-white bg-opacity-25 rounded-2xl m-8 md:max-w-sm md:p-8 lg:max-w-lg">
        <h5 className="mb-4 text-md font-bold font-mono text-black text-center">
          Thriving as a Freelance
        </h5>
        <Lottie animationData={AnimationFreeLancer} className="h-40 lg:w-80 lg:h-80 mx-auto" />
        <div className="flex items-center justify-center text-gray-900 mb-2">
          <p className="font-mono text-md font-bold">Continue as</p>
        </div>
        <Link to={state.route} state={{ userType: "fr" }}>
          <button
            type="button"
            className="text-white bg-gradient-to-tr from-blue-800 to-purple-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-lg text-md px-5 py-2.5 w-full font-mono font-bold"
          >
            Freelancer
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Category;
