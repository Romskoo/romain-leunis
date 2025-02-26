import './Menu.scss';

import { useNavigate } from 'react-router-dom';

import IconHomeBlack from '../../assets/house-black.png';
import IconProjectsBlack from '../../assets/projects-black.png';
import IconLinkedinBlack from '../../assets/linkedin-black.png';

import IconHomeWhite from '../../assets/house-white.png';
import IconProjectsWhite from '../../assets/projects-white.png';
import IconLinkedinWhite from '../../assets/linkedin-white.png';

const Menu = () => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/home');
    } 

    return(
        <div className='Menu'>
            <img src={IconHomeBlack} alt="home" className='icon-menu' title='Home' onClick={handleClickHome}/>
            <img src={IconProjectsBlack} alt="projects" className='icon-menu' title='Projets'/>
            <img src={IconLinkedinBlack} alt="linkedin" className='icon-menu' title='Linkedin'/>
        </div>
    );
};

export default Menu;