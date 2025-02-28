import './Hook.scss';

import { useTranslation } from 'react-i18next';
import AnimationGif from '../../../assets/bg-animation3.gif';

const Hook = () => {
    const { t } = useTranslation();

    return(
        <div className='Hook'>
            <img src={AnimationGif} alt="gif"  className='animation-gif'/>
            <div className='title-container'>
                <div className='title'>
                    {t("fullStackDev")}
                </div>
            </div>
            
            <div className="description-container">
                <div className="description">
                    {t("descHook1")}<br/>
                    {t("descHook2")}
                    <div className="buttons">
                        <div className="button-contact" >
                            {t("contactMe")}
                        </div>
                        {/*<div className="button-projects" >
                            Mes projets
                        </div>*/}
                    </div>                    
                </div>
            </div>   
        </div>
    )
};

export default Hook;