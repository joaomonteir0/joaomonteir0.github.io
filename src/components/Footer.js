import React, { useEffect } from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);

  const socialLinks = [
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/joaomonteiroo02/', 
      label: 'Instagram',
      color: 'hover:text-pink-600'
    },
    { 
      icon: FaFacebook, 
      href: 'https://www.facebook.com/profile.php?id=100043252129538', 
      label: 'Facebook',
      color: 'hover:text-blue-600'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/jo%C3%A3o-monteiro-b4281a208/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-700'
    },
    { 
      icon: FaGithub, 
      href: 'https://github.com/joaomonteir0', 
      label: 'GitHub',
      color: 'hover:text-gray-800'
    }
  ];

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content" data-aos="fade-in">
      <div>
        <div className="grid grid-flow-col gap-4">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noreferrer"
              className={`btn btn-ghost btn-circle ${social.color} transition-all duration-300 hover:scale-110`}
              aria-label={social.label}
            >
              <social.icon className="text-2xl" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm">
          © {new Date().getFullYear()} João Monteiro - All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer