import { useState } from "react";
import type { LoadState, Project, ProjectFilter } from "../types";
import SectionHeading from "./SectionHeading";
import ProjectFilters from "./ProjectFilters";
import ProjectList from "./ProjectList";

interface ProjectSectionProps {
  state: LoadState<Project[]>;
  onRetry: () => void;
}

function ProjectSection({ state, onRetry }: ProjectSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  return (
    <section className="mx-auto w-full max-w-[1180px] px-3.5 pt-[34px] pb-4 sm:px-5" id="projects">
      <SectionHeading eyebrow="PROJECTS" title="Current work">
        <ProjectFilters current={filter} onChange={setFilter} />
      </SectionHeading>
      <ProjectList state={state} filter={filter} onRetry={onRetry} />
    </section>
  );
}

export default ProjectSection;
