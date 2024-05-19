import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import Inbox from "../client/Inbox";
import News from "../News";
import Exchange from "../Exchange";
import ApiService from "../../services/api";
import Cookies from "js-cookie";
import {
  logo,
  home,
  chat,
  jobs,
  stats,
  arrow_left,
  logout,
  news,
  exchange,
} from "../extra/svgIndex";
import Stats from "./Stats";

function FreelancerSideBar() {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [userData, setUserData] = useState({});
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const userType = Cookies.get("userType");

  const scriptRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/661e929aa0c6737bd12c8d3a/1hs52b1ar";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    scriptRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async (token) => {
      if (token) {
        console.log("token:" + token);
        const response = await ApiService.getProfleDetails(token, userType);

        if (response.data) {
          setUserData(response.data);
        }
      } else {
        navigate("/");
      }
    };

    fetchUserData(token);
  }, []);

  const Menus = [
    { title: "Home", src: home },
    { title: "Inbox", src: chat },
    { title: "Stats", src: stats },
    { title: "Jobs", src: jobs },
    { title: "News", src: news },
    { title: "Exchange", src: exchange },
  ];

  const getContent = (title) => {
    switch (title) {
      case "Home":
        return <Home />;
      case "Inbox":
        return <Inbox />;
      case "Stats":
        return <Stats />;
      case "Jobs":
        return <Jobs />;
      case "News":
        return <News />;
      case "Exchange":
        return <Exchange />;
      default:
        return <Home />;
    }
  };

  const svgFilter = {
    filter:
      "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)",
  };

  const handleMenuItemClick = (title) => {
    setSelectedItem(title);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userType");
    navigate("/");
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    handleLogout();
    setShowLogoutModal(false);
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="flex h-screen font-sora">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } fixed h-screen bg-dark-purple p-5  pt-8 duration-300 flex flex-col justify-between border-r-2`}
      >
        <div>
          <img
            src={arrow_left}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              className={`cursor-pointer duration-500 max-h-11 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`origin-left font-medium text-2xl italic duration-200 ${
                !open && "scale-0"
              }`}
            >
              BlocWork
            </h1>
          </div>
          <Link to="/fr/profile" state={{ userData: userData }}>
            <div
              className={`flex ${
                open ? "p-3" : null
              } rounded cursor-pointer bg-slate-100 mt-5 items-center gap-x-4`}
            >
              <img src={userData.profileImg} className="h-10 w-10 rounded" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-xl`}
              >
                {userData.username}
              </span>
            </div>
          </Link>
          <ul className="pt-4">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                onClick={() => handleMenuItemClick(Menu.title)}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  selectedItem === Menu.title && "bg-purple-700 text-white"
                }`}
              >
                <img
                  src={Menu.src}
                  className="max-h-8"
                  style={selectedItem === Menu.title ? svgFilter : null}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200 `}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "
          onClick={handleLogoutClick}
        >
          <img src={logout} className="max-h-8" />
          <span className={`${!open && "hidden"} origin-left duration-200 `}>
            Logout
          </span>
        </div>
      </div>
      <div
        className="flex-1 p-7"
        style={{
          height: "100vh",
          marginLeft: open ? "18rem" : "5rem",
          overflowY: "auto",
        }}
      >
        {/* Content based on selected menu item */}
        <div>{getContent(selectedItem)}</div>
      </div>
      {/* Chat-botwidget called here */}
      <div ref={scriptRef} />

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-4">Logout Confirmation</p>
            <p>Are you sure you want to logout?</p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 mr-4 bg-purple-500 text-white rounded-md"
                onClick={handleLogoutConfirm}
              >
                Logout
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                onClick={handleLogoutCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FreelancerSideBar;
