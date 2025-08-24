import { SERVICES } from "../data/site";

export default function ServicesGrid({ limit }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Capabilities</h2>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto">What we do exceptionally well.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((s, i) => (
            <div key={s.title} className="grad-border reveal" style={{animationDelay:`${100 + i*80}ms`}}>
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-emerald-500/15 text-emerald-300 text-xl">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white">{s.title}</h3>
                </div>
                <p className="mt-3 text-slate-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
