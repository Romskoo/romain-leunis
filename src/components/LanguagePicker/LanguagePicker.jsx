'use client';

import "./LanguagePicker.scss";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import IconLanguageWhite from '../../assets/world-white.png';
import IconLanguageBlack from '../../assets/world-black.png';

const LanguagePicker = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const dropdownRef = useRef(null);

    // i18n starts on a fixed "fr" (see src/i18n.js) so the server and the
    // client render the exact same text on first paint. Once mounted, we
    // restore whatever language the user previously picked (persisted by
    // i18next-browser-languagedetector under this key) — this happens after
    // hydration, so it's a normal client-side update, not a mismatch.
    useEffect(() => {
        const stored = window.localStorage.getItem("i18nextLng");
        const short = stored?.split("-")[0];
        if ((short === "en" || short === "fr" || short === "es") && short !== i18n.language) {
            i18n.changeLanguage(short);
        }
        setMounted(true);
    }, [i18n]);

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
                <img src={IconLanguageWhite.src} alt="world" className="icon-language"/> {mounted ? i18n.language.split("-")[0].toUpperCase() : "FR"} ▼
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
