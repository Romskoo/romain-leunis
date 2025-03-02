import './Homepage.scss';
import { useRef,useEffect,useState } from "react";

import Hook from './Hook2/Hook';
import Presentation from './Presentation/Presentation';
import Skills from './Skills/Skills';
import ScrollIcons from './ScrollIcons/ScrollIcons';

const Homepage = () => {
    
    return (
            <div className="homepage" >
                <Hook id="hook" />
                <Presentation />
                <ScrollIcons />
            </div>
    );
};

export default Homepage;