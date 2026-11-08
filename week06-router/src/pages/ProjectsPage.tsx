import type { LoadState, Project } from "../types";
import ProjectSection from "../components/ProjectSection";

interface ProjectsPageProps {
  projects: LoadState<Project[]>;
  onRetry: () => void;
  onAdd: (project: Project) => void;
}

function ProjectsPage({ projects, onRetry, onAdd }: ProjectsPageProps) {
  return <ProjectSection state={projects} onRetry={onRetry} onAdd={onAdd} />;
}

export default ProjectsPage;
