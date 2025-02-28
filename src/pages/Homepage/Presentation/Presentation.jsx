import './Presentation.scss';
import { memo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import PhotoRomain from '../../../assets/romain2.jpg';

import ScrollingText from '../../../components/TextScrollColor/TextScrollAnimation';
import ParallaxImage from '../../../components/ParallaxImage/ParallaxImage';

const Presentation = () => {
    const { t } = useTranslation();
    const parentRef = useRef(null);

    return(
        <div className='presentation home-component' ref={parentRef}>
            <div className='histoire-container'>
                <div className="title">
                    {t("whoAmI")}
                </div>
                {<ScrollingText 
                texte={t("descPresentation")}
                parentRef={parentRef}/>}
                <div className="button-projects" >
                    {t("myWork")}
                </div>
            </div>
            <div className="image-container" >
                <ParallaxImage src={PhotoRomain} alt="Romain" className='image' parentRef={parentRef} />
            </div>
        </div>
    )
}

export default memo(Presentation);