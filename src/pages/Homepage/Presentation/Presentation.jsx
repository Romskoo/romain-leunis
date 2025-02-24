import './Presentation.scss';
import { memo, useRef, useEffect } from 'react';
import PhotoRomain from '../../../assets/romain2.jpg';

const Presentation = () => {
    return(
        <div className='presentation home-component'>
            <div className="image-container" >
                <img src={PhotoRomain} alt="Romain" className='image'/>
            </div>
            <div className='histoire-container'>
                <div className='histoire'>
                    <span>Diplomé de l'école d'ingénieur ENSIIE spécialisée dans les systèmes d'information.</span>
                    <span>Je travaille depuis 5 ans dans le secteur de la grande distribution au sein de la STIME.</span>
                </div>
            </div>
            
        </div>
    )
}

export default memo(Presentation);