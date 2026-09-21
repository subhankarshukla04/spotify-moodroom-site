"use client";

import Pin from "../Pin";
import Stage from "../Stage";

const stats = [
  { label: "Rooms calibrated",                value: "6" },
  { label: "Tracks across all pools",         value: "670+" },
  { label: "My liked songs scanned",          value: "246" },
  { label: "Library tracks mined into rooms", value: "180+" },
  { label: "Validated picks (Late Night)",    value: "20" },
  { label: "Calibration rounds (Late Night)", value: "5" },
  { label: "Audit pass — misfits removed",    value: "13" },
  { label: "Where it runs",                   value: "Local" },
];

export default function Chapter5Output() {
  return (
    <Pin id="output" height="220vh">
      <div className="relative h-full w-full">
        {/* Scene 1 — heading */}
        <Stage range={[0.0, 0.3]} y={24} scale={[0.96, 1]} exitLeft>
          <div className="w-full max-w-3xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
              What it produced
            </div>
            <h2 className="serif text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.05] text-neutral-100 mb-6">
              <em className="text-moodroom-indigo not-italic">Build 01</em> · the system at rest.
            </h2>
            <p className="text-neutral-400 max-w-2xl leading-relaxed text-lg">
              Numbers after the first build, the library-mining pass, five Late Night calibration
              rounds, and the post-build audit that cut 13 off-room tracks. The runtime is local
              — a Flask app on my laptop talking to the Spotify Web API. It only auto-queues while
              I have it open. Cloud deploy is Build 02.
            </p>
          </div>
        </Stage>

        {/* Scene 2 — stats grid, scales in slightly */}
        <Stage range={[0.28, 0.66]} y={20} scale={[0.97, 1]} enterFromRight exitLeft>
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.label} className="bg-neutral-950 p-6">
                  <div className="serif text-3xl sm:text-4xl text-neutral-100 font-light tabular-nums leading-none mb-2">
                    {s.value}
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Stage>

        {/* Scene 3 — the audit story, fades in */}
        <Stage range={[0.64, 1.0]} y={20} enterFromRight>
          <div className="w-full max-w-3xl mx-auto">
            <div className="border-l border-moodroom-indigo/40 pl-6">
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-moodroom-indigo mb-3">
                One audit example
              </div>
              <p className="text-neutral-300 leading-relaxed text-lg sm:text-xl">
                On the first audit pass against Late Night&apos;s 146-track pool, 13 tracks were
                removed for off-vibe — including <em>Knife Talk</em> (aggressive Memphis trap,
                belongs in Rage), <em>Cry For Me</em> (recent Weeknd disco-pop, off-texture), and{" "}
                <em>Pyramids</em> (10-minute multi-movement epic, structural mismatch). Lollipop
                and Mystery Lady were flagged, then kept on closer listen. The audit was me
                listening, not the system — the system&apos;s job is to stop putting them in the
                queue once I skip them.
              </p>
            </div>
          </div>
        </Stage>
      </div>
    </Pin>
  );
}
