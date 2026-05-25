import EducationCerts from "@/components/EducationCerts";
import ExperienceCard from "@/components/ExperienceCard";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TechSkills from "@/components/TechSkills";
import { resume } from "@/data/resume";

// SSR: runs on every request on the server
export const dynamic = "force-dynamic";

async function getResumeData() {
  // In a real app, fetch from a CMS, DB, or API here.
  // Data is fetched server-side on every request.
  return resume;
}

export default async function Home() {
  const data = await getResumeData();

  return (
    <main className="page">
      {/* Hero */}
      <Hero />

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">01</span> Technical Skills
        </h2>
        <TechSkills skills={data.skills} />
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">02</span> Experience
        </h2>
        <div className="exp-list">
          {data.experience.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} index={i} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">03</span> Projects
        </h2>
        <ProjectsSection projects={data.projects} />
      </section>

      {/* Education & Certs */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">04</span> Education &amp; Achievements
        </h2>
        <EducationCerts
          education={data.education}
          certifications={data.certifications}
        />
      </section>

      <footer className="footer">
        <p>Araf Ibrahim Khatri · {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
