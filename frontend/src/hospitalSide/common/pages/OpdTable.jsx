
// import React from 'react';

// const demoData = [
//   {
//     tokenNo: '001',
//     patientName: 'John Doe',
//     phoneNumber: '123-456-7890',
//     dateTime: '2024-09-01 10:00 AM',
//     department: 'Cardiology',
//     queueStatus: 'Arrived',
//   },
//   {
//     tokenNo: '002',
//     patientName: 'Jane Smith',
//     phoneNumber: '098-765-4321',
//     dateTime: '2024-09-01 10:30 AM',
//     department: 'Neurology',
//     queueStatus: 'NotArrived',
//   },
//   {
//     tokenNo: '003',
//     patientName: 'Robert Brown',
//     phoneNumber: '555-123-4567',
//     dateTime: '2024-09-01 11:00 AM',
//     department: 'Orthopedics',
//     queueStatus: 'NotArrived',
//   },
// ];

// const statusColors = {
//   Arrived: 'bg-green-500',
//   NotArrived: 'bg-red-500',
// };

// const ButtonComponent = ({ status, onClick }) => {
//   const buttonClasses = {
//     Arrived: 'bg-green-500 hover:bg-green-600',
//     NotArrived: 'bg-red-500 hover:bg-red-600',
//   };

//   return (
//     <div className="flex space-x-2">
//       <button
//         className={`text-white py-1 px-3 rounded ${buttonClasses.Arrived}`}
//         onClick={() => onClick('Arrived')}
//       >
//         Arrived
//       </button>
//       <button
//         className={`text-white py-1 px-3 rounded ${buttonClasses.NotArrived}`}
//         onClick={() => onClick('NotArrived')}
//       >
//        Not-Arrived
//       </button>
//     </div>
//   );
// };

// const PatientTable = () => {
//   const handleActionClick = (status) => {
//     console.log(`Action clicked: ${status}`);
//     // Add your logic to handle the button click here
//   };

//   return (
//     <div className="overflow-x-auto p-4">
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//         <thead className="bg-gray-100 text-gray-600 uppercase text-sm border-b border-gray-300">
//           <tr>
//             <th className="py-3 px-6 text-left border-r border-gray-300">Token No</th>
//             <th className="py-3 px-6 text-left border-r border-gray-300">Patient Name</th>
//             <th className="py-3 px-6 text-left border-r border-gray-300">Phone Number</th>
//             <th className="py-3 px-6 text-left border-r border-gray-300">Date & Time</th>
//             <th className="py-3 px-6 text-left border-r border-gray-300">Department</th>
//             <th className="py-3 px-6 text-left border-r border-gray-300">Queue Status</th>
//             <th className="py-3 px-6 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm text-gray-700">
//           {demoData.map((item, index) => (
//             <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
//               <td className="py-3 px-6 border-r border-gray-300">{item.tokenNo}</td>
//               <td className="py-3 px-6 border-r border-gray-300">{item.patientName}</td>
//               <td className="py-3 px-6 border-r border-gray-300">{item.phoneNumber}</td>
//               <td className="py-3 px-6 border-r border-gray-300">{item.dateTime}</td>
//               <td className="py-3 px-6 border-r border-gray-300">{item.department}</td>
//               <td className="py-3 px-6 border-r border-gray-300">
//                 <span className={`inline-block px-3 py-1 rounded-full text-white ${statusColors[item.queueStatus]}`}>
//                   {item.queueStatus}
//                 </span>
//               </td>
//               <td className="py-3 px-6">
//                 <ButtonComponent onClick={handleActionClick} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PatientTable;

// *************************************************************************************************


import React from 'react';

