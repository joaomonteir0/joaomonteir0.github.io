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
      name: "Maria Xica - Rooftop Bar",
      image: null,
      websiteUrl: "https://mariaxica.netlify.app/",
      description: "A modern web application for an upscale rooftop bar in Viseu. Features interactive menu display, reservation system integration, and social media connectivity.",
      technologies: ["React", "JavaScript", "Netlify", "SEO"],
      githubLink: null,
      liveLink: "https://mariaxica.netlify.app/"
    },
    {
      name: "Cheers Menu - Digital Bar Menu",
      image: null,
      websiteUrl: "https://cheersmenu.netlify.app/",
      description: "A streamlined digital menu platform for a local bar in Viseu. Provides customers with quick access to menu items and business information through a clean, minimalist interface.",
      technologies: ["React", "JavaScript", "Responsive Design", "Netlify"],
      githubLink: null,
      liveLink: "https://cheersmenu.netlify.app/"
    },
    {
      name: "Portfolio Website",
      image: null,
      websiteUrl: "https://joaomonteir0.github.io",
      description: "My personal portfolio website built with React and styled with TailwindCSS and DaisyUI. Features dark mode, smooth animations, and responsive design.",
      technologies: ["React", "TailwindCSS", "DaisyUI", "AOS"],
      githubLink: "https://github.com/joaomonteir0/joaomonteir0.github.io",
      liveLink: "https://joaomonteir0.github.io"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            A showcase of my work in web development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-in">
          {projectList.map((project, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProjectItem {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects