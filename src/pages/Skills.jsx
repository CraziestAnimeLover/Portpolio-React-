import React from "react";
import { SKILLS } from "../constants/index.js"; // adjust path if needed
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 sm:px-12 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-800">
        Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {SKILLS.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{category.category}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
