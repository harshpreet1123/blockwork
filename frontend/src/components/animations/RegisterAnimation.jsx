import Lottie from "react-lottie";
import animationData from "../../assets/animations/done.json";
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

        <button>Continue to Login</button>
      </div>
    </div>
  );
};

export default AnimationAndContent;
