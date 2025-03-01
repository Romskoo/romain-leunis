import {  useRef, useEffect} from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import './TextSlideIn.scss';

const TextSlideIn = ({ text }) => {
    const textRef = useRef(null);
  
    useEffect(() => {
        if (textRef.current) {
          const split = new SplitType(textRef.current, { types: "lines" });
    
          gsap.from(split.lines, {
            y: "100%",
            opacity: 0,
            duration: 1.5, 
            ease: "power3.out",
            stagger: 0.4,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top bottom"
            }
          });
        }
      }, []);
  
    return (
      <div ref={textRef} className="animated-text">
        {text.split("\n").map((line, index) => (
          <p key={index} className="line">{line}</p>
        ))}
      </div>
    );
  };
  

export default TextSlideIn;