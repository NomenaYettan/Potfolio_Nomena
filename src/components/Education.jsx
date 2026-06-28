import { education } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-3">// formation</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Parcours académique
          </h2>
          <p className="text-muted max-w-2xl leading-relaxed mb-12">
            Les grandes étapes de ma formation, du baccalauréat aux
            spécialisations actuelles.
          </p>
        </Reveal>

        <div className="relative pl-8 sm:pl-10">
          <div
            aria-hidden="true"
            className="absolute left-2.5 sm:left-3.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent"
          />

          <ul className="space-y-10">
            {education.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <li className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-8 sm:-left-10 top-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-base"
                  />
                  <div className="glass rounded-2xl p-6">
                    <p className="font-mono text-xs text-primary mb-2">
                      {item.period}
                    </p>
                    <h3 className="font-display font-semibold text-lg text-ink mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-muted mb-3">
                      {item.place}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
