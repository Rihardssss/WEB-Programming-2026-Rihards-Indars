import type { Deadline, LoadState } from "../types";

interface DeadlinesPageProps {
  deadlines: LoadState<Deadline[]>;
  onRetry: () => void;
}

function DeadlinesPage(_props: DeadlinesPageProps) {
  return <h1 className="p-8 text-3xl font-bold text-primary">Deadlines</h1>;
}

export default DeadlinesPage;
