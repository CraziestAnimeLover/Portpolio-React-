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
    <div className="w-full overflow-x-auto flex justify-center bg-gray-100 p-6">
      {/* Resume Canvas */}
      <div
        ref={pdfRef}
        className="bg-white min-h-[1120px] shadow-xl flex flex-row min-w-[900px] rounded-lg overflow-hidden"
      >
        {/* ================= SIDEBAR ================= */}
        <div className="w-1/3 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 flex flex-col gap-4">

          {/* Name */}
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              {resume.name || "Your Name"}
            </h1>
            <p className="text-sm text-gray-300">
              {resume.title || "MERN Stack Developer"}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase text-xs tracking-widest text-gray-400 mb-1">
              Contact
            </h3>
            <p className="text-sm break-all">{resume.contact?.email}</p>
            <p className="text-sm">{resume.contact?.phone}</p>
            <p className="text-sm">{resume.contact?.location}</p>
          </div>

          {/* Links */}
          {linksList.length > 0 && (
            <div>
              <h3 className="uppercase text-xs tracking-widest text-gray-400 mb-1">
                Links
              </h3>
              <ul className="text-sm space-y-1 break-all">
                {linksList.map((l, i) => (
                  <li key={i}>
                    <a
                      href={l}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition underline"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {skillsList.length > 0 && (
            <div>
              <h3 className="uppercase text-xs tracking-widest text-gray-400 mb-2">
                Skills
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillsList.map((s, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-2 py-1 text-xs rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="w-2/3 p-8 text-gray-800 flex flex-col gap-6">

          {/* Summary */}
          {resume.summary && (
            <Section title="Summary">
              <p className="text-sm leading-relaxed">
                {resume.summary}
              </p>
            </Section>
          )}

          {/* Projects */}
          {projectsList.length > 0 && (
            <Section title="Projects">
              {projectsList.map((p, i) => (
                <div key={i} className="mb-4">
                  <p className="font-semibold text-base">
                    {p.name}
                  </p>

                  <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                    {p.description?.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>
          )}

          {/* Experience */}
          {experienceList.length > 0 && (
            <Section title="Experience">
              {experienceList.map((e, i) => (
                <div key={i} className="mb-4">
                  <p className="font-semibold text-base">
                    {e.title}
                  </p>

                  <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                    {e.description?.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>
          )}

          {/* Education */}
          {educationList.length > 0 && (
            <Section title="Education">
              {educationList.map((edu, i) => (
                <div key={i} className="text-sm mb-2">
                  <p className="font-semibold">
                    {edu.degree}
                  </p>
                  <p className="text-gray-600">
                    {edu.institution} • {edu.year}
                  </p>
                </div>
              ))}
            </Section>
          )}

          {/* Achievements */}
          {achievementsList.length > 0 && (
            <Section title="Achievements">
              <ul className="list-disc ml-5 text-sm space-y-1">
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