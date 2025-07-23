import React, { useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {
  useEffect(() => {
    AOS.init({duration: 800})
  }, []);

  const projectList = [
    {
      name: "Procedural Terrain Generator",
      image: "/proceduralgen.png",
      websiteUrl: "https://proceduralgen.netlify.app/",
      description: "A 3D procedural terrain generation tool using Perlin Noise algorithm and Three.js for rendering. Users can customize terrain parameters like world size, height, illumination, and shape to generate natural-looking landscapes in real-time.",
      technologies: ["Three.js", "JavaScript", "Perlin Noise", "WebGL", "Netlify"],
      githubLink: null,
      liveLink: "https://proceduralgen.netlify.app/"
    },
    {
      name: "Poor Decisions - Drinking Game",
      image: "/poordecisions.png",
      websiteUrl: "https://poordecisions.netlify.app/",
      description: "An interactive web-based drinking game application designed for entertainment and social gatherings.",
      technologies: ["JavaScript", "HTML", "CSS", "Netlify"],
      githubLink: null,
      liveLink: "https://poordecisions.netlify.app/"
    },
    {
      name: "Dine&Dash",
      image: "/dinendash.png",
      websiteUrl: null,
      description: "A food delivery application with real-time order tracking and notifications. Built with React, FastAPI, RabbitMQ for message queuing, and Google API for location services.",
      technologies: ["React", "Vite", "FastAPI", "RabbitMQ", "Google API"],
      githubLink: "https://github.com/dinendash-egs",
      liveLink: null
    },
    {
      name: "Maria Xica - Rooftop Bar",
      image: "/mariaxica.png",
      websiteUrl: "https://mariaxica.netlify.app/",
      description: "A modern web application for an upscale rooftop bar in Viseu. Features interactive menu display, reservation system integration, and social media connectivity.",
      technologies: ["React", "JavaScript", "Netlify", "SEO"],
      githubLink: null,
      liveLink: "https://mariaxica.netlify.app/"
    },
    {
      name: "Cheers Menu - Digital Bar Menu",
      image: "/cheers.png",
      websiteUrl: "https://cheersmenu.netlify.app/",
      description: "A streamlined digital menu platform for a local bar in Viseu. Provides customers with quick access to menu items and business information through a clean, minimalist interface.",
      technologies: ["React", "JavaScript", "Responsive Design", "Netlify"],
      githubLink: null,
      liveLink: "https://cheersmenu.netlify.app/"
    },
    {
      name: "Portfolio Website",
      image: "/portfolio.png",
      websiteUrl: "https://joaomonteir0.github.io",
      description: "My personal portfolio website built with React and styled with TailwindCSS and DaisyUI. Features dark mode, smooth animations, and responsive design.",
      technologies: ["React", "TailwindCSS", "DaisyUI", "AOS"],
      githubLink: "https://github.com/joaomonteir0/joaomonteir0.github.io",
      liveLink: "https://joaomonteir0.github.io"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="relative py-32 px-6 bg-gradient-to-b from-base-100 to-base-200/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-8 font-medium text-sm" data-aos="fade-down">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Portfolio
          </div>
          
          <h1 className="text-7xl font-bold mb-8 text-base-content" data-aos="fade-up">
            My Work
          </h1>
          
          <p className="text-2xl text-base-content/60 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            A journey through learning, building, and growing
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="pt-0 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                <ProjectItem {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-20 px-6 bg-base-200/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-base-200 rounded-2xl" data-aos="fade-up">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-base-content/70 font-medium text-lg">Always working on something new</span>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <a 
              href="https://github.com/joaomonteir0" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-content rounded-xl hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View More on GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/jo%C3%A3o-monteiro-b4281a208/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-base-200 text-base-content hover:bg-base-300 rounded-xl transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects