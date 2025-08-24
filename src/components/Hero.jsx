export default function Hero() {
  return (
    <section className="section bg-soft">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-10 items-center">
        {/* Left copy */}
        <div className="md:col-span-7">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background:"rgba(131,208,0,.20)", color:"var(--primary-dark)", border:"1px solid rgba(131,208,0,.40)" }}>
            Nepal • Software Studio
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-ink leading-[1.1]">
            Build faster. <span className="text-brand-deep">Scale smarter.</span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-2xl">
            We craft high-performance websites, apps, and platforms with clean architecture and measurable outcomes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="btn-brand">Start a Project</a>
            <a href="/portfolio" className="btn-brand" style={{ background:"transparent", color:"var(--primary-dark)", border:"2px solid var(--primary)" }}>
              See Our Work
            </a>
          </div>
        </div>

        {/* Right highlight card */}
        <div className="md:col-span-5">
          <div className="card p-6">
            <div className="text-sm font-semibold text-brand-deep">Why Code Sangraha?</div>
            <ul className="mt-3 space-y-2 text-ink/90">
              <li>✓ Senior engineering, rapid sprints</li>
              <li>✓ Production-grade DevOps from day one</li>
              <li>✓ Partnership mindset & clear comms</li>
            </ul>
            <div className="mt-6 h-1 w-16 rounded-full brand-grad" />
          </div>
        </div>
      </div>
    </section>
  );
}
