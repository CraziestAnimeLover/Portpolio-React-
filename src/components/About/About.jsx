import React from "react";
import AboutPic from "../../assets/about.jpg";
import { ABOUT_TEXT } from "../../constants/index.js";
import { useTheme } from "../../context/ThemeContext.jsx";

const About = () => { 
  const { currentGradient } = useTheme(); // fixed typo

  return (
    <div className={`border-b border-neutral-900 pb-12 ${currentGradient}`}>
      <h1 className="my-20 text-center text-4xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-6 lg:px-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={AboutPic}
            alt="About Me"
            className="rounded-2xl shadow-2xl max-w-sm lg:max-w-md"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
