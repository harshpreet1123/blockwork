import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <section className="w-full flex  bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-5">
          <h2 className="text-base font-semibold  text-white tracking-wide uppercase">
            Unlock Your Potential Today
          </h2>
          <div className="inline-flex items-end justify-center w-full text-center mx-auto">
            <img
              src="https://cdn.devdojo.com/tails/avatars/024.jpg"
              className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/012.jpg"
              className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/029.jpg"
              className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/005.jpg"
              className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/032.jpg"
              className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"
            />
          </div>
          <p className="mt-1 text-4xl font-extrabold  text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Discover
            <span className="px-2 py-1 relative inline-block">
              <svg
                className="stroke-current bottom-0 absolute text-purple-700 -translate-x-2"
                viewBox="0 0 410 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                  strokeWidth="12"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="relative">Your True Potential</span>
            </span>
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl  text-gray-300">
            Take the leap of faith and unleash your capabilities.
          </p>
          <Link
            to="/category"
            state={{ route: "/register" }}
            className="inline-block px-6 py-3 mt-8 bg-purple-700 text-white font-semibold rounded  hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
