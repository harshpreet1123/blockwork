import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Spline from "@splinetool/react-spline";
// import { useRef } from "react";
// import gsap from "gsap";

const Category = () => {
  const location = useLocation();
  const state = location.state;
  // const splineRef = useRef(null);

  // gsap.from(splineRef.current, {
  //   x: 200,
  //   opacity: 0,
  // });
  // gsap.to(splineRef.current, {
  //   x: 0,
  //   opacity: 1,
  // });

  return (
    <div className=" w-full ">
      <div className="pt-5">
        <h1 className="text-3xl text-purple-500  shadow-xl shadow-purple-500/50 font-bold text-center ">
          {state.route == "/register" ? "Register" : "Login"} as
        </h1>
      </div>
      {/* <div className="f-two">
          <Spline
            ref={splineRef}
            scene="https://prod.spline.design/60QZSgoHxT30HLIT/scene.splinecode"
          />
        </div> */}
      <div className="flex items-center justify-center align-middle text-center justify-items-center h-screen">
        <div className="container p-52 mb-48">
          <div className="flex-1 bg-gradient-to-br  shadow-xl shadow-purple-500/100  -my-2 from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 border-solid border-2 h-40 border-purple-400 rounded-xl">
            <p className="text-white mt-6 mb-4 text-lg">
              Elevate Your Freelancing Experience - Join BlocWork as a Client
              Today!
            </p>
            <button className="relative inline-flex  ring-offset-1 ring-1 items-center justify-center overflow-hidden py-1  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <Link to={state.route} state={{ userType: "cl" }}>
                <span className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white  rounded-sm group-hover:bg-opacity-0">
                  Client
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="container p-52 mb-48">
          <div className="flex-1 bg-gradient-to-br  shadow-xl shadow-purple-500/100 -my-2 from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 border-solid border-2 h-40 border-purple-400 rounded-xl">
            <p className="text-white mt-6 mb-4 text-lg">
              Join BlocWork - Elevate Your Freelance Career with Blockchain
              Transactions!
            </p>
            <button className="relative inline-flex items-center ring-offset-1 ring-1 justify-center overflow-hidden py-1  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <Link to={state.route} state={{ userType: "fr" }}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                  Freelancer
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
