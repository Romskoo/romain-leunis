import './Projects.scss';
import { useNavigate } from 'react-router-dom';

import Project from '../../../components/Project/Project';

import ImgEventsw from '../../../assets/eventsw.png';
import ImgEventswMobile from '../../../assets/eventsw-mobile.png';
import ImgPanepinto from '../../../assets/panepinto.png';
import ImgPanepintoMobile from '../../../assets/panepinto-mobile.png';
import ImgMavie from '../../../assets/mavie.png';
import ImgMavieMobile from '../../../assets/mavie-mobile.png';
import ImgTrombi from '../../../assets/trombi.png';
import ImgTrombiMobile from '../../../assets/trombi-mobile.png';
import ImgFlexApp from '../../../assets/flexapp.png';
import ImgFlexAppMobile from '../../../assets/flexapp-mobile.png';
import ImgRestaurant from '../../../assets/restaurant.png';
import ImgRestaurantMobile from '../../../assets/restaurant-mobile.png';

const itemEventSW = {
    title:"Forum d'événements de street workout.",
    company:"EventSW",
    role:"CEO",
    description:"Conception et développement du projet. J'ai réalisé ce projet seul, travaillant sur tous les aspects qu'un projet a à offrir: Création de l'idée et des besoins fonctionnels, conception des de l'identité visuelle et des maquettes, développement de la partie backend et frontend, mise en place de la CI/CD pour automatiser le déploiement et gestion de la production (configuration du reverse proxy nginx, redirection des DNS et création du serveur SMTP).",
    image:ImgEventswMobile,
    technos:["ReactJs","NodeJs","MySQL","Figma","Nginx","GitHub actions"]
}

const itemStudioPanepinto = {
    title:"Site vitrine pour un cabinet dentaire.",
    company:"Studio Panepinto",
    role:"Web Master",
    description:"Conception et développement du site web. J'ai réalisé ce projet en autonomie technique. J'ai pu expérimenter toutes les phases de gestion de projet et développement: Reccueil et écriture du besoin avec le client, conception des maquettes, développement du siteweb, travail itératif pour correspondre au mieux aux attentes, déploiement et gestion de la production (configuration du reverse proxy nginx, redirection des DNS).",
    image:ImgPanepintoMobile,
    technos:["NextJs","Tailwind","Figma","Nginx"]
}

const itemMavie = {
    title:"Portail à destination des PDG du groupement des Mousquetaires.",
    company:"Stime, Groupement des Mousquetaires",
    role:"Developpeur full-stack",
    description:"Développement du site web. J'étais responsable du développement du frontend et développeur sur le backend dans une équipe de 5 personnes. J'ai également participé aux expressions et affinages des besoins métiers. J'ai travaillé main dans la main avec les clients, ainsi que les designers. Accompagnement sur la conception des maquettes, développement de la partie frontend et développement ponctuels sur la partie backend.",
    image:ImgMavieMobile,
    technos:["ReactJs","C#","SQLServer","Nginx","Gitlab"]
}

const itemTrombi = {
    title:"Trombinoscope PDG et point de vente du groupement des Mousquetaires.",
    company:"Stime, Groupement des Mousquetaires",
    role:"Developpeur full-stack",
    description:"Développement du site web. J'étais responsable du développement du frontend et développeur sur le backend dans une équipe de 5 personnes. J'ai également participé aux expressions et affinages des besoins métiers. J'ai travaillé main dans la main avec les clients, ainsi que les designers. Accompagnement sur la conception des maquettes, développement de la partie frontend et développement ponctuels sur la partie backend.",
    image:ImgTrombiMobile,
    technos:["ReactJs","C#","SQLServer","ElasticSearch","Nginx","Gitlab"]
}

const itemFlexApp = {
    title:"Application web wpa de gestion du flex office.",
    company:"Stime, Groupement des Mousquetaires",
    role:"Developpeur full-stack",
    description:"Développement de l'application web. J'étais responsable du développement du backend et développeur sur le frontend dans une équipe de 3 personnes. J'ai également participé aux expressions et affinages des besoins métiers. J'ai travaillé main dans la main avec les clients, ainsi que les designers. Accompagnement sur la conception des maquettes, développement de la partie backend et développement ponctuels sur la partie frontend.",
    image:ImgFlexAppMobile,
    technos:["C#","SQLServer","ReactJs","IOnic","Typescript","Gitlab"]
}

const itemRestaurant = {
    title:"Template de site web pour des restaurants.",
    company:"Projet personnel",
    role:"CEO",
    description:"Développement du site web. J'ai travaillé sur ce projet seul. Réalisant le design et l'intégration desktop/mobile.",
    image:ImgRestaurantMobile,
    technos:["ReactJs","Figma","Github"]
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
                <Project img={ImgPanepinto} nom="Studio Panepinto" dark={false} onClick={() => handleClickProject(itemStudioPanepinto)}/>
                <Project img={ImgMavie} nom="Ma Vie Mousquetaires" dark={true} onClick={() => handleClickProject(itemMavie)} />              
                <Project img={ImgTrombi} nom="Trombinoscope Mousquetaires" dark={false} onClick={() => handleClickProject(itemTrombi)} />
                <Project img={ImgFlexApp} nom="Flex App" dark={true} onClick={() => handleClickProject(itemFlexApp)}/>
                <Project img={ImgRestaurant} nom="Template restaurant" dark={false} onClick={() => handleClickProject(itemRestaurant)}/>
            </div>
            
        </div>
    );
};

export default Projects;