/* eslint-disable react/prop-types */
import Lottie from "react-lottie";
import animationData from "../../assets/animations/welcome.json";
import Cookies from "js-cookie";

import { useNavigate, useLocation } from "react-router-dom";
import ApiService from "../../services/api";
const WelcomeAnimation = () => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const token = Cookies.get("token");
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
            callback: async () => {
              console.log(state.userType);
              {
                if (state.userType == "cl") {
                  const response = await ApiService.checkProfileExistsClient(
                    token
                  );
                  if (response.data == true) {
                    navigate("/cl/home");
                  } else {
                    navigate("/cl/add-profile");
                  }
                } else if (state.userType == "fr") {
                  // const response = await ApiService.checkProfileExistsClient(
                  //   token
                  // );
                  // if (response == true) {
                  //   navigate("/cl/home");
                  // } else {
                  //   navigate("/cl/add-profile");
                  // }
                }
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default WelcomeAnimation;
