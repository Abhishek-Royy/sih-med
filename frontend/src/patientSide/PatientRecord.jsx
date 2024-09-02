import React from "react";

function PatientRecord() {
  return (
    <>
      <div className="md:w-full w-[95%] mx-auto h-auto lg:px-24 md:py-12 py-16">
        {/* my opd */}
        <h2 className="text-3xl font-medium text-[#000058]">My Booking</h2>
        <div className="opd-bookinglist md:w-full flex flex-wrap md:justify-normal justify-center ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4 m-4">
            <div className="mb-2">
              <h2 className="text-xl font-bold text-gray-800">
                Token No: <span className="text-gray-600">12345</span>
              </h2>
            </div>
            <div className="text-gray-700 text-sm mb-1">
              <strong>Patient Name:</strong> John Doe
            </div>
            <div className="text-gray-700 text-sm mb-1">
              <strong>Department Name:</strong> Cardiology
            </div>
            <div className="text-gray-700 text-sm mb-1">
              <strong>Status:</strong> Not Arrived
            </div>
            <div className="text-gray-700 text-sm mb-1">
              <strong>OPD Date:</strong> 2024-09-04
            </div>
            <div className="text-gray-700 text-sm mb-1">
              <strong>OPD Time:</strong> 10:30 AM
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-blue-500 hover:text-blue-700">
                <i className="fas fa-edit"></i>
              </button>
              <button className="text-red-500 hover:text-red-700 ml-4">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>

        {/* my-test     */}
        <h2 className="text-3xl font-medium text-[#000058]">My Reports</h2>
        <div className="test-reports w-full flex flex-wrap  md:justify-normal justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4 m-4">
            <div className="mb-2">
              <h2 className="text-xl font-bold text-gray-800">
                Test Name: <span className="text-gray-600">Blood Test</span>
              </h2>
            </div>
            <div className="text-gray-700 text-sm mb-1">
              <strong>Report Status:</strong> Completed
            </div>
            <div className="text-gray-700 text-sm mb-1">
              <strong>Date:</strong> 2024-09-01
            </div>
            <div className="text-gray-700 text-sm mb-1">
              <strong>Doctor Name:</strong> Dr. Smith
            </div>
            <div className="flex justify-end mt-4">
              <a
                href="/lab.pdf" target="_blank"
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                Download Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientRecord;
