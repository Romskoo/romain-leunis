import "./LanguagePicker.scss";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import IconLanguageWhite from '../../assets/world-white.png';
import IconLanguageBlack from '../../assets/world-black.png';

const LanguagePicker = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: "en", label: "🇬🇧 English" },
        { code: "fr", label: "🇫🇷 Français" },
        { code: "es", label: "🇪🇸 Español" },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="language-picker" ref={dropdownRef}>
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                <img src={IconLanguageWhite} alt="world" className="icon-language"/> {i18n.language.toUpperCase()} ▼
            </button>
            {isOpen && (
                <ul className="dropdown-menu" >
                    {languages.map((lang) => (
                        <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
                            {lang.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguagePicker;
