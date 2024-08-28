import React from "react";

import emergancy from "/emargency.svg";
import opdbooking from "/opdbook.svg";
import bedavailable from "/bed.png";

function PatientHomeUi() {
  return (
    <>
      <div className=" w-full h-auto lg:px-24 md:pt-0 pb-16">
        <div className="container-sec md:w-full w-[95%] mx-auto h-full">
          <div className="heroSec w-full md:h-[50vh] ">
            <img
              className="w-full h-full object-contain"
              src="https://www.pngall.com/wp-content/uploads/8/Hospital-Patient-PNG-Free-Download.png"
              alt=""
            />
          </div>
          <h1 className="md:text-5xl text-4xl md:text-balance text-center font-bold">
            Wellcome to <span className="text-[#E8383A]">SWASTH</span>
            <span className="text-[#2092A0]">SEVA</span>
          </h1>
          <p className="text-center text-xl mt-8">
            Composable digital healthcare platform to transform the way
            healthcare professionals work with their patients.
          </p>

          <div className="solutions w-full h-auto mt-10">
            <h2 className="text-3xl font-semibold">
              Some Best Solution Provided for Patients
            </h2>
            <div className="all-solutions w-full  mt-10 flex flex-wrap items-center justify-evenly gap-5">
              <a
                href="#"
                className="flex flex-col items-center bg-white border border-yellow-200 rounded-lg shadow md:flex-row md:max-w-xl w-[95%] h-[60%]  hover:bg-gray-100 p-2"
                style={{
                  boxShadow:
                    " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
              >
                <img
                  className="object-contain w-1/2 rounded-t-lg h-90 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={emergancy}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#000058] ">
                    EMERGENCY CARE
                  </h5>
                  <p className="mb-3 font-normal text-gray-800 dark:text-gray-500">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col items-center bg-white border border-yellow-200 rounded-lg shadow md:flex-row md:max-w-xl w-[95%] h-[60%]  hover:bg-gray-100 p-2"
                style={{
                  boxShadow:
                    " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
              >
                <img
                  className="object-contain w-1/2 rounded-t-lg h-90 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={bedavailable}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#000058] ">
                    BED AVAILIBILITY
                  </h5>
                  <p className="mb-3 font-normal text-gray-800 dark:text-gray-500">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col items-center bg-white border border-yellow-200 rounded-lg shadow md:flex-row md:max-w-xl w-[95%] h-[60%]  hover:bg-gray-100 p-2"
                style={{
                  boxShadow:
                    " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
              >
                <img
                  className="object-contain w-1/2 rounded-t-lg h-90 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={opdbooking}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#000058] ">
                    OPD BOOKING
                  </h5>
                  <p className="mb-3 font-normal text-gray-800 dark:text-gray-500">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </a>
              {/* <a
                href="#"
                className="flex flex-col items-center bg-white border border-yellow-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-2"
                style={{boxShadow:" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={emergancy}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#000058] ">
                    EMERGENCY CARE
                  </h5>
                  <p className="mb-3 font-normal text-gray-800 dark:text-gray-500">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientHomeUi;
