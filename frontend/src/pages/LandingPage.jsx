import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import Spline from "@splinetool/react-spline";
import "../App.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const splineRef = useRef(null);
  const navigation = [
    { name: "News", to: "/news" },
    { name: "Exchange", to: "/exchange" },
    { name: "Team", to: "/" },
    { name: "FAQ", to: "/" },
  ];

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
    <div className="p-8">
      <div>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                BlocWork
              </a>
            </div>
            <div className="flex gap-x-12">
              {navigation.map((item) => (
                <Link to={item.to} key={item.name}>
                  <a className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
              <Link to="/category">
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mx-2 -my-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    Sign Up
                  </span>
                </a>
              </Link>
            </div>
          </nav>
        </header>
      </div>
      <div className="flex-half-row p-16">
        <div className="f-one" ref={textRef}>
          <p>Aloha</p>
          <p className="font-bold text-4xl">Lorem, ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            impedit nostrum unde adipisci tenetur expedita dolorum quasi,
            <br />
            recusandae laborum earum nobis voluptatum.
          </p>
          <br />
          <Link to="/category">
            <a
              ref={buttonRef}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </Link>
        </div>
        <div className="f-two">
          {/* <Spline
            ref={splineRef}
            scene="https://prod.spline.design/60QZSgoHxT30HLIT/scene.splinecode"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
