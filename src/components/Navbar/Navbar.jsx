import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [showThemes, setShowThemes] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentGradient, setCurrentGradient, gradients } = useTheme();

  const navLinkClass =
    "relative text-white font-medium transition-all duration-300 hover:scale-105";

  const navLinks = [
    { to: "/resumebuilder", label: "Resume Builder" },
    { to: "/showcase", label: "Showcase" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`mb-12 py-6 px-4 sm:px-8 ${currentGradient} relative`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-white hover:scale-105 transition">
            Sunny Riar
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </Link>
          ))}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowThemes(!showThemes)}
            className="px-4 py-1.5 rounded-md bg-white/20 text-white backdrop-blur-md"
          >
            Theme
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-6 bg-black/80 rounded-xl p-6 flex flex-col gap-4 backdrop-blur-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setShowThemes(!showThemes);
                setMenuOpen(false);
              }}
              className="mt-2 px-4 py-2 rounded-md bg-white/20 text-white"
            >
              Theme
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
