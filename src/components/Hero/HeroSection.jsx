import React from "react";
import { HERO_CONTENT } from "../../constants";
import profileVideo from "../../assets/Intro.mp4";
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
      className={`relative border-b border-neutral-900 pb-16 ${currentGradient} text-white`}
    >
      {/* ================= SOCIAL ICONS (DESKTOP ONLY) ================= */}
      <motion.div
        className="hidden lg:flex flex-col fixed top-1/3 left-6 space-y-6 z-50 cursor-grab"
        drag="y"
        dragConstraints={{ top: -150, bottom: 150 }}
        dragElastic={0.2}
      >
        <a
          href="https://www.linkedin.com/in/sunny-riar-a8970a1b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl hover:text-gray-300 transition" />
        </a>

        <a
          href="https://github.com/CraziestAnimeLover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl hover:text-gray-300 transition" />
        </a>

        <FaInstagram className="text-3xl hover:text-gray-300 cursor-pointer transition" />
        <FaTwitter className="text-3xl hover:text-gray-300 cursor-pointer transition" />

        <a href="mailto:sunny9015088766@gmail.com">
          <FaVoicemail className="text-3xl hover:text-gray-300 transition" />
        </a>
      </motion.div>

      {/* ================= HERO CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* TEXT SECTION */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="pb-4 text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              Sunny Riar
            </motion.h1>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-semibold"
            >
              Full Stack Developer
            </motion.span>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-300 text-base sm:text-lg">
              {HERO_CONTENT}
            </p>
          </div>

          {/* VIDEO SECTION */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.video
              src={profileVideo}
              autoPlay
              loop
              muted
              playsInline
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
