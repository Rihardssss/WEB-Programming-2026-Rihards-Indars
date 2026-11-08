type StatTone = "neutral" | "positive" | "danger";

const TONE_CLASS: Record<StatTone, string> = {
  neutral: "text-app-muted",
  positive: "text-accent-green",
  danger: "text-accent-red",
};

interface StatCardProps {
  index: string;
  label: string;
  value: string;
  note: string;
  tone?: StatTone;
}

function StatCard({ index, label, value, note, tone = "neutral" }: StatCardProps) {
  return (
    <article className="flex gap-[14px] rounded-card border border-app-line bg-app-surface p-5 shadow-card transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#f0edff] text-[11px] font-extrabold text-primary">
        {index}
      </div>
      <div>
        <p className="m-0 mb-1 text-xs text-app-muted">{label}</p>
        <strong className="block text-[26px] leading-[1.1]">{value}</strong>
        <span className={`mt-[7px] block text-[10px] font-bold ${TONE_CLASS[tone]}`}>{note}</span>
      </div>
    </article>
  );
}

export default StatCard;
