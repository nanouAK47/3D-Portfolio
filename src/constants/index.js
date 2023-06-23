import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  verifier,
  lapizz,
  carhub,
  sumz,
  metaverse,
  logo1,
  utilisateur,
  hoobank,
} from "../assets";

export const navLinks = [
  {
    id: "a-propos",
    title: "A propos",
  },
  {
    id: "stratégie",
    title: "Stratégie",
  },
  {
    id: "projets",
    title: "Projets",
  },
  {
    id: "avis-clients",
    title: "Avis",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Site professionnel",
    icon: web,
  },
  {
    title: "Site responsive",
    icon: backend,
  },
  {
    title: "Site rapide",
    icon: mobile,
  },
  {
    title: "Site élégant",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Mon expertise",
    company_name: "Simple",
    icon: verifier,
    iconBg: "#32CD32",
    date: "⬅️ 1ère étape",
    points: [
      "Je travaille avec tous types de clients (PME, particuliers...) dans le but de créer un site web de haute qualité.",
      "Je créais le design avec vous et j'assure la compatibilité de votre site web sur tous les navigateurs et les tailles d'écrans.",
    ],
  },
  {
    title: "Rendez-vous",
    company_name: "Audit gratuit",
    icon: verifier,
    iconBg: "#32CD32",
    date: "2ème étape ➡️",
    points: [
      "On prend rendez-vous ensemble afin de discuter de votre projet.",
      "Je vous donnerai des conseils et je répondrai à toutes vos questions.",
    ],
  },
  {
    title: "Devis gratuit",
    company_name: "Prix personnalisé",
    icon: verifier,
    iconBg: "#32CD32",
    date: "⬅️ 3ème étape",
    points: [
      "Je vous envoie un devis détaillé et personnalisé juste après le 1er rendez-vous.",
      "Le paiement peut se faire en plusieurs fois.",
    ],
  },
  {
    title: "Livraison rapide",
    company_name: "Site web",
    icon: verifier,
    iconBg: "#32CD32",
    date: "4ème étape ➡️",
    points: [
      "On prend un 2e rendez-vous pour vous montrer le site web de A à Z.",
      "On décide ensemble des dernières modifications et on publie le site sur Internet.",
    ],
  },
  {
    title: "Après ?",
    company_name: "Dépannage et modification",
    icon: verifier,
    iconBg: "#32CD32",
    date: "⬅️ Dernière étape",
    points: [
      "Je reste en contact si vous avez des questions ou des problèmes.",
      "Enfin, toutes les futures modifications seront facturées selon la demande.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site web aussi beau que notre produit, mais Nael m'a prouvé le contraire.",
    name: "Jimmy",
    designation: "PDG",
    company: "La Pizz",
    image: logo1,
  },
  {
    testimonial:
      "Je n'ai jamais rencontré une personne qui se soucie autant de la réussite de ses clients que Nael.",
    name: "Anonyme",
    designation: "",
    company: "",
    image: utilisateur,
  },
  {
    testimonial:
      "Après que Nael a optimisé notre site web, notre trafic a augmenté de 50 %. Nous ne le remercierons jamais assez !",
    name: "Anonyme",
    designation: "",
    company: "",
    image: utilisateur,
  },
];

const projects = [
  {
    name: "La Pizz",
    description:
      "Toute l'équipe m'a fait entièrement confiance dans la création et le design du site internet. Maintenant, la Pizz possède un site web élégant, un menu interactif et un très bon référencement sur Google !",
    tags: [
      {
        name: "restaurant",
        color: "blue-text-gradient",
      },
      {
        name: "bar",
        color: "green-text-gradient",
      },
      {
        name: "pizza",
        color: "pink-text-gradient",
      },
      {
        name: "neufchâteau",
        color: "pink-text-gradient",
      },
    ],
    image: lapizz,
    source_code_link: "https://la-pizz-neufchateau.fr",
  },
  {
    name: "CarHub",
    description:
      "Objectif : créer un site internet pour une entreprise de location de voiture. Le site web contient un système de réservation et un catalogue complet des voitures disponibles pour la location !",
    tags: [
      {
        name: "location",
        color: "blue-text-gradient",
      },
      {
        name: "voiture",
        color: "green-text-gradient",
      },
      {
        name: "perso",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://carhub-nael.vercel.app",
  },
  {
    name: "Metaverse",
    description:
      "Objectif : créer un site vitrine pour un projet de jeu vidéo dans le metaverse. Le site web contient toutes les informations et les nouveautés sur le jeu vidéo, avec une interface agréable et élégante !",
    tags: [
      {
        name: "metaverse",
        color: "blue-text-gradient",
      },
      {
        name: "site-vitrine",
        color: "green-text-gradient",
      },
      {
        name: "perso",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://metaverse-nael.netlify.app",
  },
  {
    name: "Hoobank",
    description:
      "Objectif : créer un site vitrine pour une banque moderne en ligne. Le site web contient toutes les informations et les nouveautés sur la banque, avec une interface agréable et élégante !",
    tags: [
      {
        name: "banque",
        color: "blue-text-gradient",
      },
      {
        name: "site-vitrine",
        color: "green-text-gradient",
      },
      {
        name: "perso",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://hoobank-nael.netlify.app",
  },
  {
    name: "Sumz",
    description:
      "Objectif : créer un Saas (logiciel) pour les particuliers. Fonctionnement : coller un lien dans la recherche et le site va résumer tout le contenu qu'il y a sur le site que vous avez choisi !",
    tags: [
      {
        name: "Sumz",
        color: "blue-text-gradient",
      },
      {
        name: "SaaS",
        color: "green-text-gradient",
      },
      {
        name: "perso",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://sumz-nael.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
