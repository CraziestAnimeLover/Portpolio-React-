import React from "react";
import Section from "../Section";

const LayoutTwo = ({ resume, pdfRef }) => (
  <div
    ref={pdfRef}
    className="bg-white p-8 min-h-[1120px] w-[800px] flex flex-col shadow mx-auto text-black"
  >
    {/* Header */}
    <header className="text-center mb-6 mr-24">
      <h1 className="text-3xl font-bold">{resume.name || "Your Name"}</h1>
      <p className="text-lg">{resume.title || ""}</p>
      <p className="text-sm mt-1">
        {resume.email ? `${resume.email}` : ""}{" "}
        {resume.phone ? `| ${resume.phone}` : ""}{" "}
        {resume.location ? `| ${resume.location}` : ""}
      </p>
    </header>

        {/* Divider above columns */}
    <hr className="border-t-2 border-gray-400 mb-4" />

    {/* Two-column layout: Skills (left) and all other sections (right) */}
    <div className="flex gap-6">
      {/* Left column: Skills */}
      <div className="w-1/3">
        {resume.skills && resume.skills.length > 0 && (
          <Section title="Skills">
            <ul className="list-disc list-inside">
              {resume.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      {/* Right column: Summary, Projects, Experience, Education, Achievements */}
      <div className="w-2/3 flex flex-col gap-6">
        {/* Professional Summary */}
        {resume.summary && (
          <Section title="Professional Summary">
            <p>{resume.summary}</p>
          </Section>
        )}

        {/* Projects */}
        {resume.projects && resume.projects.length > 0 && (
          <Section title="Projects">
            {resume.projects.map((p, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold">{p.name}</p>
                {Array.isArray(p.description) && p.description.length > 0 && (
                  <ul className="list-disc list-inside">
                    {p.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Section>
        )}

        {/* Work Experience */}
        {resume.experience && resume.experience.length > 0 && (
          <Section title="Work Experience">
            {resume.experience.map((e, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold">
                  {e.title || ""} - {e.company || ""} ({e.duration || ""})
                </p>
                {Array.isArray(e.description) && e.description.length > 0 && (
                  <ul className="list-disc list-inside">
                    {e.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Section>
        )}

        {/* Education */}
        {resume.education && (
          <Section title="Education">
            {Array.isArray(resume.education)
              ? resume.education.map((edu, i) =>
                  typeof edu === "string" ? (
                    <p key={i}>{edu}</p>
                  ) : (
                    <p key={i}>
                      {edu.degree || ""} - {edu.institution || ""} ({edu.year || ""})
                    </p>
                  )
                )
              : typeof resume.education === "string" ? (
                  <p>{resume.education}</p>
                ) : (
                  <p>
                    {resume.education.degree || ""} - {resume.education.institution || ""} (
                    {resume.education.year || ""})
                  </p>
                )}
          </Section>
        )}

        {/* Achievements */}
        {resume.achievements && resume.achievements.length > 0 && (
          <Section title="Achievements">
            <ul className="list-disc list-inside">
              {resume.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </div>
  </div>
);

export default LayoutTwo;
