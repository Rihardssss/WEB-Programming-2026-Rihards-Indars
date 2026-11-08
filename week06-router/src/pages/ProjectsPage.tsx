import type { LoadState, Project } from "../types";

interface ProjectsPageProps {
  projects: LoadState<Project[]>;
  onRetry: () => void;
  onAdd: (project: Project) => void;
}

function ProjectsPage(_props: ProjectsPageProps) {
  return <h1 className="p-8 text-3xl font-bold text-primary">Projects</h1>;
}

export default ProjectsPage;
