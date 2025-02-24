import './Introduction.scss';
import { useNavigate } from 'react-router-dom';

import TypingText from '../../components/TypingText/TypingText';

const Introduction = () => {

    const navigate = useNavigate();

    const handleClickDecouvrir = () => {
        navigate('/home');
    }

    return(
        <div className='Introduction'>
            {/*<img src={ImageHome} alt="surf" className='fullscreen-image' />*/}
            <div className='mask' />
            <div className='fullscreen-image'> 
                <span className='titre'>
                    <TypingText text="Romain Leunis" pauseTime={2500}/>
                </span>
                <span className='desc'>
                    Conception & Développement de solutions informatiques
                </span>
                <span className='decouvrir' onClick={handleClickDecouvrir}>
                    Découvrir
                </span>
            </div>
        </div>
    )
};

export default Introduction;