import style from './style.module.css'

const Networks = () => {
    return (
        <div className={style.networksContainer}>
            <p className={style.networksDescription}>
                Here you can find several links where you can see information about my freelance work and my GitHub repository:
            </p>
            <div className={style.linksContainer}>
                <a href="https://www.upwork.com/freelancers/~01940e33fa24525ccb" className={style.link} target="_blank" rel="noopener noreferrer">
                    Upwork Profile
                </a>
                <a href="https://www.linkedin.com/in/david-echenagucia-335724160/" className={style.link} target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                </a>
                <a href="https://github.com/davidleon220" className={style.link} target="_blank" rel="noopener noreferrer">
                    GitHub Profile
                </a>
            </div>
        </div>
    )
}

export default Networks;
