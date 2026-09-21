"use client";

import Pin from "../Pin";
import StickyMedia from "../StickyMedia";

const beats = [
  { n: "01", title: "The hero · six rooms.",                   body: "Six mood cards in a 3×2 grid. Aurora drifting in indigo. Each card has its own colored hover glow. Picking a room is the only choice I have to make all night." },
  { n: "02", title: "The click · everything responds.",        body: "I click Late Night. Five cards fade. The chosen card scales up. Aurora crossfades to a deeper indigo. The now-playing card materializes at the top — and Spotify on my laptop starts the first track." },
  { n: "03", title: "The card · CONFIRMED, with a 0:30 tick.", body: "Track name in big serif. A bucket badge reads CONFIRMED — meaning this track came from my own liked songs, mined into Late Night. The progress bar has an amber tick at 0:30 — past it, a skip is natural and the engine ignores it." },
  { n: "04", title: "The queue · CONF · SAFE · DISC.",         body: "Ten upcoming tracks as a numbered manifest. Each row carries a small badge — CONF (indigo, from my library), SAFE (amber, room-correct candidate I haven't liked yet), DISC (gold ✦, a fresh swing). I can see which pool every track came from before it plays." },
  { n: "05", title: "The skip · the engine reacts in place.",  body: "I skip a CONFIRMED track at 0:12 in Spotify. A notice slides in above the now-playing: 'last skip · first skip · at 0:12 of 3:42 · CONFIRMED → DEMOTED to SAFE_SIDE'. The pool just rewrote itself based on something I did. No survey, no thumbs-down button." },
  { n: "06", title: "The auto-queue · invisible top-up.",      body: "A track ends. A background Python loop notices the track_id changed and adds one fresh pick to the bottom of the manifest. Spotify autoplay never gets a turn. As long as my laptop is on, the room never runs dry." },
];

const choices = [
  { n: "01", title: "Skip-demote — learns from playing, not asking.",         body: "A skip in <30s writes to a state.json overlay: CONFIRMED → SAFE_SIDE on first strike, SAFE → removed on second. No surveys, no taste questionnaires. The signal is whether I let the song play." },
  { n: "02", title: "Discovery slot — the pool grows itself.",                body: "One in ten picks is from a fresh DISCOVERY_POOL — a track I've never liked, but which fits the room on paper. Survive a full play and the system auto-promotes it into SAFE_SIDE for next time." },
  { n: "03", title: "Library mining — my taste, not collaborative filtering.", body: "Each room's CONFIRMED pool was mined from my own liked tracks via an LLM scan against the room definition. 45 of 64 Late Night tracks were already in my library — I just hadn't grouped them this way." },
  { n: "04", title: "Event-driven top-up — autoplay never wins.",             body: "A background loop polls current_playback every six seconds. When the track_id changes, that's the signal — one fresh pick joins the queue, replacing the slot Spotify autoplay would have filled." },
  { n: "05", title: "No back-to-back repeats — rolling dedup window.",        body: "Every queued track is remembered in a 15-entry rolling deque. The sampler filters that set out before each pick, so the room never trips into the same song twice in a row." },
];

const panels = [...beats, ...choices];

function Media() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-video w-full">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/walkthrough.mp4"
        poster="/walkthrough-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Spotify Moodroom walkthrough — silent screen recording"
      />
    </div>
  );
}

export default function Chapter4Build() {
  return (
    <Pin id="build" height="600vh">
      <StickyMedia media={<Media />}>
        {panels.map((p, i) => {
          const isFirstChoice = i === beats.length;
          return (
            <div key={`${i}-${p.n}`} className="w-full">
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
                {i < beats.length
                  ? `Walkthrough · ${String(i + 1).padStart(2, "0")} of ${beats.length}`
                  : `Design choice · ${String(i - beats.length + 1).padStart(2, "0")} of ${choices.length}`}
              </div>
              {isFirstChoice && (
                <div className="mono text-[10px] uppercase tracking-[0.25em] text-moodroom-indigo mb-3">
                  ─── why this isn&apos;t just a playlist ───
                </div>
              )}
              <div className="mono text-3xl text-moodroom-indigo/80 font-light tabular-nums mb-4">
                {p.n}
              </div>
              <h3 className="serif text-2xl sm:text-3xl lg:text-4xl text-neutral-100 mb-5 leading-snug">
                {p.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed text-base sm:text-lg max-w-xl">
                {p.body}
              </p>
            </div>
          );
        })}
      </StickyMedia>
    </Pin>
  );
}
