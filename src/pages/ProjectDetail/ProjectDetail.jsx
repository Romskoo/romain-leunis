import './ProjectDetail.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;

    useEffect(() => {
        if(!location)
            navigate('/home');
    },[location]);

    const handleClickRetour = () => {
        navigate("/home");
    }

    return(
        <div className="container-ProjectDetail">
            <div className="ProjectDetail">
                <span className='retour' onClick={handleClickRetour}>Retour</span>
                <span className="title">
                    {project.title}
                </span>
                <div className="container-role">
                    <span className="company">
                        {project.company}
                    </span>
                    <span className="role">
                        {project.role}
                    </span>
                </div>
                <div className="container-content">
                    <div className="container-desc">
                        <span className="title">My role</span>
                        <span className="desc">
                            {project.description}
                        </span>
                        <div className="container-techno">
                            {project.technos.map((t) => {
                                return(
                                    <div className="techno">
                                        {t}
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