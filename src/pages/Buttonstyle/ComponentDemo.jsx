import React from "react";
import { motion } from "framer-motion";

const ComponentDemo = ({ title, description, demoComponent, codeString }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start px-6 py-12 border-b border-neutral-700">
      {/* Left: Live Demo */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        {description && <p className="text-gray-400 text-sm">{description}</p>}
        <div className="mt-4">{demoComponent}</div>
      </div>

      {/* Right: Code Snippet */}
      <div className="flex-1 bg-neutral-900 p-6 rounded-lg overflow-x-auto">
        <pre className="text-sm text-green-400">
          <code>{codeString}</code>
        </pre>
      </div>
    </div>
  );
};

export default ComponentDemo;
