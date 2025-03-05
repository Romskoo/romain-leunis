import './Experience.scss';

const Experience = ({title,date,description,skills}) => {

    return(
        <div className='Experience'>
            <span className='title'>{title}</span>
            <span className='date'>{date}</span>
            <span className='description'>{description}</span>
            <div className='skills'>
                {skills.map((skill) => {
                    return(
                        <span className='skill' >{skill}</span>
                    )
                })}
            </div>
        </div>
    )
};

export default Experience;