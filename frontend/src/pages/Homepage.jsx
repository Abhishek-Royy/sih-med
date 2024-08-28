import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { TiTickOutline } from "react-icons/ti";

import mainRightImg from "../assets/main-right.png";
import Faq from "../layout/Faq";
import Testimonial from "../layout/Testimonial";
import Usecase from "../layout/Usecase";

function Homepage() {
  const services = [
    {
      title: "Appointment Scheduling",
      desc: "Appointment scheduling feature in an OPD module allows patients to book their visit to the hospital in advance",
      link: "#", // Add your link here
    },
    {
      title: "Patient Registration",
      desc: "This process involves recording a patient's personal and medical information in a healthcare system",
      link: "#", // Add your link here
    },
    {
      title: "Hospital Services",
      desc: "Transparency and accessibility for patients with dedicated hospital page, providing a comprehensive view of all available services.",
      link: "#", // Add your link here
    },
    {
      title: "Live Queue Tracking",
      desc: "Experience streamlined patient management and real-time tracking with our smart queues, enhancing patient's convenience with reduced waiting times.",
      link: "#", // Add your link here
    },
    {
      title: "Timeline View",
      desc: "Effortlessly documenting the entire treatment journey of inpatients with our intuitive timeline view ensuring seamless care coordination.",
      link: "#", // Add your link here
    },
    {
      title: "Dashboard & Analytics",
      desc: "Powerful analytics and insights, enable healthcare providers to make data-driven decisions, and optimize resource allocation by analyzing trends and patterns.",
      link: "#", // Add your link here
    },
  ];
  return (
    <>
      <div className="w-full h-auto lg:px-24 md:py-0 py-16">
        <div className="main md:w-full w-[95%] mx-auto md:h-[90vh] h-auto md:flex  ">
          <div className="main-left md:w-1/2 w-full md:h-full h-auto flex items-center md:justify-center flex-col">
            <h1 className="md:text-6xl text-3xl font-bold tracking-wide md:leading-[60px]">
              Digitize your Healthcare Delivery with{" "}
              <span className="text-[#1895A5]">Full-suite </span> Connected
              Digital Healthcare Platform
            </h1>
            <div className="buttons w-full h-auto mt-10 ">
              <Link
                to="/auth"
                class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-8 py-4 text-center me-2 mb-2"
              >
                Book a Free Demo
              </Link>
            </div>
          </div>
          <div className="main-right md:w-1/2 w-full md:h-full h-auto mt-14 flex items-center md:justify-end">
            <img src={mainRightImg} alt="" />
          </div>
        </div>

        <div className="main-sec-2 md:w-full w-[95%] mx-auto md:h-[60vh] h-auto flex items-center justify-center flex-col md:mt-0 mt-16">
          <h1 className="md:text-5xl text-4xl md:text-balance text-center font-bold">
            Wellcome to <span className="text-[#E8383A]">SWASTH</span>
            <span className="text-[#2092A0]">SEVA</span>
          </h1>
          <p className="text-[20px] text-gray-500 font-semibold md:w-2/3 text-center mt-5">
            Effortless patient management, efficient stock and inventory
            control, unparalleled patient experience through innovative
            token-based appointments and smart queues and much more.
          </p>

          <div className="key-features w-full flex flex-wrap item-center justify-evenly mt-8 text-[#000058]">
            <span className="flex items-center justify-center gap-2 text-xl font-medium">
              <TiTickOutline />
              OPD Management
            </span>
            <span className="flex items-center justify-center gap-2 text-xl font-medium">
              <TiTickOutline />
              Inventory Management
            </span>
            <span className="flex items-center justify-center gap-2 text-xl font-medium">
              <TiTickOutline />
              Diagnosis Solution
            </span>
            <span className="flex items-center justify-center gap-2 text-xl font-medium">
              <TiTickOutline />
              Reports & Analytics
            </span>
            <span className="flex items-center justify-center gap-2 text-xl font-medium">
              <TiTickOutline />
              Bed Availability
            </span>
          </div>
          <Link
            to="/auth/patient-login"
            class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-8 py-3 text-center me-2 mb-2 mt-10"
          >
            Request a Demo
          </Link>
        </div>

        <div className="main-sec-3 md:w-full w-[95%] mx-auto md:h-[55vh] h-auto md:py-0 py-5 flex flex-wrap items-center justify-center gap-5">
          {services.map((item, index) => (
            <motion.a
              whileHover={{ scale: 1.05 }}
              key={index}
              href={item.link}
              className="block max-w-sm p-6 bg-white border border-yellow-200 rounded-lg shadow hover:bg-gray-100"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                {item.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="usecaseState md:mt-20 mt-10 md:w-full w-[95%] mx-auto">
          <Usecase/>
        </div>

        {/* ****************************** */}
        <div className="benifits-sec md:w-full w-[95%] mx-auto h-auto  flex items-start flex-col justify-center md:py-10 mt-10">
          <h1 className="text-4xl font-semibold text-[#000058]">Benifites</h1>
          <p className="ms:text-[20px]">
            Unlock the Power of Healthcare Software: Enhancing Efficiency,
            Streamlining Operations, and Elevating Patient Care
          </p>
          <Faq />
        </div>

        {/* ************************ */}
        <div className="testimonials md:w-full w-[90%] mx-auto h-auto mt-10">
          <Testimonial />
        </div>
      </div>
    </>
  );
}

export default Homepage;
