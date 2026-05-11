# spotify-moodroom-site

Portfolio site for [spotify-moodroom](https://github.com/subhankarshukla04/spotify-moodroom) — a personal mood-based Spotify auto-queue.

Built with Next.js 14 + Tailwind + Fraunces/Inter/JetBrains Mono. Deploys to Vercel.

## Develop

```bash
npm install
npm run dev
```

## Add the walkthrough video

Drop the recorded walkthrough at `public/walkthrough.mp4`, then replace the placeholder block in `components/Walkthrough.tsx` with:

```tsx
<video src="/walkthrough.mp4" controls poster="/walkthrough-poster.jpg" className="w-full aspect-video" />
```
