import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import IconTextCard from "./IconTextCard";
import Lottie from "lottie-react";
import heroAnimation from "../assets/animations/blocks_2.json";
import Jobs from "../assets/animations/Jobs.json";
import Client from "../assets/animations/Clinet.json";
import Freelancer from "../assets/animations/Freelancer.json";
import Transaction from "../assets/animations/Transaction.json";
import ConnectFreelancer from "../assets/animations/AnimationConnectwith.json";

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
      <header className="py-14 h-screen ">
        <div className="flex flex-col md:flex-row lg:flex-row p-16 justify-strecth">
          <div className="flex-1 p-6" ref={textRef}>
            <p className="font-bold text-4xl">
              EMPOWER YOUR FREELANCE FUTURE TODAY
            </p>
            <p className="text-lg">
              Join a Borderless Community of Talent and Opprtunity on the
              Blockchain.
            </p>
            <p className="text-lg">Explore Decentralized Freelancing Today.</p>
            <p className="text-lg">
            BlocWork offers secure, transparent freelancing, eliminating intermediaries, fostering trust, and providing global accessibility, efficiency, and community collaboration.
            </p>
            <br />
            <Link to="/category" state={{ route: "/register" }} ref={buttonRef}>
              <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mx-2 -my-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-3 py-2.5 me-0.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                  Get started
                </span>
              </div>
            </Link>
            <Link to="/category" state={{ route: "/login" }} ref={buttonRef}>
              <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mx-2 -my-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-3 py-2.5 me-0.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </div>
            </Link>
          </div>
          <div className="flex-1 max-h-[28rem] max-w-[28rem]" ref={splineRef}>
            <Lottie animationData={heroAnimation} />
          </div>
        </div>
      </header>
      <br />

      <div className="bg-black p-10">
        <p className="text-3xl justify-center items-center text-center text-white">
          Dive into the World of decentrlization
        </p>
        <br />
        <div className="flex flex-col md:flex-col lg:flex-row justify-between sm:space-y-4 lg:space-y-0">
          <IconTextCard
            title="IPFS"
            subtitle="Uses IPFS(nterPlanetary File System) protocol, a secure decentralized way to store files, that can be accessed even from space."
          />
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

      <section>
        <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 m-1 bg-gray-600/10">
          <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
            <p className="text-black font-bold text-3xl text-center">
              Pure Hardwork, No Shortcuts
            </p>
            <div className="w-36 h-1 border-b-4 border-yellow-400 mt-5 mb-5 rounded-2xl "></div>
          </div>
          <div className="w-full h-auto flex flex-wrap justify-evenly">
            <div className="w-46 flex flex-col items-center mb-12">
              <Lottie className="w-48 h-48 mt-3" animationData={Jobs} />
              <p className="text-2xl font-bold text-black mt-1 mb-2">600+</p>
              <p className="text-1xl font-bold text-gray-800 mb-1"> Jobs </p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
              <Lottie className="w-48 h-48 mt-3" animationData={Client} />
              <p className="text-2xl font-bold text-black mt-1 mb-2">
                700,000+
              </p>
              <p className="text-xl font-bold text-gray-800 mb-1">Clients</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
              <Lottie className="w-48 h-48 mt-3" animationData={Freelancer} />
              <p className="text-2xl font-bold text-black mt-1 mb-2">10000+</p>
              <p className="text-xl font-bold text-gray-800 mb-1">
                Freelancers
              </p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
              <Lottie className="w-48 h-48 mt-3" animationData={Transaction} />
              <p className="text-2xl font-bold text-black mt-1 mb-2">40000+</p>
              <p className="text-xl font-bold text-gray-800 mb-1">
                Successfull Transactions
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-5 m-1 bg-gray-600/10">
          <div className="w-full h-auto flex flex-wrap justify-evenly">
            <div className="w-46 flex flex-col items-center mb-2">
              <Lottie className="w-72 h-72" animationData={ConnectFreelancer} />
            </div>
            <div>
              <p className="text-2xl font-bold">Connect with fellow FreeLancers</p>
              <p className="text-lg">Empower your freelancing journey, network with like-minded professionals, exchange ideas, and collaborate for mutual success in the freelance world.</p>
              <button className="border-solid border-2 border-gray-400 mt-3 font-bold px-6 py-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light sm:text-lg text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              We didn&apos;t reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
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
    </div>
  );
};

export default LandingPageContent;
