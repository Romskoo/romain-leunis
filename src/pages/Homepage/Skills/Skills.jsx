import './Skills.scss';
import { memo, useRef} from 'react';
import FadeIn from '../../../components/FadeIn/FadeIn';
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
                <FadeIn className="box1-fadeIn" duration={1} x={-500} ref={animation}>
                    <div className="box">
                        <span className='titre'>
                            Front-end
                        </span>
                        <div className='container-icons'>
                            <span className='texte'>
                                Compétences techniques fortes
                            </span>
                            <div className='liste-icons'>
                                {/*<div className='icon-wrapper'>
                                    <img src={logoHtml} alt="html" className='icon' />
                                    <label >Html</label>
                                </div>*/}
                                <div className='icon-wrapper'>
                                    <img src={logoReact} alt="react" className='icon' />
                                    <label >React Js</label>
                                </div>
                                <div className='icon-wrapper'>
                                    <img src={logoCss} alt="css" className='icon' />
                                    <label >Css</label>
                                </div>
                                <div className='icon-wrapper'>
                                    <img src={logoJs} alt="js" className='icon' />
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
                                    <img src={logoVue} alt="vue" className='icon' />
                                    <label>Vue Js</label>
                                </div>
                                <div className='icon-wrapper'>
                                    <img src={logoNext} alt="vue" className='icon' />
                                    <label>Next Js</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn className="box2-fadeIn" duration={1} x={500} ref={animation}>
                    <div className="box">
                        Back-end
                    </div>
                </FadeIn>
            </div>
        </div>
    )
};

export default Skills;