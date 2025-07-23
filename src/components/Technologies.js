import React from 'react';
import { 
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiC, SiCsharp,
  SiReact, SiTailwindcss, SiVite, SiJest, SiAngular, SiThreedotjs,
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
      { name: 'Three.js', icon: SiThreedotjs, color: 'text-black' },
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
    <div className="min-h-screen bg-base-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-base-content">
            Technologies
          </h1>
          <p className="text-xl text-base-content/60">
            The tools I work with
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-base-100 rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {categoryTitles[category]}
              </h2>
              
              <div className="space-y-3">
                {techs.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-3 rounded-xl bg-base-200 hover:bg-primary/10 hover:shadow-sm transition-all duration-200 group"
                  >
                    <tech.icon className={`text-2xl ${tech.color} group-hover:scale-105 transition-transform duration-200`} />
                    <span className="text-base font-medium text-base-content">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-base-200 rounded-2xl">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-base-content/70 font-medium text-lg">Always learning new technologies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;