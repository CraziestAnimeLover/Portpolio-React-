import React from "react";
import { HERO_CONTENT } from "../../constants/index.js";
import profilePic from "../../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-12 lg:mb-36 bg-gray-900 text-white">
      {/* === Left Vertical Social Icons === */}
      <div className="hidden lg:flex flex-col fixed top-1/3 left-6 space-y-6 z-50">
        <a
          href="https://www.linkedin.com/in/sunny-riar-a8970a1b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin className="text-3xl text-white hover:text-gray-300" />
        </a>

        <a
          href="https://github.com/CraziestAnimeLover"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaGithub className="text-3xl text-white hover:text-gray-300" />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaInstagram className="text-3xl text-white hover:text-gray-300" />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaTwitter className="text-3xl text-white hover:text-gray-300" />
        </a>

        <a
          href="mailto:sunny9015088766@gmail.com"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaVoicemail className="text-3xl text-white hover:text-gray-300" />
        </a>
      </div>

      {/* === Hero Content === */}
      <div className="flex flex-wrap items-center max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pb-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white"
          >
            Sunny Riar
          </motion.h1>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-3xl sm:text-4xl font-semibold"
          >
            Full Stack Developer
          </motion.span>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 max-w-xl text-gray-300 text-lg sm:text-xl font-light leading-relaxed text-center lg:text-left"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src={profilePic}
            alt="Sunny Riar"
            className="rounded-3xl shadow-2xl max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
