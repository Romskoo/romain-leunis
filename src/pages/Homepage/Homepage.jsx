import './Homepage.scss';
import { useRef,useEffect,useState } from "react";

import Hook from './Hook/Hook';
import Presentation from './Presentation/Presentation';
import Skills from './Skills/Skills';
import ScrollIcons from './ScrollIcons/ScrollIcons';
import Experiences from './Experiences/Experiences';
import MaskFooter from './MaskFooter/MaskFooter';
import Footer from '../../components/Footer/Footer';

const Homepage = () => {
    
    return (
            <div className="homepage" >
                <div className='container-homepage'>
                    <Hook id="hook" />
                    <Presentation />
                    <ScrollIcons />
                    <Experiences />                   
                </div>
            </div>
    );
};

export default Homepage;