# Portfolio — William Koppelberger

Personal portfolio site for William Koppelberger, Enterprise Application Engineer.

Built with **Vite + React 19 + TypeScript**, using `react-router-dom` (hash routing)
for the page structure. Editorial-minimal design: large uppercase display type
(Space Grotesk), mono labels (IBM Plex Mono), scroll-reveal animations, and an
invert-on-hover interaction language.

## Pages

- **Home** — professional introduction and selected highlights
- **Career** — resume timeline (expandable roles)
- **Projects** — ItemCatalogue API, Habitat houseview UI, azure-devops-k8-terraform
- **About** — hockey, Rocket League, and art
- **Contact** — email and LinkedIn

## Develop

```bash
npm install
npm run dev      # http://localhost:5177
```

## Build

```bash
npm run build    # type-checks, then outputs static site to dist/
npm run preview  # serve the production build locally
```

## Deploy

The build output in `dist/` is a static site — deployable to Vercel, Netlify,
GitHub Pages, or any static host.

## Photos

Personal photos live in `public/photos/`. See
[`public/photos/README.md`](public/photos/README.md) for the expected filenames.
Missing files render a dashed placeholder rather than a broken image.

## Links

- GitHub: https://github.com/koppelbw
- LinkedIn: https://www.linkedin.com/in/william-koppelberger-5405905a/
