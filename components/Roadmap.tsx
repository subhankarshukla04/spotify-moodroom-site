const rows = [
  { build: "Build 01", scope: "Six lanes · auto-queue · skip-demote · discovery slot · audit", status: "Shipped" },
  { build: "Build 02", scope: "Always-on cloud deploy (Fly.io) · cross-device access · custom domain", status: "Planned" },
  { build: "Build 03", scope: "Web Playback SDK · browser playback without a Premium device", status: "Planned" },
  { build: "Build 04", scope: "Lane export · publish a calibrated pool as a real Spotify playlist", status: "Planned" },
  { build: "Build 05", scope: "Mobile-first UI · gestures, swipe-to-skip-and-demote", status: "Backlog" },
];

export default function Roadmap() {
  return (
    <section className="border-t border-neutral-900 px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Coverage
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-light leading-tight text-neutral-100 mb-4">
          Build 01 scope, and what comes next.
        </h2>
        <p className="text-neutral-400 mb-12 max-w-2xl leading-relaxed">
          Build 01 is the proof of concept — single-user, single library, six lanes,
          deployed locally. The roadmap below is the production-readiness path, not a
          scale-it-to-everyone plan. This stays a personal tool.
        </p>

        <div className="border border-neutral-800 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-950 border-b border-neutral-800">
                <th className="text-left mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 px-6 py-4">Build</th>
                <th className="text-left mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 px-6 py-4">Scope</th>
                <th className="text-left mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.build} className={i % 2 ? "bg-neutral-950" : ""}>
                  <td className="px-6 py-4 serif text-neutral-100 align-top whitespace-nowrap">{r.build}</td>
                  <td className="px-6 py-4 text-neutral-300/90 align-top text-[14px] leading-relaxed">{r.scope}</td>
                  <td className="px-6 py-4 mono text-[11px] align-top whitespace-nowrap">
                    <span
                      className={
                        r.status === "Shipped"
                          ? "text-emerald-400"
                          : r.status === "Planned"
                          ? "text-amber-300"
                          : "text-neutral-500"
                      }
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
