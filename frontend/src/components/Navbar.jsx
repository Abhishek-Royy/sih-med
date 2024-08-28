// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import Logo from "../assets/logo.png";

// function Navbar() {
//   const [nav, setNav] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const navItems = [
//     { id: 1, text: "Home", route: "/" },
//     { id: 2, text: "About Us", route: "/aboutus" },
//     { id: 3, text: "Blogs", route: "/blogs" },
//     {
//       id: 4,
//       text: "Solutions",
//       route: "/solutions",
//       icon: <MdOutlineKeyboardArrowDown />,
//     },
//   ];

//   const loginRoutes = [
//     { name: "Patient Login", path: "/auth/patient-login" },
//     { name: "Hospital Login", path: "/auth/hospital-login" },
//   ];

//   const menuVariants = {
//     open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//     closed: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
//   };

//   const dropdownVariants = {
//     open: { opacity: 1, y: 0, display: "block", transition: { duration: 0.3 } },
//     closed: {
//       opacity: 0,
//       y: -20,
//       transitionEnd: { display: "none" },
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <motion.div
//       className="bg-slate-200 text-black flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto lg:px-20 pr-8 z-[999999999]"
//       style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px" }}
//     >
//       <div className="flex items-center">
//         <NavLink to="/">
//           <img className="w-20" src={Logo} alt="Web-logo" />
//         </NavLink>
//         <span className="text-xl font-bold text-[#E8383A]">SWASTH</span>
//         <span className="text-[#1E94A2] text-xl font-bold"> SEVA</span>
//       </div>
//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex items-center">
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300 `}
//           >
//             <NavLink className={"flex items-center"} to={item.route}>
//               {item.text}
//               {item.icon}
//             </NavLink>
//           </li>
//         ))}
//         {/* Dropdown for Login */}
//         <li
//           className="p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300 relative"
//           onMouseEnter={() => setDropdownOpen(true)}
//           onMouseLeave={() => setDropdownOpen(false)}
//         >
//           <span className="flex items-center">
//             Login <MdOutlineKeyboardArrowDown />
//           </span>
//           {dropdownOpen && (
//               <motion.ul
//               className="absolute right-0 left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg"
//               initial="closed"
//               animate={dropdownOpen ? "open" : "closed"}
//               variants={dropdownVariants}
//             >
//               {loginRoutes.map((route, index) => (
//                 <li key={index} className="p-5 border border-b-2 hover:bg-gray-100">
//                   <NavLink to={route.path}>{route.name}</NavLink>
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </li>
//       </ul>
//       {/* Toggle button */}
//       <label className="inline-flex items-center cursor-pointer">
//         <input type="checkbox" value="" className="sr-only peer" />
//         <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//       </label>
//       {/* Mobile Navigation Toggle */}
//       <div
//         onClick={handleNav}
//         className="block md:hidden"
//         aria-label="Toggle Menu"
//       >
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>
//       {/* Mobile Navigation Menu */}
//       <motion.ul
//         className={`fixed md:hidden right-0 top-20 w-[90%] h-full border-r border-r-gray-900 bg-zinc-300`}
//         initial={false}
//         animate={nav ? "open" : "closed"}
//         variants={menuVariants}
//       >
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="p-4 border-b text-lg font-semibold rounded-xl duration-300 hover:text-black text-black cursor-pointer border-gray-600"
//           >
//             <NavLink
//               className={"flex items-center"}
//               to={item.route}
//               onClick={() => setNav(false)}
//             >
//               {item.text}
//               {item.icon}
//             </NavLink>
//           </li>
//         ))}
//         {/* Add Login options in Mobile Menu */}
//         <li className="p-4 border-b text-lg font-semibold rounded-xl  duration-300 hover:text-black text-black cursor-pointer border-gray-600">
//           <span
//             className="flex items-center"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             Login <MdOutlineKeyboardArrowDown />
//           </span>
//           {dropdownOpen && (
//             <ul className="ml-4 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
//               {loginRoutes.map((route, index) => (
//                 <li key={index} className="p-2 hover:bg-gray-100">
//                   <NavLink to={route.path} onClick={() => setNav(false)}>
//                     {route.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       </motion.ul>
//     </motion.div>
//   );
// }

// export default Navbar;



// ***************************************************************************************************************************

// import React, { useState, useEffect } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { NavLink, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import Logo from "../assets/logo.png";

// function Navbar() {
//   const [nav, setNav] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const location = useLocation();

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Determine which menu items to show based on the current page
//   const navItems = location.pathname === "/patienthomeui-profile" ? [
//     { id: 1, text: "Profile", route: "/patienthomeui-profile" },
//     { id: 2, text: "Record", route: "/record" },
//     { id: 3, text: "Setting", route: "/setting" },
//     { id: 4, text: "Help", route: "/help" },
//   ] : [
//     { id: 1, text: "Home", route: "/" },
//     { id: 2, text: "About Us", route: "/aboutus" },
//     { id: 3, text: "Blogs", route: "/blogs" },
//     {
//       id: 4,
//       text: "Solutions",
//       route: "/solutions",
//       icon: <MdOutlineKeyboardArrowDown />,
//     },
//   ];

//   const loginRoutes = [
//     { name: "Patient Login", path: "/auth/patient-login" },
//     { name: "Hospital Login", path: "/auth/hospital-login" },
//   ];

//   const menuVariants = {
//     open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//     closed: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
//   };

//   const dropdownVariants = {
//     open: { opacity: 1, y: 0, display: "block", transition: { duration: 0.3 } },
//     closed: {
//       opacity: 0,
//       y: -20,
//       transitionEnd: { display: "none" },
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <motion.div
//       className="bg-slate-200 text-black flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto lg:px-20 pr-8 z-[999999999]"
//       style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px" }}
//     >
//       <div className="flex items-center">
//         <NavLink to="/">
//           <img className="w-20" src={Logo} alt="Web-logo" />
//         </NavLink>
//         <span className="text-xl font-bold text-[#E8383A]">SWASTH</span>
//         <span className="text-[#1E94A2] text-xl font-bold"> SEVA</span>
//       </div>
//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex items-center">
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300 `}
//           >
//             <NavLink className={"flex items-center"} to={item.route}>
//               {item.text}
//               {item.icon}
//             </NavLink>
//           </li>
//         ))}
//         {/* Conditionally render the Login dropdown */}
//         {location.pathname !== "/patienthomeui-profile" && (
//           <li
//             className="p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300 relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <span className="flex items-center">
//               Login <MdOutlineKeyboardArrowDown />
//             </span>
//             {dropdownOpen && (
//               <motion.ul
//                 className="absolute right-0 left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg"
//                 initial="closed"
//                 animate={dropdownOpen ? "open" : "closed"}
//                 variants={dropdownVariants}
//               >
//                 {loginRoutes.map((route, index) => (
//                   <li key={index} className="p-5 border border-b-2 hover:bg-gray-100">
//                     <NavLink to={route.path}>{route.name}</NavLink>
//                   </li>
//                 ))}
//               </motion.ul>
//             )}
//           </li>
//         )}
//       </ul>
//       {/* Toggle button */}
//       <label className="inline-flex items-center cursor-pointer">
//         <input type="checkbox" value="" className="sr-only peer" />
//         <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//       </label>
//       {/* Mobile Navigation Toggle */}
//       <div
//         onClick={handleNav}
//         className="block md:hidden"
//         aria-label="Toggle Menu"
//       >
//         {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
//       </div>
//       {/* Mobile Navigation Menu */}
//       <motion.ul
//         className={`fixed md:hidden right-0 top-20 w-[90%] h-full border-r border-r-gray-900 bg-zinc-300`}
//         initial={false}
//         animate={nav ? "open" : "closed"}
//         variants={menuVariants}
//       >
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="p-4 border-b text-lg font-semibold rounded-xl duration-300 hover:text-black text-black cursor-pointer border-gray-600"
//           >
//             <NavLink
//               className={"flex items-center"}
//               to={item.route}
//               onClick={() => setNav(false)}
//             >
//               {item.text}
//               {item.icon}
//             </NavLink>
//           </li>
//         ))}
//         {/* Conditionally render Login options in Mobile Menu */}
//         {location.pathname !== "/patienthomeui-profile" && (
//           <li className="p-4 border-b text-lg font-semibold rounded-xl  duration-300 hover:text-black text-black cursor-pointer border-gray-600">
//             <span
//               className="flex items-center"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//               Login <MdOutlineKeyboardArrowDown />
//             </span>
//             {dropdownOpen && (
//               <ul className="ml-4 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
//                 {loginRoutes.map((route, index) => (
//                   <li key={index} className="p-2 hover:bg-gray-100">
//                     <NavLink to={route.path} onClick={() => setNav(false)}>
//                       {route.name}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         )}
//       </motion.ul>
//     </motion.div>
//   );
// }

