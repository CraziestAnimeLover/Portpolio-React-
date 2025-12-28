import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";
import LayoutSelector from "./LayoutSelector";

export default function ResumeBuilder() {
  const pdfRef = useRef(null);

  const initialSkills = [
    "HTML","CSS","JavaScript","React","Redux","Tailwind CSS","Material UI","Bootstrap",
    "Node.js","Express.js","JWT","Nodemailer","MongoDB","Git","Agile Development",
    "MERN Stack","Socket.IO implementation","REST API integration","Responsive design",
    "Google OAuth","Authentication","Continuous integration"
  ];

  const [resume, setResume] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    education: "",
    skills: [...initialSkills],
    projects: [],
    experience: [],
    links: [],
    achievements: [],
  });

  const [temp, setTemp] = useState({
    skill: "",
    projectName: "",
    projectDesc: "",
    expTitle: "",
    expDesc: "",
    link: "",
    achievement: "",
  });

  const [selectedLayout, setSelectedLayout] = useState(1);

  const downloadPDF = () => {
    html2pdf()
      .set({
        margin: 10,
        filename: "Resume.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .from(pdfRef.current)
      .save();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid md:grid-cols-2 gap-6">
      
      {/* Left Form Section */}
      <div className="bg-black text-white p-6 rounded shadow space-y-4 overflow-y-auto max-h-screen">
        <h2 className="text-xl font-bold">Resume Builder</h2>

        {/* Layout Selector */}
        <LayoutSelector selectedLayout={selectedLayout} setSelectedLayout={setSelectedLayout} />

        {/* Form Inputs */}
        <FormSection
          resume={resume}
          setResume={setResume}
          temp={temp}
          setTemp={setTemp}
          initialSkills={initialSkills}
        />

        <button onClick={downloadPDF} className="w-full bg-green-600 text-white py-2 rounded">
          Download PDF
        </button>
      </div>

      {/* Right Preview Section */}
      <div className="overflow-auto">
        <PreviewSection resume={resume} pdfRef={pdfRef} selectedLayout={selectedLayout} />
      </div>
    </div>
  );
}
