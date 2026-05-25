import type { Experience } from "@/data/resume";

export default function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <article className="exp-card">
      <div className="exp-meta">
        <span className="exp-index">0{index + 1}</span>
        <span className="exp-period">{experience.period}</span>
        <span className="exp-location">{experience.location}</span>
      </div>
      <div className="exp-body">
        <header className="exp-header">
          <h3 className="exp-role">{experience.role}</h3>
          <p className="exp-company">{experience.company}</p>
        </header>
        <ul className="exp-bullets">
          {experience.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="tech-stack">
          {experience.tech.map((t) => (
            <span key={t} className="skill-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
