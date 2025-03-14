import './Hook.scss';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimationGif from '../../../assets/bg-animation3.gif';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hook = () => {
    const { t } = useTranslation();
    const hookContainer = useRef();
   
    useGSAP(() => {
        gsap.from(".slideIn", {
            y: "100%",
            opacity: 0,
            duration: 1,
            ease: "power1.out",
            stagger:0.5,
            scrollTrigger:{
                trigger:hookContainer.current,
                start:'top top+=20%',
                end:"bottom top+=20%",
                toggleActions: "play reverse play reverse",
            }
        });

        gsap.from(".title",{
            scale: "0.2",
            opacity: 0,
            duration: 1,
            ease: "none",
            delay:0.5
        });

        gsap.to(".animation-gif", {
            y: "80%",
            ease: "none",
            scrollTrigger: {
                trigger: hookContainer.current,
                start: "top top",
                end: "bottom top",
                scrub: 3, 
            },
        });
    },{ scope: hookContainer, dependencies:[] });

    return(
        <div className='Hook' ref={hookContainer}>
            <img src={AnimationGif} alt="gif"  className='animation-gif'/>
            <div className='title-container'>
                <div className='title'>
                    {t("fullStackDev")}
                </div>
            </div>
            
            <div className="description-container">
                <div className="description">
                    <div className='container-donnees '>
                        <div className='container-slideIn '>
                            <div className='slideIn donnees'>
                                <span className='chiffre'>+5</span>
                                <span className='libelle'>Années <br/> d'expérience</span>
                            </div> 
                        </div>
                        <div className='container-slideIn '>
                            <div className='slideIn donnees'>
                                <span className='chiffre'>+9</span>
                                <span className='libelle'>Projets <br/>réalisés</span>
                            </div> 
                        </div>
                        <div className='container-slideIn '>
                            <div className='slideIn donnees'>
                                <span className='chiffre'>+100</span>
                                <span className='libelle'>Idées <br/>pour t'aider</span>
                            </div> 
                        </div>
                    </div>
                    <div className='container-slideIn'>
                        <span className='slideIn'>{t("descHook2")}</span>
                    </div>
                    <div className='container-slideIn'>
                        <div className='buttons slideIn'>
                            <div className="button-contact" >
                                {t("contactMe")}
                            </div>
                        </div> 
                    </div>                             
                </div>
            </div>   
        </div>
    )
};

export default Hook;