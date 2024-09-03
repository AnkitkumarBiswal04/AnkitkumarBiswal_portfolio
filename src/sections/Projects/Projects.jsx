import styles from './ProjectStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hippster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';



function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="SectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} 
            link="https://github.com/AnkitkumarBiswal04/Brain-Tumor-Detection"
            h3="Viberr"
            p="Brain Tumor Detection"
            />
            <ProjectCard src={hippster} 
            link="https://github.com/AnkitkumarBiswal04/CPP-Placement-DSA-CODE-HELP-Course"
            h3="Hippster"
            p="DSA Code-Help"
            />
            <ProjectCard src={freshBurger} 
            link="https://github.com/AnkitkumarBiswal04/Striver-A2Z-course-"
            h3="Fresh-Burger"
            p="Striver Sheet"
            />
            <ProjectCard src={fitLift} 
            link="https://github.com/AnkitkumarBiswal04/TCS_SDE_SHEET"
            h3="FitLift"
            p="TCS-SDE Sheet"
            />
        </div>
    </section>
  );
}

export default Projects