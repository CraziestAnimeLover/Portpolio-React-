import React from "react";
import LayoutOne from "./Layout/LayoutOne";
import LayoutTwo from "./Layout/LayoutTwo";
// LayoutThree if needed later

const PreviewSection = ({ resume, pdfRef, selectedLayout }) => {
  switch(selectedLayout){
    case 1: return <LayoutOne resume={resume} pdfRef={pdfRef} />;
    case 2: return <LayoutTwo resume={resume} pdfRef={pdfRef} />;
    default: return <LayoutOne resume={resume} pdfRef={pdfRef} />;
  }
};

export default PreviewSection;
