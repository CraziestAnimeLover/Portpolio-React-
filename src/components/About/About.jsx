import React from "react";
import AboutPic from "../../assets/about.jpg";
import { ABOUT_TEXT } from "../../constants";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const { currentGradient } = useTheme();

  return (
    <div className={`border-b border-neutral-900 pb-16 ${currentGradient}`}>
      {/* Heading */}
      <h1 className="my-12 sm:my-16 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        About <span className="text-neutral-400">Me</span>
      </h1>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={AboutPic}
            alt="About Me"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
