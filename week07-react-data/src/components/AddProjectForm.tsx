import { useState, type SubmitEvent } from "react";
import type { Project } from "../types";
import { CATEGORIES, EMPTY_FORM, validate, type FieldName, type FormErrors, type FormValues } from "../validation";
import Field from "./Field";

interface AddProjectFormProps {
  disabled: boolean;
  onAdd: (project: Project) => void;
}

function AddProjectForm(props: AddProjectFormProps) {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState("");

  function update(name: FieldName, value: string): void {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();

    const result = validate(values);
    if (!result.ok) {
      setErrors(result.errors);
      setMessage("");
      return;
    }

    props.onAdd(result.project);
    setValues(EMPTY_FORM);
    setErrors({});
    setMessage(`"${result.project.title}" added.`);
  }

  const descriptionLength = values.description.length;

  return (
    <form
      className="grid gap-4 rounded-card border border-app-line bg-app-surface p-6"
      noValidate
      onSubmit={handleSubmit}
    >
      <Field label="Title" htmlFor="projectTitle" error={errors.title}>
        <input
          className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-invalid:border-accent-red"
          type="text"
          id="projectTitle"
          name="title"
          value={values.title}
          onChange={(event) => update("title", event.target.value)}
          aria-invalid={errors.title !== undefined}
        />
      </Field>

      <Field label="Description" htmlFor="projectDescription" error={errors.description}>
        <textarea
          className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-invalid:border-accent-red"
          id="projectDescription"
          name="description"
          rows={3}
          value={values.description}
          onChange={(event) => update("description", event.target.value)}
          aria-invalid={errors.description !== undefined}
        />
        <span className={`text-xs ${descriptionLength > 200 ? "text-accent-red" : "text-app-muted"}`}>
          {descriptionLength}/200
        </span>
      </Field>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Category" htmlFor="projectCategory" error={errors.category}>
          <select
            className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-invalid:border-accent-red"
            id="projectCategory"
            name="category"
            value={values.category}
            onChange={(event) => update("category", event.target.value)}
            aria-invalid={errors.category !== undefined}
          >
            <option value="">Choose…</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Due date" htmlFor="projectDueDate" error={errors.dueDate}>
          <input
            className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-invalid:border-accent-red"
            type="date"
            id="projectDueDate"
            name="dueDate"
            value={values.dueDate}
            onChange={(event) => update("dueDate", event.target.value)}
            aria-invalid={errors.dueDate !== undefined}
          />
        </Field>

        <Field label="Progress (%)" htmlFor="projectProgress" error={errors.progress}>
          <input
            className="rounded-xl border border-app-line bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-invalid:border-accent-red"
            type="number"
            id="projectProgress"
            name="progress"
            value={values.progress}
            onChange={(event) => update("progress", event.target.value)}
            aria-invalid={errors.progress !== undefined}
          />
        </Field>
      </div>

      {message !== "" && (
        <p className="m-0 text-xs font-bold text-accent-green" role="status">
          {message}
        </p>
      )}

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
