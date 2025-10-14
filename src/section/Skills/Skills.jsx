import React from 'react'
import styles from '../Skills/SkillsStyle.module.css';
import dark from '../../assets/checkmark-dark.svg';
import light from '../../assets/checkmark-light.svg'
import Skilllist from '../../common/Skilllist';
import { useTheme } from '../../common/ThemeContext';

function Skills() {

    const {theme}=useTheme()

    const MarkIcon = theme === 'light' ? light: dark;
  return (
   <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
           <Skilllist Icon={MarkIcon} name="HTML"/>
           <Skilllist Icon={MarkIcon} name="CSS"/>
           <Skilllist Icon={MarkIcon} name="JavaScript"/>
        </div>
        <hr/>
         <div className={styles.skillList}>
           <Skilllist Icon={MarkIcon} name="ReactJs"/>
           <Skilllist Icon={MarkIcon} name="Java"/>
           <Skilllist Icon={MarkIcon} name="Spring Boot"/>
           <Skilllist Icon={MarkIcon} name="Hibernate"/>
           <Skilllist Icon={MarkIcon} name="BootStrap"/>
           <Skilllist Icon={MarkIcon} name="NodeJs"/>
           <Skilllist Icon={MarkIcon} name="ExpressJs"/>
        </div>
        <hr/>
         <div className={styles.skillList}>
           <Skilllist Icon={MarkIcon} name="MySQL"/>
           <Skilllist Icon={MarkIcon} name="Oracle"/>
           <Skilllist Icon={MarkIcon} name="MongoDB"/>
           <Skilllist Icon={MarkIcon} name="PostgreSQL"/>
        </div>
        <hr/>
         <div className={styles.skillList}>
           <Skilllist Icon={MarkIcon} name="Git"/>
           <Skilllist Icon={MarkIcon} name="GitHub"/>
           <Skilllist Icon={MarkIcon} name="Linux"/>
           <Skilllist Icon={MarkIcon} name="Postman"/>
        </div>

   </section>
  )
}

export default Skills
