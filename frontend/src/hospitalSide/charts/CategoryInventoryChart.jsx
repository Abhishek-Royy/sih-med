import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

function CategoryInventoryChart() {
  const category_data = [
    {
      name: "Drugs",
      value: 45,
    },
    { name: "OT Instrument", value: 55 },
    { name: "Medicine", value: 85 },
    { name: "OT Dress Kit", value: 32 },
    { name: "Syringes", value: 79 },
  ];

  const color = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28", "#8884D8"];
  return (
    <>
      <motion.div
        className="bg-[#dedede] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-medium mb-4 text-[#000058]">
          Inventory Category Distribution
        </h2>
        <div className="h-80">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart>
              <Pie
                data={category_data}
                cx="50%"
                cy="50%"
                fill="#8884d8"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {" "}
                {category_data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={color[index % color.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31,41,55,0.8)",
                  borderColor: "#4b5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </>
  );
}

export default CategoryInventoryChart;
