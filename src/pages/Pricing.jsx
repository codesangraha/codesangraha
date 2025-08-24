import React from "react";
import { PLANS, FAQS } from "../data/site.js";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(120deg,#ecfdf5 0%,#e6fff4 40%,#ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            Pricing
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">
            Transparent <span className="text-emerald-600">plans</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Choose a package or ask for a custom quote for complex products.
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 right-0 -mb-px" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 60H0V0Z" fill="#ffffff" />
        </svg>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {PLANS.map((p, i) => (
            <div key={p.name} className="card p-7 reveal" style={{ animationDelay: `${80 + i * 80}ms` }}>
              <div className="text-sm text-emerald-700 font-semibold">{p.name}</div>
              <div className="mt-2 text-3xl font-bold text-slate-900">{p.price}</div>
              <p className="mt-2 text-muted">{p.desc}</p>
              <ul className="mt-5 space-y-2 text-slate-900">
                {p.includes.map(x => <li key={x}>✓ {x}</li>)}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex btn-primary">Start</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="mt-4 grid gap-3">
            {FAQS.map((f, i) => (
              <details key={i} className="card p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
                <p className="mt-2 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
