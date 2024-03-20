import Lottie from "react-lottie";
import { useLocation } from "react-router-dom";
const Animation = () => {
  const location = useLocation();
  const state  = location.state;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: state.animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="justify-center items-center ">
      <Lottie options={defaultOptions}/>
    </div>
  );
};

export default Animation;
