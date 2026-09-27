import type { Project, Deadline, Category } from "./types";

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

function daysUntil(dateStr: string): number {
  const [year, month, day] = dateStr.split("-").map(Number);
  const target = new Date(year, month - 1, day);
  target.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = target.getTime() - today.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

function deadlineBadge(dateStr: string): { text: string; classes: string } {
  const diff = daysUntil(dateStr);

  if (diff < 0) {
    return { text: "Overdue", classes: "bg-[#fdeeee] text-accent-red" };
  }
  if (diff === 0) {
    return { text: "Today", classes: "bg-[#fdeeee] text-accent-red" };
  }
  if (diff <= 3) {
    const label = diff === 1 ? "1 day" : `${diff} days`;
    return { text: label, classes: "bg-[#fdeeee] text-accent-red" };
  }
  if (diff <= 7) {
    return { text: `${diff} days`, classes: "bg-[#fff5de] text-accent-yellow" };
  }
  return { text: `${diff} days`, classes: "bg-[#f1f3f6] text-[#6f7788]" };
}

function createProjectCard(project: Project): HTMLElement {
  const card = document.createElement("article");
  card.className =
    "rounded-card border border-app-line bg-app-surface p-[22px] transition-all duration-[180ms] hover:-translate-y-[3px] hover:border-[#d5d9e6] hover:shadow-soft";
  card.dataset.status = project.status;

  const top = document.createElement("div");
  top.className = "flex items-center justify-between gap-3";

  const categoryBadge = document.createElement("span");
  categoryBadge.className = `inline-flex min-h-[25px] items-center rounded-full px-[9px] text-[10px] font-extrabold ${CATEGORY_BADGE_CLASS[project.category]}`;
  categoryBadge.textContent = project.category;

  const statusBadge = document.createElement("span");
  const statusClasses =
    project.status === "done"
      ? "bg-[#edf9f4] text-accent-green"
      : "bg-[#eef6ff] text-accent-blue";
  statusBadge.className = `inline-flex min-h-[25px] items-center rounded-full px-[9px] text-[10px] font-extrabold ${statusClasses}`;
  statusBadge.textContent = project.status === "done" ? "Done" : "Active";

  top.appendChild(categoryBadge);
  top.appendChild(statusBadge);

  const title = document.createElement("h3");
  title.className = "mt-6 mb-2 text-xl tracking-[-0.025em]";
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "m-0 min-h-[66px] text-[13px] text-app-muted";
  description.textContent = project.description;

  const meta = document.createElement("div");
  meta.className = "mt-[22px] mb-[9px] flex items-center justify-between gap-3 text-[10px] font-bold text-app-muted";

  const dueLabel = document.createElement("span");
  const dueWord = project.status === "done" ? "Submitted" : "Due";
  dueLabel.textContent = `${dueWord} ${formatDateShort(project.dueDate)}`;

  const progressLabel = document.createElement("span");
  progressLabel.textContent = `${project.progress}% complete`;

  meta.appendChild(dueLabel);
  meta.appendChild(progressLabel);

  const track = document.createElement("div");
  track.className = "h-[7px] overflow-hidden rounded-full bg-[#eceef4]";

  const fill = document.createElement("div");
  fill.className = `h-full rounded-full ${CATEGORY_BAR_CLASS[project.category]}`;
  fill.style.width = `${project.progress}%`;
  track.appendChild(fill);

  const link = document.createElement("a");
  link.className =
    "mt-[18px] inline-block text-xs font-extrabold text-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
  link.href = "#";
  link.textContent = project.status === "done" ? "View submission →" : "Open project →";

  card.appendChild(top);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(meta);
  card.appendChild(track);
  card.appendChild(link);

  return card;
}

export function renderProjects(projects: Project[]): void {
  const grid = document.querySelector<HTMLElement>("#projectGrid");
  if (!grid) {
    return;
  }

  grid.replaceChildren();
  for (const project of projects) {
    grid.appendChild(createProjectCard(project));
  }

  const activeCount = document.querySelector<HTMLElement>("#activeProjectsCount");
  if (activeCount) {
    const activeProjects = projects.filter((project) => project.status === "active");
    activeCount.textContent = String(activeProjects.length);
  }
}

function createDeadlineItem(deadline: Deadline): HTMLElement {
  const item = document.createElement("article");
  item.className =
    "grid grid-cols-[auto_1fr] items-center gap-[14px] border-b border-app-line py-[14px] px-2 last:border-b-0 sm:grid-cols-[auto_1fr_auto]";

  const [year, month, day] = deadline.date.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);

  const dateBox = document.createElement("div");
  dateBox.className = "grid h-[50px] w-[46px] place-content-center rounded-xl bg-app-surface-soft";

  const dayNumber = document.createElement("strong");
  dayNumber.className = "text-[17px] leading-none";
  dayNumber.textContent = String(day);

  const monthLabel = document.createElement("span");
  monthLabel.className = "mt-1 text-[9px] font-extrabold text-app-muted";
  monthLabel.textContent = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

  dateBox.appendChild(dayNumber);
  dateBox.appendChild(monthLabel);

  const copy = document.createElement("div");
  copy.className = "grid gap-[3px]";

  const title = document.createElement("strong");
  title.className = "text-[13px]";
  title.textContent = deadline.title;

  const courseLine = document.createElement("span");
  courseLine.className = "text-[11px] text-app-muted";
  courseLine.textContent = `${deadline.course} · ${deadline.time}`;

  copy.appendChild(title);
  copy.appendChild(courseLine);

  const badge = deadlineBadge(deadline.date);
  const badgeEl = document.createElement("span");
  badgeEl.className = `col-start-2 inline-flex min-h-[25px] w-fit items-center justify-self-start rounded-full px-[9px] text-[10px] font-extrabold sm:col-auto sm:justify-self-auto ${badge.classes}`;
  badgeEl.textContent = badge.text;

  item.appendChild(dateBox);
  item.appendChild(copy);
  item.appendChild(badgeEl);

  return item;
}

export function renderDeadlines(deadlineList: Deadline[]): void {
  const list = document.querySelector<HTMLElement>("#deadlineList");
  if (!list) {
    return;
  }

  list.replaceChildren();
  for (const deadline of deadlineList) {
    list.appendChild(createDeadlineItem(deadline));
  }
}
