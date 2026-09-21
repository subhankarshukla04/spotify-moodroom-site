# Spotify Moodroom — Cinematic Scroll Redesign

**Date:** 2026-05-11
**Author:** Subhankar (with Claude)
**Status:** Approved pending implementation

## Goal

Replace the current vertical-stack page where each section scrolls past the viewport with an Apple-style **pinned cinematic scroll**: chapters pin to the viewport, internal beats reveal/morph as the user scrolls, then unpin to the next chapter. Smooth, restrained, "vibesy."

## Non-goals

- No scroll-jacking, no scroll-snap, no fixed scroll speed override. Native scroll feel is preserved.
- No content rewriting. All current copy is reused, just re-staged.
- No new design language. Keep existing dark-ink + serif + aurora-blob aesthetic.

## Technique

Each chapter is a tall outer wrapper containing a **sticky** child. The sticky child pins to `top: 0; height: 100vh` while the wrapper scrolls. Scroll progress through the wrapper (0 → 1) drives every internal animation via Framer Motion's `useScroll` + `useTransform`.

```
<section ref> (height: 250–350vh, varies per chapter)
  <div className="sticky top-0 h-screen overflow-hidden">
    <Beat range={[0.00, 0.20]}>...</Beat>
    <Beat range={[0.20, 0.45]}>...</Beat>
    <Beat range={[0.45, 0.75]}>...</Beat>
    <Beat range={[0.75, 1.00]}>...</Beat>
  </div>
</section>
```

When `scrollYProgress` is inside a beat's range, the beat is at full opacity. Outside, it fades. Adjacent beats overlap by ~20% of their range so the crossfade feels continuous.

## Library

**Framer Motion** (`framer-motion`). Already React-native, lightweight (~30kb gz), exact fit for `useScroll` + `useTransform`. No GSAP/Lenis/ScrollMagic.

## Architecture

### New components

**`components/Chapter.tsx`** — pinned scroll-driven container.
- Props: `height` (e.g. `"300vh"`), `children`.
- Sets up the outer `<section>` + sticky inner div.
- Uses `useScroll({ target: ref, offset: ["start start", "end end"] })`.
- Provides `scrollYProgress` (a Framer `MotionValue<number>`) to children via React context.

**`components/Beat.tsx`** — child reveal driven by chapter progress.
- Props: `range: [number, number]`, `children`, optional `from?: { y?: number; scale?: number }`.
- Reads chapter progress from context.
- Uses `useTransform` to map progress → opacity (in/out at range edges with 20% overlap) and translate-y (default: 16px → 0 → 0 → -16px).
- Easing: `[0.16, 1, 0.3, 1]` applied via Framer's transition where animations are tween-style; for scroll-driven, the transform mapping itself is the easing — use Framer's `useTransform` with explicit ease via the `clamp` + custom easing curve.
- Renders a `motion.div` with the computed style.

**`components/Aurora.tsx`** — extracted from Hero, becomes a page-level fixed background with slow parallax across all chapters.

### Page restructure

`app/page.tsx` becomes 6 `<Chapter>` calls + `<Aurora />`:

```
<Aurora />
<Chapter1Hero />        // 250vh
<Chapter2Why />         // 300vh — Problem + Why merged
<Chapter3System />      // 350vh — HowItWorks + Lanes merged
<Chapter4Build />       // 350vh — Walkthrough + DesignChoices merged
<Chapter5Output />      // 300vh — Output
<Chapter6Outro />       // 300vh — Roadmap + About merged
```

Total: ~18 viewport heights. Current page is roughly the same.

## Chapter breakdown

### Chapter 1 — Hero (250vh, **bigger entry, more dramatic**)
1. **Beat 1 (0.00–0.30):** Mono date label + "Spotify Moodroom" title fades up from `y: 32` with subtle scale `0.96 → 1`. Subtitle copy follows at 0.10 offset.
2. **Beat 2 (0.25–0.60):** CTAs ("Open the live build", "View source") slide up `y: 20 → 0`.
3. **Beat 3 (0.55–1.00):** Built-by footnote fades in, aurora blobs drift further apart.

The Hero is the only chapter with the "more dramatic" treatment — slightly bigger transforms (24px translates, 0.96 scale) so the page opens with weight.

### Chapter 2 — The Why (300vh, restrained)
Merges `Problem` + `Why`.
1. **Beat 1 (0.00–0.45):** Problem statement front-and-center: "Autoplay decides for you." Big serif quote.
2. **Beat 2 (0.40–1.00):** Crossfades into the Why answer: "I wanted one that knows my taste." In place. Same frame.

