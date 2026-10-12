import type { Project } from "./types";
import { isProject } from "./guards";

const STORAGE_KEY = "campusflow-projects";

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
