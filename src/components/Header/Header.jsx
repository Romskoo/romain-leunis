import './Header.scss';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo-rl.png';

const Header = () => {
    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/')
    }

    return(
        <div className='header'>
            <div className='header-container'>
                <span className='name' onClick={handleClickLogo}><img src={Logo} alt="rl" className='logo'/>Romain Leunis</span>
                <div className='container-menu'>
                    <span className='item'><a href="#presentation">Présentation</a></span>
                    <span className='item'>Projets</span>
                    <span className='item'>Contact</span>
                </div>
            </div>
        </div>
    )
}

export default memo(Header)