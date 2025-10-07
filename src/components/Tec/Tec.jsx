import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMui, // ✅ Correct import
} from "react-icons/si";

const Tec = () => {
  return (
    <div className="border-b bg-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-semibold text-white">
        Technologies
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* React */}
        <div className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-6 hover:scale-105 transition-transform duration-300">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        {/* JavaScript */}
        <div className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-6 hover:scale-105 transition-transform duration-300">
          <TbBrandJavascript className="text-7xl text-yellow-300" />
        </div>

        {/* MongoDB */}
        <div className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-6 hover:scale-105 transition-transform duration-300">
          <SiMongodb className="text-7xl text-green-400" />
        </div>

        {/* Node.js */}
        <div className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-6 hover:scale-105 transition-transform duration-300">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>

        {/* Express.js */}
        <div className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-6 hover:scale-105 transition-transform duration-300">
          <SiExpress className="text-7xl text-gray-300" />
        </div>

        {/* TailwindCSS */}
        <div className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-6 hover:scale-105 transition-transform duration-300">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </div>

        {/* Bootstrap */}
        <div className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-6 hover:scale-105 transition-transform duration-300">
          <SiBootstrap className="text-7xl text-purple-400" />
        </div>

        {/* Material UI */}
        <div className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-6 hover:scale-105 transition-transform duration-300">
          <SiMui className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Tec;
