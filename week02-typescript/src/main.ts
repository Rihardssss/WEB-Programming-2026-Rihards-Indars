import "./style.css";
import { initialProjects, deadlines } from "./data";
import { renderProjects, renderDeadlines } from "./render";

renderDeadlines(deadlines);
renderProjects(initialProjects);
