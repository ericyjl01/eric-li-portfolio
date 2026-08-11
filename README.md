# eric-li.me

Personal portfolio — Data Analytics & AI Engineering. Built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # -> dist/
npm run preview
```

## Edit content

All copy, projects, skills, and links live in **`src/data/content.ts`** — edit there, no template changes needed. Items marked `TODO` (GitHub/LinkedIn URLs, placeholder repos/dashboards/writeups, resume PDF) should be replaced before launch.

- Résumé PDF: drop your file at `public/Eric-Li-Resume.pdf`.
- Design system + rules: `.interface-design/system.md`.

## Deploy (Vercel + GoDaddy domain)

1. Push to GitHub, import the repo in Vercel (framework auto-detected as Astro).
2. Add `eric-li.me` under the Vercel project's **Domains**.
3. In GoDaddy DNS: `A @ → 76.76.21.21` and `CNAME www → cname.vercel-dns.com`.
4. Vercel provisions HTTPS automatically.

## Structure

```
src/
  data/content.ts     ← single source of truth for all content
  styles/global.css   ← design tokens + all component styles
  layouts/Base.astro  ← html shell, meta, no-flash theme script
  pages/index.astro   ← the homepage (all sections)
public/               ← favicon, résumé PDF, static assets
```
