import ImgForgeupMobile from '../assets/forgeup-mobile.webp';
import ImgEventswMobile from '../assets/eventsw-mobile.png';
import ImgPanepintoMobile from '../assets/panepinto-mobile.png';
import ImgMavieMobile from '../assets/mavie-mobile.png';
import ImgTrombiMobile from '../assets/trombi-mobile.png';
import ImgFlexAppMobile from '../assets/flexapp-mobile.png';
import ImgRestaurantMobile from '../assets/restaurant-mobile.png';

const projects = [
  {
    slug: "forgeup",
    libelle: "itemForgeup",
    image: ImgForgeupMobile,
    technos: ["NextJs", "Tailwind", "MySQL", "Figma", "Nginx", "GitHub actions", "Claude code", "PWA"],
  },
  {
    slug: "eventsw",
    libelle: "itemEventSW",
    image: ImgEventswMobile,
    technos: ["ReactJs", "NodeJs", "MySQL", "Figma", "Nginx", "GitHub actions"],
  },
  {
    slug: "panepinto",
    libelle: "itemStudioPanepinto",
    image: ImgPanepintoMobile,
    technos: ["NextJs", "Tailwind", "Figma", "Nginx"],
  },
  {
    slug: "mavie",
    libelle: "itemMavie",
    image: ImgMavieMobile,
    technos: ["ReactJs", "C#", "SQLServer", "Nginx", "Gitlab"],
  },
  {
    slug: "trombi",
    libelle: "itemTrombi",
    image: ImgTrombiMobile,
    technos: ["ReactJs", "C#", "SQLServer", "ElasticSearch", "Nginx", "Gitlab"],
  },
  {
    slug: "flexapp",
    libelle: "itemFlexApp",
    image: ImgFlexAppMobile,
    technos: ["C#", "SQLServer", "ReactJs", "IOnic", "Typescript", "Gitlab"],
  },
  {
    slug: "restaurant",
    libelle: "itemRestaurant",
    image: ImgRestaurantMobile,
    technos: ["ReactJs", "Figma", "Nginx", "Github"],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}

export default projects;
