import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineUser } from "react-icons/hi";
import Reveal from "./Reveal";

const cards = [
  {
    icon: HiOutlineUser,
    title: "Qui je suis",
    text:
      "Étudiant en deuxième année de licence informatique à l'EMIT de Fianarantsoa, passionné par le développement web et les bases de données. Curieux, j'aime apprendre rapidement et travailler en équipe.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Mon parcours",
    text:
      "Après un Baccalauréat Enseignement Général série C, j'ai intégré le parcours DA2I (Développement d'Applications Internet et Intranet) à l'EMIT, où je multiplie les projets académiques en développement web et gestion de bases de données.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Mes objectifs",
    text:
      "Je recherche un stage afin de mettre en pratique mes compétences en conception d'applications web, en développement front-end et en gestion de bases de données, tout en développant de nouvelles compétences professionnelles.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-3">// à propos</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Présentation
          </h2>
          <p className="text-muted max-w-2xl leading-relaxed mb-12">
            Quelques mots pour me présenter, mon chemin jusqu'ici et où je
            souhaite aller.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 120}>
                <div className="glass rounded-2xl p-7 h-full hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
