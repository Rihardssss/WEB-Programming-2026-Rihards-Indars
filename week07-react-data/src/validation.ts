import type { Category, Project } from "./types";

export interface FormValues {
  title: string;
  description: string;
  category: string;
  dueDate: string;
  progress: string;
}

export type FieldName = keyof FormValues;
export type FormErrors = Partial<Record<FieldName, string>>;

export const EMPTY_FORM: FormValues = { title: "", description: "", category: "", dueDate: "", progress: "" };

export const CATEGORIES: Category[] = ["Frontend", "API", "JavaScript", "Design"];

export type ValidationResult = { ok: true; project: Project } | { ok: false; errors: FormErrors };

export function validate(values: FormValues): ValidationResult {
  const errors: FormErrors = {};

  const title = values.title.trim();
  if (title.length < 3) {
    errors.title = "Title needs at least 3 characters.";
  }

  const description = values.description.trim();
  if (description.length < 10) {
    errors.description = "Description needs at least 10 characters.";
  } else if (description.length > 200) {
    errors.description = "Description must be 200 characters or fewer.";
  }

  const category = values.category;
  if (category === "" || !CATEGORIES.includes(category as Category)) {
    errors.category = "Pick a category.";
  }

  const dueDate = values.dueDate;
  if (dueDate === "") {
    errors.dueDate = "Pick a due date.";
  }

  const progressValue = Number(values.progress);
  const progressIsValid =
    values.progress !== "" &&
    Number.isInteger(progressValue) &&
    progressValue >= 0 &&
    progressValue <= 100;

  if (!progressIsValid) {
    errors.progress = "Progress must be a whole number from 0 to 100.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    project: {
      id: crypto.randomUUID(),
      title,
      description,
      category: category as Category,
      status: progressValue === 100 ? "done" : "active",
      dueDate,
      progress: progressValue,
    },
  };
}
