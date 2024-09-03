import React, { useState } from 'react'

function OpdBooking() {
    const [formData, setFormData] = useState({
        patientName: '',
        gender: '',
        mobileNo: '',
        aadhaarNo: '',
        department: '',
        opdDate: '',
        opdTime: '',
        age:'',
        hospital:''
      });
    
      const departments = ['Gynochology', 'Orthopedic', 'Cardiology', 'Neurology', 'ENT', 'General Visit','Oncology'];
      const hospitals = ['Barasat Medical', 'Apello Nursinghome', 'Manipal Hospital', 'NRS Medical', 'Kalyani AIMS', 'HCG EKO','Dishan Nursinghome'];
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // API call korte hobe backend theke
      };
    
  return (
    <>
     <div className="w-full h-auto flex items-center justify-center flex-col lg:px-24 md:py-12 py-16">
     <h1 className="md:text-5xl text-4xl md:text-balance text-center font-bold">
            Wellcome to <span className="text-[#E8383A]">SWASTH</span>
            <span className="text-[#2092A0]">SEVA</span>
          </h1>
          <h2 className='text-xl font-medium mt-2'>Book Your OPD from home</h2>
     {/* <div className="flex justify-center items-center min-h-screen bg-gray-100"> */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mt-5">
        <h2 className="text-2xl font-bold text-center mb-6">OPD Booking Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Patient Name */}
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                  required
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Aadhaar Number */}
          <div>
            <label htmlFor="aadhaarNo" className="block text-sm font-medium text-gray-700">
              Aadhaar Number
            </label>
            <input
              type="text"
              id="aadhaarNo"
              name="aadhaarNo"
              value={formData.aadhaarNo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="" disabled>Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* hospital */}
          <div>
            <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">
               Hospital
            </label>
            <select
              id="hospital"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="" disabled>Select Hospital</option>
              {hospitals.map((hospitalName) => (
                <option key={hospitalName} value={hospitalName}>{hospitalName}</option>
              ))}
            </select>
          </div>

          {/* OPD Booking Date */}
          <div>
            <label htmlFor="opdDate" className="block text-sm font-medium text-gray-700">
              OPD Booking Date
            </label>
            <input
              type="date"
              id="opdDate"
              name="opdDate"
              value={formData.opdDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* OPD Booking Time */}
          <div>
            <label htmlFor="opdTime" className="block text-sm font-medium text-gray-700">
              OPD Booking Time
            </label>
            <input
              type="time"
              id="opdTime"
              name="opdTime"
              value={formData.opdTime}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book OPD
            </button>
          </div>
        </form>
      </div>
    {/* </div> */}
     </div>
    </>
  )
}

export default OpdBooking
