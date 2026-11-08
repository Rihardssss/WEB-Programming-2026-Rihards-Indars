import type { Deadline } from "../types";

function daysUntil(dateStr: string): number {
  const [year, month, day] = dateStr.split("-").map(Number);
  const target = new Date(year, month - 1, day);
  target.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = target.getTime() - today.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

function deadlineBadge(dateStr: string): { text: string; classes: string } {
  const diff = daysUntil(dateStr);

  if (diff < 0) {
    return { text: "Overdue", classes: "bg-[#fdeeee] text-accent-red" };
  }
  if (diff === 0) {
    return { text: "Today", classes: "bg-[#fdeeee] text-accent-red" };
  }
  if (diff <= 3) {
    const label = diff === 1 ? "1 day" : `${diff} days`;
    return { text: label, classes: "bg-[#fdeeee] text-accent-red" };
  }
  if (diff <= 7) {
    return { text: `${diff} days`, classes: "bg-[#fff5de] text-accent-yellow" };
  }
  return { text: `${diff} days`, classes: "bg-[#f1f3f6] text-[#6f7788]" };
}

interface DeadlineItemProps {
  deadline: Deadline;
}

function DeadlineItem({ deadline }: DeadlineItemProps) {
  const [year, month, day] = deadline.date.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);
  const monthLabel = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const badge = deadlineBadge(deadline.date);

  return (
    <article className="grid grid-cols-[auto_1fr] items-center gap-[14px] border-b border-app-line py-[14px] px-2 last:border-b-0 sm:grid-cols-[auto_1fr_auto]">
      <div className="grid h-[50px] w-[46px] place-content-center rounded-xl bg-app-surface-soft">
        <strong className="text-[17px] leading-none">{day}</strong>
        <span className="mt-1 text-[9px] font-extrabold text-app-muted">{monthLabel}</span>
      </div>

      <div className="grid gap-[3px]">
        <strong className="text-[13px]">{deadline.title}</strong>
        <span className="text-[11px] text-app-muted">
          {deadline.course} · {deadline.time}
        </span>
      </div>

      <span
        className={`col-start-2 inline-flex min-h-[25px] w-fit items-center justify-self-start rounded-full px-[9px] text-[10px] font-extrabold sm:col-auto sm:justify-self-auto ${badge.classes}`}
      >
        {badge.text}
      </span>
    </article>
  );
}

export default DeadlineItem;
