import { useState, useEffect, memo } from "react";
import './TypingText.scss';

const TypingText = ({ 
    text, 
    minTypingSpeed = 50, 
    maxTypingSpeed = 150, 
    minDeletingSpeed = 50, 
    maxDeletingSpeed = 200, 
    pauseTime = 1000, 
    pauseBeforeRewriting = 500 // Nouvelle pause après effacement
}) => {
    const [displayedText, setDisplayedText] = useState(text[0]); // Garde la première lettre
    const [index, setIndex] = useState(1);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteUntil, setDeleteUntil] = useState(1); // Nombre de lettres à effacer aléatoirement

    // Fonction pour générer un délai aléatoire
    const getRandomDelay = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    useEffect(() => {
        let timeout;

        if (!isDeleting && index < text.length) {
            // Ajouter des lettres avec une vitesse aléatoire
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, getRandomDelay(minTypingSpeed, maxTypingSpeed));
        } else if (index === text.length && !isDeleting) {
            // Pause après avoir écrit tout le texte
            timeout = setTimeout(() => {
                const maxDeletable = text.length - 1; // Ne supprime jamais la première lettre
                const randomDelete = Math.max(3, Math.floor(Math.random() * (maxDeletable - 2)) + 2); // Min 3 lettres
                setDeleteUntil(Math.max(1, maxDeletable - randomDelete));
                setIsDeleting(true);
            }, pauseTime);
        } else if (isDeleting && index > deleteUntil) {
            // Supprimer des lettres avec une vitesse aléatoire
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setIndex(index - 1);
            }, getRandomDelay(minDeletingSpeed, maxDeletingSpeed));
        } else if (isDeleting && index === deleteUntil) {
            // Pause après l'effacement avant de recommencer à écrire
            timeout = setTimeout(() => {
                setIsDeleting(false);
            }, pauseBeforeRewriting);
        }

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text, minTypingSpeed, maxTypingSpeed, minDeletingSpeed, maxDeletingSpeed, pauseTime, pauseBeforeRewriting, deleteUntil]);

    return <span className="TypeingText">{displayedText}</span>;
};

export default memo(TypingText);
