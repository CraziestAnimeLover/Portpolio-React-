import React from "react";
import { EXPERIENCES } from "../constants/index.js"; // adjust path if needed
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 sm:px-12 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        Work Experience
      </h1>

      <div className="space-y-10 max-w-4xl mx-auto">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">{exp.role}</h2>
              <span className="text-gray-400 text-sm">{exp.year}</span>
            </div>
            <h3 className="text-lg text-gray-300 mb-2">{exp.company}</h3>
            <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
