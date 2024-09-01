import React from "react";
import HospitalNav from "../HospitalNav";

import { motion } from "framer-motion";

import StatusCard from "../../../components/StatusCard";
import { ShoppingBag,  PillBottle } from "lucide-react";
import CategoryInventoryChart from "../../charts/CategoryInventoryChart";
// import InventorySalesPage from "../../charts/InventorySalesChart";
import InventoryTable from "./InventoryTable";

function InventoryManagement() {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10">
        <HospitalNav title="Inventory Management" />

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 mb-8 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <StatusCard
              name="Available Stock"
              icon={PillBottle}
              value="28,900"
              color="#6366fe"
            />
            <StatusCard
              name="Total Sales"
              icon={ShoppingBag}
              value="21,566"
              color="#f59e0b"
            />
          
          </motion.div>

          {/* InventoryItemsTable */}
          <InventoryTable />

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <CategoryInventoryChart />
            {/* <InventorySalesPage /> */}
          </div>
        </main>
      </div>
    </>
  );
}

export default InventoryManagement;
