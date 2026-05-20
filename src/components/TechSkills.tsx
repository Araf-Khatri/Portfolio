type Skills = Record<string, string[]>;

export default function TechSkills({ skills }: { skills: Skills }) {
  return (
    <section className="skills-section">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-group">
          <h3 className="skill-category">{category}</h3>
          <div className="skill-tags">
            {items.map((item) => (
              <span key={item} className="skill-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
