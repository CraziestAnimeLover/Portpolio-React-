import React from "react";
import SectionInput from "./SectionInput";

const FormSection = ({ resume, setResume, temp, setTemp, initialSkills }) => {

  const handleChange = (field, value) => setResume({ ...resume, [field]: value });

  const addItem = (key, tempKey) => {
    if (!temp[tempKey].trim()) return;
    if (!resume[key].includes(temp[tempKey])) {
      setResume({ ...resume, [key]: [...resume[key], temp[tempKey]] });
    }
    setTemp({ ...temp, [tempKey]: "" });
  };

  const removeItem = (key, index) => {
    setResume({ ...resume, [key]: resume[key].filter((_, i) => i !== index) });
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

  return (
    <div className="space-y-4">
      {["name","title","email","phone","location"].map(f => (
        <input key={f} value={resume[f]} onChange={e => handleChange(f, e.target.value)} placeholder={f.toUpperCase()} className="w-full border p-2 rounded text-black"/>
      ))}

      <textarea value={resume.summary} onChange={e => handleChange("summary", e.target.value)} placeholder="Professional Summary" className="w-full border p-2 rounded h-24 text-black"/>
      <textarea value={resume.education} onChange={e => handleChange("education", e.target.value)} placeholder="Education" className="w-full border p-2 rounded text-black"/>

      <SectionInput label="Skills" value={temp.skill} onChange={v => setTemp({...temp, skill:v})} onAdd={() => addItem("skills","skill")} items={resume.skills} suggestions={initialSkills.filter(s => !resume.skills.includes(s))} onRemove={i => removeItem("skills",i)} />

      {/* Projects */}
      <div>
        <h3 className="font-semibold">Projects</h3>
        <input value={temp.projectName} onChange={e => setTemp({...temp, projectName:e.target.value})} placeholder="Project Name" className="border p-2 w-full rounded text-black mb-1"/>
        <input value={temp.projectDesc} onChange={e => setTemp({...temp, projectDesc:e.target.value})} placeholder="Bullet point" className="border p-2 w-full rounded text-black mb-1"/>
        <button onClick={addProject} className="bg-blue-600 text-white px-3 rounded mr-2">Add Project</button>
        {resume.projects.length > 0 && (
          <button onClick={() => addProjectDesc(resume.projects.length - 1)} className="bg-green-500 text-white px-3 rounded">Add Bullet</button>
        )}
      </div>

      {/* Experience */}
      <div>
        <h3 className="font-semibold">Experience</h3>
        <input value={temp.expTitle} onChange={e => setTemp({...temp, expTitle:e.target.value})} placeholder="Role / Experience" className="border p-2 w-full rounded text-black mb-1"/>
        <input value={temp.expDesc} onChange={e => setTemp({...temp, expDesc:e.target.value})} placeholder="Bullet point" className="border p-2 w-full rounded text-black mb-1"/>
        <button onClick={addExperience} className="bg-blue-600 text-white px-3 rounded mr-2">Add Experience</button>
        {resume.experience.length > 0 && (
          <button onClick={() => addExperienceDesc(resume.experience.length - 1)} className="bg-green-500 text-white px-3 rounded">Add Bullet</button>
        )}
      </div>

      <SectionInput label="Links" value={temp.link} onChange={v => setTemp({...temp, link:v})} onAdd={() => addItem("links","link")} items={resume.links} onRemove={i => removeItem("links",i)} />
      <SectionInput label="Achievements / Certifications" value={temp.achievement} onChange={v => setTemp({...temp, achievement:v})} onAdd={() => addItem("achievements","achievement")} items={resume.achievements} onRemove={i => removeItem("achievements",i)} />
    </div>
  )
}

export default FormSection;
