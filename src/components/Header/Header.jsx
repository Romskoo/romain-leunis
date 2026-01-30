import './Header.scss';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import LanguagePicker from '../LanguagePicker/LanguagePicker';
import LogoBlack from '../../assets/logo-rl-black.png';
import LogoWhite from '../../assets/logo-rl-white.png';

const Header = () => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const handleClickLogo = () => {
        navigate('/')
    }

    return(
        <div className='header'>
                <span className='name' onClick={handleClickLogo}><img src={LogoWhite} alt="rl" className='logo'/>Romain Leunis</span>
                <LanguagePicker />
                {/*<div className='container-menu'>
                    <span className='item'><a href="#presentation">Présentation</a></span>
                    <span className='item'>Projets</span>
                    <span className='item'>Contact</span>
                </div>*/}
        </div>
    )
}

export default memo(Header)