import React from "react";

export default function Quote() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(120deg, #ecfdf5 0%, #e6fff4 40%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-14">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">Quote</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1] text-slate-900">Get a project <span className="text-emerald-600">estimate</span></h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">Share your scope, budget range, and timeline. We’ll reply with a plan.</p>
        </div>
        <svg className="absolute bottom-0 left-0 right-0 -mb-px" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L1440 60H0V0Z" fill="#ffffff" /></svg>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <form className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
            <input type="hidden" name="from_name" value="Code Sangraha Website" />
            <input type="hidden" name="subject" value="Get a Quote — Code Sangraha" />
            <input type="hidden" name="redirect" value="/thanks" />

            <div className="grid sm:grid-cols-2 gap-5">
              <input name="name" type="text" placeholder="Full Name" required className="border border-slate-200 rounded-lg p-3" />
              <input name="email" type="email" placeholder="Email" required className="border border-slate-200 rounded-lg p-3" />
            </div>

            <input name="company" type="text" placeholder="Company (optional)" className="mt-5 w-full border border-slate-200 rounded-lg p-3" />

            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <select name="budget" className="border border-slate-200 rounded-lg p-3">
                <option value="">Budget range</option>
                <option>Under $1k</option><option>$1k – $5k</option><option>$5k – $15k</option><option>$15k+</option>
              </select>
              <select name="timeline" className="border border-slate-200 rounded-lg p-3">
                <option value="">Timeline</option>
                <option>Urgent (2–4 weeks)</option><option>Short (1–2 months)</option><option>Medium (3–6 months)</option><option>Long (6+ months)</option>
              </select>
            </div>

            <textarea name="message" rows="6" placeholder="Describe the scope, features, and success metrics" className="mt-5 w-full border border-slate-200 rounded-lg p-3" required></textarea>

            <button className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-emerald-900" style={{ background: "linear-gradient(90deg,#d9fce9,#b7f2d9,#d9fce9)" }}>
              Get Quote
            </button>
          </form>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="text-sm text-emerald-700 font-semibold">What to include</div>
            <ul className="mt-3 space-y-3 text-slate-700">
              <li>• Business goal / problem</li>
              <li>• Core features (must-have)</li>
              <li>• Success metrics (KPIs)</li>
              <li>• Deadline or launch window</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
