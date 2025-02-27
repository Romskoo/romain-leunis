import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingText({ texte, parentRef }) {
  const textRef = useRef(null);
  let split, tl;

  useEffect(() => {
    if (!parentRef.current) return;

    // Nettoyage des animations existantes
    split && split.revert();
    tl && tl.revert();

    // Découper le texte en mots (au lieu de caractères)
    split = new SplitType(textRef.current, { types: "words" });

    // Timeline GSAP avec ScrollTrigger
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        end: "bottom+=200% top",
        pin: true,
        pinSpacing: true, // Ajout de l'espacement pour éviter le chevauchement
        anticipatePin: 1,
        scrub: 0.75,
      },
    });

    // Animation de changement de couleur progressive
    tl.to(split.words, { // Cibler les mots au lieu des caractères
      color: "#FFF",
      stagger: 0.1, // Décalage progressif sur chaque mot
      duration: 1.5,
    });

    // Nettoyage après resize pour éviter les bugs
    const debouncer = gsap.delayedCall(0.2, () => {
      split.revert();
      tl.revert();
      split = new SplitType(textRef.current, { types: "words" });
    }).pause();

    window.addEventListener("resize", () => debouncer.restart(true));

    return () => {
      split.revert();
      tl.revert();
      window.removeEventListener("resize", () => debouncer.restart(true));
    };
  }, [parentRef]);

  return (
    <div className="scrolling-text">
      <p ref={textRef}>{texte}</p>
    </div>
  );
}