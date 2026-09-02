'use client';

import './Experience.scss';

const Experience = ({title,date,description,skills,logo}) => {

    return(
        <div className='Experience'>
            <img src={logo.src || logo} className='logo' alt='logo' />
            <div className='container-body'>
                <div className='container-top'>
                    <span className='title'>{title}</span>
                    <span className='date'>{date}</span>
                </div>
                <span className='description'>{description}</span>
                <div className='skills'>
                    {skills.map((skill,index) => {
                        return(
                            <span className='skill' key={index}>{skill}</span>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
};

export default Experience;