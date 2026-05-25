"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/resume";
import ProjectCard from "@/components/ProjectCard";

const INITIAL_PROJECT_COUNT = 3;
const PROJECT_REVEAL_COUNT = 4;

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECT_COUNT);

  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [projects, visibleCount],
  );
  const hiddenCount = Math.max(projects.length - visibleCount, 0);

  function showMoreProjects() {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + PROJECT_REVEAL_COUNT, projects.length),
    );
  }

  return (
    <div className="proj-list">
      {visibleProjects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}

      {hiddenCount > 0 && (
        <button
          type="button"
          className="proj-card more-projects-card"
          onClick={showMoreProjects}
        >
          <span className="more-projects-count">+{hiddenCount}</span>
          <span className="more-projects-label">See more projects</span>
        </button>
      )}
    </div>
  );
}
