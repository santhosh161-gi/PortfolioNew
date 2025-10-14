import React from 'react'
import styles from './HeroStyles.module.css'
import  heroImg from '../../assets/sanlogo1.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinlight from '../../assets/linkedin-light.svg';
import linkedindark from '../../assets/linkedin-dark.svg';
import Gitlight from '../../assets/github-light.svg';
import Gitdark from '../../assets/github-dark.svg'
import cv from '../../assets/SanthoshMathavanR.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {

  const {theme,toggleTheme}=useTheme();
  const themeIcon= theme === 'light' ? sun :moon ;
  const LinkedinIcon= theme === 'light' ? linkedinlight : linkedindark ;
  const Git= theme === 'light' ? Gitlight : Gitdark ;
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero} 
            src={heroImg} 
            alt=''></img>
            <img 
            className={styles.colorMode} 
            src={themeIcon}
            onClick={toggleTheme}
            ></img>
            
        </div>
        <div className={styles.info}>
            <h1>Santhosh<br></br>Mathavan R</h1>
            <h2>Frontend Developer</h2>
            <span>
            <a href="https://www.linkedin.com/in/santhosh-mathavanr/">
            <img src={LinkedinIcon}></img></a>
             <a href="https://github.com/santhosh161-gi">
            <img src={Git}></img></a>
            </span>
            <p className={styles.description}>To craft visually appealing and seamless digital experiences that make users love the web</p>
            <a href={cv} download>
              <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
