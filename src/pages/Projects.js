import React, { useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import Proj1 from "../assets/image1.png";
import "../styles/Projects.css";
import AOS from 'aos'
import 'aos/dist/aos.css'


function Projects() {
  useEffect(() =>{
    AOS.init({duration: 800})
  },[]);
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className='projectList' data-aos="fade-in">
        <ProjectItem name="Social Media Website" image={Proj1}/>
        <ProjectItem name="Social Media Website" image={Proj1}/>
        <ProjectItem name="Social Media Website" image={Proj1}/>
        <ProjectItem name="Social Media Website" image={Proj1}/>
      </div>
    </div>
  )
}

export default Projects