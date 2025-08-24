import { PROJECTS } from "../data/site";

export default function ProjectsGrid({ limit }) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-ink">Recent Work</h2>
            <p className="mt-2 text-muted">Selected projects across fintech, commerce, and education.</p>
          </div>
          <a href="/portfolio" className="btn-brand">View All</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <a key={p.title}
               href="/portfolio"
               className={`card overflow-hidden ${i===0 ? "md:col-span-2" : ""}`}>
              <div className="relative">
                <img src={p.cover} alt={p.title} className="h-64 w-full object-cover md:h-80 transition duration-300 hover:scale-[1.03]" />
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full brand-chip">
                  {p.tag}
                </span>
              </div>
              <div className="p-4">
                <div className="font-semibold text-ink">{p.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
