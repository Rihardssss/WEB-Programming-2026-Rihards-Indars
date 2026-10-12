import type { Project, Deadline } from "./types";
import { isProject, isDeadline } from "./guards";

async function getJson(url: string): Promise<unknown> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request to ${url} failed with status ${response.status}`);
  }

  const data: unknown = await response.json();
  return data;
}

export async function fetchProjects(): Promise<Project[]> {
  const data = await getJson("/api/projects.json");

  if (!Array.isArray(data) || !data.every(isProject)) {
    throw new Error("Projects came back in an unexpected format.");
  }

  return data;
}

export async function fetchDeadlines(): Promise<Deadline[]> {
  const data = await getJson("/api/deadlines.json");

  if (!Array.isArray(data) || !data.every(isDeadline)) {
    throw new Error("Deadlines came back in an unexpected format.");
  }

  return data;
}
