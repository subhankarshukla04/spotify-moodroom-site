export default function Why() {
  return (
    <section className="border-t border-neutral-900 px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Why this exists
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-light leading-tight text-neutral-100 mb-8">
          Spotify autoplay always wins eventually. That was the problem.
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            Every queue runs dry. The last song ends, and Spotify falls back to its own
            recommendations — songs from people who listen <em>like</em> you, not songs <em>you</em> like.
            A static playlist on shuffle doesn&apos;t learn from a skip. A radio station never
            asked what mood you were in.
          </p>
          <p>
            So the question this project tries to answer is simple:
          </p>
          <p className="serif italic text-xl text-neutral-100 border-l-2 border-moodroom-indigo pl-6 my-8">
            can the curation be done by a system, tuned to one library specifically — learning
            from your skips and surviving the moment a playlist would otherwise end?
          </p>
        </div>
      </div>
    </section>
  );
}