### Chapter 3 — The System (350vh, restrained)
Merges `HowItWorks` + `Lanes`.
1. **Beat 1 (0.00–0.30):** "How it works" heading + intro paragraph.
2. **Beat 2 (0.25–0.55):** Pipeline diagram beats reveal sequentially (input → mood detection → lane selection → queue).
3. **Beat 3 (0.50–1.00):** Six lane cards deal in (staggered y: 16, 80ms apart).

### Chapter 4 — The Build (350vh, restrained)
Merges `Walkthrough` + `DesignChoices`.
1. **Beat 1 (0.00–0.25):** Walkthrough step 1 large + centered.
2. **Beat 2 (0.20–0.50):** Step 1 shrinks and slides left; Step 2 enters on the right.
3. **Beat 3 (0.45–0.75):** Steps 3 + 4 reveal in the same dual layout.
4. **Beat 4 (0.70–1.00):** Design rationale copy slides in beside the final step.

### Chapter 5 — The Output (300vh, restrained)
1. **Beat 1 (0.00–0.40):** Mock player UI reveals piece-by-piece (album art → track name → queue).
2. **Beat 2 (0.35–0.70):** Queue entries deal in.
3. **Beat 3 (0.65–1.00):** Crossfade to results / outcomes copy.

### Chapter 6 — Outro (300vh, restrained)
Merges `Roadmap` + `About`.
1. **Beat 1 (0.00–0.50):** Roadmap timeline draws in (each milestone fades up sequentially).
2. **Beat 2 (0.45–1.00):** About card fades in with the "Built by Subhankar Shukla" sign-off.

## Motion language (the "vibesy" part)

- **Easing curve:** `[0.16, 1, 0.3, 1]` (out-expo-ish). Used for all tween animations.
- **Translate distances:** 12–24px on body chapters, up to 32px on Hero.
- **Scale:** rare. Hero: `0.96 → 1`. Body: none unless content semantically calls for it.
- **Opacity overlap:** outgoing beat fades from 1 → 0 over the last 20% of its range; incoming beat starts at 0.6 of outgoing's start. Always overlapping.
- **Aurora parallax:** the three blobs translate slowly (max 8% of total page scroll) and shift hue via opacity changes. Fixed-position, behind everything.
- **Type:** serif headlines fade as whole blocks. No letter-by-letter splits.
- **No bounces, no springs.** Pure tween.

## Accessibility

- **`prefers-reduced-motion: reduce`** → all chapters render statically (no sticky, no scroll-driven transforms). The page becomes the original vertical stack. Implemented as a top-level conditional in `Chapter.tsx`.
- All content is in DOM at all times (no conditional rendering by progress) so screen readers and search engines get the full text.
- Tab order matches DOM order, which matches reading order.

## Performance

- `will-change: opacity, transform` on motion.div elements (Framer adds it automatically).
- Aurora blobs are CSS gradients, GPU-composited.
- No layout-thrashing transforms (only opacity + translate3d + scale).
- Target: 60fps on M1 trackpad scroll, no jank below 30fps on 2019 Intel MacBook.

## Risks

1. **Mouse-wheel users feel the page is too long.** Mitigation: chapter heights tuned conservatively (250–350vh, not 400+). User can override per-chapter if it feels off after testing.
2. **Sticky + transformed ancestors can break in some browsers.** Mitigation: keep `<main>` and chapter wrappers free of `transform` / `filter` / `will-change` at the parent level.
3. **Framer Motion bundle adds ~30kb.** Acceptable for the cinematic upgrade; this is a portfolio site, not a perf-critical product.

## Testing

- Manual: scroll the full page on Chrome, Safari, Firefox (desktop). Verify each beat transitions smoothly with no flash/pop.
- Manual: test on mobile Safari (iPhone) — verify sticky behavior and that touch scroll feels right.
- Manual: enable "Reduce motion" in OS settings, reload, verify static fallback works.
- Lighthouse: confirm no regression on Performance (currently strong; adding framer-motion shouldn't drop it more than ~3 points).

## Out of scope (explicit YAGNI)

- No new copy.
- No new color palette.
- No 3D / canvas / WebGL.
- No section-skip navigation (no "jump to chapter X").
- No scroll-progress indicator.
- No analytics on scroll depth.

## File changes summary

**New:**
- `components/Chapter.tsx`
- `components/Beat.tsx`
- `components/Aurora.tsx`
- `components/chapters/Chapter1Hero.tsx`
- `components/chapters/Chapter2Why.tsx`
- `components/chapters/Chapter3System.tsx`
- `components/chapters/Chapter4Build.tsx`
- `components/chapters/Chapter5Output.tsx`
- `components/chapters/Chapter6Outro.tsx`

**Modified:**
- `app/page.tsx` — replace 10 imports with 6 chapter imports + Aurora.
- `package.json` — add `framer-motion`.

**Kept (referenced by new chapters):**
- All existing `components/*.tsx` content/copy is preserved by being lifted into the chapter files. Original component files can be deleted after refactor.
