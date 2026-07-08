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
                    <h3>Full Stack JavaScript Developer</h3>
                </div>
            </div>

            <div className={style.boxdescription}>
                <p className={style.textdescription}>
                    With a solid background in International Business and over 4 years of freelance experience, I successfully transitioned into the tech industry as a Full Stack JavaScript Developer. I specialize in both Front-End and Back-End development, building dynamic applications with React, Node.js, SQL, and modern ORMs. My strong time-management skills and adaptability allow me to thrive in fast-paced environments. I am passionate about writing clean code and eager to leverage my unique blend of business acumen and technical expertise to drive innovative projects forward.
                </p>
            </div>

            <div className={style.containerprojects}>
                <div className={style.projectsGrid}>
                    {data.length > 0 && data.slice(0, 3).map((element) => (
                        <div key={element.name} className={style.projectCard}>
                            <h2 className={style.projectName}>{element.name}</h2>
                            <p className={style.projectDescription}>{element.description || "No description available"}</p>
                            <p className={style.projectLanguage}><strong>Language:</strong> {element.language || "N/A"}</p>
                            <a href={element.url} target="_blank" rel="noopener noreferrer" className={style.projectLink}>View on GitHub</a>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '30px' }}>
                    <Link to="/projects" className={style.moredetails}>View all my projects</Link>
                </div>
            </div>
        </>
    )
}

export default About;
