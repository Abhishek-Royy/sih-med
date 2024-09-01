// import React from "react";
// import { Trash2,PlusCircleIcon } from "lucide-react";

// const Table = () => {
//   const data = [
//     { medicine: "Paracetamol", availability: "In Stock", quantity: 25 },
//     { medicine: "Ibuprofen", availability: "Out of Stock", quantity: 0 },
//     { medicine: "Amoxicillin", availability: "Low Stock", quantity: 11 },
//     { medicine: "Cetirizine", availability: "In Stock", quantity: 37 },
//     { medicine: "Metformin", availability: "Out of Stock", quantity: 0 },
//   ];

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
//               Medicine Name
//             </th>
//             <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
//               Availability
//             </th>
//             <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
//               Quantity
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="px-4 py-2 border border-gray-300">
//                 {item.medicine}
//               </td>
//               <td className="px-4 py-2 border border-gray-300 flex items-center justify-between">
//                 <span>{item.availability}</span>
//                 <div className="flex space-x-2">
//                   {/* Static ADD and REMOVE icons */}
//                   <span className="text-green-500">
//                     <PlusCircleIcon size={18} />
//                   </span>
//                   <span className="text-red-500">
//                     <Trash2 size={18} />
//                   </span>
//                 </div>
//               </td>
//               <td className="px-4 py-2 border border-gray-300">
//                 {item.quantity}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

// ***************************************************************************

// import React, { useState } from "react";
// import { Trash2, PlusCircleIcon } from "lucide-react";

// const Table = () => {
//   const [data, setData] = useState([
//     { medicine: "Paracetamol", availability: "In Stock", quantity: 25 },
//     { medicine: "Ibuprofen", availability: "Out of Stock", quantity: 0 },
//     { medicine: "Amoxicillin", availability: "Low Stock", quantity: 11 },
//     { medicine: "Cetirizine", availability: "In Stock", quantity: 37 },
//     { medicine: "Metformin", availability: "Out of Stock", quantity: 0 },
//   ]);

// const increaseQuantity = (index) => {
//   const newData = [...data];
//   newData[index].quantity += 1;
//   newData[index].availability = newData[index].quantity > 0 ? "In Stock" : "Out of Stock";
//   setData(newData);
// };

// const decreaseQuantity = (index) => {
//   const newData = [...data];
//   if (newData[index].quantity > 0) {
//     newData[index].quantity -= 1;
//     newData[index].availability = newData[index].quantity === 0 ? "Out of Stock" : (newData[index].quantity <= 10 ? "Low Stock" : "In Stock");
//     setData(newData);
//   }
// };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
//               Medicine Name
//             </th>
//             <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
//               Availability
//             </th>
//             <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
//               Quantity
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="px-4 py-2 border border-gray-300">
//                 {item.medicine}
//               </td>
//               <td className={`px-4 py-2 border border-gray-300 flex items-center justify-between
//                 ${item.availability === "Out of Stock" ? "text-red-600" :
//                 item.availability === "Low Stock" ? "text-yellow-500" : "text-green-600"}`}>
//                 <span>{item.availability}</span>
//                 <div className="flex space-x-2">
//                   <span className="text-green-500 cursor-pointer" onClick={() => increaseQuantity(index)}>
//                     <PlusCircleIcon size={18} />
//                   </span>
//                   <span className="text-red-500 cursor-pointer" onClick={() => decreaseQuantity(index)}>
//                     <Trash2 size={18} />
//                   </span>
//                 </div>
//               </td>
//               <td className="px-4 py-2 border border-gray-300">
//                 {item.quantity}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

// *********************************************************************************************

import React from "react";
import { Trash2, PlusCircle } from "lucide-react";

const Table = ({ data, onAdd, onRemove }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
              Medicine Name
            </th>
            <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
              Availability
            </th>
            <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
              Quantity
            </th>
            <th className="text-[#000058] px-4 py-2 border border-gray-300 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  {item.medicine}
                </td>
                <td
                  className={`px-4 py-2 border border-gray-300 ${
                    item.availability === "Out of Stock"
                      ? "text-red-600"
                      : item.availability === "Low Stock"
                      ? "text-yellow-500"
                      : "text-green-600"
                  }`}
                >
                  {item.availability}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.quantity}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex space-x-2">
                    <button
                      className="text-green-500 cursor-pointer"
                      onClick={() => onAdd(item.id)}
                    >
                      <PlusCircle size={18} />
                    </button>
                    <button
                      className="text-red-500 cursor-pointer"
                      onClick={() => onRemove(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No items found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
