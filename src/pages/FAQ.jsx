import React from "react";
import { FAQS } from "../data/site.js";

export default function FAQ() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(120deg,#ecfdf5 0%,#e6fff4 40%,#ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            FAQ
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">
            Questions & <span className="text-emerald-600">answers</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Quick answers to the most common questions about working with us.
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 right-0 -mb-px" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 60H0V0Z" fill="#ffffff" />
        </svg>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 grid gap-3">
          {FAQS.map((f, i) => (
            <details key={i} className="card p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
              <p className="mt-2 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
