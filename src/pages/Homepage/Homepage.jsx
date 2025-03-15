import './Homepage.scss';

import Hook from './Hook/Hook';
import Presentation from './Presentation/Presentation';
import ScrollIcons from './ScrollIcons/ScrollIcons';
import Experiences from './Experiences/Experiences';

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