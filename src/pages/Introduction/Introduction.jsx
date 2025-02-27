import './Introduction.scss';
import { useNavigate } from 'react-router-dom';

import TypingText from '../../components/TypingText/TypingText';

import { useTranslation } from "react-i18next";
import "../../i18n"; // Import de la configuration

const Introduction = () => {
    const { t } = useTranslation();
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
                    {t("introduction")}
                </span>
                <span className='decouvrir' onClick={handleClickDecouvrir}>
                    {t("discover")}
                </span>
            </div>
        </div>
    )
};

export default Introduction;