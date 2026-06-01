"use client";
import { resume } from "@/data/resume";
import { useState } from "react";

const CreateHeroLink: React.FC<{
  icon?: React.ReactNode;
  href: string;
  children: React.ReactNode;
  target?: string;
  isCopyMode?: boolean;
  copyText?: string;
}> = ({ icon, href, children, target = "_self", isCopyMode, copyText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isCopyMode) {
      e.preventDefault();
      const textToCopy = copyText || href.replace(/^(mailto|tel):/, "");
      navigator.clipboard.writeText(textToCopy);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <a
        href={href}
        className="link-pill"
        target={target}
        rel="noreferrer"
        onClick={handleClick}
      >
        {icon} <span>{children}</span>
      </a>
      <span className={`copy-tooltip ${showTooltip && "visible"}`}>
        Copied!
      </span>
    </div>
  );
};

export default function Hero() {
  const { name, title, summary, contactLinks, resumeLink } = resume;
  const [isCopyMode, setIsCopyMode] = useState(false);

  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <h1 className="hero-name">{name}</h1>
          <p className="hero-title">{title}</p>

          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="cta-button"
          >
            Download Resume
          </a>
        </div>
        <div className="hero-right">
          <p className="hero-summary">{summary}</p>

          <div className="copy-switch-container">
            <span className={!isCopyMode ? "active" : ""}>Redirect</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isCopyMode}
                onChange={(e) => setIsCopyMode(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
            <span className={isCopyMode ? "active" : ""}>
              Copy to clipboard
            </span>
          </div>

          <nav className="hero-links">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <CreateHeroLink
                  key={index}
                  icon={<Icon />}
                  href={link.href}
                  target={link.target}
                  isCopyMode={isCopyMode}
                  copyText={link.copyText}
                >
                  {link.label}
                </CreateHeroLink>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
