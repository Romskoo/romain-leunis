import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR }
};

i18n
  .use(initReactI18next) // Intégration avec React
  .use(LanguageDetector) // Détection automatique de la langue
  .init({
    resources,
    fallbackLng: "en", // Langue par défaut
    interpolation: { escapeValue: false }
  });

export default i18n;
