import React from "react";
import { motion } from "framer-motion";

const DemoOutlineButton = ({ label = "Outline Button" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 border-2 border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-white transition"
    >
      {label}
    </motion.button>
  );
};

export default DemoOutlineButton;
