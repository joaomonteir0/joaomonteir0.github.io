import React from 'react'


function ProjectItem({image, name}) {
  return (
    <div class="projectItem">
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"></div>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem