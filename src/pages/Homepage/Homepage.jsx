import './Homepage.scss';
import Hook from './Hook/Hook';
import Presentation from './Presentation/Presentation';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';


const Homepage = () => {
    return(
        <div className='homepage'>
            <Hook id="hook"/>
            <Presentation id="presentation"/>
            <Skills id="skills" />
            <Projects id="projects" />
        </div>
    )
}

export default Homepage;