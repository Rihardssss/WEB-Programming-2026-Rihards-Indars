import type { CurrentWeather, Deadline, LoadState, Project } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import DeadlineSection from "./components/DeadlineSection";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

interface AppProps {
  projects: LoadState<Project[]>;
  deadlines: LoadState<Deadline[]>;
  weather: LoadState<CurrentWeather>;
  onRetryProjects: () => void;
  onRetryDeadlines: () => void;
}

function App(props: AppProps) {
  return (
    <>
      <Header userName="Alex Student" userInitials="AZ" course="Web Programming" />
      <main>
        <Hero />
        <p>{props.weather.status}</p>

        <section className="mx-auto w-full max-w-[1180px] px-3.5 pt-[34px] pb-4 sm:px-5" id="projects">
          <div className="mb-5 flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2.5 text-[11px] font-extrabold tracking-[0.14em] text-primary">PROJECTS</p>
              <h2 className="m-0 text-[28px] tracking-[-0.035em]">Current work</h2>
            </div>
          </div>
          <ProjectList state={props.projects} filter="all" onRetry={props.onRetryProjects} />
        </section>

        <section className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-[18px] px-3.5 pt-[34px] pb-16 sm:px-5 min-[960px]:grid-cols-[1.45fr_0.75fr]">
          <section className="rounded-card border border-app-line bg-app-surface p-6" id="deadlines">
            <div className="mb-5 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-2.5 text-[11px] font-extrabold tracking-[0.14em] text-primary">DEADLINES</p>
                <h2 className="m-0 text-[28px] tracking-[-0.035em]">Coming up</h2>
              </div>
            </div>
            <DeadlineSection state={props.deadlines} onRetry={props.onRetryDeadlines} />
          </section>

          <Resources />
        </section>
      </main>
      <Footer note="Starter project for CSS → Tailwind migration" />
    </>
  );
}

export default App;
