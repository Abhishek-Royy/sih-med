import React from "react";
import { NavLink } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className=" bg-slate-200 text-black  pt-9">
        <div className="mx-auto w-full max-w-[100vw] px-4 xl:px-16">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[316px]">
              <p className="text-[18px] font-medium text-black">
                <h1 className=" font-bold text-xl text-[#1E94A2] ">
                  <span className="font-bold text-[#E8383A] ">
                    SWASTH
                  </span>
                  SEVA
                </h1>
              </p>
              <p className="mt-[18px] text-[15px] font-normal text-black">
              SwasthSeva is a comprehensive SaaS based HMS that intelligently drives your healthcare operations. Built with advanced AI/ML capabilities, Robotics process automation. Ezovion offers an end-to-end connected experience and makes healthcare delivery seamless for providers, patients, and other stakeholders. 
              </p>
              <div className="mt-[18px]  flex gap-4">
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="#"
                >
                  <img
                    alt="facebook icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                  />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="#"
                >
                  <img
                    alt="instagram icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
                  />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="#"
                >
                  <img
                    alt="twitter icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                  />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="#"
                >
                  <img
                    alt="inkdin icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  />
                </a>
                {/* Add similar anchor tags for other social media icons */}
              </div>
            </div>

            <div className="md:w-[316px]">
              <div className="mt-[23px] flex">
                <div className="flex text-2xl items-center justify-center rounded-[75%]">
                <IoMail />
                </div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-gray-600"
                  >
                    swasthseva.hello@gmail.com
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-gray-600">
                    Support Email
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex text-2xl items-center justify-center rounded-[75%]">
                  <FaLocationDot />
                </div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-gray-600"
                  >
                  Office 604, Al Tayer Commercial Building 17 street-Al Raffa, Dubai -UAE
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-gray-600">
                    Address
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex w-full flex-col justify-between text-black sm:flex-row md:mt-0 md:max-w-[341px]">
              <div>
                <ul>
                  <li className="mt-[15px]">
                    <NavLink
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="mt-[15px]">
                    <NavLink
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      to="/footer/refundPolicy"
                    >
                      Refund Policy
                    </NavLink>
                  </li>
                  <li className="mt-[15px]">
                    <NavLink
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      to="/footer/termCondition"
                    >
                      Terms and conditions
                    </NavLink>
                  </li>
                  <li className="mt-[15px]">
                    <NavLink
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      to="/footer/privacypolicy"
                    >
                      Privacy policy
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* <div className="mt-6 flex flex-col gap-4 sm:mt-0">
                <p className="text-deutziawhite font-inter text-[18px] font-medium">
                  Download the app
                </p>
                <div className="flex gap-4 sm:flex-col">
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps?hl=en_IN"
                  >
                    <img
                      alt="facebook icon"
                      loading="lazy"
                      width="168"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    />
                  </a>
                  <a
                    className="ml-3 bg-white w-max rounded-lg"
                    target="_blank"
                    href="https://www.apple.com/in/app-store/"
                  >
                    <img
                      alt="facebook icon"
                      loading="lazy"
                      width="145"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="https://www.pikpng.com/pngl/b/506-5064409_apple-ios-download-on-apple-store-clipart.png"
                    />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          {/* <hr className="mt-[30px] text-red" /> */}
          <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
            <p className="text-[14px] font-normal text-black md:text-[14px]">
              © Copyright 2024 SwasthSeva • Powred by<a href="/" target="_blank"> SwasthSeva</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
