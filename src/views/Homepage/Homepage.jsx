'use client';

import './Homepage.scss';

import Hook from './Hook/Hook';
import Presentation from './Presentation/Presentation';
import ScrollIcons from './ScrollIcons/ScrollIcons';
import Experiences from './Experiences/Experiences';
import Projects from './Projects/Projects';
import Footer from '../../components/Footer/Footer';

const Homepage = () => {
    
    return (
        <div className="content-footer">
            <div className="homepage" >
                <div className='container-homepage'>
                    <Hook id="hook" />
                    <Presentation />
                    <ScrollIcons />
                    <Experiences />  
                    <Projects />                 
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;