import React from "react";
import ComponentDemo from "./ComponentDemo";
import DemoButton from "./DemoButton";
import { motion } from "framer-motion";

const ComponentsPage = () => {
  const buttonCode = `
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

  const cardCode = `
<motion.div className="p-6 bg-neutral-900 rounded-lg shadow-lg hover:shadow-xl">
  <h3 className="text-xl font-bold text-white">Card Title</h3>
  <p className="text-gray-400 mt-2">This is a description inside the card.</p>
</motion.div>
  `;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center py-12">Component Showcase</h1>

      {/* Button Demo */}
      <ComponentDemo
        title="Animated Button"
        description="A gradient button with hover and tap animations."
        demoComponent={<DemoButton label="Click Me!" onClick={() => alert("Clicked!")} />}
        codeString={buttonCode}
      />

      {/* Card Demo */}
      <ComponentDemo
        title="Animated Card"
        description="A card component with shadow and hover animation."
        demoComponent={
          <motion.div
            className="p-6 bg-neutral-900 rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white">Card Title</h3>
            <p className="text-gray-400 mt-2">This is a description inside the card.</p>
          </motion.div>
        }
        codeString={cardCode}
      />
    </div>
  );
};

export default ComponentsPage;
