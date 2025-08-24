// src/pages/Contact.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [sp] = useSearchParams();
  const [demo, setDemo] = useState("");
  useEffect(() => {
    const d = sp.get("demo");
    if (d) setDemo(d);
  }, [sp]);

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
            Contact
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">
            Let’s start your <span className="text-emerald-600">project</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Tell us about your goals. We’ll get back within one business day.
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

      {/* ===== Form + Info ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {/* ---- FORM ---- */}
          <form
            className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* Replace with your real key */}
            <input
              type="hidden"
              name="access_key"
              value="YOUR_WEB3FORMS_ACCESS_KEY"
            />
            <input type="hidden" name="from_name" value="Code Sangraha Website" />
            <input type="hidden" name="redirect" value="/thanks" />
            <input
              type="hidden"
              name="subject"
              value={
                demo
                  ? `Demo request — ${demo}`
                  : "New inquiry from Code Sangraha website"
              }
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>

            <input
              name="company"
              type="text"
              placeholder="Company (optional)"
              className="mt-5 w-full border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />

            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <select
                name="service"
                className="border border-slate-200 rounded-lg p-3"
                defaultValue=""
              >
                <option value="" disabled>
                  Interested in…
                </option>
                <option>Website</option>
                <option>Web App</option>
                <option>Mobile App</option>
                <option>E-commerce</option>
                <option>Custom Software</option>
                <option>Cloud & DevOps</option>
              </select>
              <select
                name="timeline"
                className="border border-slate-200 rounded-lg p-3"
                defaultValue=""
              >
                <option value="" disabled>
                  Timeline
                </option>
                <option>Urgent (2–4 weeks)</option>
                <option>1–2 months</option>
                <option>3–6 months</option>
                <option>Flexible</option>
              </select>
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Project details"
              className="mt-5 w-full border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              defaultValue={
                demo ? `Hi, I'd like a demo of ${demo}. Goals:\n- \n- \n` : ""
              }
              required
            />

            <button
              className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-emerald-900"
              style={{
                background:
                  "linear-gradient(90deg,#d9fce9,#b7f2d9,#d9fce9)",
                backgroundSize: "200% 100%",
              }}
            >
              Send Message
            </button>

            {/* small privacy note */}
            <p className="mt-3 text-xs text-slate-500">
              By submitting, you agree to be contacted about your request. We
              don’t share your info.
            </p>
          </form>

          {/* ---- INFO + MAP ---- */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="text-sm text-emerald-700 font-semibold">
                Contact Info
              </div>
              <ul className="mt-3 space-y-3 text-slate-700">
                <li>📧 codesangraha@gmail.com</li>
                <li>📍 Dharan, Nepal</li>
                <li>🕒 Always Open NPT</li>
              </ul>
              {demo && (
                <p className="mt-4 text-xs text-emerald-700">
                  Note: You are requesting a demo for <b>{demo}</b>.
                </p>
              )}
              <div className="mt-6 h-1 w-16 rounded-full bg-emerald-500" />
              <p className="mt-4 text-sm text-slate-600">
                Prefer a call? Tell us your time window in the message and we’ll
                schedule it.
              </p>
            </div>

            {/* MAP */}
            <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  title="Code Sangraha — Kathmandu"
                  src="https://www.google.com/maps?q=Kathmandu%2C%20Nepal&output=embed"
                  className="w-full aspect-16-9 md:aspect-4-3"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="p-3 text-xs text-slate-500 flex items-center justify-between">
                <span>Map: Kathmandu, Nepal</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kathmandu%2C%20Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
