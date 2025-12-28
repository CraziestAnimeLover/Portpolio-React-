import React, { useState } from "react";
import { componentList } from "./componentList";

const ComponentsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedComponent =
    selectedIndex !== null ? componentList[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Instructions */}
      {/* <div className="bg-blue-900 p-6 rounded-lg mb-6 shadow mx-6 mt-6">
        <h2 className="text-3xl font-bold mb-4">Instructions</h2>
        <p className="mb-2">
          This page showcases Sunny-UI components including buttons, toggles, and
          more.
        </p>
        <p className="mb-2">
          <strong>To use Sunny-UI components in your project:</strong>
        </p>
        <ol className="list-decimal list-inside mb-2">
          <li>
            Install required dependencies: <code>React</code>,{" "}
            <code>Tailwind CSS</code>, and <code>Framer Motion</code> if used.
          </li>
          <li>Copy the <code>sunny-ui</code> folder into your <code>src/</code> directory.</li>
          <li>
            Import the components in your files, e.g.{" "}
            <code>import DemoButton from '../sunny-ui/DemoButton'</code>
          </li>
          <li>Use them in JSX, e.g. <code>&lt;DemoButton label="Click Me" /&gt;</code></li>
        </ol>
        <p className="mb-2">
          You can also view or download the Sunny-UI source folder from GitHub:{" "}
          <a
            href="https://github.com/CraziestAnimeLover/Portpolio-React-/tree/main/src/pages/Buttonstyle/sunny-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline"
          >
            Sunny-UI GitHub Folder
          </a>
        </p>
        <p className="text-sm text-gray-300">Example Tailwind CSS setup commands:</p>
        <pre className="bg-gray-900 p-2 rounded text-sm">
          <code>
            npm install -D tailwindcss postcss autoprefixer{"\n"}
            npx tailwindcss init -p{"\n"}
            npm install framer-motion
          </code>
        </pre>
      </div> */}

      <div className="flex flex-1">
        {/* Left Side - Component List */}
        <div className="w-1/4 bg-neutral-800 p-6 border-r border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Components</h2>
          <ul className="space-y-3">
            {componentList.map((comp, index) => (
              <li
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`cursor-pointer p-2 rounded hover:bg-gray-700 transition ${
                  selectedIndex === index ? "bg-gray-700" : ""
                }`}
              >
                {comp.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Demo & Info */}
        <div className="w-3/4 p-8 overflow-y-auto">
          {selectedComponent ? (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">{selectedComponent.title}</h1>
              <p className="text-gray-300">{selectedComponent.description}</p>

              {/* Live Demo */}
              <div className="mt-4">{selectedComponent.component}</div>

              {/* Code Snippet */}
              {selectedComponent.code && (
                <pre className="bg-gray-800 p-4 rounded overflow-x-auto text-sm">
                  <code>{selectedComponent.code}</code>
                </pre>
              )}
            </div>
          ) : (
            <div className="text-gray-400">
              <h1 className="text-3xl font-bold mb-4">Welcome to Sunny-UI Demo</h1>
              <p>
                Select a component from the left side to see its demo, description,
                and usage code.
              </p>
              <p className="mt-4">
                This page helps developers understand and reuse Sunny-UI buttons
                and other components easily.
              </p>
              <div className="bg-blue-900 p-6 rounded-lg mb-6 shadow mx-6 mt-6">
        <h2 className="text-3xl font-bold mb-4">Instructions</h2>
        <p className="mb-2">
          This page showcases Sunny-UI components including buttons, toggles, and
          more.
        </p>
        <p className="mb-2">
          <strong>To use Sunny-UI components in your project:</strong>
        </p>
        <ol className="list-decimal list-inside mb-2">
          <li>
            Install required dependencies: <code>React</code>,{" "}
            <code>Tailwind CSS</code>, and <code>Framer Motion</code> if used.
          </li>
          <li>Copy the <code>sunny-ui</code> folder into your <code>src/</code> directory.</li>
          <li>
            Import the components in your files, e.g.{" "}
            <code>import DemoButton from '../sunny-ui/DemoButton'</code>
          </li>
          <li>Use them in JSX, e.g. <code>&lt;DemoButton label="Click Me" /&gt;</code></li>
        </ol>
        <p className="mb-2">
          You can also view or download the Sunny-UI source folder from GitHub:{" "}
          <a
            href="https://github.com/CraziestAnimeLover/Portpolio-React-/tree/main/src/pages/Buttonstyle/sunny-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline"
          >
            Sunny-UI GitHub Folder
          </a>
        </p>
        <p className="text-sm text-gray-300">Example Tailwind CSS setup commands:</p>
        <pre className="bg-gray-900 p-2 rounded text-sm">
          <code>
            npm install -D tailwindcss postcss autoprefixer{"\n"}
            npx tailwindcss init -p{"\n"}
            npm install framer-motion
          </code>
        </pre>
      </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
