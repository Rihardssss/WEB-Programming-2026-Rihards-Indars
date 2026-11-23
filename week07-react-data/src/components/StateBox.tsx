interface LoadingBoxProps {
  text: string;
}

export function LoadingBox({ text }: LoadingBoxProps) {
  return (
    <p className="px-2 py-10 text-center text-sm text-app-muted" role="status">
      {text}
    </p>
  );
}

interface ErrorBoxProps {
  message: string;
  onRetry: () => void;
}

export function ErrorBox({ message, onRetry }: ErrorBoxProps) {
  return (
    <div className="flex flex-col items-center gap-3 px-2 py-10 text-center" role="alert">
      <p className="m-0 text-sm text-accent-red">{message}</p>
      <button
        type="button"
        className="inline-flex min-h-[36px] items-center justify-center rounded-xl border border-app-line bg-white px-4 text-xs font-bold text-app-text transition-colors duration-150 hover:bg-[#f0f2f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        onClick={onRetry}
      >
        Try again
      </button>
    </div>
  );
}

interface EmptyBoxProps {
  title: string;
  text: string;
}

export function EmptyBox({ title, text }: EmptyBoxProps) {
  return (
    <div className="px-2 py-10 text-center" role="status">
      <p className="m-0 text-sm font-bold text-app-text">{title}</p>
      <p className="m-0 mt-1 text-sm text-app-muted">{text}</p>
    </div>
  );
}
