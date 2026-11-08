import type { CurrentWeather, LoadState } from "../types";
import StatCard from "./StatCard";

interface WeatherCardProps {
  weather: LoadState<CurrentWeather>;
}

function WeatherCard({ weather }: WeatherCardProps) {
  if (weather.status === "loading") {
    return <StatCard index="04" label="Rīga now" value="…" note="Loading weather…" />;
  }

  if (weather.status === "error") {
    return <StatCard index="04" label="Rīga now" value="–" note="Weather unavailable" tone="danger" />;
  }

  return (
    <StatCard
      index="04"
      label="Rīga now"
      value={`${Math.round(weather.data.temperature)}°C`}
      note={`Wind ${Math.round(weather.data.windSpeed)} km/h`}
    />
  );
}

export default WeatherCard;