const demoData = [
  {
    tokenNo: '001',
    patientName: 'John Doe',
    phoneNumber: '123-456-7890',
    dateTime: '2024-09-01 10:00 AM',
    department: 'Cardiology',
    queueStatus: 'Arrived',
  },
  {
    tokenNo: '002',
    patientName: 'John Doe',
    phoneNumber: '123-456-7890',
    dateTime: '2024-09-01 10:00 AM',
    department: 'Cardiology',
    queueStatus: 'Arrived',
  },
  {
    tokenNo: '003',
    patientName: 'John Doe',
    phoneNumber: '123-456-7890',
    dateTime: '2024-09-01 10:00 AM',
    department: 'Cardiology',
    queueStatus: 'NotArrived',
  },
  {
    tokenNo: '001',
    patientName: 'Jane Smith',
    phoneNumber: '098-765-4321',
    dateTime: '2024-09-01 10:30 AM',
    department: 'Neurology',
    queueStatus: 'NotArrived',
  },
  {
    tokenNo: '002',
    patientName: 'Jane Smith',
    phoneNumber: '098-765-4321',
    dateTime: '2024-09-01 10:30 AM',
    department: 'Neurology',
    queueStatus: 'Arrived',
  },
  {
    tokenNo: '003',
    patientName: 'Jane Smith',
    phoneNumber: '098-765-4321',
    dateTime: '2024-09-01 10:30 AM',
    department: 'Neurology',
    queueStatus: 'NotArrived',
  },
  {
    tokenNo: '003',
    patientName: 'Robert Brown',
    phoneNumber: '555-123-4567',
    dateTime: '2024-09-01 11:00 AM',
    department: 'Orthopedics',
    queueStatus: 'NotArrived',
  },
  {
    tokenNo: '004',
    patientName: 'Mitchle Starc',
    phoneNumber: '555-123-8546',
    dateTime: '2024-09-01 16:20 AM',
    department: 'ENT',
    queueStatus: 'Arrived',
  },
  {
    tokenNo: '001',
    patientName: 'Gal Gadot',
    phoneNumber: '555-123-7843',
    dateTime: '2024-09-01 18:00 AM',
    department: 'Gynochology',
    queueStatus: 'Arrived',
  },
  {
    tokenNo: '002',
    patientName: 'Gal Gadot',
    phoneNumber: '555-123-7843',
    dateTime: '2024-09-01 18:00 AM',
    department: 'Gynochology',
    queueStatus: 'Arrived',
  },
  {
    tokenNo: '003',
    patientName: 'Gal Gadot',
    phoneNumber: '555-123-7843',
    dateTime: '2024-09-01 18:00 AM',
    department: 'Gynochology',
    queueStatus: 'NotArrived',
  },
];

const statusColors = {
  Arrived: 'bg-green-500',
  NotArrived: 'bg-red-500',
};

const ButtonComponent = ({ status, onClick }) => {
  const buttonClasses = {
    Arrived: 'bg-green-500 hover:bg-green-600',
    NotArrived: 'bg-red-500 hover:bg-red-600',
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`text-white py-1 px-3 rounded ${buttonClasses.Arrived}`}
        onClick={() => onClick('Arrived')}
      >
        Arrived
      </button>
      <button
        className={`text-white py-1 px-3 rounded ${buttonClasses.NotArrived}`}
        onClick={() => onClick('NotArrived')}
      >
       Not-Arrived
      </button>
    </div>
  );
};

const DepartmentTable = ({ department }) => {
  const filteredData = demoData.filter((item) => item.department === department);
 
  // add counter
  const patientCount = filteredData.length;

  const handleActionClick = (status) => {
    console.log(`Action clicked: ${status}`);
    // aikhan a backend logic add kora jabe .
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{department} Department</h2>
      <p className="mb-4">Total Patients Booked OPD: {patientCount}</p>
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
            {filteredData.map((item, index) => (
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
    </div>
  );
};

const PatientTable = () => {
  const departments = ['Cardiology', 'Neurology', 'Orthopedics','Gynochology','ENT','Oncology','General Visit']; // You can add more departments here.

  return (
    <div>
      {departments.map((department) => (
        <DepartmentTable key={department} department={department} />
      ))}
    </div>
  );
};

export default PatientTable;









