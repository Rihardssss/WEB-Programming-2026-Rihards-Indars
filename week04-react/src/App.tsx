import type { CurrentWeather, Deadline, LoadState, Project } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
        <p>{props.projects.status}</p>
        <p>{props.deadlines.status}</p>
        <p>{props.weather.status}</p>
        <section className="mx-auto w-full max-w-[1180px] px-3.5 pt-[34px] pb-16 sm:px-5">
          <Resources />
        </section>
      </main>
      <Footer note="Starter project for CSS → Tailwind migration" />
    </>
  );
}

export default App;
