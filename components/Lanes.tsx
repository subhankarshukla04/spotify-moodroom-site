const lanes = [
  {
    key: "late_night",
    name: "Late Night",
    sub: "OVO atmosphere",
    blurb:
      "Hook-driven melodic trap. Drake atmospheric, Travis melodic, Don Toliver, PND, The Weeknd Trilogy-era. The lane was calibrated through five feedback rounds before the rest were built.",
    counts: "64 saved · 34 pool · 35 fresh",
    accent: "#a5b4fc",
  },
  {
    key: "throwback_pop",
    name: "Throwback Pop",
    sub: "2010 radio",
    blurb:
      "Canadian MuchMusic-era dance-pop. Katy Perry's Teenage Dream cycle, Kesha, Lady Gaga monsters, Rihanna's Loud / Talk That Talk era, Avicii / Calvin Harris EDM-pop. The party half of someone's late teens.",
    counts: "9 saved · 62 pool · 29 fresh",
    accent: "#f9a8d4",
  },
  {
    key: "house_music",
    name: "House",
    sub: "afro & Keinemusik",
    blurb:
      "Keinemusik signature sound: Adam Port, &ME, Rampa, Stryv. Afro-house from Caiiro, Sun-El Musician, Black Coffee. Melodic / progressive from Bicep, Tale of Us, Innellea. Slow-burn dance for headphones.",
    counts: "7 saved · 30 pool · 15 fresh",
    accent: "#fbbf24",
  },
  {
    key: "rage",
    name: "Rage",
    sub: "high-energy trap",
    blurb:
      "Modern hard trap. Travis Scott's SICKO MODE / FE!N / I KNOW ?, Carti's Whole Lotta Red era, Yeat catalogue, Ken Carson, Future hard-cuts. Built for the moment a workout or a drive needs to switch gears.",
    counts: "42 saved · 26 pool · 18 fresh",
    accent: "#fca5a5",
  },
  {
    key: "throwback_rap",
    name: "Throwback Rap",
    sub: "2010s anthems",
    blurb:
      "The mainstream 2010s rap canon: Drake's Take Care / NWTS anthem cuts, J. Cole's Forest Hills era, Kendrick m.A.A.d city, Kanye MBDTF / Yeezus, Wayne Carter III, Big Sean, ScHoolboy Q. Anthems, not deep cuts.",
    counts: "52 saved · 40 pool · 16 fresh",
    accent: "#fcd34d",
  },
  {
    key: "after_hours",
    name: "After Hours",
    sub: "cinematic electronic",
    blurb:
      "Atmospheric electronic for the 2am drive. Fred again.., RÜFÜS DU SOL, Empire of the Sun, Gesaffelstein, Phantogram, ODESZA, M83. Less club, more cinema.",
    counts: "31 saved · 29 pool · 15 fresh",
    accent: "#67e8f9",
  },
];

export default function Lanes() {
  return (
    <section className="border-t border-neutral-900 px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Step 02 in detail · The lanes
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-light leading-tight text-neutral-100 mb-4">
          Six rooms. One library mined into all of them.
        </h2>
        <p className="text-neutral-400 mb-16 max-w-2xl leading-relaxed">
          The lanes are the only place a human does strategic work. Each one has its own
          colour, its own gradient palette, and its own pool architecture (CONFIRMED ·
          SAFE_SIDE · DISCOVERY). Change a lane definition and a different system pops
          out the other side.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lanes.map((l, i) => (
            <div
              key={l.key}
              className="relative rounded-2xl overflow-hidden border border-neutral-800"
            >
              <div className={`absolute inset-0 mood-grad-${l.key} opacity-95`} />
              <div className="relative p-6 sm:p-7">
                <div className="mono text-[10px] tabular-nums text-neutral-400 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="serif text-2xl font-light leading-tight" style={{ color: l.accent }}>
                  {l.name.toLowerCase()}
                </div>
                <div className="text-xs text-neutral-300/80 mt-1.5">{l.sub}</div>
                <p className="text-[13px] text-neutral-300/80 leading-relaxed mt-5">
                  {l.blurb}
                </p>
                <div className="mono text-[10px] text-neutral-400/70 mt-6 tabular-nums pt-4 border-t border-white/10">
                  {l.counts}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
