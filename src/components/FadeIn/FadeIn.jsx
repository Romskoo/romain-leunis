import './FadeIn.scss';
import gsap from 'gsap';
import { useRef,forwardRef, memo } from 'react';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const FadeIn = forwardRef(({ children, duration = 1, x = 0, className = '' }, ref) => {
  const el = useRef();
  const animation = useRef();

  useGSAP(() => {
    animation.current = gsap.from(el.current.children, {
      scrollTrigger:{
        trigger:`.${className}`,
        start:"top center",
        end:"bottom center",
        markers:true,
        toggleActions:"play reverse play reverse"
      },
      opacity: 0,
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

  return <span className={'FadeIn '+className} ref={el}>{children}</span>;
});

export default memo(FadeIn);