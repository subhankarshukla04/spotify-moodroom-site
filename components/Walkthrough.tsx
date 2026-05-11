const beats = [
  {
    n: "01",
    title: "The hero · six rooms.",
    body:
      "The page opens on the dark Moodroom idle screen. Six mood cards laid out — three across, two rows. Aurora gradients drifting slowly in the background, alive. Each card has its own colored glow on hover: Late Night indigo, Throwback pink, House amber, Rage red, Throwback Rap gold, After Hours cyan.",
  },
  {
    n: "02",
    title: "The click · everything responds.",
    body:
      "Click Late Night. Five cards fade. The chosen card scales up. The aurora crossfades to a deep indigo/violet palette. The currently-playing card materializes at the top in big serif type, progress bar starting from zero, and the album art begins fading in behind everything — blurred, mood-tinted, cinematic.",
  },
  {
    n: "03",
    title: "The queue · numbered manifest.",
    body:
      "Below the now-playing card, ten tracks render as an editorial manifest. Numbered 01-10, track name in light serif, artist in muted gray. One track has a glowing gold ✦ next to it — that's the discovery slot. A fresh pick the system is auditioning. Survive a full play, it auto-promotes to the safe pool.",
  },
  {
    n: "04",
    title: "The auto-queue · invisible, constant.",
    body:
      "A song ends. The top track disappears, the next moves up. The corner counter briefly flashes amber: '+1 added · 15 queued', then settles. Then it happens again. The system added a fresh track the moment one completed. Spotify autoplay never gets a turn.",
  },
  {
    n: "05",
    title: "The learning · skip in <30s.",
    body:
      "Skip a track in Spotify within 30 seconds. The Moodroom telemetry line at the bottom of the page blinks: '5s ago · cameras (drake) → demoted'. The system saw the skip and moved that track from CONFIRMED to SAFE_SIDE. It's learning from playing, not from asking.",
  },
  {
    n: "06",
    title: "The cross-device closer.",
    body:
      "Cut to a phone — same URL on iPhone. Same six cards, now 2-column. Tap Rage. The aurora flips red and orange. Music starts on the phone, or whatever Spotify device is connected. The brain is in the cloud. The speaker can be anywhere.",
  },
];

export default function Walkthrough() {
  return (
    <section className="border-t border-neutral-900 px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          See it in action
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-light leading-tight text-neutral-100 mb-4">
          A short walkthrough of the live system.
        </h2>
        <p className="text-neutral-400 mb-12 max-w-2xl leading-relaxed">
          ~75 seconds, no audio. The video tours the live UI — idle state, the click moment,
          the manifest, the auto-queue, the skip-learning, and the phone closer. The guide
          beneath tells you what to look for at each step.
        </p>

        {/* Video placeholder — replace src once recorded */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 mb-12">
          <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-neutral-950 via-[#0a0a1f] to-[#2d1457]">
            <div className="text-center px-6">
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-moodroom-indigo mb-4">
                walkthrough · build 01
              </div>
              <div className="serif text-2xl text-neutral-300 mb-3">video coming soon</div>
              <div className="mono text-[11px] text-neutral-500 max-w-md mx-auto leading-relaxed">
                ~75-second screen recording. Replace /public/walkthrough.mp4 once
                recorded — guide beneath is already wired to the six beats.
              </div>
            </div>
          </div>
        </div>

        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
          What you&apos;re seeing
        </div>
        <div className="space-y-8">
          {beats.map((b) => (
            <div key={b.n} className="grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-8 items-start">
              <div className="mono text-xl text-moodroom-indigo/80 font-light tabular-nums">
                {b.n}
              </div>
              <div>
                <h3 className="serif text-lg text-neutral-100 mb-2 leading-snug">{b.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-[15px]">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
