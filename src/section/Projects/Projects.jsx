import React from 'react'
import styles from '../../section/Projects/ProjectsStyle.module.css';
import ProjectCard from '../../common/ProjectCard';
import nike from '../../assets/nikelogo.jpg';
import hub from '../../assets/moviehub.jpg';
import ecom from'../../assets/hub.jpg';
import  clone from '../../assets/clone.jpg';


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
            src={nike}
            link="https://github.com/santhosh161-gi/Nike"
            h3="Nike Store"
            p="Online Platform"
            />
            <ProjectCard
            src={hub}
            link="https://github.com/santhosh161-gi/moviehub"
            h3="MovieHub"
            p="Streaming App"
            />
            <ProjectCard
            src={ecom}
            link="https://github.com/santhosh161-gi/E-com"
            h3="E-com"
            p="Electronics Store"
            />
            <ProjectCard
            src={clone}
            link="https://github.com/santhosh161-gi/InstagramClone"
            h3="Instagram Clone"
            p="Social Media "
            />
        </div>

    </section>
  )
}

export default Projects
