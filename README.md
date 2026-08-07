# Courtney Price — Astro site (placeholder branding)

## What this is
The real, working codebase for your site. "Courtney Price" is currently used as placeholder branding in the logo/footer/title until you land on a final name — swap it in `src/components/Nav.astro`, `src/components/Footer.astro`, and the page titles once you decide.

## Structure
- `src/pages/index.astro` — homepage
- `src/pages/recipes/[...slug].astro` — auto-generates a page for every recipe
- `src/content/recipes/*.md` — your recipes as data (add a new file here to add a recipe manually, or connect Sanity later for a form-based editor)
- `src/components/` — Nav, Footer, RecipeCard (reused across pages)
- `src/layouts/BaseLayout.astro` — shared fonts + design tokens
- `public/images/` — your photos

## To run locally
```
npm install
npm run dev
```
Then open http://localhost:4321

## To deploy
1. Push this folder to a GitHub repo
2. Connect that repo to Vercel (vercel.com → New Project → Import)
3. Vercel auto-detects Astro and deploys — you'll get a live URL immediately
4. Point your domain's DNS at Vercel once you're happy with it

## To add a new recipe
Copy any file in `src/content/recipes/`, rename it, and fill in your new recipe's details. Save it — that's it, no other code changes needed.

## When you land on a final brand name
Update these three spots:
- `src/components/Nav.astro` — logo text
- `src/components/Footer.astro` — footer logo text
- `astro.config.mjs` — site URL
- `package.json` — project name
