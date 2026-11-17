# Personal Site — Cyberpunk Datashard

A single-page personal site built with [Astro](https://astro.build/), styled after the **netrunner / datashard** UI from Cyberpunk 2077: CRT scanlines, glitch text, angular panels, terminal readouts, a signature yellow interface, cyan data layers, and red reserved for alerts.

It is fully static and set up to deploy to GitHub Pages with GitHub Actions.

## Requirements

Node.js 22.23.4 or newer (Astro 7). The repo includes `.nvmrc` pinned to Node 24.15.0 — run `nvm use` if your default is older.

## Quick start

```bash
nvm use          # optional, if you use nvm
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview the built site
```

## Make it yours

All content lives in **`src/data/site.ts`** — name, bio, contact details, social links, work history, education, skills, and projects. Replace the placeholder values (including `example.com` links) and the site updates everywhere.

No phone number is stored anywhere in the project. The "Comms" row in the Identity section shows a decorative, non-decryptable cipher token instead; its `DECRYPT` button only reports a denied access attempt.

Optional visual tweaks:

- Colors, fonts and effects: `src/styles/global.css` (tokens at the top).
- Portrait artwork: `public/avatar.svg`; favicon: `public/favicon.svg`.
- Section order: `src/pages/index.astro`.

The **EXPORT DOSSIER // PDF** button uses the browser print dialog; print styles are tuned to produce a clean CV.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (e.g. `your-name.github.io` for a user site, or any repo name for a project site).
2. In the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Push to `main` (or `master`). The workflow in `.github/workflows/deploy.yml` type-checks, builds and deploys automatically.

No configuration is needed for the base path: the build detects `GITHUB_REPOSITORY` in CI and uses `/` for `username.github.io` repos or `/<repo-name>/` for project repos. For local testing of a project-site base path, run:

```bash
BASE_PATH=my-repo-name npm run build
```

To set a custom canonical domain, pass `SITE_URL=https://your-domain.tld` to the build.

`public/.nojekyll` is included so GitHub Pages doesn't strip Astro's `_astro` assets folder.

## Structure

```
src/
  components/     Shard (shared datashard frame), Hero, Identity, CV, Projects, Contact, Nav, Footer
  data/site.ts    all editable content
  layouts/        BaseLayout (head, fonts, CRT overlay, HUD rails, boot sequence)
  scripts/main.ts navigation, reveals, terminal typing, clock, copy, scroll HUD, boot
  styles/         global.css
public/            favicon.svg, avatar.svg, .nojekyll
.github/workflows/deploy.yml
```
