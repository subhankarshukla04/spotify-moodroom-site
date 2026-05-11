const stats = [
  { label: "Lanes calibrated", value: "6" },
  { label: "Tracks across all pools", value: "670+" },
  { label: "Liked songs scanned", value: "246" },
  { label: "Library tracks mined into lanes", value: "180+" },
  { label: "Validated picks (Late Night)", value: "20" },
  { label: "Calibration rounds (Late Night)", value: "5" },
  { label: "Audit pass — misfits removed", value: "13" },
  { label: "Auto-queue uptime", value: "24/7" },
];

export default function Output() {
  return (
    <section className="border-t border-neutral-900 px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          What it produced
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-light leading-tight text-neutral-100 mb-4">
          Build 01 · the system at rest.
        </h2>
        <p className="text-neutral-400 mb-12 max-w-2xl leading-relaxed">
          Numbers after the first build, the library mining cycle, five Late Night
          calibration rounds, and the post-build audit that cut 13 off-lane tracks.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-neutral-950 p-6">
              <div className="serif text-3xl text-neutral-100 font-light tabular-nums leading-none mb-2">
                {s.value}
              </div>
              <div className="mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l border-moodroom-indigo/40 pl-6">
          <div className="mono text-[10px] uppercase tracking-[0.25em] text-moodroom-indigo mb-2">
            One audit example
          </div>
          <p className="text-neutral-300 leading-relaxed">
            On the first audit pass against Late Night&apos;s 146-track pool, 13 tracks were
            removed for off-vibe — including <em>Knife Talk</em> (aggressive Memphis trap,
            belongs in Rage), <em>Cry For Me</em> (recent Weeknd disco-pop, off-texture), and{" "}
            <em>Pyramids</em> (10-minute multi-movement epic, structural mismatch). Lollipop and
            Mystery Lady were flagged, then kept on closer listen — texture differences don&apos;t
            disqualify a track if the mood lands.
          </p>
        </div>
      </div>
    </section>
  );
}
