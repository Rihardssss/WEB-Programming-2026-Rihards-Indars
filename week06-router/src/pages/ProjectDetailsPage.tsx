import type { LoadState, Project } from "../types";

interface ProjectDetailsPageProps {
  projects: LoadState<Project[]>;
  onRetry: () => void;
}

function ProjectDetailsPage(_props: ProjectDetailsPageProps) {
  return <h1 className="p-8 text-3xl font-bold text-primary">Project details</h1>;
}

export default ProjectDetailsPage;
