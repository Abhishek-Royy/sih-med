import React from "react";
import { motion } from "framer-motion";

import mainRightImg from "../assets/main-right.png";

function Homepage() {
  return (
    <>
      <div className="w-full h-auto lg:px-24">
        <motion.div
          className="video md:w-full w-[98%] mx-auto md:h-[40vh] h-[25vh] rounded-lg mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video
            className="w-full h-full object-cover rounded-lg"
            src="https://videos.pexels.com/video-files/7659140/7659140-hd_1920_1080_25fps.mp4"
            autoPlay
            muted
            loop
          ></video>
        </motion.div>

        <div className="main md:w-full w-[95%] mx-auto md:h-[90vh] h-auto md:flex mt-10">
          <div className="main-left md:w-1/2 w-full md:h-full h-auto flex items-center md:justify-center flex-col">
            <h1 className="md:text-6xl text-3xl font-bold tracking-wide md:leading-[60px]">
              Digitize your Healthcare Delivery with{" "}
              <span className="text-[#1895A5]">Full-suite </span> Connected
              Digital Healthcare Platform
            </h1>
            <div className="buttons w-full h-auto mt-10 ">
              <a
                href="/auth"
                class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-8 py-4 text-center me-2 mb-2"
              >
                Book a Free Demo
              </a>
            </div>
          </div>
          <div className="main-right md:w-1/2 w-full md:h-full h-auto mt-14 flex items-center md:justify-end">
            <img src={mainRightImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
