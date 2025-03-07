import './Experiences.scss';
import Experience from '../../../components/Experience/Experience';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const items = [
    {
        title:"CDI - Développeur Full-Stack",
        date:"Stime - De Sep. 2024 à Aujourd'hui",
        description:"à venir",
        skills:["C#","ReactJs","SQLServer"],
    },
    {
        title:"Alternance - Développeur Full-Stack",
        date:"Stime - De Sep. 2020 à Sep. 2024",
        description:"à venir",
        skills:["C#","ReactJs","SQLServer"]
    },
    {
        title:"Stage - Conception/Développement web",
        date:"Studio Panepinto - De Juin 2023 à Août 2023",
        description:"à venir",
        skills:["NextJs","Figma"]
    }
]
const Experiences = () => {
    var cards = document.getElementsByClassName('card'),
    transforms = [
        { 
            x: '-50%',
            z: 0,
            scale: 1,
            opacity: 1
        },
        { 
            x: '-90%',
            z: '-50px',
            scale: 0.8,
            opacity: 0.8
        },
        {
            x: '-10%',
            z: '-50px',
            scale: 0.8,
            opacity: 0.8
        }
    ];

    const nextTransform = (x) => {
        if (x >= cards.length - 1) {
            x = 0;
        } else {
            x++;
        }
        return x;
    };

    const next = () => {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.transform = 
            'translateX(' + transforms[nextTransform(i)].x + ')' + 
            'translateZ(' + transforms[nextTransform(i)].z + ')' +
            'scale(' + transforms[nextTransform(i)].scale + ')';
            cards[i].style.opacity = transforms[nextTransform(i)].opacity;
        }
        transforms.push(transforms.shift());
    }
  

    return(
        <div className='Experiences'>
            <div className='title'>Background</div>
            <div className='Professional' onClick={next}> 
                {items.map((i,index) => {
                    return(
                        <div key={index}
                        className="card">
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