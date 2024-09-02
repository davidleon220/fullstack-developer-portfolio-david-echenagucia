import { useContext } from "react"
import GitHubProjectsContext from "../context"
import style from './style.module.css'

const Projects = () => {
    const { data } = useContext(GitHubProjectsContext)

    return (
        <>
            <div className={style.containerprincipal}>
                <div className={style.container}>
                    <div className={style.containerProjects}>Proyectos GitHub</div>
                    {data.length > 0 && data.map((element) => (
                        <div key={element.name} className={style.card}>
                            <h2>{element.name}</h2>
                            <p>{element.description || "No description available"}</p>
                            <p className={style.language}><strong>Language:</strong> {element.language || "HTML"}</p>
                            <a href={element.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Projects;