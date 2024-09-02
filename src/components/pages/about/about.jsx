import style from './style.module.css'
import image from './image/david.jpg'
import GitHubProjectsContext from "../context";
import { Link } from "react-router-dom"
import { useContext } from "react";

const About = () => {
    const { data } = useContext(GitHubProjectsContext);

    return (
        <>
            <div className={style.containerImageAndText}>
                <img className={style.image} src={image} alt="Foto de perfil" />
                <div className={style.about}>
                    <h2>David Echenagucia</h2>
                    <h3>Desarrollador Fullstack Javascript</h3>
                </div>
            </div>

            <div className={style.boxdescription}>
                <p className={style.textdescription}>
                    I hold a degree in International Business with over 4 years of freelance experience. I am currently transitioning into a JavaScript Full Stack Developer role, bringing 6 months of hands-on experience in full stack development with a focus on JavaScript. I have developed strong expertise in both Front-End and Back-End technologies, including React, Node.js, SQL, and ORMs. My time management skills enable me to thrive in various work environments, and I am eager to leverage my technical abilities to contribute to innovative projects in the tech industry.
                </p>
            </div>

            <div className={style.containerprojects}>
                <Link to="/projects" className={style.moredetails}>Ver más detalles</Link>
                <div className={style.projectsGrid}>
                    {data.length > 0 && data.map((element) => (
                        <div key={element.name} className={style.projectCard}>
                            <h2 className={style.projectName}>{element.name}</h2>
                            <p className={style.projectDescription}>{element.description || "No description available"}</p>
                            <p className={style.projectLanguage}><strong>Language:</strong> {element.language || "N/A"}</p>
                            <a href={element.url} target="_blank" rel="noopener noreferrer" className={style.projectLink}>View on GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default About;
