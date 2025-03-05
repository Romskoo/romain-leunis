import './Presentation.scss';
import { memo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import PhotoRomain from '../../../assets/romain2.jpg';

import ScrollingText from '../../../components/TextScrollColor/TextScrollAnimation';
import ParallaxImage from '../../../components/ParallaxImage/ParallaxImage';

gsap.registerPlugin(useGSAP);

const Presentation = () => {
    const { t } = useTranslation();
    const presentationContainer = useRef(null);
   
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
    },{ scope: presentationContainer });

    return(
        <div className='presentation home-component' ref={presentationContainer}>
            <div className='histoire-container'>
                <div className="title container-slideIn">
                    <span className='slideIn'>{t("whoAmI")}</span>
                </div>
                <div className="container-slideIn">
                    <span className='slideIn'>
                        <ScrollingText texte={t("descPresentation")} parentRef={presentationContainer}/>
                    </span>                   
                </div>
                <div className="container-slideIn">
                    <div className="button-projects slideIn" >
                        {t("myWork")}
                    </div>
                </div>
            </div>
            <div className="image-container" >
                <ParallaxImage src={PhotoRomain} alt="Romain" className='image' parentRef={presentationContainer} />
            </div>
        </div>
    )
}

export default memo(Presentation);