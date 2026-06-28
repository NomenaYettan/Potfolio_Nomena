import { skills } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-white/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-3">// compétences</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Technologies &amp; outils
          </h2>
          <p className="text-muted max-w-2xl leading-relaxed mb-12">
            Le langage et les outils que j'utilise au quotidien, du
            développement web à la gestion de bases de données.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.name} delay={(i % 4) * 90}>
                <div className="group glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}1A` }}
                  >
                    <Icon size={22} style={{ color: skill.color }} />
                  </div>
                  <span className="font-medium text-sm text-ink">
                    {skill.name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
