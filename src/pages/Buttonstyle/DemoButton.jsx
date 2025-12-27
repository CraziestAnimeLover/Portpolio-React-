import React from "react";
import { motion } from "framer-motion";

const DemoButton = ({ label = "Click Me", onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none"
    >
      {label}
    </motion.button>
  );
};

export default DemoButton;
