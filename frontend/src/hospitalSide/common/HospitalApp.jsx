import React, { useState } from "react";
import { Link } from "react-router-dom";

import Hospital from "/hospital.png";

function HospitalApp() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="w-full h-auto ">
        <nav className="bg-gray-800 p-4 flex justify-between items-center md:pr-16">
          {/* Logo or Brand Name */}
          <div className="text-white text-2xl font-bold">
            Hospital Management
          </div>

          {/* Avatar and Dropdown */}
          <div className="relative">
            {/* Avatar Icon */}
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/398/577/small/man-avatar-clipart-illustration-free-png.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                onClick={() => setIsDropdownOpen(false)} // Close dropdown on click outside
              >
                <Link
                  to="#dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  to="#logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </nav>
        <div className="max-w-full  mx-auto h-[90vh] lg:px-24 md:py-0 py-14 md:flex">
          <div className="left lg:w-1/2 w-[95%] mx-auto  h-auto  flex items-start justify-center flex-col">
            <h4 className="font-semibold text-[#E8383A]">Wellcome to,</h4>
            <h1 className="md:text-5xl text-4xl uppercase font-bold text-[#2092A0] mt-2">
              Hospital Management Side
            </h1>
            <p className="text-lg mt-4">
              Manage and monitor all moving parts of your hospital using one
              efficent platfrom, streamline operations and increase productivity
              by managing all the department with case.
            </p>
          </div>
          <div className="right md:w-1/2 w-[95%] mx-auto h-auto flex md:mt-0 mt-10  items-center justify-center">
            <img
              className=" object-contain"
              src={Hospital}
              alt="hospital img"
            />
          </div>
        </div>
        {/* <div className="w-full h-screen lg:px-24 bg-red-500 overflow-x-hidden">
            
        </div> */}
      </div>
    </>
  );
}

export default HospitalApp;
