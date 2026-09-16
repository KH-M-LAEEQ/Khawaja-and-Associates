KHAWAJA AND ASSOCIATES — NEXT.JS APP

Run `npm install` then `npm run dev` and open http://localhost:3000.
`npm run build && npm run start` runs a production build locally.

Content still marked as placeholder (see docs/redesign/00-audit.md for the
full audit) and not yet replaced:
- Two of four lawyer bios and two portraits (Team section)
- Publications (books.json) — entirely placeholder entries
- Practice-area wording, pending legal review

The contact form is currently demo-only and should be connected to a
backend/email service.

`npm run fetch:articles` refreshes public/articles.json from FBR's
official press-release page (see scripts/fetch-articles.mjs). Tax
Insights and Publications are read at build time (not fetched live in
the browser), so re-run `npm run build` after refreshing articles.json
or books.json for the change to appear.

Before deploying: set NEXT_PUBLIC_SITE_URL to the real production
domain (see lib/siteConfig.js) — it feeds canonical URLs, the sitemap,
Open Graph tags and structured data, and currently falls back to a
placeholder.
