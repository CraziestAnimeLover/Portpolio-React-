import React from 'react';
import { PROJECTS } from '../../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // For icons

const Project = () => {
  return (
    <div className="border-b border-neutral-800 pb-8">
      <h1 className="my-20 text-center text-4xl font-bold">Projects</h1>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center gap-6 lg:justify-center"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-full border-2 border-purple-700"
              />
            </div>

            {/* Project Info */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
