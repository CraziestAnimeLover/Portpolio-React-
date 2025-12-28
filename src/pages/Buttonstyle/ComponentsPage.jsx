import React from "react";
import ComponentCard from "./ComponentCard";
import { componentList } from "./componentList";

const ComponentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Sunny-UI Component Showcase
      </h1>

      {/* Instructions */}
      <div className="bg-blue-900 p-6 rounded-lg mb-12 shadow">
        <h2 className="text-3xl font-bold mb-4">Instructions</h2>
        <p className="mb-2">
          This page showcases Sunny-UI components including buttons, toggles, and more.
        </p>
        <p className="mb-2">
          <strong>To use Sunny-UI components in your project:</strong>
        </p>
        <ol className="list-decimal list-inside mb-2">
          <li>Install required dependencies: <code>React</code>, <code>Tailwind CSS</code>, and <code>Framer Motion</code> if used.</li>
          <li>Copy the <code>sunny-ui</code> folder into your <code>src/</code> directory.</li>
          <li>Import the components in your files, e.g. <code>import DemoButton from '../sunny-ui/DemoButton'</code></li>
          <li>Use them in JSX, e.g. <code>&lt;DemoButton label="Click Me" /&gt;</code></li>
        </ol>
        <p className="text-sm text-gray-300">
          Example Tailwind CSS setup commands:
        </p>
        <pre className="bg-gray-900 p-2 rounded text-sm">
          <code>
            npm install -D tailwindcss postcss autoprefixer{"\n"}
            npx tailwindcss init -p{"\n"}
            npm install framer-motion
          </code>
        </pre>
      </div>

      {/* Component Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {componentList.map((item, index) => (
          <ComponentCard
            key={index}
            title={item.title}
            description={item.description}
            demoComponent={item.component}
            codeString={item.code}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;
