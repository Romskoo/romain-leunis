import './Experiences.scss';
import Experience from '../../../components/Experience/Experience';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';

import LogoStime from '../../../assets/logo-stime.png';
import LogoPanepinto from '../../../assets/logo-panepinto.webp';
import LogoEventsw from '../../../assets/logo-eventsw.png';

import LogoEnsiie from '../../../assets/logo-ensiie.jpg';
import LogoIut from '../../../assets/logo-iut.png';
import LogoTalma from '../../../assets/logo-versaille.png';

gsap.registerPlugin(useGSAP);

const Experiences = () => {
    const [proSelected, setProSelected] = useState(true);
    const hookContainer = useRef();
    const { t } = useTranslation();
   
    useGSAP(() => {
        if(!proSelected){
            gsap.to(".background-aca",
            {
                x:"-100%",
                opacity:1,
                duration: 1,
                ease: "power1.out",
            });
    
            gsap.to(".background-exp",
            {
                x:"-100%",
                opacity:0,
                duration: 1,
                ease: "power1.out",
            });
        }
        else{
            gsap.to(".background-aca",
            {
                x:"0%",
                opacity:0,
                duration: 1,
                ease: "power1.out",
            });
    
            gsap.to(".background-exp",
            {
                x:"0%",
                opacity:1,
                duration: 1,
                ease: "power1.out",
            });
        }
    },[proSelected]);

    const itemsPro =  [
        {
            title: t("proTitle1"),
            date: t("proDate1"),
            description: t("proDesc1"),
            skills: ["C#", "ReactJs", "Docker", "SQLServer", "CI/CD", "WPF", "GitLab"],
            logo: LogoStime
        },
        {
            title: t("proTitle2"),
            date: t("proDate2"),
            description: t("proDesc2"),
            skills: ["NextJs", "Tailwind", "Figma", "GitHub", "English"],
            logo: LogoPanepinto
        },
        {
            title: t("proTitle3"),
            date: t("proDate3"),
            description: t("proDesc3"),
            skills: ["C#", "ReactJs", "SQLServer", "Winform", "WPF", "GitLab"],
            logo: LogoStime
        }
    ];

    const itemsAcademic =  [
        {
            title: t("academicTitle1"),
            date: t("academicDate1"),
            description: t("academicDesc1"),
            skills: ["C", "Python", "Docker", "C++", "Java", "OCaml", "GitLab"],
            logo: LogoEnsiie
        },
        {
            title: t("academicTitle2"),
            date: t("academicDate2"),
            description: t("academicDesc2"),
            skills: ["Java", "C", "Assembleur", "Kotlin", "Bash", "Web"],
            logo: LogoIut
        },
        {
            title: t("academicTitle3"),
            date: t("academicDate3"),
            description: t("academicDesc3"),
            skills: ["Python", "HTML", "CSS"],
            logo: LogoTalma
        }
    ];

    return (
        <div className="Experiences" ref={hookContainer}>
            <div className="container-choices">
                <span
                    className={`choice-pro ${proSelected ? "active" : ""}`}
                    onClick={() => setProSelected(true)}>
                    {t("professional")}
                </span>
                <span
                    className={`choice-aca ${!proSelected ? "active" : ""}`}
                    onClick={() => setProSelected(false)}>
                    {t("academic")}
                </span>
                <div className={`underline ${proSelected ? "left" : "right"}`}></div>
            </div>
            <div className="background">
                <div className='background-exp'> 
                    {itemsPro.map((i,index) => {
                        return(
                            <div key={index}
                            className="card">
                                <Experience title={i.title} date={i.date} description={i.description} skills={i.skills} logo={i.logo} />
                            </div>                        
                        )
                    })}
                </div>
                <div className='background-aca'>                   
                    {itemsAcademic.map((i,index) => {
                        return(
                            <div key={index}
                            className="card">
                                <Experience title={i.title} date={i.date} description={i.description} skills={i.skills} logo={i.logo} />
                            </div>                        
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experiences;