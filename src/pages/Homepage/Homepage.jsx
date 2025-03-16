import './Homepage.scss';

import Hook from './Hook/Hook';
import Presentation from './Presentation/Presentation';
import ScrollIcons from './ScrollIcons/ScrollIcons';
import Experiences from './Experiences/Experiences';
import Projects from './Projects/Projects';

const Homepage = () => {
    
    return (
            <div className="homepage" >
                <div className='container-homepage'>
                    <Hook id="hook" />
                    <Presentation />
                    <ScrollIcons />
                    <Experiences />  
                    <Projects />                 
                </div>
            </div>
    );
};

export default Homepage;