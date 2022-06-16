import React, { useEffect } from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
  useEffect(() =>{
    AOS.init({duration: 1000})
  },[]);
  return (
    <div className='footer' data-aos="fade-in">
        <div className='socialMedia'>
            <a target="_blank" href='https://www.instagram.com/joaomonteiroo02/'><InstagramIcon></InstagramIcon></a>
            <a target="_blank" href='https://www.facebook.com/profile.php?id=100043252129538'><FacebookIcon></FacebookIcon></a>
            <a target="_blank" href='https://www.linkedin.com/in/jo%C3%A3o-monteiro-b4281a208/'><LinkedInIcon></LinkedInIcon></a>
            <a target="_blank" href='https://github.com/joaomonteir0'><GitHubIcon></GitHubIcon></a>
        </div>
        <p>&copy; 2022 João Monteiro</p>
    </div>
  )
}

export default Footer