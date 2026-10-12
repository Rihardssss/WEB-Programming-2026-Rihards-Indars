export type ProjectStatus = "active" | "done";

export type ProjectFilter = ProjectStatus | "all";

export type Category = "Frontend" | "API" | "JavaScript" | "Design";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  status: ProjectStatus;
  dueDate: string;
  progress: number;
}

export interface Deadline {
  title: string;
  course: string;
  date: string;
  time: string;
}

export type LoadState<T> =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: T };
