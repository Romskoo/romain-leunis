import './ProjectDetail.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectDetail = () => {
    const {t} = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;

    useEffect(() => {
        if(!location)
            navigate('/home');
    },[location]);

    const handleClickRetour = () => {
        navigate(-1);
    }

    return(
        <div className="container-ProjectDetail">
            <div className="ProjectDetail">
                <span className='retour' onClick={handleClickRetour}>{t("return")}</span>
                <span className="title">
                    {t(`${project.libelle}-title`)}
                </span>
                <div className="container-role">
                    <span className="company">
                    {t(`${project.libelle}-company`)}
                    </span>
                    <span className="role">
                    {t(`${project.libelle}-role`)}
                    </span>
                </div>
                <div className="container-content">
                    <div className="container-desc">
                        <span className="title">{t("myRole")}</span>
                        <span className="desc">
                        {t(`${project.libelle}-description`)}
                        </span>
                        <div className="container-techno">
                            {project.technos.map((tech) => {
                                return(
                                    <div className="techno">
                                        {tech}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="container-image">
                        <img src={project.image} alt="project" className="image"/>
                        <span className="iphone-mask" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;