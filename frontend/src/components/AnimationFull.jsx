import Lottie from "react-lottie";

import { useLocation, useNavigate } from "react-router-dom";
const Animation = () => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: state.animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="justify-center items-center self-center text-center h-screen w-screen">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        eventListeners={[
          {
            eventName: "loopComplete",
            callback: () => {
              // navigate("/");
            },
          },
        ]}
      />
    </div>
  );
};

export default Animation;
