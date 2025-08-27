import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV } from "../data/site.js";
import Logo from "/assets/cs.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const navLinkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  return (
    <header
      className={`sticky top-0 z-50 ${scrolled ? "nav-glass" : "bg-white"}`}
    >
      <div className="max-w-7xl container-soft safe-px mx-auto py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <img
            src="/assets/cs.jpg"
            alt="Code Sangraha"
            className="h-9 w-9 rounded-md object-cover shrink-0"
          />
          <span className="hidden sm:block font-semibold text-slate-900 truncate">
            Code Sangraha
          </span>
        </Link>

        <nav className="mx-auto hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className={navLinkClass}>
              {n.name}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            to="/quote"
            className="hidden md:inline-flex btn-primary whitespace-nowrap"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-line"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* overlay */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden"
          aria-label="Close menu overlay"
        />
      )}

      {/* drawer */}
      <aside
        className={`fixed top-0 right-0 h-[100dvh] w-full max-w-sm bg-white md:hidden drawer transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile menu"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="px-4 py-3 flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={Logo}
              alt=""
              className="h-8 w-8 rounded-md object-cover"
            />
            <span className="font-semibold truncate">Menu</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="h-10 w-10 grid place-items-center rounded-lg border border-line"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="px-4 py-4">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `block py-3 text-lg ${
                  isActive
                    ? "text-[var(--green-dark)] font-semibold"
                    : "text-slate-700"
                }`
              }
            >
              {n.name}
            </NavLink>
          ))}
          <Link
            to="/quote"
            className="mt-6 inline-flex w-full justify-center btn-primary"
          >
            Get a Quote
          </Link>
        </nav>
      </aside>
    </header>
  );
}
