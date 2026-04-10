# dipendra0011.github.io

Source for **dipendrashrest.me** — Next.js app in **`portfolio/`**, static export synced to **`docs/`** for GitHub Pages.

## Make the domain show the site (not this README)

1. Repo **Settings → Pages**
2. **Build and deployment → Source:** **Deploy from a branch**
3. **Branch:** `main`, **Folder:** **`/docs`** (not `/ root`)
4. **Save**

After the next push to `main`, workflow **Deploy site to docs** builds the app and commits the **`docs/`** folder. Your custom domain should then load the portfolio.

## Custom domain

- **`docs/CNAME`** is produced by the build (from `portfolio/public/CNAME`).
- Keep **dipendrashrest.me** in GitHub Pages **Custom domain** settings; DNS must point to GitHub as in [their guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Local development

```bash
cd portfolio
npm install
npm run dev
```

## Manual export (optional)

```bash
cd portfolio
npm run build
# preview: npx serve out
```

---

_Development notes (not the live site):_ the Next.js project, workflows, and `portfolio/` source live on the `main` branch. The published site files live under **`docs/`**.
