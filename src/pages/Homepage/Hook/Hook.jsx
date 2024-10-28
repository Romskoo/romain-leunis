import './Hook.scss';
import { memo, useRef } from 'react';
import Nuage from './Nuage/Nuage';
import iconArrow from '../../../assets/down-arrow.png'

const Hook = ({id}) => {
    const animation = useRef();
    return(
        <div className='hook home-component' id={id}>
            <Nuage className='nuage-haut' x={500} ref={animation} />
            <Nuage className='nuage-bas' x={-500} ref={animation} />
            <div className='intro-container'>
                <span className='name'>
                    Romain Leunis
                </span>
                <span className='intro'>
                    Ingénieur/Développeur full stack
                </span>
            </div>
            <div className='more-container'>
                <span>Voir plus</span>
                <img src={iconArrow} alt="arrow down" className='fleche'/>
            </div>
        </div>
    )
}

export default memo(Hook);