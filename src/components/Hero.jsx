import { HiArrowDown, HiOutlineDocumentDownload } from "react-icons/hi";
import avatar from "../assets/avatar.png";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Halos décoratifs en arrière-plan */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary/25 blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-40 w-[24rem] h-[24rem] rounded-full bg-accent/20 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-4">
            Bonjour, je m'appelle
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-ink">
            Nomena Jean Gayetan
            <br />
            <span className="text-gradient">Randriambola</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted font-medium">
            Développeur web
          </p>
          <p className="mt-5 text-muted max-w-md leading-relaxed">
            Étudiant en deuxième année de licence informatique à l'EMIT,
            passionné par le développement web et les bases de données. Je
            recherche un stage pour mettre en pratique mes compétences en
            conception d'applications web et développer de nouvelles
            compétences professionnelles.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              Voir mes projets
              <HiArrowDown className="rotate-[-90deg]" />
            </a>
            <a
              href="/CV_RANDRIAMBOLA_Nomena_Jean_Gayetan.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-ink hover:-translate-y-0.5 transition-all"
            >
              Télécharger mon CV
              <HiOutlineDocumentDownload size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl"
            />
            <img
              src={avatar}
              alt="Photo de profil de Nomena Jean Gayetan Randriambola"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl shadow-primary/20 ring-1 ring-white/60"
            />
          </div>
        </Reveal>
      </div>

      {/* Indicateur de scroll */}
      <a
        href="#about"
        aria-label="Défiler vers la section À propos"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-primary transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <HiArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
