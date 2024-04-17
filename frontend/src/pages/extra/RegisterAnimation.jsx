import Lottie from "react-lottie";
import animationData from "../../assets/animations/done.json";
import { Link } from "react-router-dom";
const AnimationAndContent = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen w-screen">
      <div className="justify-center items-center self-center text-center h-auto w-auto">
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
          height={500}
          width={500}
        />
      </div>
      <div className="justify-center items-center text-center">
        <div>Registration Done</div>
        <Link to="/login" state={{ userType: "fr" }}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mx-2 -my-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            Continue to Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AnimationAndContent;
