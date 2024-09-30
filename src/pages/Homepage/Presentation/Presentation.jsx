import './Presentation.scss';
import { memo } from 'react';

import imageRomain from '../../../assets/romain.jpg';

const Presentation = ({id}) => {
    return(
        <div className='presentation' id={id}>
            <div className='container-text'>
                <span className='title'>Qui suis-je ?</span>
                <span className='text'>
                    Je suis un jeune développeur possionné de technologie
                    et d’entreprenariat. Fort de mes 5 années d’expérience
                    dans l’informatique je suis à la recherche de nouvelles
                    opportunités. Que tu recherches un associé ou simplement
                    une personne qualifée pour développer ton projet, 
                    n’hésites pas à <span className='text-action'>me contacter</span>.
                </span>
            </div>
            <div className='container-romain'>
                <div className='romain'/>
            </div>
        </div>
    )
}

export default memo(Presentation);