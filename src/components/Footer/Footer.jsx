import './Footer.scss';
import { memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

import LogoLinkedin from '../../assets/linkedin-white.png';
import LogoGithub from '../../assets/github.png';
import IconCopy from '../../assets/copying.png';

import TypingText from '../TypingText/TypingText';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const {t} = useTranslation();

    useGSAP(() => {
        gsap.set('.Footer', { yPercent: -70 })

        const uncover = gsap.timeline({ paused:true })
        
        uncover
        .to('.Footer', { yPercent: 0, ease: 'none' })
        ;
        
        ScrollTrigger.create({  
          trigger: '.Footer',
          start: 'top+=60% bottom',
          end: 'bottom+=60% bottom',
          animation: uncover,
          scrub: true,
        })
    },[]);

    return(
        <div className='Footer'>
            <div className='footer-content'>
                <span className='title'><TypingText text="Romain Leunis" pauseTime={2500}/></span>
                <div className="contact">
                    <span>{t("contactMe")} :</span> <span className='mail'> contact@romain-leunis.fr <img src={IconCopy} className='copy' alt='copy' onClick={() => {navigator.clipboard.writeText("contact@romain-leunis.fr")}}/></span>
                    
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/romain-leunis/" target='_blank' rel="noreferrer" ><img src={LogoLinkedin} className='icon' alt="linkedin"/></a>
                    <a href="https://github.com/Romskoo" target='_blank' rel="noreferrer"><img src={LogoGithub} className='icon'  alt="github"/></a>
                </div>
                <div className="madeBy">
                    <span>{t("madeBy")} <span className='primary'>{t("me")}</span> |</span>
                    <span>© 2025 Romain Leunis</span>
                </div>
               
            </div>
            
        </div>
    )
}

export default memo(Footer);