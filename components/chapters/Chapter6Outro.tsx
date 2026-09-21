"use client";

import Pin from "../Pin";
import Stage from "../Stage";

const rows = [
  { build: "Build 01", scope: "Six lanes · auto-queue · skip-demote · discovery slot · audit", status: "Shipped" },
  { build: "Build 02", scope: "Always-on cloud deploy (Fly.io) · cross-device · custom domain",  status: "Planned" },
  { build: "Build 03", scope: "Web Playback SDK · browser playback without a Premium device",    status: "Planned" },
  { build: "Build 04", scope: "Lane export · publish a calibrated pool as a Spotify playlist",   status: "Planned" },
  { build: "Build 05", scope: "Mobile-first UI · gestures, swipe-to-skip-and-demote",            status: "Backlog" },
];

const links = [
  { label: "Email",           value: "subhankar.shukla04@gmail.com",                    href: "mailto:subhankar.shukla04@gmail.com" },
  { label: "GitHub",          value: "github.com/subhankarshukla04",                    href: "https://github.com/subhankarshukla04" },
  { label: "Portfolio",       value: "subhankarshukla.vercel.app",                      href: "https://subhankarshukla.vercel.app" },
  { label: "AXIOM",           value: "axiom-valuation.vercel.app",                      href: "https://axiom-valuation.vercel.app" },
  { label: "Wego Digest",     value: "wego-digest-site.vercel.app",                     href: "https://wego-digest-site.vercel.app" },
  { label: "Moodroom source", value: "github.com/subhankarshukla04/spotify-moodroom",   href: "https://github.com/subhankarshukla04/spotify-moodroom" },
];

export default function Chapter6Outro() {
  return (
    <Pin id="outro" height="240vh">
      <div className="relative h-full w-full">
        {/* Scene 1 — roadmap */}
        <Stage range={[0.0, 0.55]} y={24} scale={[0.96, 1]} exitLeft>
          <div className="w-full max-w-4xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Coverage
            </div>
            <h2 className="serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-neutral-100 mb-6">
              <em className="text-moodroom-indigo not-italic">Build 01</em> scope, and what comes next.
            </h2>
            <p className="text-neutral-400 mb-10 max-w-2xl leading-relaxed text-lg">
              Build 01 is the proof of concept and the version I actually use. The roadmap is the
              production-readiness path for me — not a scale-it-to-everyone plan. This stays a
              personal tool. If you want it for yourself, the source is on GitHub; the hosted
              version is just my laptop.
            </p>
            <div className="border border-neutral-800 rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-950 border-b border-neutral-800">
                    <th className="text-left mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 px-5 py-3">Build</th>
                    <th className="text-left mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 px-5 py-3">Scope</th>
                    <th className="text-left mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.build} className={i % 2 ? "bg-neutral-950" : ""}>
                      <td className="px-5 py-3 serif text-neutral-100 align-top whitespace-nowrap">{r.build}</td>
                      <td className="px-5 py-3 text-neutral-300/90 align-top text-[13px] leading-relaxed">{r.scope}</td>
                      <td className="px-5 py-3 mono text-[11px] align-top whitespace-nowrap">
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
        </Stage>

        {/* Scene 2 — about, scales in from depth */}
        <Stage range={[0.52, 1.0]} y={20} scale={[0.94, 1]} enterFromRight>
          <div className="w-full max-w-3xl mx-auto">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
              About
            </div>
            <h3 className="serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-neutral-100 mb-6">
              Subhankar Shukla.
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-8 text-lg">
              Third-year Rotman Commerce student at the University of Toronto, CFA Level 2
              candidate. Builds AI-powered tooling on the side. Recent production projects
              include AXIOM (institutional valuation platform) and the Wego Earnings Digest.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8 text-base border-l border-moodroom-indigo/30 pl-5">
              Moodroom is a personal tool. It exists because I wanted it for myself — not as a
              startup, not as a product to sell. The source is open: anyone with a Spotify
              Premium account can clone it and run the same pipeline against their own library.
              And the patterns inside (skip-demote learning, library-mining via LLM, event-driven
              top-up so autoplay never wins) are things Spotify could implement directly. If
              someone there sees this and ships any of it, that&apos;s a good outcome too.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {links.map((l) => (
                <div key={l.label}>
                  <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-1">{l.label}</div>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    className="text-neutral-200 hover:text-moodroom-indigo transition-colors break-all text-sm"
                  >
                    {l.value}
                  </a>
                </div>
              ))}
            </div>
            <p className="text-neutral-500 text-sm mb-1">
              Independent project. Not affiliated with Spotify.
            </p>
            <p className="mono text-[10px] text-neutral-600">© Subhankar Shukla, 2026.</p>
          </div>
        </Stage>
      </div>
    </Pin>
  );
}
