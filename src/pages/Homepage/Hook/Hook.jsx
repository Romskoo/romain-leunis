import './Hook.scss';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimationGif from '../../../assets/bg-animation3.gif';
import IconCopy from '../../../assets/copying.png';

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
                end:"bottom top",
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
                    {t("software")}<span className='primary'>{t("engineer")}</span>
                </div>
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
                            <span className='click'>{t("clickToCopy")} ➔</span>
                            <div className="button-contact" onClick={() => {navigator.clipboard.writeText("contact@romain-leunis.fr")}}>
                                contact@romain-leunis.fr
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