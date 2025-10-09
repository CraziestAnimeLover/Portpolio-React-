// src/pages/Projects.jsx
import React from 'react';
import { PROJECTS } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white px-4 lg:px-24 py-16">
      {/* Page Title */}
      <h1 className="text-center text-5xl font-bold mb-16">My Projects</h1>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8 border-b border-neutral-700 pb-8"
          >
            {/* Project Image */}
            <div className="flex justify-center lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-full border-2 border-purple-700 w-48 h-48 object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="lg:w-3/4 flex flex-col gap-4">
              <h2 className="text-3xl font-semibold">{project.title}</h2>
              <p className="text-neutral-400">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-neutral-800 text-purple-500 px-3 py-1 rounded text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:underline"
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

export default Projects;
