export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 sm:px-10 lg:px-16 pt-24 pb-20 overflow-hidden">
      <div className="aurora">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
      </div>

      <div className="relative max-w-5xl mx-auto w-full flex-1 flex flex-col">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
          Spotify Moodroom · Build 01 · 2026
        </div>
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-12">
          Personal project · 6 lanes · 670+ tracks
        </div>

        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Build 01
        </div>
        <h1 className="serif font-light text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-neutral-50 mb-6">
          Spotify Moodroom
        </h1>
        <p className="serif text-xl sm:text-2xl text-neutral-300 max-w-2xl leading-relaxed mb-12">
          A mood-based auto-queue, calibrated for one taste. Six lanes, library-mined pools,
          and an event-driven engine that never lets Spotify autoplay decide what plays next.
        </p>

        <div className="mono text-[11px] text-neutral-400 max-w-2xl mb-10">
          Built over multiple sessions to fix the moment when a Spotify playlist runs dry and
          autoplay takes over. The reading — figuring out what fits which mood — is done by a
          system that knows my taste. Six rooms, one library, an auto-queue that keeps the
          next track ready forever.
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-16">
          <a
            href="https://github.com/subhankarshukla04/spotify-moodroom"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 rounded-full bg-moodroom-indigo/15 hover:bg-moodroom-indigo/25 border border-moodroom-indigo/40 hover:border-moodroom-indigo/60 transition-colors px-5 py-2.5"
          >
            <span className="text-sm text-neutral-100">Open the live build</span>
            <span className="text-moodroom-indigo">→</span>
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

        <div className="mt-auto pt-8 mono text-[10px] text-neutral-500 border-t border-neutral-800/60">
          Built by Subhankar Shukla. Independent project — not affiliated with Spotify.
        </div>
      </div>
    </section>
  );
}
