import "./style.css";
import type { Project, Category, ProjectFilter, LoadState, Deadline, CurrentWeather } from "./types";
import { fetchProjects, fetchDeadlines, fetchWeather } from "./api";
import { renderProjects, renderDeadlines, renderWeather } from "./render";
import { loadLocalProjects, saveLocalProjects } from "./storage";

let apiProjectsState: LoadState<Project[]> = { status: "loading" };
let localProjects: Project[] = loadLocalProjects();
let deadlinesState: LoadState<Deadline[]> = { status: "loading" };
let weatherState: LoadState<CurrentWeather> = { status: "loading" };
let currentFilter: ProjectFilter = "all";

const addProjectSubmit = document.querySelector<HTMLButtonElement>("#addProjectSubmit");

function visibleProjects(): Project[] {
  if (apiProjectsState.status !== "success") {
    return [];
  }

  const all = [...apiProjectsState.data, ...localProjects];
  if (currentFilter === "all") {
    return all;
  }
  return all.filter((project) => project.status === currentFilter);
}

function refreshProjects(): void {
  if (apiProjectsState.status === "success") {
    renderProjects({ status: "success", data: visibleProjects() }, loadProjects);
  } else {
    renderProjects(apiProjectsState, loadProjects);
  }

  if (addProjectSubmit) {
    addProjectSubmit.disabled = apiProjectsState.status !== "success";
  }
}

async function loadProjects(): Promise<void> {
  apiProjectsState = { status: "loading" };
  refreshProjects();

  try {
    const data = await fetchProjects();
    apiProjectsState = { status: "success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load projects.";
    apiProjectsState = { status: "error", message };
  }

  refreshProjects();
}

async function loadDeadlines(): Promise<void> {
  deadlinesState = { status: "loading" };
  renderDeadlines(deadlinesState, loadDeadlines);

  try {
    const data = await fetchDeadlines();
    deadlinesState = { status: "success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load deadlines.";
    deadlinesState = { status: "error", message };
  }

  renderDeadlines(deadlinesState, loadDeadlines);
}

async function loadWeather(): Promise<void> {
  weatherState = { status: "loading" };
  renderWeather(weatherState);

  try {
    const data = await fetchWeather();
    weatherState = { status: "success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load weather.";
    weatherState = { status: "error", message };
  }

  renderWeather(weatherState);
}

void loadProjects();
void loadDeadlines();
void loadWeather();

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

    localProjects = [...localProjects, newProject];
    saveLocalProjects(localProjects);
    refreshProjects();

    addProjectForm.reset();
  });
}
