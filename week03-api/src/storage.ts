import type { Project } from "./types";
import { isProject } from "./guards";

const STORAGE_KEY = "campusflow.week03.localProjects";

export function loadLocalProjects(): Project[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.every(isProject)) {
      return parsed;
    }
    return [];
  } catch {
    return [];
  }
}

export function saveLocalProjects(projects: Project[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}
