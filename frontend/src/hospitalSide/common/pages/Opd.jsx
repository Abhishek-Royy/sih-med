import React from "react";
import HospitalNav from "../HospitalNav";
import { motion } from "framer-motion";
import { ListOrderedIcon, StethoscopeIcon, FileDigitIcon } from "lucide-react";
import StatusCard from "../../../components/StatusCard";

import OpdTable from "./OpdTable";

function Opd() {
  const todayDate = new Date().toLocaleDateString("en-GB");

  return (
    <>
      <div className="flex-1 overflow-auto relative z-10">
        <HospitalNav title="Today OPD" currentDate={todayDate} />

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <StatusCard
              name="Total Booking"
              icon={ListOrderedIcon}
              value="66"
              color="#6366fe"
            />
            <StatusCard
              name="Remaining Checkup"
              icon={StethoscopeIcon}
              value="21"
              color="#f59e0b"
            />
            <StatusCard
              name="Current Token No."
              icon={FileDigitIcon}
              value="1A2DG231"
              color="#10b981"
            />
          </motion.div>

          {/* opdTable */}
          <OpdTable />
        </main>
      </div>
    </>
  );
}

export default Opd;


