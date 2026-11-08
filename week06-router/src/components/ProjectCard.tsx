import { Link } from "react-router";
import type { Category, Project } from "../types";

const CATEGORY_BADGE_CLASS: Record<Category, string> = {
  Frontend: "bg-[#f0edff] text-[#6352ed]",
  API: "bg-[#eaf3ff] text-[#2f78d6]",
  JavaScript: "bg-[#e9f8f2] text-[#16875b]",
  Design: "bg-[#fff5de] text-[#9a6c16]",
};

const CATEGORY_BAR_CLASS: Record<Category, string> = {
  Frontend: "bg-primary",
  API: "bg-accent-blue",
  JavaScript: "bg-accent-green",
  Design: "bg-accent-yellow",
};

function formatDateShort(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const statusClasses =
    project.status === "done" ? "bg-[#edf9f4] text-accent-green" : "bg-[#eef6ff] text-accent-blue";
  const dueWord = project.status === "done" ? "Submitted" : "Due";

  return (
    <article
      className="rounded-card border border-app-line bg-app-surface p-[22px] transition-all duration-[180ms] hover:-translate-y-[3px] hover:border-[#d5d9e6] hover:shadow-soft"
      data-status={project.status}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex min-h-[25px] items-center rounded-full px-[9px] text-[10px] font-extrabold ${CATEGORY_BADGE_CLASS[project.category]}`}
        >
          {project.category}
        </span>
        <span
          className={`inline-flex min-h-[25px] items-center rounded-full px-[9px] text-[10px] font-extrabold ${statusClasses}`}
        >
          {project.status === "done" ? "Done" : "Active"}
        </span>
      </div>

      <h3 className="mt-6 mb-2 text-xl tracking-[-0.025em]">{project.title}</h3>
      <p className="m-0 min-h-[66px] text-[13px] text-app-muted">{project.description}</p>

      <div className="mt-[22px] mb-[9px] flex items-center justify-between gap-3 text-[10px] font-bold text-app-muted">
        <span>
          {dueWord} {formatDateShort(project.dueDate)}
        </span>
        <span>{project.progress}% complete</span>
      </div>

      <div className="h-[7px] overflow-hidden rounded-full bg-[#eceef4]">
        <div
          className={`h-full rounded-full ${CATEGORY_BAR_CLASS[project.category]}`}
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>

      <Link
        className="mt-[18px] inline-block text-xs font-extrabold text-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        to={`/projects/${project.id}`}
      >
        {project.status === "done" ? "View submission →" : "Open project →"}
      </Link>
    </article>
  );
}

export default ProjectCard;
