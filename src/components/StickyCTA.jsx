import { Link } from "react-router-dom";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 md:hidden">
      <div className="mx-auto max-w-md px-4">
        <Link
          to="/contact"
          className="w-full inline-flex items-center justify-center py-3 rounded-xl font-semibold text-emerald-900 shadow-lg"
          style={{ background: "linear-gradient(90deg,var(--green),var(--lime))" }}
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
