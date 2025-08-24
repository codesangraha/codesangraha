import React from "react";
import { PROCESS_STEPS } from "../data/site.js";

export default function Process() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(120deg,#ecfdf5 0%,#e6fff4 40%,#ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            How we work
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">
            A simple, predictable <span className="text-emerald-600">process</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Clear milestones, transparent communication, and production discipline from day one.
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 right-0 -mb-px" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 60H0V0Z" fill="#ffffff" />
        </svg>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="relative border-l border-line pl-6 space-y-10">
            {PROCESS_STEPS.map((s, i) => (
              <li key={s.k} className="reveal" style={{ animationDelay: `${80 + i * 80}ms` }}>
                <div className="absolute -left-[10px] top-1.5 h-4 w-4 rounded-full bg-emerald-500" />
                <div className="text-sm text-emerald-700 font-semibold">{s.k}</div>
                <div className="mt-1 text-xl font-semibold text-slate-900">{s.t}</div>
                <p className="text-slate-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
