import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mb-12 flex justify-between items-center py-6 px-4 sm:px-8 bg-gray-800">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white cursor-pointer hover:text-gray-300">
            Sunny Riar
          </h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/experience" className="text-white text-lg hover:text-gray-300 transition">
          Experience
        </Link>
        <Link to="/skills" className="text-white text-lg hover:text-gray-300 transition">
          Skills
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-2/3 h-full bg-gray-800 flex flex-col items-center justify-center space-y-6 z-50 shadow-lg"
          >
            <Link to="/" className="text-white text-lg hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/experience" className="text-white text-lg hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
            <Link to="/skills" className="text-white text-lg hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
