import React, { useEffect, useRef, Children, cloneElement, isValidElement, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ComposantSlideIn = ({ children }) => {
    const childRefs = useRef([]);

    useEffect(() => {
        childRefs.current.forEach((ref, index) => {
            if (ref.current) {
                console.log("ComposantSlideIn: Animating child", index);
                gsap.from(ref.current, {
                    y: "100%",
                    opacity: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top bottom",
                        markers: true,
                    },
                });
            } else {
                console.warn("ComposantSlideIn: Child ref is null", index);
            }
        });
    }, [children]);

    childRefs.current = [];

    return (
        <div className="animated-composant">
            {Children.map(children, (child, index) =>
                isValidElement(child) ? (
                    <Fragment key={index}>
                        {cloneElement(child, {
                            ref: (element) => {
                                if (element) {
                                    childRefs.current[index] = { current: element };
                                }
                            },
                        })}
                    </Fragment>
                ) : null
            )}
        </div>
    );
};

export default ComposantSlideIn;