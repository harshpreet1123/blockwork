import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Spline from "@splinetool/react-spline";
import "../App.css";

const LandingPage = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const splineRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const handleGetStartedClick = () => {
    setOpenModal(true);
  };

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
        <nav></nav>
      </div>
      <div className="flex-half-row">
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
          <a
            href="#"
            onClick={handleGetStartedClick}
            ref={buttonRef}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>
        <div className="f-two">
          <Spline
            ref={splineRef}
            scene="https://prod.spline.design/60QZSgoHxT30HLIT/scene.splinecode"
          />
        </div>
      </div>
      {openModal ? <div></div> : <></>}
    </div>
  );
};

export default LandingPage;
