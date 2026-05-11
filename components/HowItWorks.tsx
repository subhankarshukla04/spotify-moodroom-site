const steps = [
  {
    n: "01",
    role: "Input",
    title: "Your Spotify library goes in.",
    body:
      "One OAuth flow, then every track in your liked songs is pulled into a local SQLite snapshot. 246 tracks for the first build. Nothing scraped, nothing leaked — just the library the user already curated by hand on Spotify over years.",
  },
  {
    n: "02",
    role: "Human",
    title: "The lanes are defined by hand.",
    body:
      "Before any AI runs, a human decides what counts as a mood. Six lanes for Build 01 — Late Night (OVO atmospheric), Throwback Pop (2010 radio), House (Keinemusik / afro), Rage (modern hard trap), Throwback Rap (2010s anthems), After Hours (cinematic electronic). The lane is the strategic work. Everything downstream is the system executing against it.",
  },
  {
    n: "03",
    role: "AI",
    title: "The library gets mined into the right lanes.",
    body:
      "The system feeds every liked track and the lane definitions into a language model and asks it to do one thing: place each track in the lane it fits. Marvins Room → Late Night. SICKO MODE → Rage. Hot N Cold → Throwback Pop. The output is a per-lane pool of confirmed tracks, mined entirely from the user&apos;s own taste.",
  },
  {
    n: "04",
    role: "System",
    title: "A Monte Carlo sampler picks 10 fresh tracks per click.",
    body:
      "Click a lane and the sampler pulls a batch: 5 from CONFIRMED (validated picks), 4 from SAFE_SIDE (curated unverified), 1 from DISCOVERY (a fresh outside pick). No track repeats within a 15-pick rolling window. Each click is a new batch — same lane, different songs.",
  },
  {
    n: "05",
    role: "System",
    title: "An event-driven loop keeps the queue alive.",
    body:
      "A background thread polls Spotify every six seconds. When the track_id changes — a song just ended — it fires one add_to_queue with a new fresh track. Spotify autoplay never gets a turn. Queue stays continuously full across devices, indefinitely.",
  },
  {
    n: "06",
    role: "System",
    title: "Skips teach the pool what doesn&apos;t belong.",
    body:
      "Skip a track in under 30 seconds and the system writes the demotion to a state.json overlay: CONFIRMED → SAFE_SIDE on first skip, SAFE → removed on second. A discovery that survives a full play auto-promotes to SAFE. The pool refines itself, song by song.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-neutral-900 px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          How it works
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-light leading-tight text-neutral-100 mb-4">
          From your liked songs to a queue that never dies.
        </h2>
        <p className="text-neutral-400 mb-16 max-w-2xl leading-relaxed">
          Six steps. Two of them human, four of them the system doing exactly what the
          human told it to.
        </p>

        <div className="space-y-12">
          {steps.map((s) => (
            <div key={s.n} className="grid sm:grid-cols-[80px_120px_1fr] gap-4 sm:gap-8 items-start">
              <div className="mono text-2xl text-moodroom-indigo/80 font-light tabular-nums">
                {s.n}
              </div>
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 pt-2">
                {s.role}
              </div>
              <div>
                <h3 className="serif text-xl text-neutral-100 mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-[15px]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
