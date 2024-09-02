// // src/components/PatientTable.js

// import React from 'react';
// import { motion } from "framer-motion";

// const demoData = [
//   {
//     tokenNo: '001',
//     patientName: 'John Doe',
//     phoneNumber: '123-456-7890',
//     dateTime: '2024-09-01 10:00 AM',
//     department: 'Cardiology',
//     queueStatus: 'Waiting',
//   },
//   {
//     tokenNo: '002',
//     patientName: 'Jane Smith',
//     phoneNumber: '098-765-4321',
//     dateTime: '2024-09-01 10:30 AM',
//     department: 'Neurology',
//     queueStatus: 'Complete',
//   },
//   {
//     tokenNo: '003',
//     patientName: 'Robert Brown',
//     phoneNumber: '555-123-4567',
//     dateTime: '2024-09-01 11:00 AM',
//     department: 'Orthopedics',
//     queueStatus: 'Cancelled',
//   },
// ];

// const statusColors = {
//   Complete: 'bg-green-500',
//   Waiting: 'bg-yellow-500',
//   Cancelled: 'bg-red-500',
// };

// const OpdTable = () => {
//   return (
//     <motion.div
//         className="bg-[#dedede] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-5 border border-gray-700 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//     <div className="overflow-x-auto p-4">
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//         <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
//           <tr>
//             <th className="py-3 px-6 text-left">Token No</th>
//             <th className="py-3 px-6 text-left">Patient Name</th>
//             <th className="py-3 px-6 text-left">Phone Number</th>
//             <th className="py-3 px-6 text-left">Date & Time</th>
//             <th className="py-3 px-6 text-left">Department</th>
//             <th className="py-3 px-6 text-left">Queue Status</th>
//             <th className="py-3 px-6 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm text-gray-700">
//           {demoData.map((item, index) => (
//             <tr key={index} className="border-b hover:bg-gray-50">
//               <td className="py-3 px-6">{item.tokenNo}</td>
//               <td className="py-3 px-6">{item.patientName}</td>
//               <td className="py-3 px-6">{item.phoneNumber}</td>
//               <td className="py-3 px-6">{item.dateTime}</td>
//               <td className="py-3 px-6">{item.department}</td>
//               <td className="py-3 px-6">
//                 <span className={`inline-block px-3 py-1 rounded-full text-white ${statusColors[item.queueStatus]}`}>
//                   {item.queueStatus}
//                 </span>
//               </td>
//               <td className="py-3 px-6 flex space-x-2">
//                 <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">Complete</button>
//                 <button className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600">Waiting</button>
//                 <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Cancelled</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </motion.div>
//   );
// };

// export default OpdTable;

// ******************************************************************************************************************



import React from 'react';

const demoData = [
  {
    tokenNo: '001',
    patientName: 'John Doe',
    phoneNumber: '123-456-7890',
    dateTime: '2024-09-01 10:00 AM',
    department: 'Cardiology',
    queueStatus: 'Waiting',
  },
  {
    tokenNo: '002',
    patientName: 'Jane Smith',
    phoneNumber: '098-765-4321',
    dateTime: '2024-09-01 10:30 AM',
    department: 'Neurology',
    queueStatus: 'Complete',
  },
  {
    tokenNo: '003',
    patientName: 'Robert Brown',
    phoneNumber: '555-123-4567',
    dateTime: '2024-09-01 11:00 AM',
    department: 'Orthopedics',
    queueStatus: 'Cancelled',
  },
];

const statusColors = {
  Complete: 'bg-green-500',
  Waiting: 'bg-yellow-500',
  Cancelled: 'bg-red-500',
};

const ButtonComponent = ({ status, onClick }) => {
  const buttonClasses = {
    Complete: 'bg-green-500 hover:bg-green-600',
    Waiting: 'bg-yellow-500 hover:bg-yellow-600',
    Cancelled: 'bg-red-500 hover:bg-red-600',
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`text-white py-1 px-3 rounded ${buttonClasses.Complete}`}
        onClick={() => onClick('Complete')}
      >
        Complete
      </button>
      <button
        className={`text-white py-1 px-3 rounded ${buttonClasses.Waiting}`}
        onClick={() => onClick('Waiting')}
      >
        Waiting
      </button>
      <button
        className={`text-white py-1 px-3 rounded ${buttonClasses.Cancelled}`}
        onClick={() => onClick('Cancelled')}
      >
        Cancelled
      </button>
    </div>
  );
};

const PatientTable = () => {
  const handleActionClick = (status) => {
    console.log(`Action clicked: ${status}`);
    // Add your logic to handle the button click here
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 text-gray-600 uppercase text-sm border-b border-gray-300">
          <tr>
            <th className="py-3 px-6 text-left border-r border-gray-300">Token No</th>
            <th className="py-3 px-6 text-left border-r border-gray-300">Patient Name</th>
            <th className="py-3 px-6 text-left border-r border-gray-300">Phone Number</th>
            <th className="py-3 px-6 text-left border-r border-gray-300">Date & Time</th>
            <th className="py-3 px-6 text-left border-r border-gray-300">Department</th>
            <th className="py-3 px-6 text-left border-r border-gray-300">Queue Status</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {demoData.map((item, index) => (
            <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
              <td className="py-3 px-6 border-r border-gray-300">{item.tokenNo}</td>
              <td className="py-3 px-6 border-r border-gray-300">{item.patientName}</td>
              <td className="py-3 px-6 border-r border-gray-300">{item.phoneNumber}</td>
              <td className="py-3 px-6 border-r border-gray-300">{item.dateTime}</td>
              <td className="py-3 px-6 border-r border-gray-300">{item.department}</td>
              <td className="py-3 px-6 border-r border-gray-300">
                <span className={`inline-block px-3 py-1 rounded-full text-white ${statusColors[item.queueStatus]}`}>
                  {item.queueStatus}
                </span>
              </td>
              <td className="py-3 px-6">
                <ButtonComponent onClick={handleActionClick} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
