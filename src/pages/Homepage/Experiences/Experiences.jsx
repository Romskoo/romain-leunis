import './Experiences.scss';
import Experience from '../../../components/Experience/Experience';
import { useState } from 'react';

const items = [
    {
        title:"CDI - Développeur Full-Stack",
        date:"Sep. 2024 - Aujourd'hui",
        description:"à venir",
        skills:["C#","ReactJs","SQLServer"],
    },
    {
        title:"Alternance - Développeur Full-Stack",
        date:"Sep. 2020 - Sep. 2024",
        description:"à venir",
        skills:["C#","ReactJs","SQLServer"]
    },
    {
        title:"Stage - Conception/Développement siteweb",
        date:"Juin 2023 - Août 2023",
        description:"à venir",
        skills:["NextJs","Figma"]
    }
]
const Experiences = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return(
        <div className='Experiences'>
            <div className='title'>Background</div>
            <div className='Professional'>
                {items.map((i,index) => {
                    return(
                        <div onClick={() => handleClick(index)}  className={`carousel-card ${index === currentIndex ? 'active' : ''}`}>
                            <Experience title={i.title} date={i.date} description={i.description} skills={i.skills}/>
                        </div>
                        
                    )
                })}
            </div>
            <div className='Academic'>
                
            </div>
        </div>
    );
};

export default Experiences;