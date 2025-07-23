import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { HiAcademicCap, HiUserGroup, HiGlobeAlt } from 'react-icons/hi';

function Experience() {
  const experiences = [
    {
      date: "2007",
      title: "Started studies at EB 2,3/S - Penalva do Castelo",
      subtitle: "Studied sciences and technologies",
      icon: HiAcademicCap,
      iconBg: "bg-primary",
      link: null
    },
    {
      date: "2019",
      title: "Erasmus + MoMA - Mobile Museum Abroad",
      subtitle: "Participated in an international project and traveled to Germany to work with students from several European countries.",
      icon: HiGlobeAlt,
      iconBg: "bg-secondary",
      link: null
    },
    {
      date: "2020",
      title: "Universidade de Aveiro",
      subtitle: "Started studying Computer Science and Engineering - LECI",
      icon: HiAcademicCap,
      iconBg: "bg-primary",
      link: { url: "https://www.ua.pt/pt/curso/486", text: "Course Link" }
    },
    {
      date: "2020",
      title: "AETTUA",
      subtitle: "Joined Associação de Electrónica, Telecomunicações e Telemática da Universidade de Aveiro, a non-profit Youth Association, which aims to promote the most varied activities for all DETI students, faculty and staff.",
      icon: HiUserGroup,
      iconBg: "bg-accent",
      link: { url: "https://aettua.pt/", text: "Visit AETTUA" }
    },
    {
      date: "2023",
      title: "ENEI 2023 - Coordinator",
      subtitle: "Served as coordinator for ENEI (Encontro Nacional de Estudantes de Informática), the largest national gathering of computer science students in Portugal",
      icon: HiUserGroup,
      iconBg: "bg-secondary",
      link: { url: "https://eneiconf.pt/", text: "Visit ENEI" }
    },
    {
      date: "2025",
      title: "MSc in Computer Science and Telematics",
      subtitle: "Started Master's degree at Universidade de Aveiro, focusing on advanced topics in computer science and telecommunications",
      icon: HiAcademicCap,
      iconBg: "bg-primary",
      link: { url: "https://www.ua.pt/pt/curso/500", text: "Course Link" }
    }
  ];

  return (
    <div className='min-h-screen bg-base-100 py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-20'>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-8 font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Timeline
          </div>
          
          <h1 className='text-6xl font-bold mb-6 text-base-content'>
            My Journey
          </h1>
          
          <p className="text-xl text-base-content/60">
            Key milestones and experiences
          </p>
        </div>
        
        <VerticalTimeline lineColor='var(--fallback-p,oklch(var(--p)/1))'>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className='vertical-timeline-element--education [&_.vertical-timeline-element-date]:!text-base-content [&_.vertical-timeline-element-date]:!opacity-60'
              date={exp.date}
              iconStyle={{
                background: "var(--fallback-p,oklch(var(--p)/1))",
                color: "var(--fallback-pc,oklch(var(--pc)/1))",
                boxShadow: "0 0 0 4px var(--fallback-p,oklch(var(--p)/0.1))",
                border: "none"
              }}
              icon={<exp.icon />}
              contentStyle={{
                background: "var(--fallback-b1,oklch(var(--b1)/1))",
                color: "var(--fallback-bc,oklch(var(--bc)/1))",
                boxShadow: "0 8px 32px var(--fallback-bc,oklch(var(--bc)/0.1))",
                border: "1px solid var(--fallback-b3,oklch(var(--b3)/1))",
                borderRadius: "16px",
                padding: "24px"
              }}
              contentArrowStyle={{
                borderRight: `7px solid var(--fallback-b1,oklch(var(--b1)/1))`
              }}
            >
              <h3 className='text-2xl font-bold mb-3 text-base-content'>{exp.title}</h3>
              <p className='text-base-content/70 mb-4 leading-relaxed'>{exp.subtitle}</p>
              {exp.link && (
                <a 
                  href={exp.link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className='inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-content rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-sm'
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
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-base-200 rounded-2xl">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-base-content/70 font-medium text-lg">The journey continues...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience