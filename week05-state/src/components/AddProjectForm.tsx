import { useState, type SubmitEvent } from "react";
import type { Project } from "../types";

interface FormValues {
  title: string;
  description: string;
  category: string;
  dueDate: string;
  progress: string;
}

const EMPTY_FORM: FormValues = { title: "", description: "", category: "", dueDate: "", progress: "" };

const CATEGORIES = ["Frontend", "API", "JavaScript", "Design"];

interface AddProjectFormProps {
  disabled: boolean;
  onAdd: (project: Project) => void;
}

function AddProjectForm(props: AddProjectFormProps) {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);

  function update(name: keyof FormValues, value: string): void {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <form
      className="grid gap-4 rounded-card border border-app-line bg-app-surface p-6"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid gap-1.5">
        <label className="text-xs font-bold text-app-text" htmlFor="projectTitle">
          Title
        </label>
        <input
          className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          type="text"
          id="projectTitle"
          name="title"
          value={values.title}
          onChange={(event) => update("title", event.target.value)}
        />
      </div>

      <div className="grid gap-1.5">
        <label className="text-xs font-bold text-app-text" htmlFor="projectDescription">
          Description
        </label>
        <textarea
          className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          id="projectDescription"
          name="description"
          rows={3}
          value={values.description}
          onChange={(event) => update("description", event.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="grid gap-1.5">
          <label className="text-xs font-bold text-app-text" htmlFor="projectCategory">
            Category
          </label>
          <select
            className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            id="projectCategory"
            name="category"
            value={values.category}
            onChange={(event) => update("category", event.target.value)}
          >
            <option value="">Choose…</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-1.5">
          <label className="text-xs font-bold text-app-text" htmlFor="projectDueDate">
            Due date
          </label>
          <input
            className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            type="date"
            id="projectDueDate"
            name="dueDate"
            value={values.dueDate}
            onChange={(event) => update("dueDate", event.target.value)}
          />
        </div>

        <div className="grid gap-1.5">
          <label className="text-xs font-bold text-app-text" htmlFor="projectProgress">
            Progress (%)
          </label>
          <input
            className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            type="number"
            id="projectProgress"
            name="progress"
            value={values.progress}
            onChange={(event) => update("progress", event.target.value)}
          />
        </div>
      </div>

      <button
        className="mt-1 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-primary px-[18px] text-sm font-bold text-white shadow-button transition-all duration-150 hover:-translate-y-px hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto disabled:cursor-not-allowed disabled:opacity-50"
        type="submit"
        disabled={props.disabled}
      >
        Add project
      </button>
    </form>
  );
}

export default AddProjectForm;
