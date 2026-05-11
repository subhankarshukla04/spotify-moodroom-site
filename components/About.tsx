export default function About() {
  return (
    <section className="border-t border-neutral-900 px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          About
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-light leading-tight text-neutral-100 mb-6">
          Subhankar Shukla.
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-8">
          Third-year Rotman Commerce student at the University of Toronto, CFA Level 2
          candidate. Builds AI-powered tooling on the side. Recent production projects
          include AXIOM (institutional valuation platform with multi-stage DCF, comps, RAG
          over SEC EDGAR 10-Ks) and the Wego Earnings Digest (interview-prep proof of
          concept for Wego Strategy).
        </p>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
          <Link label="Email" value="subhankar.shukla04@gmail.com" href="mailto:subhankar.shukla04@gmail.com" />
          <Link label="GitHub" value="github.com/subhankarshukla04" href="https://github.com/subhankarshukla04" />
          <Link label="Portfolio" value="subhankarshukla.vercel.app" href="https://subhankarshukla.vercel.app" />
          <Link label="AXIOM" value="axiom-valuation.vercel.app" href="https://axiom-valuation.vercel.app" />
          <Link label="Wego Digest" value="wego-digest-site.vercel.app" href="https://wego-digest-site.vercel.app" />
          <Link label="Moodroom source" value="github.com/subhankarshukla04/spotify-moodroom" href="https://github.com/subhankarshukla04/spotify-moodroom" />
        </div>

        <p className="text-neutral-500 text-sm mb-2">
          Independent project. Not affiliated with Spotify or any company referenced. Pool curation
          is hand-tuned to one user&apos;s taste — what plays for me probably isn&apos;t what plays
          for you.
        </p>
        <p className="mono text-[10px] text-neutral-600">© Subhankar Shukla, 2026.</p>
      </div>
    </section>
  );
}

function Link({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div>
      <div className="mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-1">{label}</div>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener"
        className="text-neutral-200 hover:text-moodroom-indigo transition-colors break-all"
      >
        {value}
      </a>
    </div>
  );
}
