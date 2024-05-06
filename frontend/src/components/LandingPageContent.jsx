import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import heroAnimation from "../assets/animations/blocks_2.json";
import Competences from "./LandingPage/Competences";
import Testimonial from "./LandingPage/Testimonial";
import GetStarted from "./LandingPage/GetStarted";

const LandingPageContent = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const splineRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      x: -200,
      opacity: 0,
    });
    gsap.to(textRef.current, {
      x: 0,
      opacity: 1,
      delay: 1,
    });
    gsap.from(buttonRef.current, {
      x: -1000,
      opacity: 0,
    });
    gsap.to(buttonRef.current, {
      x: 0,
      opacity: 1,
      delay: 1.5,
    });

    gsap.from(splineRef.current, {
      x: 400,
      opacity: 0,
    });
    gsap.to(splineRef.current, {
      x: 0,
      opacity: 1,
      delay: 1.5,
    });
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 text-gray-800 h-screen">
        <div className="container flex flex-col justify-center px-6 mx-auto py-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div ref={textRef}>
              <h1 className="lg:text-5xl font-bold leading-none text-3xl">
                Join a
                <span className="text-purple-600"> Borderless Community </span>
                of Talent & Oppurtunity on
                <span className="text-purple-600"> Blockchain</span>.
              </h1>
              <p className="text-xl mt-6 mb-8">
                Eliminate intermediaries, foster trust, and gain global
                accessibility.
              </p>
            </div>
            <div
              ref={buttonRef}
              className="flex sm:items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
            >
              <Link
                to="/category"
                state={{ route: "/register" }}
                className="px-8 py-3 text-lg font-semibold rounded bg-purple-500 text-gray-50 hover:bg-purple-700"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div
            ref={splineRef}
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          >
            <Lottie
              animationData={heroAnimation}
              className="object-contain h-72 sm:h-80 lg:h-[500px] xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      <Competences />

      <section className="bg-gray-100 text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">
              Empower Your Potential
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">
              Discover the Advantages of Our Platform
            </p>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">
                  How We Can Help You Succeed
                </h3>
                <p className="mt-3 text-lg text-gray-600">
                  Discover the Benefits of Joining Our Community
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        Global Reach
                      </h4>
                      <p className="mt-2 text-gray-600">
                        Connect with talent and opportunities from around the
                        world, transcending geographical boundaries.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        Trust and Security
                      </h4>
                      <p className="mt-2 text-gray-600">
                        Our blockchain-based system ensures transparent and
                        secure transactions, fostering trust among our community
                        members.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        Seamless Experience
                      </h4>
                      <p className="mt-2 text-gray-600">
                        Enjoy a user-friendly interface and streamlined
                        processes, making it easy to navigate and utilize our
                        platform efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src="https://source.unsplash.com/random/361x481"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <section className="bg-slate-200">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light sm:text-lg text-black">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              We didn&apos;t{" "}
              <span className="text-purple-700">reinvent the wheel</span>
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers.
            </p>
            <p>
              At BlocWork, we have integrated proven freelancing features with
              blockchain technology for enhanced security and trust. Our
              platform seamlessly integrates with existing tools and systems
              while fostering innovation through smart contracts and
              decentralized solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <GetStarted />
    </div>
  );
};

export default LandingPageContent;
