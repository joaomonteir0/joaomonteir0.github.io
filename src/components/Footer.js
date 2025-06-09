import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'

function Footer() {
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/joaomonteir0', 
      label: 'GitHub',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/jo%C3%A3o-monteiro-b4281a208/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/joaomonteiroo02/', 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      icon: FaFacebook, 
      href: 'https://www.facebook.com/profile.php?id=100043252129538', 
      label: 'Facebook',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <footer className="footer footer-center p-6 md:p-10 bg-base-200 text-base-content mt-auto">
      <div className="w-full">
        <div className="flex justify-center gap-2 md:gap-4 mb-4">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noreferrer"
              className={`btn btn-ghost btn-circle btn-sm md:btn-md ${social.color} transition-all duration-300 hover:scale-110`}
              aria-label={social.label}
            >
              <social.icon className="text-lg md:text-2xl" />
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xs md:text-sm mb-2">
            © {new Date().getFullYear()} João Monteiro - All rights reserved
          </p>
          <p className="text-xs flex items-center justify-center gap-1">
            Made with <FaHeart className="text-purple-500 text-xs" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer