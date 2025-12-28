import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [showThemes, setShowThemes] = useState(false);
  const { currentGradient, setCurrentGradient, gradients } = useTheme();

  const navLinkClass =
    "relative text-white font-medium transition-all duration-300 hover:scale-105 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className={`mb-12 py-6 px-4 sm:px-8 ${currentGradient}`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-white hover:scale-105 transition">
            Sunny Riar
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/experience" className={navLinkClass}>
            Experience
          </Link>
          <Link to="/skills" className={navLinkClass}>
            Skills
          </Link>
          <Link to="/projects" className={navLinkClass}>
            Projects
          </Link>
          <Link to="/resumebuilder" className={navLinkClass}>
            Resume Builder
          </Link>
          <Link to="/showcase" className={navLinkClass}>
            Showcase
          </Link>

          {/* Theme Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowThemes(!showThemes)}
            className="px-4 py-1.5 rounded-md bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition"
          >
            Theme
          </motion.button>
        </div>
      </div>

      {/* Theme Picker */}
      <AnimatePresence>
        {showThemes && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 right-8 bg-black/80 p-4 rounded-xl flex gap-3 z-50 backdrop-blur-lg"
          >
            {gradients.map((g, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setCurrentGradient(g);
                  setShowThemes(false);
                }}
                className={`w-8 h-8 rounded-full ${g} border-2 border-white hover:ring-2 hover:ring-white`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
