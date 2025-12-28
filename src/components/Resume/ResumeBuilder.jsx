import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

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
    projects: [
      { name: "Blinkit Clone - Quick Commerce Web App", description: ["Developed with React & Vite","Implemented product listing & checkout","Integrated Google OAuth"] }
    ],
    experience: [],
    links: [],          // New section
    achievements: [],   // New section
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

  const handleChange = (field, value) => setResume({ ...resume, [field]: value });

  const addItem = (key, tempKey) => {
    if (!temp[tempKey].trim()) return;
    if (!resume[key].includes(temp[tempKey])) {
      setResume({ ...resume, [key]: [...resume[key], temp[tempKey]] });
    }
    setTemp({ ...temp, [tempKey]: "" });
  };

  const removeItem = (key, index) => {
    const updated = resume[key].filter((_, i) => i !== index);
    setResume({ ...resume, [key]: updated });
  };

  const addProject = () => {
    if (!temp.projectName.trim()) return;
    setResume({
      ...resume,
      projects: [...resume.projects, { name: temp.projectName, description: temp.projectDesc ? [temp.projectDesc] : [] }]
    });
    setTemp({ ...temp, projectName: "", projectDesc: "" });
  };

  const addProjectDesc = (index) => {
    if (!temp.projectDesc.trim()) return;
    const updated = [...resume.projects];
    updated[index].description.push(temp.projectDesc);
    setResume({ ...resume, projects: updated });
    setTemp({ ...temp, projectDesc: "" });
  };

  const removeProject = (index) => {
    const updated = resume.projects.filter((_, i) => i !== index);
    setResume({ ...resume, projects: updated });
  };

  const removeProjectDesc = (pIndex, dIndex) => {
    const updated = [...resume.projects];
    updated[pIndex].description.splice(dIndex, 1);
    setResume({ ...resume, projects: updated });
  };

  const addExperience = () => {
    if (!temp.expTitle.trim()) return;
    setResume({
      ...resume,
      experience: [...resume.experience, { title: temp.expTitle, description: temp.expDesc ? [temp.expDesc] : [] }]
    });
    setTemp({ ...temp, expTitle: "", expDesc: "" });
  };

  const addExperienceDesc = (index) => {
    if (!temp.expDesc.trim()) return;
    const updated = [...resume.experience];
    updated[index].description.push(temp.expDesc);
    setResume({ ...resume, experience: updated });
    setTemp({ ...temp, expDesc: "" });
  };

  const removeExperience = (index) => {
    const updated = resume.experience.filter((_, i) => i !== index);
    setResume({ ...resume, experience: updated });
  };

  const removeExperienceDesc = (expIndex, dIndex) => {
    const updated = [...resume.experience];
    updated[expIndex].description.splice(dIndex, 1);
    setResume({ ...resume, experience: updated });
  };

  const downloadPDF = () => {
    html2pdf()
      .set({ margin: 10, filename: "Resume.pdf", html2canvas: { scale: 2 }, jsPDF: { unit: "mm", format: "a4", orientation: "portrait" } })
      .from(pdfRef.current)
      .save();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid md:grid-cols-2 gap-6">
      {/* FORM SECTION */}
      <div className="bg-black text-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-bold">Resume Builder</h2>

        {["name","title","email","phone","location"].map(f => (
          <input key={f} value={resume[f]} onChange={e => handleChange(f, e.target.value)} placeholder={f.toUpperCase()} className="w-full border p-2 rounded text-black"/>
        ))}

        <textarea value={resume.summary} onChange={e => handleChange("summary", e.target.value)} placeholder="Professional Summary" className="w-full border p-2 rounded h-24 text-black"/>
        <textarea value={resume.education} onChange={e => handleChange("education", e.target.value)} placeholder="Education" className="w-full border p-2 rounded text-black"/>

        {/* SKILLS */}
        <SectionInput label="Skills" value={temp.skill} onChange={v => setTemp({...temp, skill:v})} onAdd={() => addItem("skills","skill")} items={resume.skills} onRemove={i => removeItem("skills",i)} suggestions={initialSkills.filter(s => !resume.skills.includes(s))} editable updateItems={updated => setResume(prev => ({...prev, skills: updated}))} />

        {/* PROJECTS */}
        <div>
          <h3 className="font-semibold">Projects</h3>
          <input value={temp.projectName} onChange={e => setTemp({...temp, projectName:e.target.value})} placeholder="Project Name" className="border p-2 w-full rounded text-black mb-1"/>
          <input value={temp.projectDesc} onChange={e => setTemp({...temp, projectDesc:e.target.value})} placeholder="Bullet point" className="border p-2 w-full rounded text-black mb-1"/>
          <button onClick={addProject} className="bg-blue-600 text-white px-3 rounded mr-2">Add Project</button>
          {resume.projects.length > 0 && (
            <button onClick={() => addProjectDesc(resume.projects.length - 1)} className="bg-green-500 text-white px-3 rounded">Add Bullet</button>
          )}
        </div>

        {/* EXPERIENCE */}
        <div>
          <h3 className="font-semibold">Experience</h3>
          <input value={temp.expTitle} onChange={e => setTemp({...temp, expTitle:e.target.value})} placeholder="Role / Experience" className="border p-2 w-full rounded text-black mb-1"/>
          <input value={temp.expDesc} onChange={e => setTemp({...temp, expDesc:e.target.value})} placeholder="Bullet point" className="border p-2 w-full rounded text-black mb-1"/>
          <button onClick={addExperience} className="bg-blue-600 text-white px-3 rounded mr-2">Add Experience</button>
          {resume.experience.length > 0 && (
            <button onClick={() => addExperienceDesc(resume.experience.length - 1)} className="bg-green-500 text-white px-3 rounded">Add Bullet</button>
          )}
        </div>

        {/* LINKS */}
        <SectionInput label="Links" value={temp.link} onChange={v => setTemp({...temp, link:v})} onAdd={() => addItem("links","link")} items={resume.links} onRemove={i => removeItem("links",i)} editable updateItems={updated => setResume(prev => ({...prev, links: updated}))} />

        {/* ACHIEVEMENTS */}
        <SectionInput label="Achievements / Certifications" value={temp.achievement} onChange={v => setTemp({...temp, achievement:v})} onAdd={() => addItem("achievements","achievement")} items={resume.achievements} onRemove={i => removeItem("achievements",i)} editable updateItems={updated => setResume(prev => ({...prev, achievements: updated}))} />

        <button onClick={downloadPDF} className="w-full bg-green-600 text-white py-2 rounded">Download PDF</button>
      </div>

      {/* PREVIEW SECTION */}
      <div ref={pdfRef} className="bg-white shadow flex min-h-[1120px]">
        <div className="w-1/3 bg-gray-900 text-white p-6">
  <h1 className="text-xl font-bold">{resume.name || "Your Name"}</h1>
  <p className="text-sm text-gray-300">{resume.title}</p>
  <div className="mt-6">
    <h3 className="font-semibold border-b border-gray-600 mb-2">CONTACT</h3>
    <p className="text-sm">{resume.email}</p>
    <p className="text-sm">{resume.phone}</p>
    <p className="text-sm">{resume.location}</p>
  </div>
  <div className="mt-6">
    <h3 className="font-semibold border-b border-gray-600 mb-2">LINKS</h3>
    <ul className="text-sm space-y-1">
      {resume.links.map((link,i) => (
        <li key={i}>
          <a href={link} target="_blank" rel="noreferrer" className="text-blue-400 underline">{link}</a>
        </li>
      ))}
    </ul>
  </div>
  <div className="mt-6">
    <h3 className="font-semibold border-b border-gray-600 mb-2">SKILLS</h3>
    <ul className="text-sm space-y-1">{resume.skills.map((s,i)=><li key={i}>• {s}</li>)}</ul>
  </div>
</div>


        <div className="w-2/3 p-8 text-gray-800 overflow-y-auto">
          <Section title="PROFESSIONAL SUMMARY">{resume.summary}</Section>

          <div className="mb-6">
            <h3 className="font-bold border-b mb-2">PROJECTS</h3>
            {resume.projects.map((p,i)=>(
              <div key={i} className="mb-3 border p-2 rounded">
                <p className="font-semibold">{p.name}</p>
                <ul className="list-disc list-inside ml-4">
                  {p.description.map((d,j)=><li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-bold border-b mb-2">EXPERIENCE</h3>
            {resume.experience.map((exp,i)=>(
              <div key={i} className="mb-3 border p-2 rounded">
                <p className="font-semibold">{exp.title}</p>
                <ul className="list-disc list-inside ml-4">
                  {exp.description.map((d,j)=><li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          

          <Section title="EDUCATION">{resume.education}</Section>
          <div className="mb-6">
            <h3 className="font-bold border-b mb-2">ACHIEVEMENTS / CERTIFICATIONS</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {resume.achievements.map((a,i)=><li key={i}>{a}</li>)}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

const SectionInput = ({ label, value, onChange, onAdd, items, onRemove, suggestions, editable, updateItems }) => (
  <div>
    <h3 className="font-semibold">{label}</h3>
    <div className="flex gap-2 mb-2">
      <input value={value} onChange={e => onChange(e.target.value)} className="border p-2 flex-1 rounded text-black" placeholder={`Add ${label}`} list={label+"-list"}/>
      <button onClick={onAdd} className="bg-blue-600 text-white px-3 rounded">Add</button>
    </div>
    {items.map((item,i)=>(
      <div key={i} className="flex gap-2 mb-1">
        {editable ? (
          <input value={item} onChange={e=>{const updated=[...items]; updated[i]=e.target.value; updateItems(updated);}} className="border p-2 flex-1 rounded text-black"/>
        ):<span className="flex-1">{item}</span>}
        <button onClick={()=>onRemove(i)} className="text-red-500 px-2">✕</button>
      </div>
    ))}
    {suggestions && <datalist id={label+"-list"}>{suggestions.map((s,i)=><option key={i} value={s}/>)}</datalist>}
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-6"><h3 className="font-bold border-b mb-2">{title}</h3><p className="text-sm leading-relaxed">{children}</p></div>
);
