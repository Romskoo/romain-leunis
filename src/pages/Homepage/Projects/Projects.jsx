import './Projects.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

const Projects = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const itemEventSW = {
        libelle:"itemEventSW",
        image:ImgEventswMobile,
        technos:["ReactJs","NodeJs","MySQL","Figma","Nginx","GitHub actions"]
    }
    
    const itemStudioPanepinto = {
        libelle:"itemStudioPanepinto",
        image:ImgPanepintoMobile,
        technos:["NextJs","Tailwind","Figma","Nginx"]
    }
    
    const itemMavie = {
        libelle:"itemMavie",
        image:ImgMavieMobile,
        technos:["ReactJs","C#","SQLServer","Nginx","Gitlab"]
    }
    
    const itemTrombi = {
        libelle:"itemTrombi",
        image:ImgTrombiMobile,
        technos:["ReactJs","C#","SQLServer","ElasticSearch","Nginx","Gitlab"]
    }
    
    const itemFlexApp = {
        libelle:"itemFlexApp",
        image:ImgFlexAppMobile,
        technos:["C#","SQLServer","ReactJs","IOnic","Typescript","Gitlab"]
    }
    
    const itemRestaurant = {
        libelle:"itemRestaurant",
        image:ImgRestaurantMobile,
        technos:["ReactJs","Figma","Nginx","Github"]
    }

    const handleClickProject = (item) => {
        navigate('/project',{state:item})
    }

    return(
        <div className="Projects">
            <span className='title'>{t("selectedWork")}</span>
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