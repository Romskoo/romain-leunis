import './Projects.scss';
import Project from '../../../components/Project/Project';

import ImgEventsw from '../../../assets/eventsw.png';
import ImgPanepinto from '../../../assets/panepinto.png';
import ImgMavie from '../../../assets/mavie.png';
import ImgTrombi from '../../../assets/trombi.png';

const Projects = () => {
    return(
        <div className="Projects">
            <span className='title'>My work</span>
            <div className="container-project">
                <Project img={ImgEventsw} nom="EventSW" dark={true} />
                <Project img={ImgPanepinto} nom="Studio Panepinto" dark={false} />
                <Project img={ImgMavie} nom="Ma Vie Mousquetaires" dark={true} />              
                <Project img={ImgTrombi} nom="Trombinoscope Mousquetaires" dark={false} />
                <Project img={ImgEventsw} nom="EventSW" dark={true} />
                <Project img={ImgPanepinto} nom="Studio Panepinto" dark={false} />
            </div>
            
        </div>
    );
};

export default Projects;