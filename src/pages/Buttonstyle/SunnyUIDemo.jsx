import React, { useState } from "react";
import DemoButton from "./sunny-ui/DemoButton";
import DemoOutlineButton from "./sunny-ui/DemoOutlineButton";
import DemoIconButton from "./sunny-ui/DemoIconButton";
import DemoDarkLightButton from "./sunny-ui/DemoDarkLightButton";

const SunnyUIDemo = () => {
  const [showCode, setShowCode] = useState({
    gradient: false,
    outline: false,
    icon: false,
    darkLight: false,
  });

  const toggleCode = (key) => {
    setShowCode((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Instructions */}
      <div className="bg-blue-900 p-6 rounded-lg mb-12 shadow">
        <h1 className="text-3xl font-bold mb-4">Sunny-UI Buttons Demo & Instructions</h1>
        <p className="mb-2">
          This demo showcases <strong>Sunny-UI buttons</strong> including gradient, outline, icon, and dark/light toggle buttons.
        </p>
        <p className="mb-2">
          <strong>To use Sunny-UI buttons in your project:</strong>
        </p>
        <ol className="list-decimal list-inside mb-2">
          <li>Install required dependencies: <code>React</code>, <code>Tailwind CSS</code>, and <code>Framer Motion</code> if used.</li>
          <li>Copy the <code>sunny-ui</code> folder with all button components into your <code>src/</code> directory.</li>
          <li>Import the buttons in your component: <code>import DemoButton from '../sunny-ui/DemoButton'</code></li>
          <li>Use the button in JSX: <code>&lt;DemoButton label="Click Me" /&gt;</code></li>
        </ol>
        <p className="text-sm text-gray-300">
          Example commands for Tailwind CSS setup:
        </p>
        <pre className="bg-gray-900 p-2 rounded text-sm mb-2">
          <code>
            npm install -D tailwindcss postcss autoprefixer{"\n"}
            npx tailwindcss init -p{"\n"}
            npm install framer-motion
          </code>
        </pre>
      </div>

      {/* Gradient Button */}
      <div className="bg-neutral-800 p-6 rounded-lg mb-8 shadow hover:shadow-xl">
        <h2 className="text-2xl font-semibold mb-2">Gradient Button</h2>
        <p className="text-gray-300 mb-4">
          A beautiful gradient button with hover shadow effect.
        </p>
        <DemoButton label="Click Me" onClick={() => alert("Gradient Clicked!")} />
        <button
          onClick={() => toggleCode("gradient")}
          className="ml-4 text-sm text-blue-400 underline"
        >
          {showCode.gradient ? "Hide Code" : "Show Code"}
        </button>
        {showCode.gradient && (
          <pre className="bg-gray-900 p-4 mt-2 rounded overflow-x-auto text-sm">
            <code>{`<DemoButton label="Click Me" onClick={() => alert("Gradient Clicked!")} />`}</code>
          </pre>
        )}
      </div>

      {/* Outline Button */}
      <div className="bg-neutral-800 p-6 rounded-lg mb-8 shadow hover:shadow-xl">
        <h2 className="text-2xl font-semibold mb-2">Outline Button</h2>
        <p className="text-gray-300 mb-4">
          A stylish outline button suitable for secondary actions.
        </p>
        <DemoOutlineButton label="Outline Button" />
        <button
          onClick={() => toggleCode("outline")}
          className="ml-4 text-sm text-blue-400 underline"
        >
          {showCode.outline ? "Hide Code" : "Show Code"}
        </button>
        {showCode.outline && (
          <pre className="bg-gray-900 p-4 mt-2 rounded overflow-x-auto text-sm">
            <code>{`<DemoOutlineButton label="Outline Button" />`}</code>
          </pre>
        )}
      </div>

      {/* Icon Button */}
      <div className="bg-neutral-800 p-6 rounded-lg mb-8 shadow hover:shadow-xl">
        <h2 className="text-2xl font-semibold mb-2">Icon Button</h2>
        <p className="text-gray-300 mb-4">
          A button with an icon inside, ideal for toolbar actions.
        </p>
        <DemoIconButton icon="⭐" onClick={() => alert("Star Clicked!")} />
        <button
          onClick={() => toggleCode("icon")}
          className="ml-4 text-sm text-blue-400 underline"
        >
          {showCode.icon ? "Hide Code" : "Show Code"}
        </button>
        {showCode.icon && (
          <pre className="bg-gray-900 p-4 mt-2 rounded overflow-x-auto text-sm">
            <code>{`<DemoIconButton icon="⭐" onClick={() => alert("Star Clicked!")} />`}</code>
          </pre>
        )}
      </div>

      {/* Dark/Light Toggle Button */}
      <div className="bg-neutral-800 p-6 rounded-lg mb-8 shadow hover:shadow-xl">
        <h2 className="text-2xl font-semibold mb-2">Dark/Light Toggle Button</h2>
        <p className="text-gray-300 mb-4">
          Toggle between dark and light modes using this button.
        </p>
        <DemoDarkLightButton />
        <button
          onClick={() => toggleCode("darkLight")}
          className="ml-4 text-sm text-blue-400 underline"
        >
          {showCode.darkLight ? "Hide Code" : "Show Code"}
        </button>
        {showCode.darkLight && (
          <pre className="bg-gray-900 p-4 mt-2 rounded overflow-x-auto text-sm">
            <code>{`<DemoDarkLightButton />`}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default SunnyUIDemo;
