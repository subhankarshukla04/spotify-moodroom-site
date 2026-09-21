"use client";

import Pin from "../Pin";
import Stage from "../Stage";

export default function Chapter1Hero() {
  return (
    <Pin id="hero" height="200vh">
      <div className="relative h-full w-full">
        {/* Scene 1 — title block, scales in slightly */}
        <Stage range={[0.0, 0.6]} y={28} scale={[0.96, 1]}>
          <div className="w-full max-w-5xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
              Spotify Moodroom · Build 01 · 2026
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-12">
              Personal tool · 6 rooms · 670+ tracks · runs on my laptop
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Build 01
            </div>
            <h1 className="serif font-light text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-neutral-50 mb-6">
              Spotify Moodroom
            </h1>
            <p className="serif text-xl sm:text-2xl text-neutral-300 max-w-2xl leading-relaxed">
              A mood-based auto-queue I built for my own Spotify library. Six rooms, pools mined
              from my liked songs by an LLM, and an event-driven engine that learns from my skips
              and never lets Spotify autoplay decide what plays next.
            </p>
          </div>
        </Stage>

        {/* Scene 2 — context + CTAs (slides in from right, fades out left) */}
        <Stage range={[0.5, 1.0]} y={20} enterFromRight>
          <div className="w-full max-w-5xl mx-auto">
            <div className="mono text-[11px] text-neutral-400 max-w-2xl mb-10">
              Built for myself, over a few sessions, to fix the moment when a Spotify playlist
              runs dry and autoplay takes over. The source is open — anyone with a Premium account
              can fork it and re-mine it against their own liked songs. The patterns inside
              (skip-demote, library mining, event-driven top-up) are also things Spotify could
              implement directly. This is what they look like working.
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <a
                href="#build"
                className="group inline-flex items-center gap-2 rounded-full bg-moodroom-indigo/15 hover:bg-moodroom-indigo/25 border border-moodroom-indigo/40 hover:border-moodroom-indigo/60 transition-colors px-5 py-2.5"
              >
                <span className="text-sm text-neutral-100">Watch the walkthrough</span>
                <span className="text-moodroom-indigo">↓</span>
              </a>
              <a
                href="https://github.com/subhankarshukla04/spotify-moodroom"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 hover:border-neutral-600 transition-colors px-5 py-2.5"
              >
                <span className="text-sm text-neutral-300">View source on GitHub</span>
                <span className="text-neutral-500">↗</span>
              </a>
            </div>
            <div className="pt-8 mono text-[10px] text-neutral-500 border-t border-neutral-800/60 max-w-2xl">
              Built by Subhankar Shukla. Independent project — not affiliated with Spotify. Runs
              locally on my Mac against my own Spotify account; no hosted service, no users.
            </div>
          </div>
        </Stage>
      </div>
    </Pin>
  );
}
