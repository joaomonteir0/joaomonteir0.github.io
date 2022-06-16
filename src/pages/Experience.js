import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import '../styles/Experience.css';
function Experience() {

  return (
    <div className='experience-wrapper' >
      <div className='experience'>
      <VerticalTimeline lineColor='#21325e'>
      <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date="2007"
        iconStyle={{background: "#21325e", color:"#fff"}}
        icon={<SchoolIcon></SchoolIcon>}>
          <h3>Started studies at EB 2,3/S - Penalva do Castelo</h3>
          <p>Studied sciences and technologies</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date="2019"
        iconStyle={{background: "#21325e", color:"#fff"}}
        icon={<SchoolIcon></SchoolIcon>}>
          <h3>Erasmus + MoMA - Mobile Museum Abroad</h3>
          <p>Participated in an international project and traveled to Germany to work with students from several European countries.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date="2019"
        iconStyle={{background: "#21325e", color:"#fff"}}
        icon={<SchoolIcon></SchoolIcon>}>
          <h3>Universidade de Aveiro</h3>
          <p>Started studying Computer Science and Engineering - LECI</p>
          <a className='references' href='https://www.ua.pt/pt/curso/486' target="_blank">Course Link</a>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date="2020"
        iconStyle={{background: "#21325e", color:"#fff"}}
        icon={<SchoolIcon></SchoolIcon>}>
          <h3>AETTUA </h3>
          <p>Joined Associação de Electrónica, Telecomunicações e Telemática da Universidade de Aveiro, a non-profit Youth Association, which aims to promote the most varied activities for all DETI students, faculty and staff.</p>
          <a className='references' href='https://aettua.pt/' target="_blank">Visit AETTUA</a>
        </VerticalTimelineElement>

      </VerticalTimeline>

    </div>
    </div>
  )
}

export default Experience