import React from "react";
import { Link } from "react-router-dom";

function HospitalNav({ title }) {
  return (
    <header className="bg-[#9FF5EE] bg-opacity-100 backdrop-blur-md shadow-lg border-b border-gray-500">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#FF001E]"> {title}</h1>
        <Link to="/login">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Logout
          </button>
        </Link>
      </div>
    </header>
  );
}

export default HospitalNav;
