import type { Project } from "./types";

const STORAGE_KEY = "campusflow-projects";

const VALID_CATEGORIES = ["Frontend", "API", "JavaScript", "Design"];

function isProject(value: unknown): value is Project {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.title === "string" &&
    typeof candidate.description === "string" &&
    typeof candidate.category === "string" &&
    VALID_CATEGORIES.includes(candidate.category) &&
    (candidate.status === "active" || candidate.status === "done") &&
    typeof candidate.dueDate === "string" &&
    typeof candidate.progress === "number" &&
    Number.isFinite(candidate.progress)
  );
}

export function loadProjects(fallback: Project[]): Project[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return fallback;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.every(isProject)) {
      return parsed;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

export function saveProjects(projects: Project[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}
