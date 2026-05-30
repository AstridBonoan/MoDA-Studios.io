# MODA STUDIOS

Premium, mobile-first website redesign demo for **MODA STUDIOS** — a modern grooming studio in Garden City, NY.

## Live site

After deployment: `https://astridbonoan.github.io/MoDA-Studios.io/`

## Tech stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion

## Booking

All appointment CTAs link to [Squire booking](https://getsquire.com/booking/book/moda-studios-garden-city).

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages (Deploy from branch)

This project uses **GitHub Actions** to build the site and publish static files to the **`gh-pages`** branch.

### One-time GitHub setup

1. Push this repository to `main`.
2. Wait for the **Build and Deploy to GitHub Pages** workflow to finish successfully.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select **Branch**: `gh-pages` / **Folder**: `/ (root)`.
6. Save. The site will be live at the URL above.

Subsequent pushes to `main` automatically rebuild and update `gh-pages`.

## Scripts

| Command        | Description        |
| -------------- | ------------------ |
| `npm run dev`  | Start dev server   |
| `npm run build`| Production build   |
| `npm run preview` | Preview production build |
