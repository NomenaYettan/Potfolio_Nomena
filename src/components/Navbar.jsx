import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#interests", label: "Centres d'intérêt" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg shadow-primary/5 py-3" : "py-2"
        }`}
      >
        <a
          href="#home"
          className="font-display font-semibold text-lg tracking-tight text-ink"
        >
          NJG<span className="text-gradient">.</span>
        </a>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
        >
          Me contacter
        </a>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden mx-5 mt-2 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="glass-strong rounded-2xl flex flex-col gap-1 p-4 font-medium text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2.5 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
