import React from "react";

const LayoutSelector = ({ selectedLayout, setSelectedLayout }) => (
  <div className="mb-4 flex gap-2">
    {[1,2,3].map(layout => (
      <button
        key={layout}
        onClick={() => setSelectedLayout(layout)}
        className={`px-4 py-2 rounded border ${selectedLayout === layout ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
      >
        Layout {layout}
      </button>
    ))}
  </div>
);

export default LayoutSelector;
