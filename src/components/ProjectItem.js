import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaGlobe } from 'react-icons/fa'

function ProjectItem({ image, name, description, technologies, githubLink, liveLink, websiteUrl }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <figure className="px-0 pt-0 bg-base-200 h-48 relative overflow-hidden group">
        {image ? (
          <img src={image} alt={name} className="rounded-t-lg h-full w-full object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-base-content/30">
            <FaGlobe className="text-6xl mb-2" />
            <p className="text-sm font-medium">{websiteUrl || name}</p>
            <div className="absolute inset-0 bg-gradient-to-t from-base-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                Visit Site
              </a>
            </div>
          </div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-base-content/70 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="badge badge-primary badge-outline badge-sm">{tech}</span>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          {githubLink && githubLink !== "#" && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-circle btn-ghost btn-sm tooltip tooltip-top"
              data-tip="View Code"
              aria-label="View GitHub repository"
            >
              <FaGithub className="text-xl" />
            </a>
          )}
          {liveLink && liveLink !== "#" && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-circle btn-ghost btn-sm tooltip tooltip-top"
              data-tip="Live Demo"
              aria-label="View live demo"
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem