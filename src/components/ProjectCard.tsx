type Project = {
  name: string;
  subtitle: string;
  period: string | null;
  type: string;
  bullets: string[];
  tech: string[];
  github: string | null;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="proj-card">
      <div className="proj-header">
        <div className="proj-title-group">
          <h3 className="proj-name">{project.name}</h3>
          <p className="proj-subtitle">{project.subtitle}</p>
        </div>
        <div className="proj-meta-right">
          <span className="proj-type">{project.type}</span>
          {project.period && <span className="proj-period">{project.period}</span>}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="proj-github">
              ↗ GitHub
            </a>
          )}
        </div>
      </div>
      <ul className="proj-bullets">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="tech-stack">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
