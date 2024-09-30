import './Header.scss';
import { memo } from 'react';

const Header = () => {
    return(
        <div className='header'>
            <div className='header-container'>
                <span className='name'><a href="#hook">Romain Leunis</a></span>
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