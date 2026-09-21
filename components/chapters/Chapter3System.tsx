"use client";

import Pin from "../Pin";
import Stage from "../Stage";

const steps = [
  { n: "01", role: "Input",  title: "My Spotify library goes in.",                         body: "One OAuth flow against my own Spotify account, then every track in my liked songs is pulled into a local SQLite snapshot. 246 tracks for the first build." },
  { n: "02", role: "Human",  title: "I define the rooms by hand.",                         body: "Six rooms — Late Night, Throwback Pop, House, Rage, Throwback Rap, After Hours. Naming them is the only strategic work I do; everything below this is the system." },
  { n: "03", role: "AI",     title: "The library gets mined into the right rooms.",        body: "An LLM (Claude, via OpenRouter) places each of my liked tracks into the room it fits. Marvins Room → Late Night. SICKO MODE → Rage. 180+ of my 246 liked tracks landed somewhere." },
  { n: "04", role: "System", title: "A weighted sampler picks 10 tracks per click.",       body: "Each click pulls 5 CONFIRMED (mined from my library) · 4 SAFE_SIDE (genre-correct candidates I haven't liked yet) · 1 DISCOVERY (a fresh swing). No track repeats within a 15-pick rolling window." },
  { n: "05", role: "System", title: "An event-driven loop keeps the queue alive.",         body: "A background Python thread polls Spotify every six seconds. When my current track changes, one fresh track is added to the queue. Autoplay never gets a turn." },
  { n: "06", role: "System", title: "My skips teach the pool what doesn't belong.",        body: "Skip a CONFIRMED track in under 30s → it gets demoted to SAFE_SIDE on the first strike, removed on the second. Survive a full play and a DISCOVERY track auto-promotes into SAFE_SIDE. The pool learns from how I actually listen, not from a survey." },
];

const lanes = [
  { key: "late_night",     name: "Late Night",     sub: "OVO atmosphere",       counts: "64 saved · 34 pool · 35 fresh", accent: "#a5b4fc" },
  { key: "throwback_pop",  name: "Throwback Pop",  sub: "2010 radio",           counts: "9 saved · 62 pool · 29 fresh",  accent: "#f9a8d4" },
  { key: "house_music",    name: "House",          sub: "afro & Keinemusik",    counts: "7 saved · 30 pool · 15 fresh",  accent: "#fbbf24" },
  { key: "rage",           name: "Rage",           sub: "high-energy trap",     counts: "42 saved · 26 pool · 18 fresh", accent: "#fca5a5" },
  { key: "throwback_rap",  name: "Throwback Rap",  sub: "2010s anthems",        counts: "52 saved · 40 pool · 16 fresh", accent: "#fcd34d" },
  { key: "after_hours",    name: "After Hours",    sub: "cinematic electronic", counts: "31 saved · 29 pool · 15 fresh", accent: "#67e8f9" },
];

export default function Chapter3System() {
  return (
    <Pin id="system" height="320vh">
      <div className="relative h-full w-full">
        {/* Scene 1 — heading */}
        <Stage range={[0.0, 0.32]} y={24} scale={[0.96, 1]} exitLeft>
          <div className="w-full max-w-4xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
              How it works
            </div>
            <h2 className="serif text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.05] text-neutral-100 mb-8">
              From my liked songs to a queue that <em className="text-moodroom-indigo not-italic">never dies</em>.
            </h2>
            <p className="text-neutral-400 max-w-2xl leading-relaxed text-lg">
              Six steps. Two of them human (mine), four of them the system doing exactly what the
              human told it to. If you fork the repo and point it at your account, your library
              flows through the same pipeline and the rooms you define become yours.
            </p>
          </div>
        </Stage>

        {/* Scene 2 — the six pipeline steps */}
        <Stage range={[0.30, 0.68]} y={20} enterFromRight exitLeft>
          <div className="w-full max-w-5xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
              The pipeline
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {steps.map((s) => (
                <div key={s.n} className="grid grid-cols-[44px_1fr] gap-3 items-start">
                  <div className="mono text-base text-moodroom-indigo/80 font-light tabular-nums pt-1">{s.n}</div>
                  <div>
                    <div className="mono text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-1">{s.role}</div>
                    <h3 className="serif text-base sm:text-lg text-neutral-100 mb-1.5 leading-snug">{s.title}</h3>
                    <p className="text-neutral-400 leading-relaxed text-[13px]">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Stage>

        {/* Scene 3 — six lane cards */}
        <Stage range={[0.66, 1.0]} y={20} enterFromRight>
          <div className="w-full max-w-6xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Step 02 in detail · the rooms I picked
            </div>
            <h3 className="serif text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-neutral-100 mb-6">
              Six rooms. My library mined into all of them.
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {lanes.map((l, i) => (
                <div
                  key={l.key}
                  className="relative rounded-2xl overflow-hidden border border-neutral-800"
                >
                  <div className={`absolute inset-0 mood-grad-${l.key} opacity-95`} />
                  <div className="relative p-4 sm:p-5">
                    <div className="mono text-[10px] tabular-nums text-neutral-400 mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="serif text-xl font-light leading-tight" style={{ color: l.accent }}>
                      {l.name.toLowerCase()}
                    </div>
                    <div className="text-xs text-neutral-300/80 mt-1">{l.sub}</div>
                    <div className="mono text-[10px] text-neutral-400/70 mt-3 tabular-nums pt-2 border-t border-white/10">
                      {l.counts}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Stage>
      </div>
    </Pin>
  );
}
