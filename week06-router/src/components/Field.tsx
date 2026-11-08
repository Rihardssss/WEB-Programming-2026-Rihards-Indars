import type { ReactNode } from "react";

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div className="grid gap-1.5">
      <label className="text-xs font-bold text-app-text" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error !== undefined && <p className="text-xs font-bold text-accent-red">{error}</p>}
    </div>
  );
}

export default Field;
