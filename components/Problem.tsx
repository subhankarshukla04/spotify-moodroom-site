export default function Problem() {
  return (
    <section className="border-t border-neutral-900 px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          The problem
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-light leading-tight text-neutral-100 mb-8">
          Three failure modes a system can fix.
        </h2>

        <div className="space-y-8 mt-12">
          <div className="border-l border-neutral-800 pl-6">
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-moodroom-indigo mb-2">
              01 · Centroid bias
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Spotify&apos;s recommender pushes you toward what people <em>like you</em> also
              listen to. Useful for discovery, terrible for vibe — the &quot;people like me&quot;
              cohort isn&apos;t my taste, it&apos;s an average of my taste cluster.
            </p>
          </div>

          <div className="border-l border-neutral-800 pl-6">
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-moodroom-indigo mb-2">
              02 · No skip feedback
            </div>
            <p className="text-neutral-300 leading-relaxed">
              A playlist on shuffle has no idea you skipped &quot;Take Time&quot; for the
              third time. Tomorrow it&apos;s in the same place, ready to be skipped again.
            </p>
          </div>

          <div className="border-l border-neutral-800 pl-6">
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-moodroom-indigo mb-2">
              03 · Queue collapse
            </div>
            <p className="text-neutral-300 leading-relaxed">
              When a fixed playlist ends, Spotify autoplay kicks in — and the algorithm
              wins. The thing you set up to control your mood quietly hands itself back
              to the recommender after track ten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
