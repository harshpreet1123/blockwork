import Lottie from "react-lottie";
import animationData from "../../assets/animations/welcome.json";

import { useNavigate } from "react-router-dom";
const WelcomeAnimation = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="justify-center items-center self-center h-full w-full">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        eventListeners={[
          {
            eventName: "loopComplete",
            callback: () => {
              {
                navigate("/cl/add-profile");
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default WelcomeAnimation;
