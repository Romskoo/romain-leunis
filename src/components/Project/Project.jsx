import './Project.scss';

const Project = ({img,nom,dark}) => {
    return(
        <div className={dark ? 'Project dark' : 'Project light'}>
            <img src={img} className='bg' alt='bg' />
            <div className='mask'>
                <span className={!dark ? 'title title-dark' : 'title title-light'}>{nom}</span>
            </div>

        </div>
    );
};

export default Project;