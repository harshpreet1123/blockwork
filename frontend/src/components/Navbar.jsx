import { Link } from "react-router-dom";

const Navbar = () => {
  const navigation = [
    { name: "News", to: "/news" },
    { name: "Exchange", to: "/exchange" },
    { name: "Team", to: "/" },
    { name: "FAQ", to: "/" },
  ];
  return (
    <div>
      <div className="absolute inset-x-0 top-0 text-white z-50">
        <nav
          className="flex items-center justify-between py-2 bg-gradient-to-tr from-blue-800 to-purple-700 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 text-lg font-semibold">
              BlocWork
            </a>
          </div>
          <div className="flex gap-x-12">
            {navigation.map((item) => (
              <Link to={item.to} key={item.name}>
                <a className="text-base font-semibold leading-6 text-white px-6">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/category" state={{route:'/login'}}
              className="relative inline-flex items-center justify-center p-0.5 px-1 py-1.5 mx-5 transition-all ease-in duration-75 *:text-white "
            >
              Log in
            </Link>
            <Link to="/category" state={{route:'/register'}}>
              <span className="relative border-purple-950 inline-flex items-center justify-center border-solid border-1 px-3 py-1.5 transition-all ease-in duration-75 bg-white text-purple-600   hover:bg-purple-500 hover:text-white rounded-md group-hover:bg-opacity-0">
                Sign Up
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
