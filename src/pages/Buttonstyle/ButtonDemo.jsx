import React from "react";
import DemoButton from "./sunny-ui/DemoButton";

const ButtonDemo = () => {
  const codeString = `
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none"
>
  Click Me
</motion.button>
  `;

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start px-6 py-12 border-b border-neutral-700">
      {/* Left: Live Button */}
      <div className="flex-1 flex justify-center items-center">
        <DemoButton label="Click Me!" onClick={() => alert("Button clicked!")} />
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

export default ButtonDemo;
