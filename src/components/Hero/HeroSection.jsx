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
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 relative">
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
      <div className="flex flex-wrap">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col itens-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sunny Riar
            </motion.h1>

            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <p className="my-2 max-w-xl font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Sunny Riar"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
