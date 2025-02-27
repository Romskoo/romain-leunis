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
        start: 'top 10%',
        end: 'top top',
        scrub: true,
        markers: true,
      },
    }).to(imageRef.current, { scale: 1.2, ease: 'power1.in' });

    // Seconde timeline
    gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: `bottom+=${wrapperHeight} bottom`,
        end:  `bottom+=${wrapperHeight} 80%`,
        scrub: true,
        markers: true,
      },
    }).to(imageRef.current, { scale: 1, ease: 'power1.out' });

    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [src]);
  
  return (
    <div ref={wrapperRef} className={className} style={{overflow:"hidden"}} >
      <img
        ref={imageRef}
        src={src}
        alt="Parallax"
        style={{ width: "100%",height:"100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

export default ParallaxImage;