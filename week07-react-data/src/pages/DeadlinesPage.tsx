import type { Deadline, LoadState } from "../types";
import DeadlineSection from "../components/DeadlineSection";

interface DeadlinesPageProps {
  deadlines: LoadState<Deadline[]>;
  onRetry: () => void;
}

function DeadlinesPage({ deadlines, onRetry }: DeadlinesPageProps) {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-3.5 pt-[34px] pb-16 sm:px-5">
      <DeadlineSection state={deadlines} onRetry={onRetry} />
    </section>
  );
}

export default DeadlinesPage;
