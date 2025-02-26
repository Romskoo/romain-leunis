import './Header.scss';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoBlack from '../../assets/logo-rl-black.png';
import LogoWhite from '../../assets/logo-rl-white.png';

const Header = () => {
    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/')
    }

    return(
        <div className='header'>
            <div className='header-container'>
                <span className='name' onClick={handleClickLogo}><img src={LogoWhite} alt="rl" className='logo'/>Romain Leunis</span>
                {/*<div className='container-menu'>
                    <span className='item'><a href="#presentation">Présentation</a></span>
                    <span className='item'>Projets</span>
                    <span className='item'>Contact</span>
                </div>*/}
            </div>
        </div>
    )
}

export default memo(Header)