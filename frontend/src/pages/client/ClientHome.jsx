import { useState } from "react";
import logo from "../../assets/svg/logo.svg";
import home from "../../assets/svg/home.svg";
import chat from "../../assets/svg/chat.svg";
import settings from "../../assets/svg/settings.svg";
import coin from "../../assets/svg/coin.svg";
import arrow_left from "../../assets/svg/arrow_left.svg";
const ClientHome = () => {
  const [open, setOpen] = useState(true);
  //TODO: sidebar items name and icons.....
  const Menus = [
    { title: "Home", src: home },
    { title: "Inbox", src: chat },
    { title: "Jobs", src: coin },
    { title: "Settings", src: settings },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
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
            className={`origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            BlocWork
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} className="max-h-8"/>
              <span className={`${!open && "hidden"} origin-left duration-200 `}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default ClientHome;
