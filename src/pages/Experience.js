import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { HiAcademicCap, HiUserGroup, HiGlobeAlt, HiSparkles } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const experiences = [
    {
      date: "2007",
      title: "Started studies at EB 2,3/S - Penalva do Castelo",
      subtitle: "Studied sciences and technologies",
      icon: HiAcademicCap,
      iconBg: "bg-primary",
      link: null,
      category: "education"
    },
    {
      date: "2019",
      title: "Erasmus+ MoMA - Mobile Museum Abroad",
      subtitle: "Participated in an international project and traveled to Germany to work with students from several European countries.",
      icon: HiGlobeAlt,
      iconBg: "bg-secondary",
      link: null,
      category: "experience"
    },
    {
      date: "2020",
      title: "Universidade de Aveiro",
      subtitle: "Started studying Computer Science and Engineering - LECI",
      icon: HiAcademicCap,
      iconBg: "bg-primary",
      link: { url: "https://www.ua.pt/pt/curso/486", text: "Course Link" },
      category: "education"
    },
    {
      date: "2020",
      title: "AETTUA",
      subtitle: "Joined Associação de Electrónica, Telecomunicações e Telemática da Universidade de Aveiro, a non-profit Youth Association, which aims to promote the most varied activities for all DETI students, faculty and staff.",
      icon: HiUserGroup,
      iconBg: "bg-accent",
      link: { url: "https://aettua.pt/", text: "Visit AETTUA" },
      category: "experience"
    },
    {
      date: "2023",
      title: "ENEI 2023 - Coordinator",
      subtitle: "Served as coordinator for ENEI (Encontro Nacional de Estudantes de Informática), the largest national gathering of computer science students in Portugal",
      icon: HiUserGroup,
      iconBg: "bg-secondary",
      link: { url: "https://eneiconf.pt/", text: "Visit ENEI" },
      category: "experience"
    },
    {
      date: "2025",
      title: "MSc in Computer Science and Telematics",
      subtitle: "Started Master's degree at Universidade de Aveiro, focusing on advanced topics in computer science and telecommunications",
      icon: HiAcademicCap,
      iconBg: "bg-primary",
      link: { url: "https://www.ua.pt/pt/curso/500", text: "Course Link" },
      category: "education"
    }
  ];

  return (
    <div className='min-h-screen bg-base-100'>
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-base-100 via-base-200/30 to-base-100">
        {/* Animated background elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 left-10 w-40 h-40 md:w-72 md:h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob'></div>
          <div className='absolute top-40 right-10 w-40 h-40 md:w-72 md:h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000'></div>
        </div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-medium text-sm"
            data-aos="fade-down"
          >
            <HiSparkles className="text-primary" />
            My Story
          </div>

          <h1
            className='text-5xl md:text-7xl font-bold mb-6 text-base-content'
            data-aos="fade-up"
          >
            My Journey
          </h1>

          <p
            className="text-lg md:text-2xl text-base-content/60 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            From my first steps in education to where I am today
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className='max-w-6xl mx-auto px-4 md:px-6 pb-20'>
        
        <VerticalTimeline lineColor='var(--fallback-p,oklch(var(--p)/0.3))'>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className='vertical-timeline-element--education [&_.vertical-timeline-element-date]:!text-base-content [&_.vertical-timeline-element-date]:!opacity-70 [&_.vertical-timeline-element-date]:!font-bold'
              date={exp.date}
              iconStyle={{
                background: exp.category === 'education'
                  ? "var(--fallback-p,oklch(var(--p)/1))"
                  : "var(--fallback-s,oklch(var(--s)/1))",
                color: "var(--fallback-pc,oklch(var(--pc)/1))",
                boxShadow: "0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)), 0 0 0 8px var(--fallback-p,oklch(var(--p)/0.2))",
                border: "none",
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              icon={<exp.icon className="text-2xl" />}
              contentStyle={{
                background: "var(--fallback-b1,oklch(var(--b1)/1))",
                color: "var(--fallback-bc,oklch(var(--bc)/1))",
                boxShadow: "0 10px 40px var(--fallback-bc,oklch(var(--bc)/0.08))",
                border: "2px solid var(--fallback-b3,oklch(var(--b3)/1))",
                borderRadius: "20px",
                padding: "28px"
              }}
              contentArrowStyle={{
                borderRight: `7px solid var(--fallback-b3,oklch(var(--b3)/1))`
              }}
            >
              <div className="mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  exp.category === 'education'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  {exp.category === 'education' ? 'Education' : 'Experience'}
                </span>
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-base-content'>{exp.title}</h3>
              <p className='text-sm md:text-base text-base-content/70 mb-4 leading-relaxed'>{exp.subtitle}</p>
              {exp.link && (
                <a
                  href={exp.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className='inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-content rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-200 font-medium text-sm'
                >
                  {exp.link.text}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* Footer */}
        <div className="text-center mt-12 md:mt-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl shadow-lg">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-base-content/70 font-medium text-sm md:text-lg">The journey continues...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience