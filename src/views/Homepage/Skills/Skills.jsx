'use client';

import './Skills.scss';
import { memo, useRef} from 'react';
import logoCss from '../../../assets/css.webp';
import logoHtml from '../../../assets/html.svg';
import logoJs from '../../../assets/js.png';
import logoVue from '../../../assets/vue.webp';
import logoReact from '../../../assets/react.png';
import logoNext from '../../../assets/nextjs.webp';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Skills = () => {
    const animation = useRef();

    useGSAP(() => {
        gsap.to(".icon", {duration: 2, rotationY:360,stagger:0.5, repeat:-1});
    });

    return(
        <div className='Skills home-component'>
            <span className='titre-section'>Ma stack technique</span>
            <div className='container-section'>
                <div className="box">
                    <span className='titre'>
                        Front-end
                    </span>
                    <div className='container-icons'>
                        <span className='texte'>
                            Compétences techniques fortes
                        </span>
                        <div className='liste-icons'>
                            <div className='icon-wrapper'>
                                <img src={logoReact.src} alt="react" className='icon' />
                                <label >React Js</label>
                            </div>
                            <div className='icon-wrapper'>
                                <img src={logoCss.src} alt="css" className='icon' />
                                <label >Css</label>
                            </div>
                            <div className='icon-wrapper'>
                                <img src={logoJs.src} alt="js" className='icon' />
                                <label >Js</label>
                            </div>
                        </div>
                    </div>
                    <div className='container-icons'>
                        <span className='texte'>
                            Compétences techniques intermédiaires
                        </span>
                        <div className='liste-icons'>
                            <div className='icon-wrapper'>
                                <img src={logoVue.src} alt="vue" className='icon' />
                                <label>Vue Js</label>
                            </div>
                            <div className='icon-wrapper'>
                                <img src={logoNext.src} alt="next" className='icon' />
                                <label>Next Js</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    Back-end
                </div>
            </div>
        </div>
    )
};

export default Skills;
