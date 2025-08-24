import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Thank you! 🙌</h1>
        <p className="mt-3 text-slate-600">
          Your message has been sent. We’ll get back within one business day.
        </p>
        <Link to="/" className="mt-8 inline-flex btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
