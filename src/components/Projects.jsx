import { HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-3">// projets</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Projets réalisés
          </h2>
          <p className="text-muted max-w-2xl leading-relaxed mb-12">
            Une sélection de projets académiques qui illustrent mon parcours,
            de la gestion de bases de données au développement web.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="group glass rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/15 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary/10 text-primary-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm font-medium">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-ink hover:text-primary transition-colors"
                    >
                      <SiGithub size={16} />
                      Code source
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-1.5 text-ink hover:text-primary transition-colors"
                      >
                        <HiOutlineExternalLink size={16} />
                        Démo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
