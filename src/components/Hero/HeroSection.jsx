import React from "react";
import { HERO_CONTENT } from "../../constants/index.js";
import profilePic from "../../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col itens-center lg:items-start">
            <motion.h1 
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5 , delay:2}}
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Sunny Riar
            </motion.h1>
            <motion.span
            
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer{" "}
            </motion.span>
            <p className="my-2 max-w-xl font-light  tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
             initial={{x:-100, opacity:0}}
             animate={{x:0, opacity:1}}
             transition={{duration:1 , delay:1.2}}
            src={profilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
