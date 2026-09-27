import "./style.css";
import type { Project, Category, ProjectFilter } from "./types";
import { initialProjects, deadlines } from "./data";
import { renderProjects, renderDeadlines } from "./render";
import { loadProjects, saveProjects } from "./storage";

let projects: Project[] = loadProjects(initialProjects);
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

function showFieldError(id: string, message: string): void {
  const el = document.querySelector<HTMLElement>(`#${id}`);
  if (!el) {
    return;
  }
  el.textContent = message;
  el.classList.remove("hidden");
}

function clearFormErrors(): void {
  const errorEls = document.querySelectorAll<HTMLElement>("[id$='Error']");
  errorEls.forEach((el) => {
    el.textContent = "";
    el.classList.add("hidden");
  });
}

const addProjectForm = document.querySelector<HTMLFormElement>("#addProjectForm");

if (addProjectForm) {
  addProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFormErrors();

    const titleInput = document.querySelector<HTMLInputElement>("#projectTitle");
    const descriptionInput = document.querySelector<HTMLTextAreaElement>("#projectDescription");
    const categorySelect = document.querySelector<HTMLSelectElement>("#projectCategory");
    const dueDateInput = document.querySelector<HTMLInputElement>("#projectDueDate");
    const progressInput = document.querySelector<HTMLInputElement>("#projectProgress");

    if (!titleInput || !descriptionInput || !categorySelect || !dueDateInput || !progressInput) {
      return;
    }

    let hasError = false;

    const title = titleInput.value.trim();
    if (title.length < 3) {
      showFieldError("projectTitleError", "Title needs at least 3 characters.");
      hasError = true;
    }

    const description = descriptionInput.value.trim();
    if (description.length < 10) {
      showFieldError("projectDescriptionError", "Description needs at least 10 characters.");
      hasError = true;
    }

    const category = categorySelect.value;
    if (category === "") {
      showFieldError("projectCategoryError", "Pick a category.");
      hasError = true;
    }

    const dueDate = dueDateInput.value;
    if (dueDate === "") {
      showFieldError("projectDueDateError", "Pick a due date.");
      hasError = true;
    }

    const progressValue = Number(progressInput.value);
    const progressIsValid =
      progressInput.value !== "" &&
      Number.isInteger(progressValue) &&
      progressValue >= 0 &&
      progressValue <= 100;

    if (!progressIsValid) {
      showFieldError("projectProgressError", "Progress must be a whole number from 0 to 100.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const newProject: Project = {
      id: crypto.randomUUID(),
      title,
      description,
      category: category as Category,
      status: progressValue === 100 ? "done" : "active",
      dueDate,
      progress: progressValue,
    };

    projects = [...projects, newProject];
    saveProjects(projects);
    refreshProjects();

    addProjectForm.reset();
  });
}
