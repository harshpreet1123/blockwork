import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-2 bg-white text-gray-800 sticky top-0 border-b z-10">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link className="h-8 w-8" to="/">
            <img
              src={logo}
              alt="BlocWork Logo"
              className="transition-transform duration-500 transform hover:rotate-180"
            />
          </Link>
          <span className="ml-2 font-bold text-lg">BlocWork</span>
        </div>
        <nav className="hidden lg:flex space-x-4">
          <Link to="/news" className="px-4 py-2 font-semibold text-gray-800 hover:text-purple-600">
            News
          </Link>
          <Link to="/exchange" className="px-4 py-2 font-semibold text-gray-800 hover:text-purple-600">
            Exchange
          </Link>
          <Link to="/team" className="px-4 py-2 font-semibold text-gray-800 hover:text-purple-600">
            Team
          </Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/category" state={{ route: "/register" }}>
            <button className="px-4 py-2 rounded font-bold border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              Sign up
            </button>
          </Link>
          <Link to="/category" state={{ route: "/login" }}>
            <button className="px-4 py-2 font-semibold rounded bg-purple-600 text-white hover:bg-purple-700">
              Log in
            </button>
          </Link>
        </div>
        <button className="lg:hidden flex items-center p-2" onClick={toggleMobileMenu}>
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
          <nav className="flex flex-col p-4 space-y-2 bg-gray-100">
            <Link to="/news" className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
              News
            </Link>
            <Link to="/exchange" className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
              Exchange
            </Link>
            <Link to="/team" className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
              Team
            </Link>
            <Link to="/category" state={{ route: "/register" }}>
              <button className="w-full px-4 py-2 rounded text-left font-bold border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                Sign up
              </button>
            </Link>
            <Link to="/category" state={{ route: "/login" }}>
              <button className="w-full px-4 py-2 font-semibold rounded bg-purple-600 text-white hover:bg-purple-700 text-left">
                Log in
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
