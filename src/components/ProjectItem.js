import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaGlobe } from 'react-icons/fa'

function ProjectItem({ image, name, description, technologies, githubLink, liveLink, websiteUrl }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-base-200 h-56">
        {image && !imageError ? (
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="loading loading-spinner loading-lg text-primary"></div>
              </div>
            )}
            <img
              src={image}
              alt={name}
              className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-base-content/40">
            <FaGlobe className="text-7xl mb-3" />
            <p className="text-sm font-medium">{websiteUrl || name}</p>
          </div>
        )}
        
        {/* Live indicator */}
        {liveLink && (
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-primary text-primary-content text-xs font-medium rounded-full">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            Live
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-200">
            {name}
          </h3>
        </div>
        
        <p className="text-base-content/70 text-sm leading-relaxed mb-5">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies && technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-3">
            {githubLink && githubLink !== "#" && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-base-content/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                aria-label="View GitHub repository"
              >
                <FaGithub className="text-lg" />
                Code
              </a>
            )}
          </div>
          
          {liveLink && liveLink !== "#" && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-content text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              aria-label="View live demo"
            >
              Visit Site
              <FaExternalLinkAlt className="text-sm" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem