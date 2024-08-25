import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.png";

function Navbar() {
  //   const { isLoggedIn } = useAuth();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", route: "/" },
    { id: 2, text: "Records", route: "/records" },
    { id: 3, text: "Blogs", route: "/blogs" },
    { id: 4, text: "Settings", route: "/settings" },
    { id: 5, text: "Login", route: "/auth" },
  ];

  return (
    <>
      <div
        className="bg-slate-200 text-black flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto lg:px-20 pr-8 z-[999999999]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div className=" flex items-center">
          <NavLink to="/">
            <img className="w-20" src={Logo} alt="Web-logo" />
          </NavLink>
          <span className="text-xl font-bold text-[#E8383A]">SWASTH</span>{" "}
          <span className="text-[#1E94A2] text-xl font-bold"> SEVA</span>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300  
              }`}
            >
              <NavLink to={item.route} className="flex items-center">
                {item.text}
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={`${
            nav ? "fixed" : "hidden"
          } md:hidden left-0 top-20 w-[60%]  h-full border-r border-r-gray-900 bg-zinc-300 ease-in-out duration-500`}
        >
          {/* <img
            className="w-20"
            src=
            alt="Web-logo"
          /> */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b text-lg font-semibold rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black text-black cursor-pointer border-gray-600"
            >
              <NavLink to={item.route} onClick={() => setNav(false)}>
                {item.text}
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
