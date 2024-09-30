import './Hook.scss';
import { memo } from 'react';
import Nuage from './Nuage/Nuage';
import iconArrow from '../../../assets/down-arrow.png'

const Hook = ({id}) => {
    return(
        <div className='hook' id={id}>
            <Nuage className='nuage-haut' />
            <Nuage className='nuage-bas' direction='left'/>
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