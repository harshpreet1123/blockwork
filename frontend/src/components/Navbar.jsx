import { Link } from "react-router-dom";

const Navbar = () => {
  const navigation = [
    { name: "News", to: "/news" },
    { name: "Exchange", to: "/exchange" },
    { name: "Team", to: "/" },
  ];
  return (
    <div>
      <div className="absolute inset-x-0 top-2  m-6 text-white z-50 ">
        <nav
          className="flex items-center justify-between py-2 rounded-2xl backdrop-blur-lg bg-gradient-to-tr from-blue-950/80 to-purple-950/80 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 text-lg font-semibold">
              BlocWork
            </a>
          </div>
          <div className="flex gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.to}
                key={item.name}
                className="text-base font-semibold leading-6  text-white hover:text-gray-300 px-6"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
