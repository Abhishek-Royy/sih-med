import React from "react";
import { motion } from "framer-motion";

function StatusCard({ name, icon: Icon, value, color }) {
  return (
    <motion.div
      className="bg-[#dedede] bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-800"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -11px rgba(0,0,0,0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-800">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-[#000058]">{value}</p>
      </div>
    </motion.div>
  );
}

export default StatusCard;
