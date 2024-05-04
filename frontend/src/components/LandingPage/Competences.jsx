import "../../styles/feat_card.css";
import ipfs from "../../assets/images/ipfs.png";
import polygon from "../../assets/images/polygon.png";
import defi from "../../assets/images/defi.png";

const Competences = () => {
  return (
    <div id="feat">
      <section className="text-gray-200 bg-gray-900">
        <div className="max-w-6xl mx-auto px-5 py-24">
          <div className="text-center mb-20">
            <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
              Dive into the World of{" "}
              <span className="text-purple-500">Decentralization</span>
            </h1>

            <div className="flex mt-6 justify-center">
              <div className="h-1 w-40 rounded-full bg-white inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100  mb-5 flex-shrink-0 p-2">
                    <img src={ipfs} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl title-font font-medium mb-3">
                      IPFS
                    </h2>
                    <p className="leading-relaxed text-md text-justify">
                      Uses the IPFS (InterPlanetary File System) protocol, a
                      secure and decentralized method of storing files
                      accessible even from outer space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100  mb-5 flex-shrink-0">
                    <img src={polygon} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl title-font font-medium mb-3">
                      Polygon
                    </h2>
                    <p className="text-md leading-relaxed text-justify">
                      Polygon Network is an Ethereum layer 2 scaling solution
                      that offers fast, low-cost transactions while ensuring
                      Ethereum ecosystem security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 mb-5 flex-shrink-0">
                    <img src={defi} alt="" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl title-font font-medium mb-3">
                      DeFi
                    </h2>
                    <p className="text-md leading-relaxed text-justify">
                      DeFi is a blockchain-based financial system providing
                      open, secure and permissionless services without the need
                      of intermediaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;
