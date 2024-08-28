import React from 'react';

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v4m0 8v4m4-4h4m-8 0H8m8-8H8m8 4H8m0 4h8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
