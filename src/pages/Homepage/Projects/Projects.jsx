import './Projects.scss';
import { memo } from 'react';
import Card from './Card/Card';

const Projets = () => {
    return(
        <div className='projects'>
            <span className='title'>Mes projets</span>
            <div className='carrousel-projects'>
                <Card />
            </div>
        </div>
    )
}

export default memo(Projets);