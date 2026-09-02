'use client';

import './Projects.scss';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Project from '../../../components/Project/Project';

import ImgEventsw from '../../../assets/eventsw.png';
import ImgPanepinto from '../../../assets/panepinto.png';
import ImgMavie from '../../../assets/mavie.png';
import ImgTrombi from '../../../assets/trombi.png';
import ImgFlexApp from '../../../assets/flexapp.png';
import ImgForgeup from '../../../assets/forgeup.png';

gsap.registerPlugin(useGSAP);

const Projects = () => {
    const router = useRouter();
    const {t} = useTranslation();

    const handleClickProject = (slug) => {
        router.push(`/project/${slug}`);
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
                    <Project img={ImgForgeup} nom="ForgeUp" dark={true} onClick={() => handleClickProject('forgeup')} className="slideIn"/>
                </div>
                <div className='container-slideIn'>
                    <Project img={ImgEventsw} nom="EventSW" dark={true} onClick={() => handleClickProject('eventsw')} className="slideIn"/>
                </div>
                <div className='container-slideIn'>
                    <Project img={ImgPanepinto} nom="Studio Panepinto" dark={false} onClick={() => handleClickProject('panepinto')} className="slideIn"/>
                </div>
                <div className='container-slideIn'>
                    <Project img={ImgMavie} nom="Ma Vie Mousquetaires" dark={true} onClick={() => handleClickProject('mavie')} className="slideIn"/>
                </div>
                <div className='container-slideIn'>
                    <Project img={ImgTrombi} nom="Trombinoscope Mousquetaires" dark={false} onClick={() => handleClickProject('trombi')} className="slideIn"/>
                </div>
                <div className='container-slideIn'>
                    <Project img={ImgFlexApp} nom="Flex App" dark={true} onClick={() => handleClickProject('flexapp')} className="slideIn"/>
                </div>
            </div>           
        </div>
    );

    
};

export default Projects;