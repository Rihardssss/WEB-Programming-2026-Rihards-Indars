import "./style.css";
import type { Project, ProjectFilter } from "./types";
import { initialProjects, deadlines } from "./data";
import { renderProjects, renderDeadlines } from "./render";

let projects: Project[] = initialProjects;
let currentFilter: ProjectFilter = "all";

function visibleProjects(): Project[] {
  if (currentFilter === "all") {
    return projects;
  }
  return projects.filter((project) => project.status === currentFilter);
}

function refreshProjects(): void {
  renderProjects(visibleProjects());
}

renderDeadlines(deadlines);
refreshProjects();

const menuButton = document.querySelector<HTMLButtonElement>("#menuButton");
const mainNav = document.querySelector<HTMLElement>("#mainNav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const opening = mainNav.classList.contains("hidden");

    mainNav.classList.toggle("hidden", !opening);
    mainNav.classList.toggle("flex", opening);

    menuButton.setAttribute("aria-expanded", String(opening));
  });
}

const filterButtons = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
const ACTIVE_CLASSES = ["bg-[#f0f2f7]", "text-app-text"];
const INACTIVE_CLASSES = ["text-app-muted"];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.filter;
    if (value === "all" || value === "active" || value === "done") {
      currentFilter = value;
    }

    filterButtons.forEach((item) => {
      item.classList.remove(...ACTIVE_CLASSES, ...INACTIVE_CLASSES);
      item.classList.add(...INACTIVE_CLASSES);
    });
    button.classList.remove(...INACTIVE_CLASSES);
    button.classList.add(...ACTIVE_CLASSES);

    refreshProjects();
  });
});