// export default Navbar;




import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems =
    location.pathname === "/patienthomeui-profile"
      ? [
          { id: 1, text: "Profile", route: "/patienthomeui-profile" },
          { id: 2, text: "Record", route: "/record" },
          { id: 3, text: "Setting", route: "/setting" },
          { id: 4, text: "Help", route: "/help" },
        ]
      : [
          { id: 1, text: "Home", route: "/" },
          { id: 2, text: "About Us", route: "/aboutus" },
          { id: 3, text: "Blogs", route: "/blogs" },
          {
            id: 4,
            text: "Solutions",
            route: "/solutions",
            icon: <MdOutlineKeyboardArrowDown />,
          },
        ];

  const loginRoutes = [
    { name: "Patient Login", path: "/auth/patient-login" },
    { name: "Hospital Login", path: "/auth/hospital-login" },
  ];

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0, display: "block", transition: { duration: 0.3 } },
    closed: {
      opacity: 0,
      y: -20,
      transitionEnd: { display: "none" },
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-slate-200 text-black flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto lg:px-20 pr-8 z-[999999999]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px" }}
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
            className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300 `}
          >
            <NavLink className={"flex items-center"} to={item.route}>
              {item.text}
              {item.icon}
            </NavLink>
          </li>
        ))}
        {/* Conditionally render the Login dropdown */}
        {location.pathname !== "/patienthomeui-profile" && (
          <li
            className="p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300 relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="flex items-center">
              Login <MdOutlineKeyboardArrowDown />
            </span>
            {dropdownOpen && (
              <motion.ul
                className="absolute right-0 left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg"
                initial="closed"
                animate={dropdownOpen ? "open" : "closed"}
                variants={dropdownVariants}
              >
                {loginRoutes.map((route, index) => (
                  <li key={index} className="p-5 border border-b-2 hover:bg-gray-100">
                    <NavLink to={route.path}>{route.name}</NavLink>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
        )}
      </ul>
      {/* Toggle button */}
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      {/* Mobile Navigation Toggle */}
      <div
        onClick={handleNav}
        className="block md:hidden"
        aria-label="Toggle Menu"
      >
        {nav ? (
          <AiOutlineClose size={25} />
        ) : location.pathname === "/patienthomeui-profile" ? (
          <CgProfile size={25} />
        ) : (
          <AiOutlineMenu size={25} />
        )}
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
            className="p-4 border-b text-lg font-semibold rounded-xl duration-300 hover:text-black text-black cursor-pointer border-gray-600"
          >
            <NavLink
              className={"flex items-center"}
              to={item.route}
              onClick={() => setNav(false)}
            >
              {item.text}
              {item.icon}
            </NavLink>
          </li>
        ))}
        {/* Conditionally render Login options in Mobile Menu */}
        {location.pathname !== "/patienthomeui-profile" && (
          <li className="p-4 border-b text-lg font-semibold rounded-xl  duration-300 hover:text-black text-black cursor-pointer border-gray-600">
            <span
              className="flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Login <MdOutlineKeyboardArrowDown />
            </span>
            {dropdownOpen && (
              <ul className="ml-4 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                {loginRoutes.map((route, index) => (
                  <li key={index} className="p-2 hover:bg-gray-100">
                    <NavLink to={route.path} onClick={() => setNav(false)}>
                      {route.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )}
      </motion.ul>
    </motion.div>
  );
}

export default Navbar;
