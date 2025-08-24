import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900">404 — Page not found</h1>
        <p className="mt-3 text-slate-600">
          The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" className="mt-8 inline-flex btn-primary">Go Home</Link>
      </div>
    </section>
  );
}
