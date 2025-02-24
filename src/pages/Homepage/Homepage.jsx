import './Homepage.scss';
import { useRef,useEffect,useState } from "react";

import Hook from './Hook2/Hook';
import Presentation from './Presentation/Presentation';
import Skills from './Skills/Skills';

const Homepage = () => {
    const scrollContainer = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Gestion du scroll horizontal
    const handleScroll = (event) => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += event.deltaY * 2; // Transforme le scroll vertical en horizontal
            updateProgress(); // Met à jour la barre de progression
        }
    };

    // Mise à jour de la barre de progression
    const updateProgress = () => {
        if (scrollContainer.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(progress);
        }
    };

    // Écouteur pour le scroll
    useEffect(() => {
        const container = scrollContainer.current;
        if (container) {
            container.addEventListener("scroll", updateProgress);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", updateProgress);
            }
        };
    }, []);

    return (
        <div className="homepage-container">
            {/* Barre de progression */}
            <div className="progress-bar">
                <div className="progress" style={{ width: `${scrollProgress}%` }}></div>
            </div>

            {/* Contenu scrollable */}
            <div className="homepage" ref={scrollContainer} onWheel={handleScroll}>
                <Hook id="hook" />
                <Presentation />
                <Skills id="skills" />
            </div>
        </div>
    );
};

export default Homepage;