import React from "react";
import { Link } from "react-router-dom";
import { SERVICES, PROJECTS, TESTIMONIALS } from "../data/site.js";

/* ----------------- HERO ----------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Light split background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, #ecfdf5 0%, #e6fff4 40%, #f7fff9 40%, #ffffff 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-28 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            Nepal • Think Software Think Us
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.1] text-slate-900">
            Build faster. <span className="text-emerald-600">Scale</span>{" "}
            smarter.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Websites, apps, and platforms engineered with clean architecture and
            measurable outcomes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-emerald-900"
              style={{
                background: "linear-gradient(90deg,#d9fce9,#b7f2d9,#d9fce9)",
                backgroundSize: "200% 100%",
              }}
            >
              Start a Project
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-emerald-300/60 bg-emerald-50 text-emerald-700"
            >
              See Our Work
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
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

        <div className="md:col-span-5">
          <div
            className="rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-lg reveal"
            style={{ animationDelay: "120ms" }}
          >
            <div className="text-sm font-semibold text-emerald-700">
              Why Code Sangraha?
            </div>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>✓ Senior engineering, rapid sprints</li>
              <li>✓ Production-grade Development from day one</li>
              <li>✓ Partnership mindset & clear communication</li>
            </ul>
            <div className="mt-6 h-1 w-16 rounded-full bg-emerald-500" />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-xs text-slate-500">Frontend</div>
                <div className="font-semibold text-slate-900">
                  React + Tailwind
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-xs text-slate-500">Backend</div>
                <div className="font-semibold text-slate-900">
                  Node / Django
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------- ABOUT PREVIEW ------------- */
function AboutPreview() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/assets/cs7.jpg"
          alt="About"
          loading="lazy"
          decoding="async"
          className="rounded-2xl border border-slate-200 shadow-md reveal"
          style={{ animationDelay: "80ms" }}
        />
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            About Code Sangraha
          </h2>
          <p className="mt-3 text-slate-600">
            We’re a Nepal-based software studio crafting high-performance
            products for startups and enterprises.
          </p>
          <ul className="mt-6 grid gap-3 text-slate-700">
            <li className="flex gap-2">
              <span className="text-emerald-600">▸</span> Transparent
              communication
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">▸</span> Agile, scalable
              solutions
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">▸</span> Long-term support &
              maintenance
            </li>
          </ul>
          <Link
            to="/about"
            className="mt-6 inline-flex text-emerald-700 font-semibold"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function ServicesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Capabilities</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            What we do exceptionally well.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="bg-white border border-emerald-200/50 rounded-2xl p-7 shadow-sm reveal"
              style={{ animationDelay: `${80 + i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-emerald-50 text-emerald-600 text-xl">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-slate-600">{s.desc}</p>
              <div className="mt-6 h-1 w-16 rounded-full bg-emerald-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------- FEATURED PROJECTS --------- */
function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Recent Work</h2>
            <p className="mt-2 text-slate-600">
              Selected projects across fintech, commerce, and education.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-emerald-300/60 bg-emerald-50 text-emerald-700"
          >
            View All
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.title}
              to="/portfolio"
              className={`rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm reveal ${
                i === 0 ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${80 + i * 80}ms` }}
            >
              <div className="relative">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover aspect-16-9 transition duration-300 hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-emerald-600 text-white">
                  {p.tag}
                </span>
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------- TESTIMONIALS ------------- */
function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          What Clients Say
        </h2>

        <div className="mt-10 overflow-hidden">
          <div
            className="flex gap-6"
            style={{ width: "200%", animation: "marquee 22s linear infinite" }}
          >
            {loop.map((t, i) => (
              <div
                key={i}
                className="w-[calc(50%-12px)] min-w-[360px] bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
              >
                <p className="text-slate-700 leading-relaxed">“{t.quote}”</p>
                <div className="mt-4 font-medium text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ BIG CTA ------------------------ */
function BigCTA() {
  return (
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
        <Link
          to="/contact"
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
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <FeaturedProjects />
      <Testimonials />
      <BigCTA />
    </>
  );
}
