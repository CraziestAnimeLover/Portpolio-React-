import React from "react";
import Section from "../Section";

const LayoutOne = ({ resume, pdfRef }) => {
  const toArray = (v) => (Array.isArray(v) ? v : v ? [v] : []);

  const educationList = toArray(resume.education);
  const projectsList = toArray(resume.projects);
  const experienceList = toArray(resume.experience);
  const achievementsList = toArray(resume.achievements);
  const skillsList = toArray(resume.skills);
  const linksList = toArray(resume.links);

  return (
    <div className="w-full overflow-x-auto">
      {/* Fixed-width resume canvas */}
      <div
        ref={pdfRef}
        className="bg-white min-h-[1120px] shadow flex flex-row min-w-[900px]"
      >
        {/* ================= SIDEBAR ================= */}
        <div className="w-1/3 bg-gray-900 text-white p-6">
          <h1 className="text-xl font-bold">
            {resume.name || "Your Name"}
          </h1>
          <p className="text-sm text-gray-300">
            {resume.title}
          </p>

          <h3 className="font-semibold mt-4">Contact</h3>
          <p className="text-sm">{resume.contact?.email || resume.email}</p>
          <p className="text-sm">{resume.contact?.phone || resume.phone}</p>
          <p className="text-sm">{resume.contact?.location || resume.location}</p>

          {linksList.length > 0 && (
            <>
              <h3 className="font-semibold mt-4">Links</h3>
              <ul className="text-sm space-y-1 break-all">
                {linksList.map((l, i) => (
                  <li key={i}>
                    <a
                      href={l}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 underline"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {skillsList.length > 0 && (
            <>
              <h3 className="font-semibold mt-4">Skills</h3>
              <ul className="text-sm space-y-1">
                {skillsList.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="w-2/3 p-6 text-gray-800">
          {resume.summary && (
            <Section title="Summary">{resume.summary}</Section>
          )}

          {projectsList.length > 0 && (
            <Section title="Projects">
              {projectsList.map((p, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold">{p.name}</p>
                  <ul className="list-disc ml-4 text-sm">
                    {p.description?.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>
          )}

          {experienceList.length > 0 && (
            <Section title="Experience">
              {experienceList.map((e, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold">{e.title}</p>
                  <ul className="list-disc ml-4 text-sm">
                    {e.description?.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>
          )}

          {educationList.length > 0 && (
            <Section title="Education">
              {educationList.map((edu, i) => (
                <p key={i} className="text-sm">
                  <strong>{edu.degree}</strong> – {edu.institution} ({edu.year})
                </p>
              ))}
            </Section>
          )}

          {achievementsList.length > 0 && (
            <Section title="Achievements">
              <ul className="list-disc list-inside text-sm">
                {achievementsList.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutOne;
