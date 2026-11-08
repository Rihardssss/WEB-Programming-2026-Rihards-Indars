import type { CurrentWeather, Deadline, LoadState, Project } from "../types";

interface DashboardPageProps {
  projects: LoadState<Project[]>;
  deadlines: LoadState<Deadline[]>;
  weather: LoadState<CurrentWeather>;
  onRetryProjects: () => void;
  onRetryDeadlines: () => void;
}

function DashboardPage(_props: DashboardPageProps) {
  return <h1 className="p-8 text-3xl font-bold text-primary">Dashboard</h1>;
}

export default DashboardPage;
