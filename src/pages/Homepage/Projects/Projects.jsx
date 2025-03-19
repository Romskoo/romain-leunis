import './Projects.scss';
import { useNavigate } from 'react-router-dom';

import Project from '../../../components/Project/Project';

import ImgEventsw from '../../../assets/eventsw.png';
import ImgEventswMobile from '../../../assets/eventsw-mobile.png';
import ImgPanepinto from '../../../assets/panepinto.png';
import ImgMavie from '../../../assets/mavie.png';
import ImgTrombi from '../../../assets/trombi.png';
import ImgFlexApp from '../../../assets/flexapp.png';
import ImgFleg from '../../../assets/fleg.png';

const itemEventSW = {
    title:"Siteweb de publication d'évènements de street workout.",
    company:"EventSW",
    role:"CEO",
    description:"Conception et développement du site web. J'ai réalisé ce projet seul, travaillant sur tous les aspects qu'un projet a à offrir: Création de l'idée et des besoins fonctionnels, conception des de l'identité visuelle et des maquettes, développement de la partie backend et frontend, mise en place de la CI/CD pour automatiser le déploiement et gestion de la production (configuration du reverse proxy nginx, redirection des DNS et création du serveur SMTP).",
    image:ImgEventswMobile,
    technos:["ReactJs","NodeJs","MySQL","Figma","Nginx"]
}

const Projects = () => {
    const navigate = useNavigate();

    const handleClickProject = (item) => {
        navigate('/project',{state:item})
    }

    return(
        <div className="Projects">
            <span className='title'>My work</span>
            <div className="container-project">
                <Project img={ImgEventsw} nom="EventSW" dark={true} onClick={() => handleClickProject(itemEventSW)}/>
                <Project img={ImgPanepinto} nom="Studio Panepinto" dark={false} />
                <Project img={ImgMavie} nom="Ma Vie Mousquetaires" dark={true} />              
                <Project img={ImgTrombi} nom="Trombinoscope Mousquetaires" dark={false} />
                <Project img={ImgFlexApp} nom="Flex App" dark={true} />
                <Project img={ImgFleg} nom="Fleg" dark={false} />
            </div>
            
        </div>
    );
};

export default Projects;