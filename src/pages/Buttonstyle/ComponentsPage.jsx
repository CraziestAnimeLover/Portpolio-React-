import React, { useState } from "react";
import { componentList } from "./componentList";

const ComponentsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedComponent =
    selectedIndex !== null ? componentList[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Components</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="px-4 py-2 bg-gray-800 rounded"
        >
          ☰
        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`
            bg-neutral-800 p-6 border-r border-gray-700
            md:w-1/4
            ${sidebarOpen ? "block" : "hidden"}
            md:block
            absolute md:static z-20 w-full md:w-auto
          `}
        >
          <h2 className="text-2xl font-bold mb-6">Components</h2>
          <ul className="space-y-3">
            {componentList.map((comp, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                  setSidebarOpen(false);
                }}
                className={`cursor-pointer p-2 rounded hover:bg-gray-700 transition ${
                  selectedIndex === index ? "bg-gray-700" : ""
                }`}
              >
                {comp.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          {selectedComponent ? (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">
                {selectedComponent.title}
              </h1>
              <p className="text-gray-300">
                {selectedComponent.description}
              </p>

              <div className="mt-4">
                {selectedComponent.component}
              </div>

              {selectedComponent.code && (
                <pre className="bg-gray-800 p-4 rounded overflow-x-auto text-sm">
                  <code>{selectedComponent.code}</code>
                </pre>
              )}
            </div>
          ) : (
            <div className="text-gray-400 space-y-4">
              <h1 className="text-3xl font-bold">
                Welcome to Sunny-UI Demo
              </h1>
              <p>
                Select a component to see its demo, description, and usage code.
              </p>

              <div className="bg-blue-900 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Install React, Tailwind CSS, Framer Motion</li>
                  <li>Copy <code>sunny-ui</code> folder into <code>src</code></li>
                  <li>Import and use components</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
