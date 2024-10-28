import React, { useState, useEffect } from 'react';
import './Nuage.scss'; // Pour le style
import imageNuage from '../../../../assets/nuage-bg2.png';
import gsap from 'gsap';
import { useRef,forwardRef, memo } from 'react';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/src/ScrollTrigger';

/*
const Nuage = ({ direction = 'right', className }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculer la position de l'image en fonction du défilement et de la direction
  const imageOffset = Math.min(scrollPosition, window.innerWidth );

  // Si la direction est "left", inverser la direction du décalage
  const translateX = direction === 'right' ? imageOffset : -imageOffset;

  return (
    <div className={`${className} image-container`}>
      <img
        src={imageNuage}
        alt="scroll image"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="scroll-image"
      />
    </div>
  );
};*/

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Nuage = forwardRef(({ duration = 1, x = 0, className = '' }, ref) => {
  const el = useRef();
  const animation = useRef();

  useGSAP(() => {
    animation.current = gsap.to(el.current.children, {
      scrollTrigger:{
        trigger:`.${className}`,
        toggleActions:"play reverse play reverse",
        scrub:1,
      },
      duration,
      x
    });
  });

  useGSAP(() => {
    // forward the animation instance
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return (
    <div className={`${className} image-container`} ref={el}>
      <img
        src={imageNuage}
        alt="scroll image"
        className="scroll-image"
      />
    </div>
  );
});



export default Nuage;
