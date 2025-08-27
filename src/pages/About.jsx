import React from "react";
import { COMPANY } from "../data/site.js";

/*
  Images you can swap later:
  - /src/assets/cs2.jpg  -> office / team working photo (hero side)
  - /src/assets/cs6.jpg  -> team group photo (story section)
*/

export default function About() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #ecfdf5 0%, #e6fff4 40%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
              About {COMPANY.name}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">
              We craft <span className="text-emerald-600">reliable</span>{" "}
              software — fast.
            </h1>
            <p className="mt-3 text-lg text-slate-600 max-w-3xl">
              We’re a Nepal-based team helping people turn ideas into reliable
              websites, mobile apps, and custom software — built with care,
              backed by solid engineering, and designed to make a difference.
              From design and development to deployment and support, we deliver
              solutions that last.
            </p>

            {/* quick badges */}
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {[
                "React/Tailwind",
                "Node/Django",
                "CI/CD",
                "Cloud",
                "Accessibility",
                "Analytics",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-emerald-200/60 bg-white text-emerald-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-emerald-200/60 bg-white p-4 shadow-sm">
              <img
                src="/assets/cs6.jpg"
                alt="Our workspace"
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* bottom diagonal */}
        <svg
          className="absolute bottom-0 left-0 right-0 -mb-px"
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L1440 60H0V0Z" fill="#ffffff" />
        </svg>
      </section>

      {/* ====== STORY + METRICS ====== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/assets/cs17.jpg"
            alt="Team at work"
            loading="lazy"
            decoding="async"
            className="rounded-2xl border border-slate-200 shadow-sm reveal"
            style={{ animationDelay: "80ms" }}
          />

          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our story</h2>
            <p className="mt-3 text-slate-600">
              We started {COMPANY.name} in Dharan to build software that is
              simple, reliable, and made to last. By creating technology that
              solves real problems, we aim to help businesses grow and play our
              part in uplifting society through tech.
            </p>

            {/* metrics */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                ["28+", "Projects"],
                ["17+", "Clients"],
                ["2 yrs", "Experience"],
              ].map(([k, v], i) => (
                <div
                  key={i}
                  className="rounded-xl border border-emerald-200/60 bg-white px-4 py-3 text-center reveal"
                  style={{ animationDelay: `${150 + i * 100}ms` }}
                >
                  <div className="text-xl font-semibold text-emerald-700">
                    {k}
                  </div>
                  <div className="text-xs text-slate-500">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== VALUES ====== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">What we value</h2>
            <p className="mt-2 text-slate-600">
              Principles that guide every sprint.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Clarity", "Simple, written plans. No vague tickets."],
              ["Velocity", "Tight loops: design → build → ship."],
              ["Quality", "Reviews, tests, and clean architecture."],
              ["Ownership", "We think like partners, not vendors."],
            ].map(([t, d], i) => (
              <div
                key={t}
                className="card p-6 reveal"
                style={{ animationDelay: `${80 + i * 80}ms` }}
              >
                <div className="text-sm text-emerald-700 font-semibold">
                  {t}
                </div>
                <p className="mt-2 text-slate-700">{d}</p>
                <div className="mt-5 h-1 w-16 rounded-full bg-emerald-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROCESS SNAPSHOT (TIMELINE) ====== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">How we work</h2>
            <p className="mt-2 text-slate-600">
              A predictable path from idea to production.
            </p>
          </div>

          <ol className="mt-10 relative border-l border-line pl-6 space-y-10">
            {[
              [
                "01",
                "Discovery",
                "Define the problem, users, scope, and success metrics.",
              ],
              [
                "02",
                "Design",
                "Wireframes → UI → clickable prototype. Accessibility first.",
              ],
              [
                "03",
                "Build",
                "Agile sprints, code reviews, CI/CD, and instrumentation.",
              ],
              [
                "04",
                "Launch",
                "Zero-downtime deploys with rollback plans and runbooks.",
              ],
              [
                "05",
                "Iterate",
                "Measure, learn, and ship improvements tied to KPIs.",
              ],
            ].map(([k, t, d], i) => (
              <li
                key={k}
                className="reveal"
                style={{ animationDelay: `${80 + i * 80}ms` }}
              >
                <div className="absolute -left-[10px] top-1.5 h-4 w-4 rounded-full bg-emerald-500" />
                <div className="text-sm text-emerald-700 font-semibold">
                  {k}
                </div>
                <div className="mt-1 text-xl font-semibold text-slate-900">
                  {t}
                </div>
                <p className="text-slate-600">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ====== CERTIFICATIONS / TOOLING ====== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Tooling & quality
            </h2>
            <p className="mt-2 text-slate-600">
              What we rely on to keep uptime high and bugs low.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Frontend", "React, Vite, Tailwind, TypeScript"],
              ["Backend", "Node, Express/Nest, Django, PostgreSQL"],
              ["Cloud & DevOps", "Docker, CI/CD, NGINX, Vercel/AWS"],
              ["Quality", "ESLint, Prettier, Playwright, Sentry"],
            ].map(([t, d], i) => (
              <div
                key={t}
                className="card p-6 reveal"
                style={{ animationDelay: `${80 + i * 80}ms` }}
              >
                <div className="text-sm text-emerald-700 font-semibold">
                  {t}
                </div>
                <p className="mt-2 text-slate-700">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MINI FAQ ====== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
            <p className="mt-2 text-slate-600">
              Quick answers about working with us.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {[
              [
                "How do we start?",
                "A short discovery call → proposal with scope, timeline, and budget.",
              ],
              [
                "Fixed or hourly?",
                "Both. Clear scopes = fixed; evolving products = sprint retainers.",
              ],
              [
                "Who owns the code?",
                "You do. We deliver in your GitHub with docs and runbooks.",
              ],
              [
                "Can you take over an existing codebase?",
                "Yes — we audit, stabilize, then improve incrementally.",
              ],
            ].map(([q, a], i) => (
              <details
                key={i}
                className="card p-5 reveal"
                style={{ animationDelay: `${60 + i * 80}ms` }}
              >
                <summary className="cursor-pointer font-semibold text-slate-900">
                  {q}
                </summary>
                <p className="mt-2 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #e7fcef 0%, #b7f2d9 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Have an idea to build?
          </h3>
          <p className="mt-3 text-slate-700">
            Let’s design a clear roadmap and ship it together.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-emerald-900"
            style={{
              background: "linear-gradient(90deg,#d9fce9,#b7f2d9,#d9fce9)",
              backgroundSize: "200% 100%",
            }}
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
