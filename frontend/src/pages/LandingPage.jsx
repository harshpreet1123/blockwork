import React from "react";
import Spline from "@splinetool/react-spline";
import "../App.css";

const LandingPage = () => {
  return (
    <div className="p-8">
      <div>
        <nav></nav>
      </div>
      <div className="flex-half-row">
        <div className="f-one">
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
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>
        <div className="f-two">
          <Spline scene="https://prod.spline.design/60QZSgoHxT30HLIT/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
