import './Project.scss';

const Project = ({img,nom,dark,onClick}) => {
    return(
        <div className={dark ? 'Project dark' : 'Project light'} onClick={onClick}>
            <img src={img} className='bg' alt='bg' />
            <div className='mask'>
                <span className={!dark ? 'title title-dark' : 'title title-light'}>{nom}</span>
            </div>

        </div>
    );
};

export default Project;