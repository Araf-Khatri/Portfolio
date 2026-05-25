import type { Certificate, Education } from "@/data/resume";

export default function EducationCerts({
  education,
  certifications,
}: {
  education: Education;
  certifications: Certificate[];
}) {
  return (
    <div className="edu-certs-grid">
      <div className="edu-card">
        <span className="section-eyebrow">Education</span>
        <h3 className="edu-degree">{education.degree}</h3>
        <p className="edu-institution">{education.institution}</p>
        <div className="edu-meta">
          <span>{education.period}</span>
          <span className="edu-cgpa">CGPA {education.cgpa}</span>
        </div>
      </div>

      <div className="certs-card">
        <span className="section-eyebrow">Certifications &amp; Achievements</span>
        <ul className="certs-list">
          {certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
