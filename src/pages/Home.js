import React, { useEffect, useRef } from 'react'
import { FaLinkedin, FaGithub, FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function Home() {
  const skillsRef = useRef();
  
  useEffect(() => {
    AOS.init({duration: 800})
  }, []);

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='min-h-screen flex items-center relative overflow-hidden'>
        {/* Animated background */}
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob'></div>
          <div className='absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000'></div>
          <div className='absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000'></div>
        </div>

        <div className='container mx-auto px-6 relative z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
            {/* Content */}
            <div className='flex-1 text-center lg:text-left'>
              <div 
                className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'
                data-aos="fade-down"
              >
                <HiSparkles className='text-primary' />
                <span className='text-sm font-medium'>Welcome to my digital space</span>
              </div>

              <h1 
                className='text-5xl lg:text-7xl font-bold mb-6'
                data-aos="fade-up"
              >
                I'm <span className='text-primary'>João</span>
                <br />
                <span className='text-3xl lg:text-5xl text-base-content/70'>
                  Full-Stack Developer
                </span>
              </h1>

              <p 
                className='text-lg lg:text-xl text-base-content/60 mb-8 max-w-xl mx-auto lg:mx-0'
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Crafting digital experiences with modern web technologies. 
                Computer Science student at <span className='text-primary font-semibold'>Universidade de Aveiro</span>.
              </p>

              <div 
                className='flex flex-wrap gap-4 justify-center lg:justify-start mb-8'
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link to="/projects" className='btn btn-primary btn-lg gap-2'>
                  <FaRocket />
                  View My Work
                </Link>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noreferrer"
                  className='btn btn-outline btn-lg gap-2'
                >
                  <FaGraduationCap />
                  Resume
                </a>
              </div>

              <div 
                className='flex gap-4 justify-center lg:justify-start'
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a 
                  href='https://github.com/joaomonteir0' 
                  target="_blank" 
                  rel="noreferrer"
                  className='btn btn-circle btn-outline'
                >
                  <FaGithub className='text-xl' />
                </a>
                <a 
                  href='https://www.linkedin.com/in/jo%C3%A3o-monteiro-b4281a208/' 
                  target="_blank" 
                  rel="noreferrer"
                  className='btn btn-circle btn-outline'
                >
                  <FaLinkedin className='text-xl' />
                </a>
              </div>
            </div>

            {/* Image */}
            <div 
              className='relative'
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className='relative'>
                {/* Decorative circles */}
                <div className='absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse'></div>
                <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-full opacity-20 animate-pulse animation-delay-2000'></div>
                
                {/* Main image container */}
                <div className='relative'>
                  <div className='w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500'>
                    <img 
                      src="/joao_monteiro.jpg" 
                      alt="João Monteiro" 
                      className='w-full h-full object-cover'
                    />
                  </div>
                  
                  {/* Floating card */}
                  <div className='absolute -bottom-6 -left-6 bg-base-100 rounded-xl p-4 shadow-xl'>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                        <FaCode className='text-primary text-xl' />
                      </div>
                      <div>
                        <p className='text-sm text-base-content/60'>Specialized in</p>
                        <p className='font-semibold'>Full-Stack Development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
            <button 
              onClick={scrollToSkills}
              className='flex flex-col items-center gap-2 text-base-content/50 hover:text-primary transition-colors'
            >
              <span className='text-sm'>Scroll to explore</span>
              <div className='w-6 h-10 border-2 border-current rounded-full flex justify-center'>
                <div className='w-1 h-3 bg-current rounded-full mt-2 animate-bounce'></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section ref={skillsRef} className='py-20 bg-base-200'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <div 
              className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4'
              data-aos="fade-down"
            >
              <HiLightningBolt className='text-primary' />
              <span className='text-sm font-medium'>What I Do</span>
            </div>
            <h2 
              className='text-4xl lg:text-5xl font-bold mb-4'
              data-aos="fade-up"
            >
              Building Amazing Digital Products
            </h2>
            <p 
              className='text-lg text-base-content/60 max-w-2xl mx-auto'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              I specialize in creating modern web applications with cutting-edge technologies
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Frontend Card */}
            <div 
              className='group relative'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity'></div>
              <div className='relative card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300'>
                <div className='card-body'>
                  <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4'>
                    <svg className='w-8 h-8 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <h3 className='card-title text-2xl mb-2'>Frontend Development</h3>
                  <p className='text-base-content/60 mb-4'>
                    Creating responsive, interactive, and beautiful user interfaces
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='badge badge-primary badge-outline'>React</span>
                    <span className='badge badge-primary badge-outline'>TypeScript</span>
                    <span className='badge badge-primary badge-outline'>Tailwind</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div 
              className='group relative'
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className='absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity'></div>
              <div className='relative card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300'>
                <div className='card-body'>
                  <div className='w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4'>
                    <svg className='w-8 h-8 text-secondary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' />
                    </svg>
                  </div>
                  <h3 className='card-title text-2xl mb-2'>Backend Development</h3>
                  <p className='text-base-content/60 mb-4'>
                    Building scalable and secure server-side applications
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='badge badge-secondary badge-outline'>Node.js</span>
                    <span className='badge badge-secondary badge-outline'>Python</span>
                    <span className='badge badge-secondary badge-outline'>FastAPI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Stack Card */}
            <div 
              className='group relative'
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className='absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity'></div>
              <div className='relative card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300'>
                <div className='card-body'>
                  <div className='w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4'>
                    <svg className='w-8 h-8 text-accent' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' />
                    </svg>
                  </div>
                  <h3 className='card-title text-2xl mb-2'>Database & DevOps</h3>
                  <p className='text-base-content/60 mb-4'>
                    Managing data and streamlining deployment processes
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='badge badge-accent badge-outline'>MongoDB</span>
                    <span className='badge badge-accent badge-outline'>Docker</span>
                    <span className='badge badge-accent badge-outline'>Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center mt-12'>
            <Link 
              to="/technologies" 
              className='btn btn-primary btn-lg'
              data-aos="fade-up"
            >
              Explore All Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home