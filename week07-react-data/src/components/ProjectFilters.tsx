import type { ProjectFilter } from "../types";

interface ProjectFiltersProps {
  current: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}

const FILTERS: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
];

function ProjectFilters({ current, onChange }: ProjectFiltersProps) {
  return (
    <div
      className="inline-flex w-full gap-1 rounded-xl border border-app-line bg-white p-1 sm:w-auto"
      aria-label="Project filters"
    >
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`flex-1 rounded-lg px-3 py-[7px] text-xs font-bold transition-colors duration-150 hover:bg-[#f0f2f7] hover:text-app-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:flex-none ${
            current === filter.value ? "bg-[#f0f2f7] text-app-text" : "text-app-muted"
          }`}
          aria-pressed={current === filter.value}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;
