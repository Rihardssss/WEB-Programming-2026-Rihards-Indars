import type { CurrentWeather, Deadline, LoadState, Project } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import StatCard from "./components/StatCard";
import WeatherCard from "./components/WeatherCard";
import ProjectSection from "./components/ProjectSection";
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
  const activeProjectsValue =
    props.projects.status === "loading"
      ? "…"
      : props.projects.status === "error"
        ? "–"
        : String(props.projects.data.filter((project) => project.status === "active").length);

  return (
    <>
      <Header userName="Alex Student" userInitials="AZ" course="Web Programming" />
      <main>
        <Hero />

        <section className="mx-auto w-full max-w-[1180px] px-3.5 pt-[34px] pb-4 sm:px-5">
          <SectionHeading eyebrow="OVERVIEW" title="Your workspace">
            <p className="m-0 max-w-none text-sm text-app-muted sm:max-w-[420px]">
              A quick snapshot of what needs attention today.
            </p>
          </SectionHeading>

          <div className="mb-5 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3">
            <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-primary text-sm text-white">
              !
            </span>
            <p className="m-0 text-sm text-app-text">
              <strong className="font-bold">2 tasks are due soon.</strong>{" "}
              <span className="text-app-muted">Check the deadlines panel below to stay on track.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-[960px]:grid-cols-4">
            <StatCard
              index="01"
              label="Active projects"
              value={activeProjectsValue}
              note="+1 this month"
              tone="positive"
            />
            <StatCard index="02" label="Tasks completed" value="18" note="+6 this week" tone="positive" />
            <StatCard index="03" label="Quiz average" value="84%" note="Last 4 quizzes" />
            <WeatherCard weather={props.weather} />
          </div>
        </section>

        <ProjectSection state={props.projects} onRetry={props.onRetryProjects} />

        <section className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-[18px] px-3.5 pt-[34px] pb-16 sm:px-5 min-[960px]:grid-cols-[1.45fr_0.75fr]">
          <section className="rounded-card border border-app-line bg-app-surface p-6" id="deadlines">
            <SectionHeading eyebrow="DEADLINES" title="Coming up">
              <a
                className="inline-block text-xs font-extrabold text-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                href="#"
              >
                See all
              </a>
            </SectionHeading>
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
