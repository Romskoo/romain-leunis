'use client';

import './Hook.scss';

import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GifLogo from "../../../assets/R_surf_ride.webp";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hook = () => {
    const { t } = useTranslation();
    const hookContainer = useRef();
    const [clickCopy,setClickCopy] = useState(false);

    const handleClickCopy = () => {
        navigator.clipboard.writeText("contact@romain-leunis.fr");
        setClickCopy(true);
        setTimeout(() => {
            setClickCopy(false);
        },1000);
    }
   
    useGSAP(() => {
        gsap.from(".slideIn", {
            y: "100%",
            opacity: 0,
            duration: 1,
            ease: "power1.out",
            stagger:0.3,
            scrollTrigger:{
                trigger:hookContainer.current,
                start:'top top+=20%',
                end:"bottom top",
                toggleActions: "play reverse play reverse",
            }
        });

        gsap.from(".title",{
            scale: "0.2",
            opacity: 0,
            duration: 1,
            ease: "none",
            scrollTrigger:{
                trigger:".title-container",
                start:'top 85%',
                end:"bottom 15%",
                toggleActions: "play reverse play reverse",
            }
        });

        /*gsap.fromTo(".wave-path",
            { strokeDashoffset: 1000 },
            {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.out",
                delay: 0.3,
                scrollTrigger:{
                    trigger:".title-container",
                    start:'top 85%',
                    end:"bottom 15%",
                    toggleActions: "play reverse play reverse",
                }
            }
        );*/
    },{ scope: hookContainer, dependencies:[] });

    return(
        <div className='Hook' ref={hookContainer}>
            <div className='title-container'>
                <div className='title'>
                    {t("software")}<span className='primary'>{t("engineer")}</span>
                </div>
                <img className='surf-gif' src={GifLogo.src} alt="surf" />
                {/*<svg className='wave-line' viewBox="0 0 800 120" preserveAspectRatio="none" fill="none">
                    <path
                        className='wave-path'
                        d="M0,60 Q40,20 80,60 T160,60 T240,60 T320,60 T400,60 T480,60 T560,60 T640,60 T720,60 T800,60"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="1000"
                    />
                </svg>*/}
            </div>

            <div className="description-container">
                <div className="description">
                    <div className='container-donnees '>
                        <div className='container-slideIn '>
                            <div className='slideIn donnees'>
                                <span className='chiffre'>+5</span>
                                <span className='libelle'>{t("years")} <br/>{t("ofExperience")}</span>
                            </div> 
                        </div>
                        <div className='container-slideIn '>
                            <div className='slideIn donnees'>
                                <span className='chiffre'>+9</span>
                                <span className='libelle'>{t("projects")} <br/>{t("achieved")}</span>
                            </div> 
                        </div>
                        <div className='container-slideIn '>
                            <div className='slideIn donnees'>
                                <span className='chiffre'>+100</span>
                                <span className='libelle'>{t("ideas")} <br/>{t("toHelpYou")}</span>
                            </div> 
                        </div>
                    </div>
                    <div className='container-slideIn'>
                        <span className='slideIn'>{t("descHook2")}<span className='primary'>{t("contactMe")}</span></span>
                    </div>
                    <div className='container-slideIn'>                      
                        <div className='buttons slideIn'>
                            {/*<span className='click'>{t("clickToCopy")} ➔</span>*/}
                            <div className="button-contact" onClick={handleClickCopy}>
                                <span className={`libelle-contact ${!clickCopy && "active"}`}>contact@romain-leunis.fr</span>
                                <span className={`libelle-contact ${clickCopy && "active"}`}>Copié!</span>
                            </div>
                        </div> 
                    </div>  
                                            
                </div>
            </div>   
            {/*<div className='popUp-contact'>
                <span className='mail'> contact@romain-leunis.fr <img src={IconCopy} className='copy' alt='copy' onClick={() => {navigator.clipboard.writeText("contact@romain-leunis.fr")}}/></span>
            </div>  */}
        </div>
    )
};

export default Hook;