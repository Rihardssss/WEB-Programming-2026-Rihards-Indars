import type { Project, Deadline } from "./types";

export const initialProjects: Project[] = [
  {
    id: "p1",
    title: "Responsive Portfolio",
    description: "Create a polished portfolio with reusable components and responsive layouts.",
    category: "Frontend",
    status: "active",
    dueDate: "2026-09-21",
    progress: 72,
  },
  {
    id: "p2",
    title: "Weather Dashboard",
    description: "Fetch remote data, handle loading states, and present forecast information clearly.",
    category: "API",
    status: "active",
    dueDate: "2026-09-28",
    progress: 45,
  },
  {
    id: "p3",
    title: "Task Manager",
    description: "Build a small CRUD interface with filtering, local storage, and form validation.",
    category: "JavaScript",
    status: "done",
    dueDate: "2026-09-07",
    progress: 100,
  },
];

export const deadlines: Deadline[] = [
  {
    title: "Tailwind migration",
    course: "Web Programming",
    date: "2026-09-18",
    time: "23:59",
  },
  {
    title: "Portfolio checkpoint",
    course: "Web Programming",
    date: "2026-09-21",
    time: "18:00",
  },
  {
    title: "Weather Dashboard",
    course: "Web Programming",
    date: "2026-09-28",
    time: "23:59",
  },
];
