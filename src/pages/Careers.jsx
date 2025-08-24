import React from "react";
import { JOBS } from "../data/site.js";

export default function Careers() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(120deg,#ecfdf5 0%,#e6fff4 40%,#ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            Careers
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">
            Join our <span className="text-emerald-600">team</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            We’re a friendly, engineering-led studio. Remote-first, results-driven.
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 right-0 -mb-px" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 60H0V0Z" fill="#ffffff" />
        </svg>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {JOBS.map((j, i) => (
            <div key={j.title} className="card p-6 reveal" style={{ animationDelay: `${80 + i * 80}ms` }}>
              <div className="text-sm text-emerald-700 font-semibold">{j.type}</div>
              <div className="mt-1 text-xl font-semibold text-slate-900">{j.title}</div>
              <ul className="mt-3 text-slate-900 space-y-1">
                {j.points.map(x => <li key={x}>• {x}</li>)}
              </ul>
              <a href={`mailto:${j.email}?subject=${encodeURIComponent(j.title)} — Application`} className="mt-6 inline-flex btn-primary">
                Apply via Email
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
