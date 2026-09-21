"use client";

import Pin from "../Pin";
import Stage from "../Stage";

const failures = [
  {
    n: "01 · Centroid bias",
    body: (
      <>
        Spotify&apos;s recommender pushes you toward what people <em>like you</em> also
        listen to. Useful for discovery, terrible for vibe — the &quot;people like me&quot;
        cohort isn&apos;t my taste, it&apos;s an average of my taste cluster.
      </>
    ),
  },
  {
    n: "02 · No skip feedback",
    body: (
      <>
        A playlist on shuffle has no idea you skipped &quot;Take Time&quot; for the
        third time. Tomorrow it&apos;s in the same place, ready to be skipped again.
      </>
    ),
  },
  {
    n: "03 · Queue collapse",
    body: (
      <>
        When a fixed playlist ends, Spotify autoplay kicks in. The thing you set up
        to control your mood quietly hands itself back to the recommender after
        track ten.
      </>
    ),
  },
];

export default function Chapter2Why() {
  return (
    <Pin id="why" height="280vh">
      <div className="relative h-full w-full">
        {/* Scene 1 — headline alone, then it slides off as cards come in */}
        <Stage range={[0.0, 0.28]} y={24} scale={[0.96, 1]} exitLeft>
          <div className="w-full max-w-3xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Why I built it
            </div>
            <h2 className="serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-neutral-100 mb-8">
              Spotify autoplay <em className="text-moodroom-indigo not-italic">always wins</em> eventually.
            </h2>
            <p className="serif text-xl sm:text-2xl text-neutral-300 leading-relaxed">
              Every queue I make runs dry. The last song ends, and Spotify falls back to its own
              recommendations — songs from people who listen <em>like</em> me, not the songs <em>I</em>
              actually like. The vibe I set up forty minutes ago quietly disappears.
            </p>
          </div>
        </Stage>

        {/* Scene 2 — the three failure modes, slide in from right */}
        <Stage range={[0.25, 0.7]} y={20} enterFromRight exitLeft>
          <div className="w-full max-w-3xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
              Three failure modes I kept hitting — and decided to fix
            </div>
            <div className="space-y-7">
              {failures.map((f) => (
                <div key={f.n} className="border-l border-neutral-800 pl-6">
                  <div className="mono text-[10px] uppercase tracking-[0.2em] text-moodroom-indigo mb-2">
                    {f.n}
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Stage>

        {/* Scene 3 — the closing question, slides in from right */}
        <Stage range={[0.68, 1.0]} y={20} enterFromRight>
          <div className="w-full max-w-3xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
              So the question becomes
            </div>
            <p className="serif italic text-2xl sm:text-3xl lg:text-4xl text-neutral-100 border-l-2 border-moodroom-indigo pl-6 leading-relaxed">
              can the curation be done by a system tuned to one library specifically — mine —
              learning from my skips and surviving the moment a playlist would otherwise end?
            </p>
          </div>
        </Stage>
      </div>
    </Pin>
  );
}
