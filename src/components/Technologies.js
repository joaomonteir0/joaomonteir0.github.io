import React from 'react';
import { 
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiC, SiCsharp,
  SiReact, SiTailwindcss, SiVite, SiJest, SiAngular,
  SiNodedotjs, SiFastapi, SiFlask, SiPhp,
  SiMongodb, SiMysql, SiDocker, SiGit, SiKubernetes
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function Technologies() {
  const technologies = {
    languages: [
      { name: 'Python', icon: SiPython, color: 'text-blue-500' },
      { name: 'Javascript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'Typescript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Java', icon: FaJava, color: 'text-red-600' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-700' },
      { name: 'C', icon: SiC, color: 'text-gray-700' },
      { name: 'C#', icon: SiCsharp, color: 'text-purple-600' }
    ],
    frontend: [
      { name: 'React JS', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Angular', icon: SiAngular, color: 'text-red-600' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      { name: 'Vite', icon: SiVite, color: 'text-purple-500' },
      { name: 'Jest', icon: SiJest, color: 'text-red-500' }
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' },
      { name: 'Flask', icon: SiFlask, color: 'text-gray-700' },
      { name: 'PHP', icon: SiPhp, color: 'text-indigo-600' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' }
    ],
    devops: [
      { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
      { name: 'Git', icon: SiGit, color: 'text-orange-600' }
    ]
  };

  const categoryTitles = {
    languages: 'Languages',
    frontend: 'Front-end',
    backend: 'Back-end',
    devops: 'DevOps'
  };

  return (
    <div className="min-h-screen bg-base-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technologies
          </h1>
          <p className="text-xl text-base-content/70">The tools and technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6 text-primary">
                  {categoryTitles[category]}
                </h2>
                <div className="space-y-4">
                  {techs.map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-3 rounded-lg bg-base-100 hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <tech.icon className={`text-3xl ${tech.color}`} />
                      <span className="text-lg font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Languages</div>
              <div className="stat-value text-primary">{technologies.languages.length}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Front-end</div>
              <div className="stat-value text-secondary">{technologies.frontend.length}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Back-end</div>
              <div className="stat-value text-accent">{technologies.backend.length}</div>
            </div>
            <div className="stat">
              <div className="stat-title">DevOps</div>
              <div className="stat-value text-info">{technologies.devops.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;