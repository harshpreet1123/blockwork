import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import ClientSvg from "../assets/svg/client.svg";
// import FreelancerSvg from "../assets/svg/freelancer.svg";
import AnimationClient from "../assets/animations/AnimationClient.json";
import AnimationFreeLancer from "../assets/animations/AnimationFreeLancer.json";
import AnimationBgCategory from "../assets/animations/AnimationBgCategory.json";
import Lottie from "lottie-react";

const Category = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="flex justify-center items-center  h-screen bg-gradient-to-tr from-blue-200 to-purple-200">
      <Lottie className=" absolute h-full w-full mx-96 my-96 p-1" animationData={AnimationBgCategory} />
      <div className="relative w-full max-w-sm p-4 backdrop-blur-sm bg-white/25 rounded-2xl mx-16 sm:p-8">
        <h5 className="mb-4 text-md font-bold font-mono text-black">
          Hire Exceptional Talent
        </h5>
        {/* <img src={ClientSvg} className="h-96 w-96 border" /> */}
        <Lottie animationData={AnimationClient} className="w-80 h-80" />
        <div className="flex items-center text-center justify-center text-gray-900 ">
          <p className="mb-2 font-mono text-md font-bold">Continue as</p>
        </div>
        <Link to={state.route} state={{ userType: "cl" }}>
          <button
            type="button"
            className="text-white bg-gradient-to-tr from-blue-800 to-purple-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-200  rounded-lg text-md px-5 py-2.5 inline-flex justify-center w-full text-center font-mono font-bold"
          >
            Client
          </button>
        </Link>
      </div>
      <div className=" relative w-full max-w-sm p-4 backdrop-blur-sm bg-white/25  rounded-2xl mx-16 sm:p-8">
        <h5 className="mb-4 text-md font-bold font-mono text-black">
          Thriving as a Freelance
        </h5>
        {/* <img src={FreelancerSvg} className="h-96 w-96 border" /> */}
        <Lottie animationData={AnimationFreeLancer} className="w-80 h-80" />
        <div className="flex items-center text-center justify-center text-gray-900 ">
          <p className="mb-2 font-mono text-md font-bold">Continue as</p>
        </div>
        <Link to={state.route} state={{ userType: "fr" }}>
          <button
            type="button"
            className="text-white bg-gradient-to-tr from-blue-800 font-mono font-bold to-purple-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-200  rounded-lg text-md px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Freelancer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
