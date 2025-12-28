import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const DemoIconButton = ({ label = "Icon Button" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
    >
      {label}
      <FiArrowRight className="text-lg" />
    </motion.button>
  );
};

export default DemoIconButton;
