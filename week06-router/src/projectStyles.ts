import type { Category, ProjectStatus } from "./types";

export const categoryBadge: Record<Category, string> = {
  Frontend: "bg-[#f0edff] text-[#6352ed]",
  API: "bg-[#eaf3ff] text-[#2f78d6]",
  JavaScript: "bg-[#e9f8f2] text-[#16875b]",
  Design: "bg-[#fff5de] text-[#9a6c16]",
};

export const progressColor: Record<Category, string> = {
  Frontend: "bg-primary",
  API: "bg-accent-blue",
  JavaScript: "bg-accent-green",
  Design: "bg-accent-yellow",
};

export const statusLabel: Record<ProjectStatus, string> = {
  active: "Active",
  done: "Done",
};
