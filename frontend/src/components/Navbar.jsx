import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../assets/logo.png";

function Navbar() {
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

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        className="bg-slate-200 text-black flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto lg:px-20 pr-8 z-[999999999]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div className="flex items-center">
          <NavLink to="/">
            <img className="w-20" src={Logo} alt="Web-logo" />
          </NavLink>
          <span className="text-xl font-bold text-[#E8383A]">SWASTH</span>
          <span className="text-[#1E94A2] text-xl font-bold"> SEVA</span>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300`}
            >
              <NavLink to={item.route}>{item.text}</NavLink>
            </li>
          ))}
        
        </ul>
          {/* toggle button */}
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        {/* Mobile Navigation Toggle */}
        <div
          onClick={handleNav}
          className="block md:hidden"
          aria-label="Toggle Menu"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Navigation Menu */}
        <motion.ul
          className={`fixed md:hidden right-0 top-20 w-[90%] h-full border-r border-r-gray-900 bg-zinc-300`}
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b text-lg font-semibold rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black text-black cursor-pointer border-gray-600"
            >
              <NavLink to={item.route} onClick={() => setNav(false)}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
}

export default Navbar;
