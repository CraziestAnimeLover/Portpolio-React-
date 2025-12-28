import React, { useState } from "react";

const ComponentCard = ({ title, description, demoComponent, codeString }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-neutral-800 rounded-lg p-6 shadow hover:shadow-xl transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Live demo */}
      <div className="mb-4">{demoComponent}</div>

      {/* Toggle code */}
      {codeString && (
        <>
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-sm text-blue-400 underline mb-2"
          >
            {showCode ? "Hide Code" : "Show Code"}
          </button>
          {showCode && (
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto text-sm">
              <code>{codeString}</code>
            </pre>
          )}
        </>
      )}
    </div>
  );
};

export default ComponentCard;
