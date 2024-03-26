import Lottie from "react-lottie";

import { useLocation } from "react-router-dom";
const AnimationAndContent = () => {
  const location = useLocation();
  const state = location.state;
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: state.animationData,
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
        <div>{state.contentText}</div>

        <button >{state.buttonLabel}</button>
      </div>
    </div>
  );
};

export default AnimationAndContent;
