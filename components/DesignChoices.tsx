const choices = [
  {
    n: "01",
    title: "Skip-demote — learns from playing, not asking.",
    body:
      "A skip in under 30 seconds writes to a state.json overlay: CONFIRMED → SAFE_SIDE on the first strike, SAFE → removed on the second. Discovery picks get one strike, not two. No surveys, no taste questionnaires — the only signal is whether you let a track play.",
  },
  {
    n: "02",
    title: "Discovery slot — the pool grows itself.",
    body:
      "One of every ten picks is from a fresh DISCOVERY_POOL of tracks not yet in the active pools. Survive a full play and the system auto-promotes it into SAFE_SIDE. Skip in <30s and it's removed forever. The pool refines itself over weeks without intervention.",
  },
  {
    n: "03",
    title: "Library mining — your taste, not collaborative filtering.",
    body:
      "Each lane's CONFIRMED pool is mined from the user's existing liked tracks via an LLM scan. 45 of the 64 Late Night tracks were already in the library — the system surfaces them in the right context. Spotify's algorithm wouldn't bias a vibe playlist toward stuff you already own.",
  },
  {
    n: "04",
    title: "Event-driven top-up — autoplay never wins.",
    body:
      "A background loop polls current_playback every six seconds. When the track_id changes, that's the signal — one fresh track joins the queue. The Spotify queue API is unreliable (returns stale snapshots), so the system uses track-change events instead. Queue stays continuously alive across sessions, devices, and Flask restarts.",
  },
  {
    n: "05",
    title: "No back-to-back repeats — rolling dedup window.",
    body:
      "Every queued track is remembered in a 15-entry rolling deque. The sampler filters that set out of the pool before each pick. A track that just played can't reappear in the next 14 picks, even if the RNG would have chosen it.",
  },
];

export default function DesignChoices() {
  return (
    <section className="border-t border-neutral-900 px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Why this isn&apos;t just a playlist
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-light leading-tight text-neutral-100 mb-4">
          Five design choices that make it a system, not a list.
        </h2>
        <p className="text-neutral-400 mb-16 max-w-2xl leading-relaxed">
          The thing that separates Moodroom from a curated playlist on shuffle isn&apos;t
          the songs — it&apos;s how they get there, how they get removed, and what happens
          when the queue runs low.
        </p>

        <div className="space-y-10">
          {choices.map((c) => (
            <div key={c.n} className="grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-8 items-start">
              <div className="mono text-xl text-moodroom-indigo/80 font-light tabular-nums">
                {c.n}
              </div>
              <div>
                <h3 className="serif text-xl text-neutral-100 mb-2 leading-snug">{c.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-[15px]">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
