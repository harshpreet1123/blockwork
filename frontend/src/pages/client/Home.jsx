import { ConnectWallet } from "@thirdweb-dev/react";
import no_jobs from "../../assets/images/no_jobs.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="p-4 ">
      {/* Search bar and Connect Wallet */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <ConnectWallet />
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <img src={no_jobs} />
        <p className="text-xl p-4">
          Seems like you currently have no active job
        </p>
        <Link to="/cl/create-job">
          <button className="px-8 py-4 bg-purple-500 rounded-xl text-white hover:bg-purple-600 hover:border-2 hover:border-purple-900">
            Create A Job
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
