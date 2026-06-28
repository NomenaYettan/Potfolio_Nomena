import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

// TODO (à compléter par Nomena) : remplacer ces "#" par tes vrais profils
const GITHUB_URL = "#";
const LINKEDIN_URL = "#";
const CONTACT_EMAIL = "nomenayettan@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-display font-semibold text-ink">
          NJG<span className="text-gradient">.</span>
        </p>

        <p className="text-sm text-muted text-center">
          © {year} Nomena Jean Gayetan Randriambola. Tous droits réservés.
        </p>

        <div className="flex items-center gap-4 text-muted">
          <a
            href="https://github.com/NomenaYettan"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <SiGithub size={18} />
          </a>
          <a
            href={"https://www.linkedin.com/in/nomena-y%C3%ABttan-73078441a/"}
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <HiOutlineMail size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
