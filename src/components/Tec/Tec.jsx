import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiMui } from "react-icons/si";
import { motion } from "framer-motion";

const Tec = () => {
  const techStack = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React.js" },
    { icon: <TbBrandJavascript className="text-7xl text-yellow-300" />, name: "JavaScript" },
    { icon: <SiMongodb className="text-7xl text-green-400" />, name: "MongoDB" },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-7xl text-gray-300" />, name: "Express.js" },
    { icon: <SiTailwindcss className="text-7xl text-sky-400" />, name: "TailwindCSS" },
    { icon: <SiBootstrap className="text-7xl text-purple-400" />, name: "Bootstrap" },
    { icon: <SiMui className="text-7xl text-blue-400" />, name: "Material UI" },
  ];

  return (
    <div className="border-b bg-neutral-800 pb-24 text-white">
      <h1 className="my-20 text-center text-4xl font-semibold">
        Technical Expertise
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-6 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            {tech.icon}
            <p className="mt-3 text-lg font-medium text-gray-300">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tec;
