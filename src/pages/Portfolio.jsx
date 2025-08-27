import React, { useMemo, useState } from "react";
import { PROJECTS } from "../data/site.js";
import { Link } from "react-router-dom";

const allTags = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.tag)))];

export default function Portfolio() {
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null); // project object

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesTab = tab === "All" ? true : p.tag === tab;
      const matchesSearch = !q
        ? true
        : [p.title, p.tag, p.summary, ...(p.tech || [])]
            .join(" ")
            .toLowerCase()
            .includes(q);
      return matchesTab && matchesSearch;
    });
  }, [tab, query]);

  return (
    <>
      {/* ===== Header ===== */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #f0fdf4 0%, #e9fff7 45%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            Our Work
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">
            Recent <span className="text-emerald-600">projects</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Case studies from fintech, commerce, and education. Filter, search,
            and request a demo.
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

      {/* ===== Filters + Search ===== */}
      <section className="pt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
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
              placeholder="Search project, tech, or tag…"
              className="w-full md:w-80 rounded-xl border border-slate-200 bg-white p-3 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔎
            </span>
          </div>
        </div>
      </section>

      {/* ===== Grid ===== */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center text-slate-600 py-20">
              No projects match your search. Try a different keyword.
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <article
                  key={p.title}
                  className={`rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm reveal ${
                    i % 7 === 0 ? "md:col-span-2" : ""
                  }`}
                  style={{ animationDelay: `${80 + i * 60}ms` }}
                >
                  <button
                    onClick={() => setActive(p)}
                    className="block text-left w-full"
                    aria-label={`Open details for ${p.title}`}
                  >
                    <div className="relative">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full object-cover aspect-16-9 transition duration-300 hover:scale-[1.03]"
                      />
                      <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-emerald-600 text-white">
                        {p.tag}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="font-semibold text-slate-900">
                        {p.title}
                      </div>
                      <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                        {p.summary}
                      </p>

                      {/* tech pills */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(p.tech || []).slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 rounded-md text-xs border border-slate-200 bg-white text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA row */}
                      <div className="mt-4 flex items-center gap-3">
                        <Link
                          to={`/contact?demo=${encodeURIComponent(p.title)}`}
                          className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-semibold text-emerald-900"
                          style={{
                            background:
                              "linear-gradient(90deg,#d9fce9,#b7f2d9,#d9fce9)",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Request Demo
                        </Link>
                        {p.url ? (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-600 underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Visit live ↗
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== Case Study Drawer (modal) ===== */}
      {active && (
        <>
          <button
            aria-label="Close details"
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-black/60 z-40"
          />
          <div className="fixed inset-x-0 bottom-0 z-50 md:inset-0 md:flex md:items-center md:justify-center">
            <div className="mx-auto md:max-w-3xl w-full md:w-auto rounded-t-2xl md:rounded-2xl border border-slate-200 bg-white shadow-2xl">
              {/* header */}
              <div className="flex items-start gap-3 p-4 border-b border-slate-200">
                <img
                  src={active.cover}
                  alt=""
                  className="hidden md:block h-16 w-24 rounded-md object-cover border border-slate-200"
                />
                <div className="flex-1">
                  <div className="text-xs text-emerald-700 font-semibold">
                    {active.tag}
                  </div>
                  <div className="text-lg font-semibold text-slate-900">
                    {active.title}
                  </div>
                  <p className="text-sm text-slate-600">{active.summary}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700"
                >
                  ✕
                </button>
              </div>

              {/* body */}
              <div className="p-4 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-sm text-emerald-700 font-semibold">
                    Highlights
                  </h3>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
                    {(active.results || []).map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-sm text-emerald-700 font-semibold">
                    Tech
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(active.tech || []).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md text-xs border border-slate-200 bg-white text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* side facts */}
                <div className="md:border-l md:border-slate-200 md:pl-6">
                  <h3 className="text-sm text-emerald-700 font-semibold">
                    Key metrics
                  </h3>
                  <div className="mt-2 grid grid-cols-3 gap-3">
                    {Object.entries(active.metrics || {}).map(([k, v]) => (
                      <div
                        key={k}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center"
                      >
                        <div className="text-sm font-semibold text-slate-900">
                          {v}
                        </div>
                        <div className="text-[11px] text-slate-500">{k}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Link
                      to={`/contact?demo=${encodeURIComponent(active.title)}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-emerald-900"
                      style={{
                        background:
                          "linear-gradient(90deg,#d9fce9,#b7f2d9,#d9fce9)",
                      }}
                      onClick={() => setActive(null)}
                    >
                      Request Demo
                    </Link>
                    {active.url ? (
                      <a
                        href={active.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700"
                      >
                        Visit live ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
