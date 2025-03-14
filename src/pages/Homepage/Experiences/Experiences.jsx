import './Experiences.scss';
import Experience from '../../../components/Experience/Experience';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import LogoStime from '../../../assets/logo-stime.png';
import LogoPanepinto from '../../../assets/logo-panepinto.webp';
import LogoEventsw from '../../../assets/logo-eventsw.png';

import LogoEnsiie from '../../../assets/logo-ensiie.jpg';
import LogoIut from '../../../assets/logo-iut.png';
import LogoTalma from '../../../assets/logo-versaille.png';

gsap.registerPlugin(useGSAP);

const itemsPro = [
    {
        title:"Stime - Ingénieur logiciel",
        date:"Sep 2024 - Aujourd'hui",
        description:"Conception/développement de solutions informatiques variées, application web, logiciel et script d'automatisation.",
        skills:["C#","ReactJs","Docker","SQLServer","CI/CD","WPF","GitLab"],
        logo:LogoStime
    },
    {
        title:"Studio Panepinto - Web Master",
        date:"Juin 2023 - Août 2023",
        description:"Conception/Développement siteweb du cabinet dentaire Studio Panepinto à Milan.\n",
        skills:["NextJs","Tailwind","Figma","GitHub","English"],
        logo:LogoPanepinto
    },
    {
        title:"Stime - Apprenti Ingénieur logiciel",
        date:"Sep 2020 - Sep 2024",
        description:"Conception/développement de solutions informatiques variées, application web, logiciel et script d'automatisation.",
        skills:["C#","ReactJs","SQLServer","Winform","WPF","GitLab"],
        logo:LogoStime
    }
];

const ProBackground = () => {
    return(
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
    )
}

const itemsAcademic = [
    {
        title:"ENSIIE - Diplôme Ingénieur",
        date:"Sep 2021 - Sep 2024",
        description:"Parcours alternance à l'école Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise. Options Informatique Quantique, Green-IT et nouvelles technologies d'entreprise.",
        skills:["C","Python","Docker","C++","Java","OCaml","GitLab"],
        logo:LogoEnsiie
    },
    {
        title:"IUT Sénart/Fontainebleau - DUT Informatique",
        date:"Sep 2019 - Sep 2021",
        description:"Première année à l'IUT de Sénart en parcours International. Deuxième année à Fontainebleau en parcours Alternance.\n",
        skills:["Java","C","Assembleur","Kotlin","Bash","Web"],
        logo:LogoIut
    },
    {
        title:"Lycée Talma - BAC S",
        date:"Sep 2016 - Juil 2019",
        description:"Baccalauréat Scientifique SVT avec option ISN(Informatique). Mention Bien.",
        skills:["Python","HTML","CSS"],
        logo:LogoTalma
    }
];

const AcaBackground = () => {
    return(
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
    )
}

const Experiences = () => {
    const [proSelected, setProSelected] = useState(true);
    const hookContainer = useRef();
   
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

    return (
        <div className="Experiences" ref={hookContainer}>
            <div className="container-choices">
                <span
                    className={`choice-pro ${proSelected ? "active" : ""}`}
                    onClick={() => setProSelected(true)}
                >
                    Professional
                </span>
                <span
                    className={`choice-aca ${!proSelected ? "active" : ""}`}
                    onClick={() => setProSelected(false)}
                >
                    Academic
                </span>
                <div className={`underline ${proSelected ? "left" : "right"}`}></div>
            </div>
            <div className="background">
                 <ProBackground /> 
                 <AcaBackground />
            </div>
        </div>
    );
};

export default Experiences;