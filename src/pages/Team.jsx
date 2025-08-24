// src/pages/Team.jsx
import React, { useState } from "react";
import { TEAM } from "../data/site.js";

/* Inline SVG icons (no deps) */
const Icon = {
  GitHub: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...p}>
      <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.8.42-1.32.76-1.62-2.67-.3-5.48-1.33-5.48-5.9 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.22a11.5 11.5 0 0 1 6.02 0c2.3-1.54 3.31-1.22 3.31-1.22.66 1.65.24 2.87.12 3.17.77.83 1.24 1.89 1.24 3.19 0 4.58-2.81 5.6-5.49 5.89.44.38.81 1.12.81 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
    </svg>
  ),
  LinkedIn: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...p}>
      <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5M3 9h4v12H3zm7 0h3.8v1.7h.05a4.16 4.16 0 0 1 3.74-2.05C20.9 8.65 22 10.2 22 13.02V21h-4v-6.86c0-1.63-.58-2.74-2.03-2.74-1.11 0-1.77.75-2.06 1.47-.11.26-.14.62-.14.98V21h-4z"/>
    </svg>
  ),
  Instagram: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...p}>
      <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-5 3.8A4.2 4.2 0 1 1 7.8 12 4.19 4.19 0 0 1 12 7.8M18 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1m-6 2.3A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.8Z"/>
    </svg>
  ),
};

export default function Team() {
  const [active, setActive] = useState(null); // project member object or null
  const open = (m) => setActive(m);
  const close = () => setActive(null);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(120deg,#ecfdf5 0%,#e6fff4 40%,#ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            Team
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">
            Meet the <span className="text-emerald-600">people</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Face behind Code Sangraha.
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 right-0 -mb-px" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 60H0V0Z" fill="#ffffff" />
        </svg>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              tabIndex={0}
              aria-label={`${m.name}, ${m.role}`}
              className="relative card p-6 text-center group focus-within:ring-2 focus-within:ring-emerald-300 cursor-pointer"
              style={{ overflow: "visible" }}               // ensure hover bubble isn't clipped
              onClick={() => open(m)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open(m)}
            >
              {/* Hover/focus speech bubble (desktop) */}
              <div
                className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition duration-200"
                aria-hidden="true"
              >
                <div className="relative mx-auto max-w-[220px] rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg text-sm text-slate-700">
                  “{m.blurb || "Let’s build something great together."}”
                  <span className="absolute left-1/2 -bottom-1 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-slate-200 bg-white"></span>
                </div>
              </div>

              <img
                src={m.photo}
                alt={m.name}
                loading="lazy"
                decoding="async"
                className="mx-auto h-28 w-28 rounded-xl object-cover border border-slate-200"
              />
              <div className="mt-4 font-semibold text-slate-900">{m.name}</div>
              <div className="text-sm text-muted">{m.role}</div>

              {/* Socials row — stop click from opening modal */}
              <div className="mt-4 flex items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
                {m.links?.github && (
                  <a href={m.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-slate-200 bg-white hover:scale-105 transition" aria-label={`${m.name} on GitHub`}>
                    <Icon.GitHub className="text-slate-700" />
                  </a>
                )}
                {m.links?.linkedin && (
                  <a href={m.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-slate-200 bg-white hover:scale-105 transition" aria-label={`${m.name} on LinkedIn`}>
                    <Icon.LinkedIn className="text-slate-700" />
                  </a>
                )}
                {m.links?.instagram && (
                  <a href={m.links.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-slate-200 bg-white hover:scale-105 transition" aria-label={`${m.name} on Instagram`}>
                    <Icon.Instagram className="text-slate-700" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mobile/desktop modal on tap/click */}
      {active && (
        <>
          <button aria-label="Close profile modal" onClick={close} className="fixed inset-0 bg-black/60 z-50"></button>
          <div className="fixed inset-x-4 bottom-6 z-50 md:inset-0 md:flex md:items-center md:justify-center">
            <div className="mx-auto md:max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <img src={active.photo} alt={active.name} className="h-14 w-14 rounded-xl object-cover border border-slate-200" />
                <div>
                  <div className="font-semibold text-slate-900">{active.name}</div>
                  <div className="text-sm text-muted">{active.role}</div>
                </div>
              </div>
              <p className="mt-4 text-slate-700">“{active.blurb || "Let’s build something great together."}”</p>

              <div className="mt-5 flex items-center gap-3">
                {active.links?.github && (
                  <a href={active.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-slate-200 bg-white" aria-label={`${active.name} on GitHub`}>
                    <Icon.GitHub className="text-slate-700" />
                  </a>
                )}
                {active.links?.linkedin && (
                  <a href={active.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-slate-200 bg-white" aria-label={`${active.name} on LinkedIn`}>
                    <Icon.LinkedIn className="text-slate-700" />
                  </a>
                )}
                {active.links?.instagram && (
                  <a href={active.links.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-slate-200 bg-white" aria-label={`${active.name} on Instagram`}>
                    <Icon.Instagram className="text-slate-700" />
                  </a>
                )}
                <button onClick={close} className="ml-auto inline-flex btn-primary">Close</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
