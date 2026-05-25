import type { CSSProperties } from "react";
import type { Project } from "@/data/resume";

const projectAccents = [
  { color: "#66ccff", soft: "#66ccff24" },
  { color: "#f0a060", soft: "#f0a16024" },
  { color: "#8bdc8b", soft: "#8bdc8b24" },
  { color: "#d98bff", soft: "#d98bff24" },
  { color: "#ffd166", soft: "#ffd16624" },
  { color: "#ff7a90", soft: "#ff7a9024" },
];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const projectNumber = String(index + 1).padStart(2, "0");
  const accent = projectAccents[index % projectAccents.length];
  const cardStyle = {
    "--project-accent": accent.color,
    "--project-accent-soft": accent.soft,
  } as CSSProperties;

  return (
    <article
      id={`project-${projectNumber}`}
      className="proj-card"
      style={cardStyle}
      aria-label={`Project ${projectNumber}: ${project.name}`}
    >
      <div className="proj-header">
        <div className="proj-title-group">
          <span className="proj-index">P{projectNumber}</span>
          <h3 className="proj-name">{project.name}</h3>
          <p className="proj-subtitle">{project.subtitle}</p>
        </div>
        <div className="proj-meta-right">
          <span className="proj-type">{project.type}</span>
          {project.period && (
            <span className="proj-period">{project.period}</span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="proj-github"
            >
              ↗ GitHub
            </a>
          )}
        </div>
      </div>
      <div className="proj-content">
        <ul className="proj-bullets">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="tech-stack">
          {project.tech.map((t) => (
            <span key={t} className="skill-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
