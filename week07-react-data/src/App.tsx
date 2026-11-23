import { Route, Routes } from "react-router";
import type { LoadState, Project } from "./types";
import { isProjectList } from "./guards";
import { fetchDeadlines, fetchProjects } from "./api";
import { useFetch } from "./hooks/useFetch";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import DeadlinesPage from "./pages/DeadlinesPage";
import NotFoundPage from "./pages/NotFoundPage";

function withLocalProjects(state: LoadState<Project[]>, local: Project[]): LoadState<Project[]> {
  if (state.status !== "success") {
    return state;
  }
  return { status: "success", data: [...state.data, ...local] };
}

const STORAGE_KEY = "campusflow.week07.localProjects";

function App() {
  const { state: projects, retry: onRetryProjects } = useFetch(fetchProjects);
  const { state: deadlines, retry: onRetryDeadlines } = useFetch(fetchDeadlines);
  const [localProjects, setLocalProjects] = useLocalStorage<Project[]>(STORAGE_KEY, [], isProjectList);

  const projectsState = withLocalProjects(projects, localProjects);

  function handleAdd(project: Project): void {
    setLocalProjects([...localProjects, project]);
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <DashboardPage projects={projectsState} deadlines={deadlines} onRetryDeadlines={onRetryDeadlines} />
          }
        />
        <Route
          path="projects"
          element={<ProjectsPage projects={projectsState} onRetry={onRetryProjects} onAdd={handleAdd} />}
        />
        <Route
          path="projects/:projectId"
          element={<ProjectDetailsPage projects={projectsState} onRetry={onRetryProjects} />}
        />
        <Route path="deadlines" element={<DeadlinesPage deadlines={deadlines} onRetry={onRetryDeadlines} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
