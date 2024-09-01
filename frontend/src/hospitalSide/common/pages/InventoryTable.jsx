// import React from "react";
// import { motion } from "framer-motion";
// import { Search} from "lucide-react";
// import Table from "./Table";

// function InventoryTable() {
//   return (
//     <>
//       <motion.div
//         className="bg-[#dedede] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <div className="md:flex block justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-[#000058]">
//             Inventory Items
//           </h2>
//           <div className="relative">
//             <label
//               className="text-lg font-medium text-[#000058] mr-2"
//               htmlFor="category-med"
//             >
//               Select Category
//             </label>
//             <select
//               className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               name="category"
//               id="category-med"
//             >
//               <option value="" disabled selected>
//                 ---none---
//               </option>
//               <option value="drugs">Drugs</option>
//               <option value="ot-instruments">OT Instruments</option>
//               <option value="syringes">Syringes</option>
//               <option value="ot-dress-kit">OT Dress Kit</option>
//               <option value="medicine">Medicine</option>
//             </select>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search product..."
//               className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Search
//               className="absolute left-3 top-2.5 text-gray-400"
//               size={18}
//             />
//           </div>
//         </div>
//       </motion.div>
//       <motion.div
//         className="bg-[#dedede] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <Table />
//       </motion.div>
//     </>
//   );
// }

// export default InventoryTable;

// ******************************************************************************************

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";
// import Table from "./Table";

// import PopupForm from "./Popup_form";

// function InventoryTable() {
//   const [category, setCategory] = useState(""); // State for category filter
//   const [searchTerm, setSearchTerm] = useState(""); // State for search filter

//   const [showPopup, setShowPopup] = useState(false); 

//   // State for inventory data
//   const [inventoryData, setInventoryData] = useState([
//     {
//       id: 1,
//       category: "medicine",
//       medicine: "Paracetamol",
//       availability: "In Stock",
//       quantity: 25,
//     },
//     {
//       id: 2,
//       category: "medicine",
//       medicine: "Ibuprofen",
//       availability: "Out of Stock",
//       quantity: 0,
//     },
//     {
//       id: 3,
//       category: "medicine",
//       medicine: "Amoxicillin",
//       availability: "Low Stock",
//       quantity: 11,
//     },
//     {
//       id: 4,
//       category: "medicine",
//       medicine: "Cetirizine",
//       availability: "In Stock",
//       quantity: 37,
//     },
//     {
//       id: 5,
//       category: "medicine",
//       medicine: "Metformin",
//       availability: "Out of Stock",
//       quantity: 0,
//     },
//     {
//       id: 6,
//       category: "drugs",
//       medicine: "Aspirin",
//       availability: "In Stock",
//       quantity: 42,
//     },
//     {
//       id: 7,
//       category: "ot-instruments",
//       medicine: "Scalpel",
//       availability: "Low Stock",
//       quantity: 7,
//     },
//   ]);

//   // Filter data based on category and search term
//   const filteredData = inventoryData.filter((item) => {
//     const matchesCategory = category === "" || item.category === category;
//     const matchesSearch =
//       searchTerm === "" ||
//       item.medicine.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   // Add item (increase quantity)
//   const handleAdd = (id) => {
//     setInventoryData((prevData) =>
//       prevData.map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity + 1, availability: "In Stock" }
//           : item
//       )
//     );
//   };

//   // Remove item (decrease quantity or remove item if quantity is 1)
//   const handleRemove = (id) => {
//     setInventoryData(
//       (prevData) =>
//         prevData
//           .map((item) =>
//             item.id === id
//               ? {
//                   ...item,
//                   quantity: item.quantity > 0 ? item.quantity - 1 : 0,
//                   availability:
//                     item.quantity - 1 <= 0 ? "Out of Stock" : "Low Stock",
//                 }
//               : item
//           )
//           .filter((item) => item.quantity > 0 || item.id !== id) // Remove items with quantity 0
//     );
//   };


//   const handleAddItem = (newItem) => {
//     setInventoryData((prevData) => [...prevData, newItem]);
//     setShowPopup(false); // Hide popup after adding item
//   };

//   return (
//     <>
//       <motion.div
//         className="bg-[#dedede] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <div className="md:flex block justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-[#000058]">
//             Inventory Items
//           </h2>

//           {/* Category Selector */}
//           <div className="relative mb-4 md:mb-0">
//             <label
//               className="text-lg font-medium text-[#000058] mr-2"
//               htmlFor="category-med"
//             >
//               Select Category
//             </label>
//             <select
//               className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               name="category"
//               id="category-med"
//               onChange={(e) => setCategory(e.target.value)}
//               value={category}
//             >
//               <option value="" selected disabled>
//                 ---none---
//               </option>
//               <option value="drugs">Drugs</option>
//               <option value="ot-instruments">OT Instruments</option>
//               <option value="syringes">Syringes</option>
//               <option value="ot-dress-kit">OT Dress Kit</option>
//               <option value="medicine">Medicine</option>
//             </select>
//           </div>

