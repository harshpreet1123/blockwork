import { Web3Button } from "@thirdweb-dev/react";
import matic_wallet from "../../assets/images/wallet_matic.png";

function Wallet() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <img src={matic_wallet} className="w-64 h-64" alt="Matic Wallet" />
      <div className="mt-4"> {/* Adds some space between the image and the button */}
        <Web3Button />
      </div>
    </div>
  );
}

export default Wallet;
