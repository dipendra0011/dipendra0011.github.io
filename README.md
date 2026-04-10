# Portfolio (dipendrashrest.me)

Next.js site lives in **`portfolio/`**. Production is a **static export** (`next build` → `portfolio/out/`) deployed to **GitHub Pages** via Actions.

## Custom domain

- Repo root **`CNAME`** (`dipendrashrest.me`) is for reference.
- The file that must ship with the site is **`portfolio/public/CNAME`** (copied into `out/` on build).
- GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
- DNS for `dipendrashrest.me` should point to GitHub Pages as in [their docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Local development

```bash
cd portfolio
npm install
npm run dev
```

## Production build

```bash
cd portfolio
npm run build
```

Static files are written to **`portfolio/out/`** (gitignored).

## Push to `main`

Pushing to **`main`** runs **`.github/workflows/deploy-github-pages.yml`**, which publishes `portfolio/out` to GitHub Pages.
