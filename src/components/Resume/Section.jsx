import React from "react";

const Section = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="font-bold border-b mb-1">{title}</h3>
    <div>{children}</div>
  </div>
);

export default Section;
