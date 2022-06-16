import React, { useEffect }from 'react'
import { useRef } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import "../styles/home.css";
import Experience from './Experience';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'


function Home() {
  const skillsRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();
  useEffect(() =>{
    AOS.init({duration: 800})
  },[]);
  return (
    <div className='home'>
     <div className='about-wrapper'>
      <div className='about'>
          <h1 data-aos="fade-up" data-aos-duration="1000">Hi, my name is João</h1>
          <div className='prompt' data-aos="fade-up" data-aos-duration="1100"><p >A computer science and engineering student passionated for web-development</p>
          <a target="_blank" href='https://www.linkedin.com/in/jo%C3%A3o-monteiro-b4281a208/'><LinkedInIcon ></LinkedInIcon></a>
          <a target="_blank" href='https://github.com/joaomonteir0'><GitHubIcon></GitHubIcon></a>
          </div>
          
        </div>
        <div className="scroll-button">
        <ExpandCircleDownIcon onClick={() => {
          skillsRef.current.scrollIntoView({ behavior: "smooth" });
        }} className="scroll-button"></ExpandCircleDownIcon>
        </div>
     </div>
     <div className='skills-wrapper' ref={skillsRef}>
        <div className='skills'>
          <div className='holder-title' data-aos="fade-right">
            <h1>SKILLS</h1>
          </div>
          
          <div className='holder-list'>
            <ol className='list'>
              <li className='item' data-aos="fade-right">
                <h2>Front-End</h2>
                <span>HTML, CSS, Javascript, ReactJS</span>
              </li>
              <li className='item' data-aos="fade-right">
                <h2>Back-End</h2>
                <span>PHP, MySQL</span>
              </li>
            </ol>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home