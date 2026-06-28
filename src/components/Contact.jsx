import { useState } from "react";
import { HiOutlineMail, HiOutlinePaperAirplane, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "nomenayettan@gmail.com";
const CONTACT_PHONE = "032 71 605 71";
const CONTACT_LOCATION = "Andrainjato - Fianarantsoa";

// TODO (à compléter par Nomena) : remplacer ces "#" par tes vrais profils
const GITHUB_URL = "https://github.com/NomenaYettan";
const LINKEDIN_URL = "https://www.linkedin.com/in/nomena-y%C3%ABttan-73078441a/";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${form.name || "un visiteur"} — Portfolio`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white/40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-3">// contact</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-muted max-w-2xl leading-relaxed mb-12">
            Une question, une opportunité ou simplement envie d'échanger ?
            Envoyez-moi un message.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8">
          <Reveal className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 sm:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-line bg-white/70 px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-line bg-white/70 px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Votre message…"
                  className="w-full rounded-xl border border-line bg-white/70 px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                Envoyer le message
                <HiOutlinePaperAirplane className="rotate-90" size={16} />
              </button>
              <p className="text-xs text-muted">
                L'envoi ouvre votre client mail avec le message pré-rempli.
              </p>
            </form>
          </Reveal>

          <Reveal delay={120} className="md:col-span-2">
            <div className="glass rounded-2xl p-7 sm:p-8 h-full flex flex-col">
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                Retrouvez-moi aussi ici
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                N'hésitez pas à me suivre ou à me contacter directement sur
                ces plateformes.
              </p>

              <div className="space-y-3 mt-auto">
                <a
                  href={GITHUB_URL}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/70 hover:bg-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ink text-white">
                    <SiGithub size={18} />
                  </span>
                  <span className="text-sm font-medium text-ink group-hover:text-primary transition-colors">
                    GitHub
                  </span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/70 hover:bg-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0A66C2] text-white">
                    <FaLinkedin size={18} />
                  </span>
                  <span className="text-sm font-medium text-ink group-hover:text-primary transition-colors">
                    LinkedIn
                  </span>
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/70 hover:bg-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                    <HiOutlineMail size={18} />
                  </span>
                  <span className="text-sm font-medium text-ink group-hover:text-primary transition-colors break-all">
                    {CONTACT_EMAIL}
                  </span>
                </a>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/70 hover:bg-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                    <HiOutlinePhone size={18} />
                  </span>
                  <span className="text-sm font-medium text-ink group-hover:text-primary transition-colors">
                    {CONTACT_PHONE}
                  </span>
                </a>
                <div className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/70">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                    <HiOutlineLocationMarker size={18} />
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {CONTACT_LOCATION}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
