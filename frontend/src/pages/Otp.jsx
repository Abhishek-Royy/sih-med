import React from "react";
import {Link} from "react-router-dom"

const EnterOTP = () => {
  return (
    <>
      <div className="main w-full md:h-[85vh]  md:flex block md:py-0 py-16 lg:px-24">
        <div className="patient-left md:w-1/2 w-[95%] mx-auto h-auto flex items-center justify-center ">
          <img
            className="w-full h-full object-contain md:block hidden"
            src="https://png.pngtree.com/png-vector/20200402/ourmid/pngtree-the-doctor-examines-the-patient-with-covid-19-symptoms-png-image_2171886.jpg"
            alt=""
          />
          <h1 className="md:text-5xl text-4xl md:text-balance text-center font-bold md:hidden visible">
            Wellcome to <span className="text-[#E8383A]">SWASTH</span>
            <span className="text-[#2092A0]">SEVA</span>
          </h1>
        </div>
        <div className="patient-right md:w-1/2 w-[95%] mx-auto h-auto md:mt-0 mt-10">
          <div className="h-full w-full flex items-center justify-center ">
            <div className="bg-white p-8 rounded-lg max-w-md w-full"
            
            style={{boxShadow:" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
              <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Enter OTP
              </h2>
              <p className="text-sm text-gray-600 text-center mb-6">
                We have sent an OTP to your registered mobile number.
              </p>
              <form>
                <div className="flex justify-center mb-6">
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 mx-1 text-center border border-gray-500 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ))}
                </div>
                <Link to="/patienthomeui-profile">
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition duration-200"
                >
                  Submit OTP
                </button>
                </Link>
              </form>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Didn't receive the OTP?{" "}
                  <button className="text-indigo-500 hover:underline">
                    Resend OTP
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterOTP;
