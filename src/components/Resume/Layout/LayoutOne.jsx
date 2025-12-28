import React from "react";
import Section from "../Section";

const LayoutOne = ({ resume, pdfRef }) => {
  const educationList = Array.isArray(resume.education) ? resume.education : resume.education ? [resume.education] : [];
  const projectsList = Array.isArray(resume.projects) ? resume.projects : resume.projects ? [resume.projects] : [];
  const experienceList = Array.isArray(resume.experience) ? resume.experience : resume.experience ? [resume.experience] : [];
  const achievementsList = Array.isArray(resume.achievements) ? resume.achievements : resume.achievements ? [resume.achievements] : [];
  const skillsList = Array.isArray(resume.skills) ? resume.skills : resume.skills ? [resume.skills] : [];
  const linksList = Array.isArray(resume.links) ? resume.links : resume.links ? [resume.links] : [];

  return (
    <div ref={pdfRef} className="bg-white p-6 min-h-[1120px] flex shadow">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-900 text-white p-6">
        <h1 className="text-xl font-bold">{resume.name || "Your Name"}</h1>
        <p className="text-sm text-gray-300">{resume.title}</p>

        {/* Contact Info */}
        {(resume.contact || resume.email || resume.phone || resume.location) && (
          <>
            <h3 className="font-semibold mt-4">Contact</h3>
            <p>{resume.contact?.email || resume.email}</p>
            <p>{resume.contact?.phone || resume.phone}</p>
            <p>{resume.contact?.location || resume.location}</p>
          </>
        )}

        {/* Links */}
        {linksList.length > 0 && (
          <>
            <h3 className="font-semibold mt-4">Links</h3>
            <ul>
              {linksList.map((link, i) => (
                <li key={i}>
                  <a href={link} target="_blank" rel="noreferrer" className="text-blue-400 underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Skills */}
        {skillsList.length > 0 && (
          <>
            <h3 className="font-semibold mt-4">Skills</h3>
            <ul>{skillsList.map((s, i) => <li key={i}>• {s}</li>)}</ul>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6 text-gray-800 overflow-auto">
        {resume.summary && <Section title="Summary">{resume.summary}</Section>}

        {projectsList.length > 0 && (
          <Section title="Projects">
            {projectsList.map((p, i) => (
              <div key={i}>
                <p className="font-semibold">{p.name}</p>
                <ul className="ml-4 list-disc">{p.description?.map((d, j) => <li key={j}>{d}</li>)}</ul>
              </div>
            ))}
          </Section>
        )}

        {experienceList.length > 0 && (
          <Section title="Experience">
            {experienceList.map((e, i) => (
              <div key={i}>
                <p className="font-semibold">{e.title}</p>
                <ul className="ml-4 list-disc">{e.description?.map((d, j) => <li key={j}>{d}</li>)}</ul>
              </div>
            ))}
          </Section>
        )}

        {educationList.length > 0 && (
          <Section title="Education">
            {educationList.map((edu, i) => (
              <p key={i}>
                <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
              </p>
            ))}
          </Section>
        )}

        {achievementsList.length > 0 && (
          <Section title="Achievements">
            <ul className="list-disc list-inside">{achievementsList.map((a, i) => <li key={i}>{a}</li>)}</ul>
          </Section>
        )}
      </div>
    </div>
  );
};

export default LayoutOne;
