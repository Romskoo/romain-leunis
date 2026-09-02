'use client';

import './Menu.scss';

import { useRouter } from 'next/navigation';

import IconHomeBlack from '../../assets/house-black.png';
import IconProjectsBlack from '../../assets/projects-black.png';
import IconLinkedinBlack from '../../assets/linkedin-black.png';

import IconHomeWhite from '../../assets/house-white.png';
import IconProjectsWhite from '../../assets/projects-white.png';
import IconLinkedinWhite from '../../assets/linkedin-white.png';

const Menu = () => {
    const router = useRouter();

    const handleClickHome = () => {
        router.push('/home');
    } 

    return(
        <div className='Menu'>
            <img src={IconHomeBlack.src} alt="home" className='icon-menu' title='Home' onClick={handleClickHome}/>
            <img src={IconProjectsBlack.src} alt="projects" className='icon-menu' title='Projets'/>
            <img src={IconLinkedinBlack.src} alt="linkedin" className='icon-menu' title='Linkedin'/>
        </div>
    );
};

export default Menu;