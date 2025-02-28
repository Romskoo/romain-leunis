import './Homepage.scss';
import { useRef,useEffect,useState } from "react";

import Hook from './Hook2/Hook';
import Presentation from './Presentation/Presentation';
import Skills from './Skills/Skills';

const Homepage = () => {
    
    return (
            <div className="homepage" >
                <Hook id="hook" />
                <Presentation />
            </div>
    );
};

export default Homepage;