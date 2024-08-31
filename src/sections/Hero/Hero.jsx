import styles from './HeroStyles.module.css'
import heroImg from '../.././assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/ANKIT_KUMAR_BISWAL_RESUME.pdf'
function Hero() {
  return (
<section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.Hero} 
        src={heroImg}
        alt="This is the profile picture of Ankit Kumar Biswal" 
         />
    </div>
    <div>
        <img className={styles.colorModeContainer}
        src={themeIcon}
        alt="Color mode icon"
        />
    </div>
    <div className={styles.info}>
        <h1>Ankit Kumar<br/>Biswal</h1>
        <h2>Forntend developer</h2>
        <span>
            <a href="https://twitter.com/" target="_blank" >
                <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" >
                <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
        </span>
        <p>With a passion of learning and building react application</p>
        <a href={CV} >
        <button className="hover" download>
            Resume
        </button>
        </a>
    </div>
</section>  
) ;
}

export default Hero;