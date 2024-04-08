import Lottie from "lottie-react";
import Jobs from "../assets/animations/Jobs.json";
import Client from "../assets/animations/Clinet.json";
import Freelancer from "../assets/animations/Freelancer.json";
import Transaction from "../assets/animations/Transaction.json";
function OurCustomers() {
  return (
    <div>
    <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 m-1">
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
            <p className="text-black font-bold text-3xl text-center">Pure Hardwork, No Shortcuts</p>
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
                <p className="text-2xl font-bold text-black mt-1 mb-2">700,000+</p>
                <p className="text-xl font-bold text-gray-800 mb-1">Clients</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
                <Lottie className="w-48 h-48 mt-3" animationData={Freelancer} />
                <p className="text-2xl font-bold text-black mt-1 mb-2">10000+</p>
                <p className="text-xl font-bold text-gray-800 mb-1">Freelancers</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
            <Lottie className="w-48 h-48 mt-3" animationData={Transaction} />
                <p className="text-2xl font-bold text-black mt-1 mb-2">40000+</p>
                <p className="text-xl font-bold text-gray-800 mb-1">Successfull Transactions</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default OurCustomers;
