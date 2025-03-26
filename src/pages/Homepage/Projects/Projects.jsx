import './Projects.scss';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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

gsap.registerPlugin(useGSAP);

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

    const projectsContainer = useRef(null);

    useGSAP(() => {
        const parentHeight = projectsContainer.current.offsetHeight;

        gsap.utils.toArray(".slideIn").forEach((element) => {
            gsap.from(element, {
                y: "100%",
                opacity: 0,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    end:`top+=${parentHeight*1.5} top`,
                    toggleActions: "play reverse play reverse"
                }
            });
        });

    },{scope:projectsContainer, dependencies:[]});

    return(
        <div className="Projects" id="Projects" ref={projectsContainer}>
            <div className='container-slideIn'>
                <span className='title slideIn'>{t("selectedWork")}</span>
            </div>
            <div className="container-project">
                <div className='container-slideIn'>
                    <Project img={ImgEventsw} nom="EventSW" dark={true} onClick={() => handleClickProject(itemEventSW)} className="slideIn"/>
                </div>
                <div className='container-slideIn'>
                    <Project img={ImgPanepinto} nom="Studio Panepinto" dark={false} onClick={() => handleClickProject(itemStudioPanepinto)} className="slideIn"/>
                </div>
                <div className='container-slideIn'>
                    <Project img={ImgMavie} nom="Ma Vie Mousquetaires" dark={true} onClick={() => handleClickProject(itemMavie)} className="slideIn"/>
                </div>
                <div className='container-slideIn'>          
                    <Project img={ImgTrombi} nom="Trombinoscope Mousquetaires" dark={false} onClick={() => handleClickProject(itemTrombi)} className="slideIn"/>
                </div>
                <div className='container-slideIn'>
                    <Project img={ImgFlexApp} nom="Flex App" dark={true} onClick={() => handleClickProject(itemFlexApp)} className="slideIn"/>
                </div>
                <div className='container-slideIn'>
                    <Project img={ImgRestaurant} nom="Template restaurant" dark={false} onClick={() => handleClickProject(itemRestaurant)} className="slideIn"/>
                </div>
            </div>           
        </div>
    );

    
};

export default Projects;