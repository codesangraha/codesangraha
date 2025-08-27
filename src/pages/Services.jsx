import React, { useMemo, useState } from "react";
import { SERVICES, SERVICES_DETAILS } from "../data/site.js";
import { Link } from "react-router-dom";

const allTabs = ["All", ...SERVICES.map((s) => s.title)];

export default function Services() {
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const inTab = tab === "All" ? true : s.title === tab;
      const inSearch = !q
        ? true
        : (s.title + " " + s.desc).toLowerCase().includes(q);
      return inTab && inSearch;
    });
  }, [tab, query]);

  return (
    <>
      {/* ===== Hero ===== */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #ecfdf5 0%, #e6fff4 40%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            Our Capability
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Services we <span className="text-emerald-600">excel</span> at
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            From discovery to deployment — reliable, scalable software with
            clear communication.
          </p>
        </div>
        <svg
          className="absolute bottom-0 left-0 right-0 -mb-px"
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L1440 60H0V0Z" fill="#ffffff" />
        </svg>
      </section>

      {/* ===== Filters/Search ===== */}
      <section className="pt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {allTabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded-full text-sm border ${
                  tab === t
                    ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 bg-white text-slate-700 hover:border-emerald-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a service…"
              className="w-full md:w-80 rounded-xl border border-slate-200 bg-white p-3 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔎
            </span>
          </div>
        </div>
      </section>

      {/* ===== Grid ===== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((s, i) => {
            const d = SERVICES_DETAILS[s.id] || {
              highlights: [],
              features: [],
              tech: [],
            };
            return (
              <article
                key={s.id}
                className="card p-7 reveal hover:translate-y-[-4px]"
                style={{ animationDelay: `${80 + i * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 grid place-items-center rounded-lg"
                    style={{
                      background: "rgba(6,208,1,.12)",
                      color: "var(--green-dark)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900">
                    {s.title}
                  </h3>
                </div>

                <p className="mt-3 text-slate-600">{s.desc}</p>

                {/* Highlights */}
                {d.highlights?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {d.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-1 rounded-md text-xs border border-emerald-200/60 bg-white text-emerald-700"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Features */}
                {d.features?.length ? (
                  <ul className="mt-5 space-y-1.5 text-sm text-slate-700">
                    {d.features.slice(0, 5).map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                ) : null}

                {/* Tech */}
                {d.tech?.length ? (
                  <>
                    <div className="mt-5 h-[1px] bg-slate-200/70" />
                    <div className="mt-3 flex flex-wrap gap-2">
                      {d.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md text-xs border border-slate-200 bg-white text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                ) : null}

                {/* CTA row */}
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    to={`/quote?service=${encodeURIComponent(s.title)}`}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-emerald-900"
                    style={{
                      background:
                        "linear-gradient(90deg,#d9fce9,#b7f2d9,#d9fce9)",
                    }}
                  >
                    Get a Quote
                  </Link>
                  <Link
                    to={`/contact?demo=${encodeURIComponent(s.title)}`}
                    className="text-sm text-slate-600 underline"
                  >
                    Request a Demo
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===== Mini Process strip ===== */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                ["Discovery", "Define goals & scope"],
                ["Design", "Wireframes → UI"],
                ["Build", "Sprints + reviews"],
                ["Launch", "Zero-downtime deploys"],
                ["Iterate", "Measure & improve"],
              ].map(([t, d], i) => (
                <div
                  key={t}
                  className="reveal"
                  style={{ animationDelay: `${60 + i * 60}ms` }}
                >
                  <div className="text-sm text-emerald-700 font-semibold">
                    {t}
                  </div>
                  <div className="text-slate-600 text-sm">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      {/* <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="mt-4 grid gap-3">
            {SERVICES_FAQ.map((f, i) => (
              <details key={i} className="card p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== Big CTA ===== */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #e7fcef 0%, #b7f2d9 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Not sure where to start?
          </h3>
          <p className="mt-3 text-slate-700">
            Tell us your goal. We’ll propose a clear, step-by-step plan.
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-emerald-900"
            style={{
              background: "linear-gradient(90deg,#d9fce9,#b7f2d9,#d9fce9)",
              backgroundSize: "200% 100%",
            }}
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
