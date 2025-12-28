import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [showThemes, setShowThemes] = useState(false);
  const { currentGradient, setCurrentGradient, gradients } = useTheme();

  return (
    <nav className={`mb-12 py-6 px-4 sm:px-8 ${currentGradient}`}>
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">Sunny Riar</h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/experience" className="text-white">Experience</Link>
          <Link to="/skills" className="text-white">Skills</Link>
          <Link to="/projects" className="text-white">Projects</Link>
          <Link to="/resumebuilder" className="text-white">Resume Builder</Link>
          <Link to="/showcase" className="text-white">Showcase</Link>

          <button
            onClick={() => setShowThemes(!showThemes)}
            className="px-3 py-1 rounded-md bg-white/20 text-white"
          >
            Theme
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showThemes && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 right-8 bg-black/80 p-4 rounded-lg flex gap-3 z-50"
          >
            {gradients.map((g, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentGradient(g);
                  setShowThemes(false);
                }}
                className={`w-8 h-8 rounded-full ${g} border-2 border-white`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
