import type { Project, Deadline, CurrentWeather } from "./types";
import { isProject, isDeadline, isRecord, isCurrentWeatherPayload } from "./guards";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&current=temperature_2m,wind_speed_10m,weather_code&timezone=Europe%2FRiga";

async function getJson(url: string, signal: AbortSignal): Promise<unknown> {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Request to ${url} failed with status ${response.status}`);
  }

  const data: unknown = await response.json();
  return data;
}

export async function fetchProjects(signal: AbortSignal): Promise<Project[]> {
  const data = await getJson("/api/projects.json", signal);

  if (!Array.isArray(data) || !data.every(isProject)) {
    throw new Error("Projects came back in an unexpected format.");
  }

  return data;
}

export async function fetchDeadlines(signal: AbortSignal): Promise<Deadline[]> {
  const data = await getJson("/api/deadlines.json", signal);

  if (!Array.isArray(data) || !data.every(isDeadline)) {
    throw new Error("Deadlines came back in an unexpected format.");
  }

  return data;
}

export async function fetchWeather(signal: AbortSignal): Promise<CurrentWeather> {
  const data = await getJson(WEATHER_URL, signal);

  if (!isRecord(data) || !isCurrentWeatherPayload(data.current)) {
    throw new Error("Weather came back in an unexpected format.");
  }

  return {
    temperature: data.current.temperature_2m,
    windSpeed: data.current.wind_speed_10m,
    weatherCode: data.current.weather_code,
  };
}
