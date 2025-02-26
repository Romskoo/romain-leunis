import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ParallaxImage({ src, className, parentRef}) {
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current || !wrapperRef.current) return;
  
    const wrapperHeight = wrapperRef.current.offsetHeight;
  
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "bottom 80%",
      end: `top+=${wrapperHeight} 20%`,
      markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        let scale = 1;
  
        if (progress < 0.2) {
          scale = 1 + progress * 0.5; // Zoom dans les 20% supérieurs
        } else if (progress > 0.8) {
          scale = 1 + (1 - progress) * 0.5; // Dézoom dans les 20% inférieurs
        } else {
          scale = 1.1; // Maintien du zoom au centre
        }
  
        gsap.to(imageRef.current, { scale, ease: "none" });
      },
    });
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