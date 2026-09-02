'use client';

import './ProjectDetail.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Footer from '../../components/Footer/Footer';

gsap.registerPlugin(useGSAP);

const ProjectDetail = ({ project }) => {
    const {t} = useTranslation();
    const router = useRouter();
    const containerProject = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);

    useGSAP(() => {
        gsap.from(".image",{
            opacity:0,
            delay:0.5,
            duration:3,
            ease:"none"
        });

        gsap.utils.toArray(".slideIn").forEach((element) => {
            gsap.from(element, {
                y: "100%",
                opacity: 0,
                duration: 1,
                ease: "power1.out",
            });
        });
    },{scope:containerProject,dependencies:[]});

    const handleClickRetour = () => {
        router.back();
    }

    return(
        <div className="content-footer">
            <div className="container-ProjectDetail" id="top" ref={containerProject}>
                <div className="ProjectDetail">
                    <span className='retour' onClick={handleClickRetour}>{t("return")}</span>
                    <div className="container-slideIn">
                        <span className="title slideIn">
                            {t(`${project.libelle}-title`)}
                        </span>
                    </div>
                    <div className="container-slideIn">
                        <div className="container-role slideIn">
                            <span className="company">
                                {t(`${project.libelle}-company`)}
                            </span>
                            <span className="role">
                                {t(`${project.libelle}-role`)}
                            </span>
                        </div>
                    </div>
                    <div className="container-content">
                        <div className="container-desc">
                            <div className="container-slideIn">
                                <span className="title slideIn">{t("myRole")}</span>
                            </div>
                            <div className="container-slideIn">
                                <span className="desc slideIn">
                                    {t(`${project.libelle}-description`)}
                                </span>
                            </div>
                            <div className="container-techno">
                                {project.technos.map((tech, index) => {
                                    return(
                                        <div className="container-slideIn" key={index}>
                                            <div className="techno slideIn">
                                                {tech}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="container-image">
                            <img src={project.image.src || project.image} alt="project" className="image"/>
                            <span className="iphone-mask" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectDetail;
