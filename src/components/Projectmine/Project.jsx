import React from "react";
import { PROJECTS } from "../../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div className="border-b border-neutral-800 pb-8 px-10">
      <h1 className="my-20 text-center text-4xl font-bold">Projects</h1>

      <div className="flex flex-col gap-20">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-6 lg:justify-center"
          >
            {/* Left: Project Info */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-neutral-400">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 py-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-1 text-xl font-medium text-white-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-12 py-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-500 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-500 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Right: Live Project Preview */}
            {project.liveDemo && (
              <div className="w-full lg:w-1/3 h-96 border-2 border-purple-700 rounded-lg overflow-hidden">
                <iframe
                  src={project.liveDemo}
                  title={project.title}
                  className="w-full h-full"
                  frameBorder="0"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
