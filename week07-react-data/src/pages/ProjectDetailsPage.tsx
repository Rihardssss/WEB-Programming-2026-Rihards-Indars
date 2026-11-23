import { Link, useParams } from "react-router";
import type { LoadState, Project } from "../types";
import { LoadingBox, ErrorBox, EmptyBox } from "../components/StateBox";
import { categoryBadge, progressColor, statusLabel } from "../projectStyles";
import { formatDate, daysUntil } from "../format";

interface ProjectDetailsPageProps {
  projects: LoadState<Project[]>;
  onRetry: () => void;
}

function dueText(project: Project): string {
  if (project.status === "done") {
    return `Submitted ${formatDate(project.dueDate)}`;
  }

  const diff = daysUntil(project.dueDate);
  if (diff < 0) {
    return `Overdue since ${formatDate(project.dueDate)}`;
  }

  const dayWord = diff === 1 ? "1 day" : `${diff} days`;
  return `Due ${formatDate(project.dueDate)} — in ${dayWord}`;
}

function ProjectDetailsPage({ projects, onRetry }: ProjectDetailsPageProps) {
  const { projectId } = useParams();

  let body;
  if (projects.status === "loading") {
    body = <LoadingBox text="Loading project…" />;
  } else if (projects.status === "error") {
    body = <ErrorBox message={projects.message} onRetry={onRetry} />;
  } else {
    const project = projects.data.find((item) => item.id === projectId);
    if (project === undefined) {
      body = <EmptyBox title="Project not found" text={`No project matches id "${projectId}".`} />;
    } else {
      const statusClasses =
        project.status === "done" ? "bg-[#edf9f4] text-accent-green" : "bg-[#eef6ff] text-accent-blue";

      body = (
        <article className="rounded-card border border-app-line bg-app-surface p-[26px]">
          <div className="flex items-center justify-between gap-3">
            <span
              className={`inline-flex min-h-[25px] items-center rounded-full px-[9px] text-[10px] font-extrabold ${categoryBadge[project.category]}`}
            >
              {project.category}
            </span>
            <span
              className={`inline-flex min-h-[25px] items-center rounded-full px-[9px] text-[10px] font-extrabold ${statusClasses}`}
            >
              {statusLabel[project.status]}
            </span>
          </div>

          <h1 className="mt-6 mb-2 text-[28px] tracking-[-0.03em]">{project.title}</h1>
          <p className="m-0 text-sm text-app-muted">{project.description}</p>

          <div className="mt-[22px] mb-[9px] flex items-center justify-between gap-3 text-[11px] font-bold text-app-muted">
            <span>{dueText(project)}</span>
            <span>{project.progress}% complete</span>
          </div>

          <div className="h-[7px] overflow-hidden rounded-full bg-[#eceef4]">
            <div
              className={`h-full rounded-full ${progressColor[project.category]}`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </article>
      );
    }
  }

  return (
    <section className="mx-auto w-full max-w-[1180px] px-3.5 pt-[34px] pb-16 sm:px-5">
      <Link
        className="mb-5 inline-block text-xs font-extrabold text-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        to="/projects"
      >
        ← All projects
      </Link>
      {body}
    </section>
  );
}

export default ProjectDetailsPage;
