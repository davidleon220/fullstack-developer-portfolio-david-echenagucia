import style from './style.module.css'

const Networks = () => {
    return (
        <div className={style.networksContainer}>
            <p className={style.networksDescription}>
                Aquí puedes ver varios enlaces donde puedes encontrar información sobre mis trabajos como Freelancer y mi repositorio de GitHub:
            </p>
            <div className={style.linksContainer}>
                <a href="https://www.upwork.com/freelancers/~01940e33fa24525ccb" className={style.link} target="_blank" rel="noopener noreferrer">
                    Perfil de Upwork
                </a>
                <a href="https://www.linkedin.com/in/david-echenagucia-335724160/" className={style.link} target="_blank" rel="noopener noreferrer">
                    Perfil de LinkedIn
                </a>
                <a href="https://github.com/davidleon220" className={style.link} target="_blank" rel="noopener noreferrer">
                    Perfil de GitHub
                </a>
            </div>
        </div>
    )
}

export default Networks;
