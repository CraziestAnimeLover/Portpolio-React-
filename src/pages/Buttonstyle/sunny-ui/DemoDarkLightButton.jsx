import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const DemoDarkLightButton = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={() => setDark(!dark)}
      className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500
                 text-white shadow-lg hover:shadow-xl focus:outline-none"
    >
      {dark ? <FiSun /> : <FiMoon />}
      {dark ? "Light Mode" : "Dark Mode"}
    </motion.button>
  );
};

export default DemoDarkLightButton;
