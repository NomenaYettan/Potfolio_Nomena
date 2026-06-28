import {
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";
import { FaCss3Alt, FaCode } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import libraryImg from "../assets/project-library.svg";
import smartTrafficImg from "../assets/Capture d'écran 2026-06-21 053105.png";
import portfolioImg from "../assets/portfolio.png";

// Langages / technologies (issus du CV)
export const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "C", icon: FaCode, color: "#5C6BC0" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Git & GitHub", icon: SiGithub, color: "#181717" },
];

// Projets (issus du CV + projets personnels)
export const projects = [
  {
    title: "Application de gestion de bibliothèque",
    description:
      "Mise en place d'un système complet de gestion : base de données, opérations CRUD (livres, utilisateurs, emprunts / retours) et interfaces d'administration.",
    image: libraryImg,
    tags: ["Base de données", "CRUD", "Administration"],
    github: "https://github.com/NomenaYettan/Bibliotheque",
    demo: null,
  },
  {
    title: "Smart Traffic — Assistant de transport urbain",
    description:
      "Assistant de gestion du transport urbain conçu lors de l'EmiHack 4.0 : suivi des trajets, optimisation de la circulation et interface claire pour les usagers, avec une base de données pour la persistance des données.",
    image: smartTrafficImg,
    tags: ["HTML/CSS", "JavaScript", "Base de données", "EmiHack 4.0"],
    github: "https://github.com/NomenaYettan/Assistans_pour_les-transport/",
    demo: null,
  },
  {
    title: "Portfolio personnel",
    description:
      "Ce portfolio lui-même : un site personnel moderne et responsive pour présenter mon profil, mes compétences et mes projets, conçu avec React et Tailwind CSS.",
    image: portfolioImg,
    tags: ["React", "Tailwind CSS", "Responsive"],
    github: "https://github.com/NomenaYettan/Potfolio_Nomena",
    demo: null,
  },
];

// Certifications — vide pour l'instant (à compléter, voir README)
export const certifications = [];

// Centres d'intérêt (issus du CV)
export const interests = [
  { name: "Football" },
  { name: "Développement web" },
  { name: "Nouvelles technologies" },
  { name: "Intelligence artificielle" },
];

// Qualités (issues du CV)
export const qualities = [
  "Curieux",
  "Esprit d'équipe",
  "Capacité d'adaptation",
  "Apprentissage rapide",
];

// Langues (issues du CV)
export const languages = [
  { name: "Français", level: "Niveau B1" },
  { name: "Anglais", level: "Moyen" },
  { name: "Malagasy", level: "Langue maternelle" },
];

// Cursus académique (issu du CV)
export const education = [
  {
    period: "2025 — 2026",
    title: "Deuxième année de licence en informatique (DA2I)",
    place: "EMIT, Fianarantsoa",
    description:
      "Spécialisation en développement informatique et applications, avec un accent sur le développement web et les bases de données.",
  },
  {
    period: "2024 — 2025",
    title: "Première année de licence en informatique (DA2I)",
    place: "EMIT, Fianarantsoa",
    description:
      "Bases de l'algorithmique, de la programmation et des systèmes d'information.",
  },
  {
    period: "2024",
    title: "Baccalauréat Enseignement Général — Série C",
    place: "Madagascar",
    description: "Titulaire du diplôme du Baccalauréat, série scientifique C.",
  },
];
