import { Link, useLocation } from "react-router";

function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <section className="mx-auto w-full max-w-[1180px] px-3.5 py-20 text-center sm:px-5">
      <h1 className="m-0 text-3xl font-bold text-primary">Page not found</h1>
      <p className="mt-3 text-sm text-app-muted">
        There's no CampusFlow page at <code>{pathname}</code>.
      </p>
      <Link
        className="mt-6 inline-block text-xs font-extrabold text-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        to="/"
      >
        ← Back to Dashboard
      </Link>
    </section>
  );
}

export default NotFoundPage;
