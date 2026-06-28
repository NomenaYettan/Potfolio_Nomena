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
import travelImg from "../assets/project-travel.svg";
import collabImg from "../assets/project-collab.svg";

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

// Projets académiques (issus du CV)
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
    title: "Site web d'une agence de voyage",
    description:
      "Conception d'une plateforme présentant les offres et destinations, avec formulaires interactifs et une interface utilisateur claire, moderne et responsive.",
    image: travelImg,
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
    github: "#",
    demo: null,
  },
  {
    title: "Portfolio collaboratif",
    description:
      "Développement d'un site portfolio en équipe : répartition des tâches, intégration front-end, design responsive et coordination du travail.",
    image: collabImg,
    tags: ["Travail d'équipe", "Front-end", "Responsive"],
    github: "#",
    demo: null,
  },
];

// Certifications — vide pour l'instant (à compléter, voir README)
export const certifications = [];

// Centres d'intérêt (issus du CV)
export const interests = [
  { name: "Jeux vidéo" },
  { name: "Musique" },
  { name: "Football" },
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
