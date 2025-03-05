import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ParallaxImage({ src, className, parentRef}) {
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current || !parentRef.current) return;

    const wrapperHeight = parentRef.current.offsetHeight;

    gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "bottom bottom",
        end: `bottom+=${wrapperHeight*2} bottom`,
        scrub:true,
      },
    }).to(imageRef.current,{scale:1.2})

    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [src]);
  
  return (
    <div ref={wrapperRef}  style={{overflow:"hidden", height:"100%", width:"100%"}} >
      <img 
        ref={imageRef}
        src={src}
        alt="Parallax"
        className={className}
      />
    </div>
  );
}

export default ParallaxImage;