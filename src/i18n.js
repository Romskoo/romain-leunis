import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";
import translationES from "./locales/es.json";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  es: { translation: translationES }
};

i18n
  .use(initReactI18next) // Intégration avec React
  .use(LanguageDetector) // Détection automatique de la langue
  .init({
    resources,
    lng: "fr", // Langue fixe au démarrage : le serveur (Next.js SSR) n'a pas
    // accès à navigator/localStorage, donc laisser LanguageDetector deviner
    // la langue au tout premier rendu fait diverger le HTML serveur/client
    // (erreur d'hydratation). On fige "fr" pour ce premier rendu, puis on
    // restaure la langue mémorisée après le montage (voir LanguagePicker).
    fallbackLng: "en", // Langue par défaut
    interpolation: { escapeValue: false }
  });

export default i18n;