//           {/* Search Input */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search product..."
//               className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search
//               className="absolute left-3 top-2.5 text-gray-400"
//               size={18}
//             />
//           </div>
//         </div>

//         {/* new item add btn */}
//         <button
//           type="button"
//           className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//           onClick={() => setShowPopup(true)}
//         >
//           Add New Item
//         </button>
//       </motion.div>

//       {/* Table Component */}
//       <motion.div
//         className="bg-[#dedede] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <Table data={filteredData} onAdd={handleAdd} onRemove={handleRemove} />
//       </motion.div>
//       {showPopup && (
//         <PopupForm
//           onClose={() => setShowPopup(false)} // Close popup
//           onSubmit={handleAddItem} // Handle form submission
//         />
//       )}
//     </>
//   );
// }

// export default InventoryTable;




// *-******************************-+-------------------------------------------------------------------


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Table from "./Table";
import PopupForm from "./Popup_form"; // Import the PopupForm component

function InventoryTable() {
  const [category, setCategory] = useState(""); // State for category filter
  const [searchTerm, setSearchTerm] = useState(""); // State for search filter
  const [showPopup, setShowPopup] = useState(false); // State to show/hide the popup
  const [inventoryData, setInventoryData] = useState([
    {
            id: 1,
            category: "medicine",
            medicine: "Paracetamol",
            availability: "In Stock",
            quantity: 25,
          },
          {
            id: 2,
            category: "medicine",
            medicine: "Ibuprofen",
            availability: "Out of Stock",
            quantity: 0,
          },
          {
            id: 3,
            category: "medicine",
            medicine: "Amoxicillin",
            availability: "Low Stock",
            quantity: 11,
          },
          {
            id: 4,
            category: "medicine",
            medicine: "Cetirizine",
            availability: "In Stock",
            quantity: 37,
          },
          {
            id: 5,
            category: "medicine",
            medicine: "Metformin",
            availability: "Out of Stock",
            quantity: 0,
          },
          {
            id: 6,
            category: "drugs",
            medicine: "Aspirin",
            availability: "In Stock",
            quantity: 42,
          },
          {
            id: 7,
            category: "ot-instruments",
            medicine: "Scalpel",
            availability: "Low Stock",
            quantity: 7,
          },
  ]);

  // Filter data based on category and search term
  const filteredData = inventoryData.filter((item) => {
    const matchesCategory = category === "" || item.category === category;
    const matchesSearch =
      searchTerm === "" ||
      item.medicine.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Add item (increase quantity)
  const handleAdd = (id) => {
    setInventoryData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1, availability: "In Stock" }
          : item
      )
    );
  };

  // Remove item (decrease quantity or remove item if quantity is 1)
  const handleRemove = (id) => {
    setInventoryData(
      (prevData) =>
        prevData
          .map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                  availability:
                    item.quantity - 1 <= 0 ? "Out of Stock" : "Low Stock",
                }
              : item
          )
          .filter((item) => item.quantity > 0 || item.id !== id) // Remove items with quantity 0
    );
  };

  // Handle form submission
  const handleAddItem = (newItem) => {
    setInventoryData((prevData) => [...prevData, newItem]);
    setShowPopup(false); // Hide popup after adding item
  };

  return (
    <>
      <motion.div
        className="bg-[#dedede] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="md:flex block justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[#000058]">
            Inventory Items
          </h2>

          {/* Category Selector */}
          <div className="relative mb-4 md:mb-0">
            <label
              className="text-lg font-medium text-[#000058] mr-2"
              htmlFor="category-med"
            >
              Select Category
            </label>
            <select
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="category"
              id="category-med"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="" selected disabled>
                ---none---
              </option>
              <option value="drugs">Drugs</option>
              <option value="ot-instruments">OT Instruments</option>
              <option value="syringes">Syringes</option>
              <option value="ot-dress-kit">OT Dress Kit</option>
              <option value="medicine">Medicine</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search product..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>

        {/* New item add button */}
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => setShowPopup(true)} // Show popup on button click
        >
          Add New Item
        </button>
      </motion.div>

      {/* Table Component */}
      <motion.div
        className="bg-[#dedede] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Table data={filteredData} onAdd={handleAdd} onRemove={handleRemove} />
      </motion.div>

      {/* Popup Form */}
      {showPopup && (
        <PopupForm
          onClose={() => setShowPopup(false)} // Close popup
          onSubmit={handleAddItem} // Handle form submission
        />
      )}
    </>
  );
}

export default InventoryTable;
