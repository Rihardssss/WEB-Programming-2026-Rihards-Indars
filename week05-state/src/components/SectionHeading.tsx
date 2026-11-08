import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="mb-5 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="mb-2.5 text-[11px] font-extrabold tracking-[0.14em] text-primary">{eyebrow}</p>
        <h2 className="m-0 text-[28px] tracking-[-0.035em]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default SectionHeading;
