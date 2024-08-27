import React from "react";
import { Link } from "react-router-dom";

function PatientLogin() {
  return (
    <>
      <div className="main w-full h-auto md:flex block pt-16 md:pb-8 pb-16 lg:px-24">
        <div className="patient-left md:w-1/2 w-[95%] mx-auto h-full md:flex items-center justify-center hidden">
            <img className="w-full h-full object-contain" src="https://png.pngtree.com/png-vector/20200402/ourmid/pngtree-the-doctor-examines-the-patient-with-covid-19-symptoms-png-image_2171886.jpg" alt="" />
        </div>
        <div className="patient-right md:w-1/2 w-[95%] mx-auto h-full ">
          <div className="flex items-center justify-end w-full h-full ">
            <div
              className=" px-6 py-10 bg-white rounded-lg shadow-md"
              style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            >
              <h1 className="md:text-3xl text-3xl md:text-balance text-center font-bold mb-6">
                Wellcome to <span className="text-[#E8383A]">SWASTH</span>
                <span className="text-[#2092A0]">SEVA</span>
              </h1>

              <div className=" justify-around mb-6">
                <Link
                  to=""
                  className="text-black  w-full flex items-center justify-center   font-medium rounded-lg text-sm px-5 py-2 text-center   me-2 mb-2"
                  style={{
                    boxShadow:
                      " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                  }}
                >
                  <img
                    className="w-10"
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                  Sign in with Google
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center w-full px-4 py-2  text-sm font-medium text-black  rounded bg-white"
                  style={{
                    boxShadow:
                      " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                  }}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-aadhaar-logo-icon-download-in-svg-png-gif-file-formats--unique-identity-india-citizen-information-details-logos-icons-1747945.png"
                    alt="Apple"
                    className="w-10  mr-2"
                  />
                  Sign in with Aadhaar
                </Link>
              </div>

              <div className="mb-4 text-center text-black">or</div>

              <form>
                <div className="mb-0">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Enter Your Name
                    </label>
                  </div>
                </div>
                <div className="mb-0">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="phone"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Enter Your Phone No.
                    </label>
                  </div>
                </div>
                <div className="mb-0">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="password"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Enter Password
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div>
                    <input type="checkbox" id="remember-me" className="mr-2" />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <a href="#" className="text-blue-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Link to="/auth/patient-login/otp">
                <button
                  className="w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  Sign Up
                </button>
                </Link>
              </form>

              <div className="mt-4 text-center text-gray-400">
                <p>
                  Don’t have an account yet?{" "}
                  <Link to="#" className="text-blue-500 hover:underline">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientLogin;
