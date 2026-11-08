import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { fetchDeadlines, fetchProjects, fetchWeather } from "./api.ts";
import type { CurrentWeather, Deadline, LoadState, Project } from "./types.ts";

const container = document.getElementById("root");
if (container === null) {
  throw new Error("Element #root not found.");
}
const root = createRoot(container);

let projects: LoadState<Project[]> = { status: "loading" };
let deadlines: LoadState<Deadline[]> = { status: "loading" };
let weather: LoadState<CurrentWeather> = { status: "loading" };

function render(): void {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App
          projects={projects}
          deadlines={deadlines}
          weather={weather}
          onRetryProjects={() => void loadProjects()}
          onRetryDeadlines={() => void loadDeadlines()}
        />
      </BrowserRouter>
    </StrictMode>,
  );
}

async function loadProjects(): Promise<void> {
  projects = { status: "loading" };
  render();

  try {
    const data = await fetchProjects();
    projects = { status: "success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load projects.";
    projects = { status: "error", message };
  }

  render();
}

async function loadDeadlines(): Promise<void> {
  deadlines = { status: "loading" };
  render();

  try {
    const data = await fetchDeadlines();
    deadlines = { status: "success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load deadlines.";
    deadlines = { status: "error", message };
  }

  render();
}

async function loadWeather(): Promise<void> {
  weather = { status: "loading" };
  render();

  try {
    const data = await fetchWeather();
    weather = { status: "success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load weather.";
    weather = { status: "error", message };
  }

  render();
}

render();
void loadProjects();
void loadDeadlines();
void loadWeather();
