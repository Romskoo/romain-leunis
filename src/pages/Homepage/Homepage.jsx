import './Homepage.scss';
import { useRef,useEffect,useState } from "react";

import Hook from './Hook/Hook';
import Presentation from './Presentation/Presentation';
import Skills from './Skills/Skills';
import ScrollIcons from './ScrollIcons/ScrollIcons';
import Experiences from './Experiences/Experiences';

const Homepage = () => {
    
    return (
            <div className="homepage" >
                <Hook id="hook" />
                <Presentation />
                <ScrollIcons />
                <Experiences />
            </div>
    );
};

export default Homepage;