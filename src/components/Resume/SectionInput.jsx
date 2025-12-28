import React from "react";

const SectionInput = ({ label, value, onChange, onAdd, items, onRemove, suggestions }) => (
  <div className="mb-4">
    <h3 className="font-semibold">{label}</h3>
    <div className="flex gap-2 mb-2">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={`Add ${label}`}
        list={label+"-list"}
        className="border p-2 flex-1 rounded text-black"
      />
      <button onClick={onAdd} className="bg-blue-600 text-white px-3 rounded">Add</button>
    </div>
    <ul>
      {items.map((item, i) => (
        <li key={i} className="flex justify-between">
          <span>{item}</span>
          <button onClick={() => onRemove(i)} className="text-red-500 px-2">✕</button>
        </li>
      ))}
    </ul>
    {suggestions && <datalist id={label+"-list"}>{suggestions.map((s,i) => <option key={i} value={s}/>)}</datalist>}
  </div>
);

export default SectionInput;
