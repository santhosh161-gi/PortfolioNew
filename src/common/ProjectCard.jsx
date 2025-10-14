import React from 'react'



function ProjectCard({src,link,h3,p}) {
  return (
    <div>
       <a className='hover' href={link}>
                  <img width="200px" className='hover' src={src}></img>
                  <h3>{h3}</h3>
                  <p>{p}</p>
                  </a>
    </div>
  )
}

export default ProjectCard
