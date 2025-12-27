import React from "react";
import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";

const HeroSection = () => {
  const { currentGradient } = useTheme();

  return (
    <div
      className={`relative border-b border-neutral-900 pb-12 lg:mb-36 ${currentGradient} text-white`}
    >
      {/* Social Icons */}
      <div className="hidden lg:flex flex-col fixed top-1/3 left-6 space-y-6 z-50">
        <a href="https://www.linkedin.com/in/sunny-riar-a8970a1b3/" target="_blank">
          <FaLinkedin className="text-3xl hover:text-gray-300" />
        </a>

        <a href="https://github.com/CraziestAnimeLover" target="_blank">
          <FaGithub className="text-3xl hover:text-gray-300" />
        </a>

        <FaInstagram className="text-3xl hover:text-gray-300 cursor-pointer" />
        <FaTwitter className="text-3xl hover:text-gray-300 cursor-pointer" />

        <a href="mailto:sunny9015088766@gmail.com">
          <FaVoicemail className="text-3xl hover:text-gray-300" />
        </a>
      </div>

      {/* Hero Content */}
      <div className="flex flex-wrap items-center max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="w-full lg:w-1/2">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="pb-6 text-6xl font-bold"
          >
            Sunny Riar
          </motion.h1>

          <motion.span
            className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-3xl font-semibold"
          >
            Full Stack Developer
          </motion.span>

          <p className="mt-6 max-w-xl text-gray-300 text-lg">
            {HERO_CONTENT}
          </p>
        </div>

        <div className="w-full lg:w-1/2 mt-12 flex justify-center">
          <motion.img
            src={profilePic}
            alt="Sunny Riar"
            className="rounded-3xl shadow-2xl max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
