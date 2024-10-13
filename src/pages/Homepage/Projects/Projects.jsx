import './Projects.scss';
import { memo } from 'react';
import Card from './Card/Card';
import Carrousel from './Carrousel/Carrousel';

const Projets = () => {
    return(
        <div className='projects'>
            <span className='title'>Mes projets</span>
            <div className='carrousel-projects'>
                <Carrousel />
            </div>
        </div>
    )
}

export default memo(Projets);