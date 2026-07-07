# Maya Reyes — Portfolio

Editorial personal portfolio with a Fujifilm Instax Mini-style film gallery. Built with React, Vite, Tailwind CSS, and React Router.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel detects these automatically).
4. `vercel.json` already includes an SPA rewrite so deep links like `/gallery/asia` don't 404 on refresh.

## Fonts

Loaded via Google Fonts `<link>` tags in `index.html`:
- **Playfair Display** — headings (`font-serif`)
- **Inter** — body text (`font-sans`)
- **Caveat** — handwritten Instax labels (`font-hand`)

## Adding a new gallery collection

See the comment block at the top of `src/data/collections.js`:

1. Create `public/gallery/<id>/` and drop your photos in it, including a `cover.jpg`.
2. Add one entry to the `collections` array with `id`, `label`, `kind` (`"place"` or `"date"`), `cover`, and a `photos` array (`src`, `caption`, `location` per photo).
3. No component code changes needed — the grid card, route, filter chip, and detail page all generate automatically.
