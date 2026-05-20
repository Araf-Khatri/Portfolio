import { resume } from "@/data/resume";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const CreateHeroLink: React.FC<{
  icon: React.ReactNode;
  href: string;
  children: React.ReactNode;
  target?: string;
}> = ({ icon, href, children, target = "_self" }) => (
  <a href={href} className="link-pill" target={target} rel="noreferrer">
    {icon} <span>{children}</span>
  </a>
);

export default function Hero() {
  const { name, title, summary, contact } = resume;

  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <h1 className="hero-name">{name}</h1>
          <p className="hero-title">{title}</p>
        </div>
        <div className="hero-right">
          <p className="hero-summary">{summary}</p>
          <nav className="hero-links">
            <CreateHeroLink
              icon={<HiOutlineMail />}
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </CreateHeroLink>
            <CreateHeroLink
              icon={<AiOutlineLinkedin />}
              href={contact.linkedin}
              target="_blank"
            >
              LinkedIn
            </CreateHeroLink>
            <a
              href={contact.github}
              className="link-pill"
              target="_blank"
              rel="noreferrer"
            >
              ↗ GitHub
            </a>
            <a href={`tel:${contact.phone}`} className="link-pill">
              ☎ {contact.phone}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
