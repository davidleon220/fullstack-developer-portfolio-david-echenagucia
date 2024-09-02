import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

const WorkExperience = (props) => {
    const experience = props.experience;
    const navigate = useNavigate(); // Hook para la navegación

    const handleGoBack = () => {
        navigate('/about'); // Redirige a la página About
    };

    return (
        <div className={style.workExperienceContainer}>
            <h2 className={style.heading}>Work Experience</h2>

            <div className={style.experienceList}>
                {experience.map((item, index) => (
                    <div key={index} className={style.experienceCard}>
                        <p className={style.experienceDate}><strong>Date:</strong> {item.date}</p>
                        <p className={style.experienceTitle}><strong>Title:</strong> {item.title}</p>
                        <p className={style.experienceDescription}><strong>Description:</strong> {item.description}</p>
                        <p className={style.experienceLanguages}><strong>Languages:</strong> {item.languages}</p>
                    </div>
                ))}
            </div>

            <div className={style.btnContainer}>
                <button className={style.btn} onClick={handleGoBack}>Volver a About</button>
            </div>
        </div>
    )
}

export default WorkExperience;
