import './Menu.scss';

import { useNavigate } from 'react-router-dom';

import IconHome from '../../assets/house-black.png';
import IconProjects from '../../assets/idea.png';
import IconLinkedin from '../../assets/linkedin.png';

const Menu = () => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/home');
    } 

    return(
        <div className='Menu'>
            <img src={IconHome} alt="home" className='icon-menu' title='Home' onClick={handleClickHome}/>
            <img src={IconProjects} alt="projects" className='icon-menu' title='Projets'/>
            <img src={IconLinkedin} alt="linkedin" className='icon-menu' title='Linkedin'/>
        </div>
    );
};

export default Menu;