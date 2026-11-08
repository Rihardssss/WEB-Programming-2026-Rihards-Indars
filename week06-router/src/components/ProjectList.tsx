import type { LoadState, Project, ProjectFilter } from "../types";
import ProjectCard from "./ProjectCard";
import { LoadingBox, ErrorBox, EmptyBox } from "./StateBox";

interface ProjectListProps {
  state: LoadState<Project[]>;
  filter: ProjectFilter;
  onRetry: () => void;
}

function ProjectList({ state, filter, onRetry }: ProjectListProps) {
  if (state.status === "loading") {
    return <LoadingBox text="Loading projects…" />;
  }

  if (state.status === "error") {
    return <ErrorBox message={state.message} onRetry={onRetry} />;
  }

  const visible =
    filter === "all" ? state.data : state.data.filter((project) => project.status === filter);

  if (visible.length === 0) {
    return <EmptyBox title="No projects to show" text="Try a different filter or check back later." />;
  }

  return (
    <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
