import './Presentation.scss';
import { memo, useRef, useEffect } from 'react';
import PhotoRomain from '../../../assets/romain2.jpg';

import ScrollingText from '../../../components/TextScrollColor/TextScrollAnimation';
import ParallaxImage from '../../../components/ParallaxImage/ParallaxImage';

const Presentation = () => {
    const parentRef = useRef(null);

    return(
        <div className='presentation home-component' ref={parentRef}>
            <div className='histoire-container'>
                {<ScrollingText 
                texte="Diplomé de l'école d'ingénieur ENSIIE spécialisée dans les systèmes d'information. 
                Je travaille depuis 5 ans dans le secteur de la grande distribution au sein de la STIME."
                parentRef={parentRef}/>}
            </div>
            <div className="image-container" >
                <ParallaxImage src={PhotoRomain} alt="Romain" className='image' parentRef={parentRef} />
            </div>
        </div>
    )
}

export default memo(Presentation);