import React, { useState } from 'react';
import logo from "../../assets/kevinRushLogo.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaVoicemail } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex justify-between items-center py-6 px-4 sm:px-8 bg-gray-800">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
      </div>
      <div className="hidden md:flex items-center space-x-4 gap-6">
        <FaLinkedin className="text-4xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
        <FaGithub className="text-4xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
        <FaInstagram className="text-4xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
        <FaTwitter className="text-4xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
        <FaVoicemail className="text-4xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-20 h-full bg-gray-800 opacity-75 flex flex-col items-center justify-center space-y-4 mt-16 z-50">
          <FaLinkedin className="text-3xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
          <FaGithub className="text-3xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
          <FaInstagram className="text-3xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
          <FaTwitter className="text-3xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
          <FaVoicemail className="text-3xl text-white hover:text-gray-300 transition duration-300 ease-in-out" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
