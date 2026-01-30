import './Presentation.scss';
import { memo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import PhotoRomain from '../../../assets/romain.PNG';

import ScrollingText from '../../../components/TextScrollColor/TextScrollAnimation';

gsap.registerPlugin(useGSAP);

const Presentation = () => {
    const { t } = useTranslation();
    const presentationContainer = useRef(null);
    const imageRef = useRef(null);
   
    useGSAP(() => {
        const parentHeight = presentationContainer.current.offsetHeight;

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

        gsap.timeline({
            scrollTrigger: {
                trigger: imageRef.current,
                start: "bottom bottom",
                end: "center center",
                scrub:3,
            },
        })
        .to(imageRef.current,{scale:1.2});

    },{ scope: presentationContainer });

    return(
        <div className='presentation home-component' ref={presentationContainer}>
            <div className='histoire-container'>
                <div className="title container-slideIn">
                    <span className='slideIn'>{t("whoAmI")}</span>
                </div>
                <div className="container-slideIn">
                    <ScrollingText texte={t("descPresentation")} parentRef={presentationContainer}/>             
                </div>
                <div className="container-slideIn">
                    <a href="#Projects" >
                        <div className="button-projects slideIn" >
                            {t("myWork")}
                        </div>
                    </a>
                </div>
                
            </div>
            <div className="image-container" >
                <img src={PhotoRomain} ref={imageRef} alt="Romain" className='image'/>
            </div>
        </div>
    )
}

export default memo(Presentation);