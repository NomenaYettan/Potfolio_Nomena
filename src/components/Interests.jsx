import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineTranslate,
  HiOutlineBadgeCheck,
  HiOutlineExternalLink,
} from "react-icons/hi";
import {
  interests,
  qualities,
  languages,
  certifications,
} from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Interests() {
  const hasCertifications = certifications && certifications.length > 0;

  return (
    <section id="interests" className="relative py-24 sm:py-32 bg-white/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-3">
            // centres d'intérêt
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Au-delà du code
          </h2>
          <p className="text-muted max-w-2xl leading-relaxed mb-12">
            Mes qualités, les langues que je parle et ce qui m'anime en
            dehors du développement.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Centres d'intérêt */}
          <Reveal>
            <div className="glass rounded-2xl p-7 h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-5">
                <HiOutlineHeart size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-4">
                Centres d'intérêt
              </h3>
              <ul className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <li
                    key={item.name}
                    className="text-sm font-medium px-3.5 py-1.5 rounded-full bg-primary/10 text-primary-dark"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Qualités */}
          <Reveal delay={100}>
            <div className="glass rounded-2xl p-7 h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-5">
                <HiOutlineSparkles size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-4">
                Qualités
              </h3>
              <ul className="space-y-2.5">
                {qualities.map((q) => (
                  <li
                    key={q}
                    className="flex items-center gap-2.5 text-sm text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Langues */}
          <Reveal delay={200}>
            <div className="glass rounded-2xl p-7 h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-5">
                <HiOutlineTranslate size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-4">
                Langues
              </h3>
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium text-ink">{lang.name}</span>
                    <span className="text-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Certifications — affichées seulement si renseignées dans portfolioData.js */}
        {hasCertifications && (
          <div className="mt-16">
            <Reveal>
              <p className="font-mono text-sm text-primary mb-3">
                // certifications
              </p>
              <h3 className="font-display font-semibold text-2xl text-ink mb-8">
                Certifications obtenues
              </h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 100}>
                  <div className="glass rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-4">
                      <HiOutlineBadgeCheck size={22} />
                    </div>
                    <h4 className="font-display font-semibold text-base text-ink mb-1 leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted mb-1">{cert.issuer}</p>
                    <p className="font-mono text-xs text-primary mb-5">
                      {cert.date}
                    </p>
                    <a
                      href={cert.link}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-primary transition-colors"
                    >
                      Voir la certification
                      <HiOutlineExternalLink size={15} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
