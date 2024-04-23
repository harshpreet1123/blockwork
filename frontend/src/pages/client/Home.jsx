import { ConnectWallet } from "@thirdweb-dev/react";
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
          <div className="flex items-center">
            <ConnectWallet />
          </div>
        </div>
      <p className="text-xl bold">Hello! Asuna👋</p>
    </div>
  );
};

export default Home;
