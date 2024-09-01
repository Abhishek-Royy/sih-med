import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  Hospital,
  CalendarCheck,
  FlaskConical,
  PersonStanding,
  Syringe,
  Stethoscope,
  MapPinHouse,
  BedDouble,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

function Sidebar() {
  const [isSidebaropen, setisSidebaropen] = useState(false);

  const Sidebar_Items = [
    {
      name: "Today OPD",
      icon: Hospital,
      color: "#6366f1",
      path: "/hospital-app-side/opd",
    },
    {
      name: "Doctor Schedule",
      icon: CalendarCheck,
      color: "#8b5cf6",
      path: "/hospital-app-side/doctor-schedule",
    },
    {
      name: "Test Management",
      icon: FlaskConical,
      color: "#10b981",
      path: "/hospital-app-side/test",
    },
    {
      name: "Patient Management",
      icon: PersonStanding,
      color: "#ec4899",
      path: "/hospital-app-side/patient-management",
    },

    {
      name: "Inventory Management",
      icon: Syringe,
      color: "#3b82f6",
      path: "/hospital-app-side/inventory-management",
    },
    {
      name: "Doctor Summery",
      icon: Stethoscope,
      color: "#f59e0b",
      path: "/hospital-app-side/doctor-summery",
    },
    {
      name: "Department Management",
      icon: MapPinHouse,
      color: "#000",
      path: "/hospital-app-side/department-management",
    },
    {
      name: "Bed Management",
      icon: BedDouble,
      color: "#6366f1",
      path: "/hospital-app-side/bed-management",
    },
  ];

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebaropen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebaropen ? 256 : 80 }}
    >
      <div className="h-full bg-[#3FEBDE] bg-opacity-50  backdrop-blur-md p-4 flex flex-col boredr-r border-gray-300 ">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setisSidebaropen(!isSidebaropen)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {Sidebar_Items.map((item, index) => (
            <Link key={item.path} to={item.path}>
              <motion.div className="flex  items-center p-4 text-sm  font-medium rounded-lg hover:bg-[#21D0C3] transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "18px" }}
                />

                <AnimatePresence>
                  {isSidebaropen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

export default Sidebar;
