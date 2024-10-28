import './Homepage.scss';
import Hook from './Hook/Hook';
import Presentation from './Presentation/Presentation';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/src/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Homepage = () => {
    useGSAP(() => {
        let panels = gsap.utils.toArray(".home-component"),observer,scrollTween;

        if (ScrollTrigger.isTouch === 1) {
            observer = ScrollTrigger.normalizeScroll(true);
        }
        
        // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
        document.addEventListener("touchstart", e => {
            if (scrollTween) {
            e.preventDefault();
            e.stopImmediatePropagation();
            }
        }, {capture: true, passive: false})
        
        function goToSection(i) {
            scrollTween = gsap.to(window, {
            scrollTo: {y: i * window.innerHeight, autoKill: false},
            onStart: () => {
                if (!observer) return;
                observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
                observer.enable();
            },
            duration: 0.8,
            onComplete: () => scrollTween = null,
            overwrite: true
            });
        }
        
        panels.forEach((panel, i) => {
            ScrollTrigger.create({
            trigger: panel,
            start: "top bottom",
            end: "+=199%",
            markers:true,
            onToggle: self => self.isActive && !scrollTween && goToSection(i)
            });
        });
        
        // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
        ScrollTrigger.create({
            start: 0, 
            end: "max",
            snap: {
                snapTo: 1 / (panels.length - 1),
                delay: 0,  // Supprime tout délai pour minimiser les décalages
                onInterrupt: () => scrollTween = null,  // S'assure que le tween est nul en cas d'interruption
            },
            onUpdate: self => {
                if (scrollTween) {
                    self.disable();  // Désactive temporairement le snap quand une animation est en cours
                } else {
                    self.enable();   // Active le snap quand aucune animation n’est en cours
                }
            }
        });
    });
    


    return(
        <div className='homepage'>
            <Hook id="hook"/>
            <Presentation id="presentation"/>
            <Skills id="skills" />
            <Projects id="projects" />
        </div>
    )
}

export default Homepage;