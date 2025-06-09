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
    <div className='min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
          My Journey
        </h1>
        
        <VerticalTimeline lineColor='var(--p)'>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className='vertical-timeline-element--education'
              date={exp.date}
              iconStyle={{
                background: exp.iconBg === "bg-primary" ? "hsl(var(--p))" : 
                           exp.iconBg === "bg-secondary" ? "hsl(var(--s))" : 
                           "hsl(var(--a))",
                color: "#fff"
              }}
              icon={<exp.icon />}
              contentStyle={{
                background: "hsl(var(--b2))",
                color: "hsl(var(--bc))",
                boxShadow: "0 3px 20px rgba(0, 0, 0, 0.2)"
              }}
              contentArrowStyle={{
                borderRight: `7px solid hsl(var(--b2))`
              }}
            >
              <h3 className='text-xl font-bold mb-2'>{exp.title}</h3>
              <p className='text-base-content/70 mb-3'>{exp.subtitle}</p>
              {exp.link && (
                <a 
                  href={exp.link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className='btn btn-primary btn-sm'
                >
                  {exp.link.text}
                </a>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience