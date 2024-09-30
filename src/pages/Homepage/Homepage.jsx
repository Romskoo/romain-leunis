import './Homepage.scss';
import Hook from './Hook/Hook';
import Presentation from './Presentation/Presentation';
import Projects from './Projects/Projects';

const Homepage = () => {
    return(
        <div className='homepage'>
            <Hook id="hook"/>
            <Presentation id="presentation"/>
            <Projects id="projects" />
        </div>
    )
}

export default Homepage;