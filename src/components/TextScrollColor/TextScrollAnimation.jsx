import React, { useState, useEffect } from 'react';
import './TextScrollAnimation.css';

const calculateTextColor = (scrollPosition) => {
  const hue = scrollPosition % 360;
  return `hsl(${hue}, 100%, 50%)`;
};

const TextScrollAnimation = ({ text }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      setScrollPosition(window.scrollY + e.deltaY);
    };

    const handleScrollBar = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('scroll', handleScrollBar);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScrollBar);
    };
  }, []);

  const textColor = calculateTextColor(scrollPosition);

  return (
    <section className="scroll-color-section">
      <p style={{ color: textColor }}>{text}</p>
    </section>
  );
};

export default TextScrollAnimation;