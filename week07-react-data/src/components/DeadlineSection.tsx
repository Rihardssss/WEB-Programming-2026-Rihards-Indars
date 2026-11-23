import { Link } from "react-router";
import type { Deadline, LoadState } from "../types";
import DeadlineItem from "./DeadlineItem";
import SectionHeading from "./SectionHeading";
import { LoadingBox, ErrorBox, EmptyBox } from "./StateBox";

interface DeadlineSectionProps {
  state: LoadState<Deadline[]>;
  onRetry: () => void;
  limit?: number;
}

function DeadlineSection({ state, onRetry, limit }: DeadlineSectionProps) {
  const title = limit === undefined ? "All deadlines" : "Coming up";

  let body;
  if (state.status === "loading") {
    body = <LoadingBox text="Loading deadlines…" />;
  } else if (state.status === "error") {
    body = <ErrorBox message={state.message} onRetry={onRetry} />;
  } else if (state.data.length === 0) {
    body = <EmptyBox title="No upcoming deadlines" text="You're all caught up for now." />;
  } else {
    const items = limit === undefined ? state.data : state.data.slice(0, limit);
    body = (
      <div>
        {items.map((deadline) => (
          <DeadlineItem key={`${deadline.title}-${deadline.date}`} deadline={deadline} />
        ))}
      </div>
    );
  }

  return (
    <section className="rounded-card border border-app-line bg-app-surface p-6" id="deadlines">
      <SectionHeading eyebrow="DEADLINES" title={title}>
        {limit !== undefined && (
          <Link
            className="inline-block text-xs font-extrabold text-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            to="/deadlines"
          >
            See all
          </Link>
        )}
      </SectionHeading>
      {body}
    </section>
  );
}

export default DeadlineSection;
