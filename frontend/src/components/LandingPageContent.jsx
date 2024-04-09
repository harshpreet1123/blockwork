import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
// import Spline from "@splinetool/react-spline";
import IconTextCard from "./IconTextCard";
import Lottie from "react-lottie";
// import animationData from "../assets/animations/robo.json";
import animationData from "../assets/animations/blocks.json";

const LandingPageContent = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const splineRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      x: -1000,
      opacity: 0,
    });
    gsap.to(textRef.current, {
      x: 0,
      opacity: 1,
    });
    gsap.from(buttonRef.current, {
      x: -200,
      opacity: 0,
    });
    gsap.to(buttonRef.current, {
      x: 0,
      opacity: 1,
      delay: 1,
    });

    gsap.from(splineRef.current, {
      x: 200,
      opacity: 0,
    });
    gsap.to(splineRef.current, {
      x: 0,
      opacity: 1,
    });
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <header className="py-14 h-screen">
        <div className="flex flex-col md:flex-row lg:flex-row p-16 justify-strecth">
          <div className="flex-1 p-6" ref={textRef}>
            <p className="font-bold text-4xl">EMPOWER YOUR FREELANCE FUTURE TODAY</p>
            <p className="text-xl">Join a Borderless Community of Talent and Opprtunity on the Blockchain.</p>
            <p className="text-xl">Explore Decentralized Freelancing Today.</p>
            <br />
            <Link to="/category" state={{ route: "/register" }} ref={buttonRef}>
              <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mx-2 -my-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-3 py-2.5 me-0.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                  Get started
                </span>
              </div>
            </Link>
          </div>
          <div className="flex-1 max-h-[30rem] max-w-[30rem]" ref={splineRef}>
            {/* 
              <Spline
                ref={splineRef}
                scene="https://prod.spline.design/60QZSgoHxT30HLIT/scene.splinecode"
              />
            */}
            <Lottie
            
           
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              isClickToPauseDisabled
            />
          </div>
        </div>
      </header>
    
      <div className="bg-black p-10">
        <p className="text-3xl justify-center items-center text-center text-white">
          Dive into the World of decentrlization
        </p>
        <br />
        <div className="flex flex-col lg:flex-row">
          <IconTextCard
            title="IPFS"
            subtitle="Uses IPFS(nterPlanetary File System) protocol, a secure decentralized way to store files, that can be accessed even from space."
          />
          <IconTextCard
            title="IPFS"
            subtitle="Uses IPFS(nterPlanetary File System) protocol, a secure decentralized way to store files, that can be accessed even from space."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageContent;
