import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-2 bg-white text-gray-800 sticky top-0 border-b z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex items-center cursor-pointer">
          <Link className="h-8 w-8" to="/">
            <img src={logo} alt="BlocWork Logo" />
          </Link>
          <span className="ml-2 font-bold text-lg">BlocWork</span>
        </div>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex font-semibold">
            <Link className="flex items-center px-4" to="/news">
              News
            </Link>
          </li>
          <li className="flex font-semibold">
            <Link to="/exchange" className="flex items-center px-4 ">
              Exchange
            </Link>
          </li>
          <li className="flex font-semibold">
            <Link to="/" className="flex items-center px-4 ">
              Team
            </Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link to="/category" state={{ route: "/register" }}>
            <button className="self-center px-8 py-3 rounded font-bold">
              Sign in
            </button>
          </Link>
          <Link to="/category" state={{ route: "/login" }}>
            <button className="self-center px-8 py-3 font-semibold rounded bg-purple-600 text-gray-50">
              Log in
            </button>
          </Link>
        </div>
        <button className="p-4 lg:hidden" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link to="/news" className="block px-4 py-2">
                News
              </Link>
            </li>
            <li>
              <Link to="/exchange" className="block px-4 py-2">
                Exchange
              </Link>
            </li>
            <li>
              <Link to="/" className="block px-4 py-2">
                Team
              </Link>
            </li>
            <li>
              <Link to="/category" state={{ route: "/regisetr" }}>
                <button className="block px-4 py-2 rounded">Sign in</button>
              </Link>
            </li>
            <li>
              <Link to="/category" state={{ route: "/login" }}>
                <button className="block px-4 py-2 font-semibold rounded bg-purple-600 text-gray-50">
                  Log in
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
