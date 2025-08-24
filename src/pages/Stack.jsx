import React from "react";
import { STACK } from "../data/site.js";

export default function Stack() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(120deg,#ecfdf5 0%,#e6fff4 40%,#ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            Tech Stack
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">
            Tools we <span className="text-emerald-600">love</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Battle-tested technologies for speed, security, and maintainability.
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 right-0 -mb-px" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 60H0V0Z" fill="#ffffff" />
        </svg>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACK.map((g, i) => (
            <div key={g.g} className="card p-6 reveal" style={{ animationDelay: `${80 + i * 80}ms` }}>
              <div className="text-sm text-emerald-700 font-semibold">{g.g}</div>
              <ul className="mt-3 text-slate-900 space-y-2">
                {g.items.map(x => <li key={x}>• {x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
