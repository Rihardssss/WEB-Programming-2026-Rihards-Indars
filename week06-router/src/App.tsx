import { Route, Routes } from "react-router";
import type { CurrentWeather, Deadline, LoadState, Project } from "./types";
import { isProjectList } from "./guards";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import DeadlinesPage from "./pages/DeadlinesPage";
import NotFoundPage from "./pages/NotFoundPage";

interface AppProps {
  projects: LoadState<Project[]>;
  deadlines: LoadState<Deadline[]>;
  weather: LoadState<CurrentWeather>;
  onRetryProjects: () => void;
  onRetryDeadlines: () => void;
}

function withLocalProjects(state: LoadState<Project[]>, local: Project[]): LoadState<Project[]> {
  if (state.status !== "success") {
    return state;
  }
  return { status: "success", data: [...state.data, ...local] };
}

const STORAGE_KEY = "campusflow.week06.localProjects";

function App(props: AppProps) {
  const [localProjects, setLocalProjects] = useLocalStorage<Project[]>(STORAGE_KEY, [], isProjectList);

  const projectsState = withLocalProjects(props.projects, localProjects);

  function handleAdd(project: Project): void {
    setLocalProjects([...localProjects, project]);
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <DashboardPage
              projects={projectsState}
              deadlines={props.deadlines}
              weather={props.weather}
              onRetryProjects={props.onRetryProjects}
              onRetryDeadlines={props.onRetryDeadlines}
            />
          }
        />
        <Route
          path="projects"
          element={<ProjectsPage projects={projectsState} onRetry={props.onRetryProjects} onAdd={handleAdd} />}
        />
        <Route
          path="projects/:projectId"
          element={<ProjectDetailsPage projects={projectsState} onRetry={props.onRetryProjects} />}
        />
        <Route
          path="deadlines"
          element={<DeadlinesPage deadlines={props.deadlines} onRetry={props.onRetryDeadlines} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
