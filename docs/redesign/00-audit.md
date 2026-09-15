# Audit — Khawaja & Associates site

Read-only recon for the visual redesign. No files outside this doc were changed.

## 1. Architecture

**This is not NestJS, and there is no template engine.** It's a hand-authored static site — 12 flat `.html` files, no server, no `package.json`, no `node_modules`. `README.txt` confirms: *"This is a design prototype... Open index.html in a browser to view the responsive frontend."*

- No `views/`/`templates/` directory — HTML lives at repo root and under `practice/`.
- No layout/base template and no partials of any kind. Header (topbar + nav) and footer are hand-copied, byte-for-byte in most cases, into every one of the 12 files.
- The only script that resembles backend logic is `scripts/fetch-articles.mjs`, a standalone Node ESM script run manually/ad hoc to scrape FBR's press-release page and write `articles.json`. It is not a server and has no scheduling wired into this repo (one stale entry in `fetch-articles.log`).
- Assets are served as plain static files: `styles.css` and `script.js` at root, images in `assets/`, data in `articles.json` / `books.json` at root, referenced by relative paths (`../` prefix from `practice/*.html`).
- **No build step exists.** No webpack/vite/postcss config, no npm scripts. Pages can be opened directly or served by any static file server.

## 2. Tailwind setup

**Tailwind is not present at all** — no config file, no CDN script, no `@tailwind` directives anywhere. Styling is 100% hand-written CSS in `styles.css` (36 physical lines, densely packed — effectively minified by hand). It already defines its own design-token layer via CSS custom properties (`styles.css:1`):

```css
:root{--ink:#121922;--muted:#64707d;--paper:#f7f5f0;--white:#fff;--line:#ddd9d0;--gold:#b89452;--dark:#111820;--serif:"Playfair Display",Georgia,serif;--sans:"DM Sans",Arial,sans-serif}
```

Fonts are loaded from Google Fonts via `<link>` tags in every page's `<head>` (e.g. `index.html:8-10`), not self-hosted, not npm packages.

**Decision (approved):** introduce Tailwind + a minimal build pipeline in Phase 3 (`package.json`, `tailwind.config.js`, Tailwind CLI build step). The site stays static in spirit — the build only compiles CSS; HTML keeps linking to a plain compiled stylesheet, no dev server required.

## 3. Page inventory

No server, so "routes" are just the file paths themselves:

| Path | File | Purpose |
|---|---|---|
| `/index.html` | `index.html` | Homepage — hero, trust strip, philosophy quote, Team (`#professionals`), Former Members, Publications (`#publications`), Tax Insights (`#insights`), CTA band, Contact form + details (`#contact`), Map/Location (`#location`) |
| `/practice.html` | `practice.html` | Practice-area index — grid of 10 links into `practice/` |
| `/practice/income-tax.html` | same skeleton | Income Tax detail |
| `/practice/sales-tax.html` | same skeleton | Sales Tax detail |
| `/practice/tax-litigation.html` | same skeleton | Tax Litigation detail |
| `/practice/fbr-matters.html` | same skeleton | FBR Matters detail |
| `/practice/tax-advisory.html` | same skeleton | Tax Advisory detail |
| `/practice/withholding-tax.html` | same skeleton | Withholding Tax detail |
| `/practice/customs-duties.html` | same skeleton | Customs & Duties detail |
| `/practice/provincial-taxes.html` | same skeleton | Provincial Taxes detail |
| `/practice/trademark-registration.html` | same skeleton | Trademark Registration detail |
| `/practice/banking-taxes.html` | same skeleton | Banking Taxes detail |

No layout/partial files exist (see §4). All 10 `practice/*.html` files share one skeleton: `.practice-detail-hero` → `.practice-detail-body` (`.practice-detail-grid` = expertise list + "How we can help" copy) → `.cta` band. Only the title, meta description, expertise-list items, and lead/CTA copy differ per file; the two "How we can help" paragraphs are byte-identical across all 10 (e.g. `practice/income-tax.html:56-57`).

## 4. Component inventory

Nothing is factored into a real partial/include today. Patterns that repeat but stay copy-pasted:

- **Header (topbar + nav)** — repeated in all 12 files. Root-level pages (`index.html`, `practice.html`) link to in-page anchors (`href="#professionals"`); sub-pages (`practice/*.html`) link back via `../index.html#professionals`. **Inconsistency found:** `practice.html` and every `practice/*.html` give the mobile nav an `id="primary-nav"` and the toggle button `aria-expanded="false" aria-controls="primary-nav"` (e.g. `practice.html:24-25`), but `index.html`'s header (`index.html:24-25`) has neither the `id` nor the `aria-*` attributes — a real a11y/consistency gap to fix in the redesign, not preserve.
- **Footer** — repeated in all 12 files, but `index.html`'s footer (`index.html:217-230`) is longer than the rest: it alone has `.footer-history` (the full firm-history paragraph) and `.footer-phone` (three mobile numbers). `practice.html:67-71` and every `practice/*.html` footer is the shorter variant (brand + links + copyright only).
- **Practice-detail page body** — `.practice-detail-hero` + `.practice-detail-grid` (`expertise-list` + "how we can help") + `.cta`, copy-pasted across all 10 `practice/*.html` files (confirmed via `practice/income-tax.html`).
- **`.button` variants** — `primary` / `ghost` / `light`, defined once in CSS but applied inline via class combinations at each call site (`index.html:45-46,175,196,213`; `practice.html:63`; each practice page's CTA).
- **Lawyer card** — `.lawyer-card.featured` / `.lawyer-card.secondary`, three markup variants in `index.html:80-137` (one with a real photo + full bio + badge, two with placeholder photo/bio) plus a fourth "Former Member" variant at `index.html:125-137`. Not factored into a reusable partial even within this single page.
- **`.section-label` + `.section-heading`** — a two-line heading idiom (small caps label + serif `h2`) repeated before nearly every section (Team, Former Members, Publications, Insights, CTA, Contact, Location, Practice hero) as hand-copied markup, not a component.
- **Insight card / Book card** — these two *are* generated by JS (`script.js:41-49` for insights, `script.js:87-101` for books) from JSON data, so they're the closest thing to a real "component" in the codebase today, just template-string-based rather than markup partials.

## 5. Content audit

**Real content** (do not touch/replace):
- Firm identity: "Khawaja and Associates," Lahore, Pakistan; brand mark "K&A."
- Firm history, used verbatim in both the hero and the footer (`index.html:42`, `index.html:220`): *"Established in 1964, the chamber has spent almost five decades at the heart of the Lahore Tax Bar... Our senior associates have twice been elected General Secretary of the Lahore Tax Bar Association, with one also serving as Incharge of the Tax Lawyers Wing at the Lahore High Court Bar Association."*
- **Khawaja Mahmood Ayaz** (`index.html:80-95`) — real photo (`assets/khawaja-mahmood-ayaz.jpeg`), full real bio/credentials: enrolled as Advocate in 1995, youngest-ever General Secretary of the Lahore Tax Bar Association, Life Member of the Lahore High Court Bar Association, Incharge of the Tax Lawyers Wing, member of the Lahore Tax Advisors Club.
- **Khawaja Muhammad Asghar**, Former Member (`index.html:125-137`) — real credentials: former General Secretary of the Lahore Tax Bar Association, LHCBA member since 1964, Punjab Bar Council member. Photo not yet supplied (placeholder, see below).
- Contact info (real, specific, `index.html:184-189`, `220-229`): office at Mehta Street, 16-E Temple Road, Mozang Chungi, Lahore; phone 042-36361182; fax 042-36375620; email khmayaz@hotmail.com; three mobile numbers in the footer; a real Google Maps embed and Maps link to the actual address.
- 10 named practice areas, each with genuine (if generic) legal-service descriptions and its own detail page.
- Tax Insights: live-fetched real content from FBR's official press-release page (`script.js:24-58`, refreshed by `scripts/fetch-articles.mjs`).

**Placeholder content** (per user decision: restyle in the new visual language, but keep visibly flagged as pending — do not treat as finished copy, do not invent replacement content):
- `index.html:100-104` — **Khawaja Muhammad Ali**: real name and photo (`assets/khawaja-muhammad-ali.jpg`), but bio is the literal placeholder string *"Short professional biography, areas of practice and relevant experience."*
- `index.html:106-114` — **Khawaja Muhammad Ibrahim**: name only; photo slot is a literal `PORTRAIT` text block (`.lawyer-photo` with no `<img>`); bio is the same placeholder string as above.
- `index.html:125-126` — Khawaja Muhammad Asghar's photo slot is also a literal `PORTRAIT` text block.
- `index.html:50-53` — the hero's own portrait slot is a placeholder (`.portrait-placeholder`, caption "Replace with professional photograph"), captioned as Khawaja Mahmood Ayaz even though a real photo of him exists elsewhere on the page — worth reconciling to use the real photo here too, but that's a content decision, not this audit's call.
- `books.json` — **entirely placeholder**: `"REPLACE WITH BOOK TITLE 1"` through `4`, `"year": "20XX"`, generic one-line description, empty `link`, cover paths (`assets/books/book-1.jpg` etc.) pointing at files that don't exist in `assets/`.
- The contact form is a non-functional demo stub (see §7) — not fake content per se, but explicitly not production-ready.
- No lorem-ipsum or stock marketing buzzwords ("Excellence redefined," etc.) were found anywhere — the placeholder gaps above are all clearly self-labeled as placeholders, not disguised filler.

## 6. Existing design tokens in use

- **Colors** — token layer in `styles.css:1`: `--ink:#121922`, `--muted:#64707d`, `--paper:#f7f5f0`, `--white:#fff`, `--line:#ddd9d0`, `--gold:#b89452`, `--dark:#111820`. Beyond these seven, a long tail of one-off hardcoded hex values is scattered through the file and never reconciled into the token set: `#0c1218` (topbar/footer bg), `#cdd2d7`, `#7b6b4e`, `#a48148`, `#5c6670`, `#39434c`, `#68717a`, `#121a22`/`#f5f3ee` (dark practice section), `#3b444c`, `#b18b4d` (CTA band bg), `#e8d7b6`, `#8c7b5a`, `#927647`, `#6b737b`, `#9aa2a8`, and several `#000000` alpha values used only in box-shadows (`#00000015`, `#0003`, `#00000012`). Phase 2/3 should fold the ones worth keeping into a real token set rather than carrying all of them forward.
- **Fonts** — `--serif:"Playfair Display",Georgia,serif"` for headings/quotes, `--sans:"DM Sans",Arial,sans-serif"` for body/UI, both loaded via Google Fonts `<link>` (weights 400–700 for DM Sans, 500–700 for Playfair Display).
- **Spacing** — section padding is consistently `105px 7vw` desktop, collapsing to `75px 6vw` at ≤560px; hero uses `75px 7vw 65px`; common gaps are `25px`, `30px`, `8vw`, `9vw`, `10vw`.
- **Radii** — essentially unused by design: the whole site is square-cornered. The one exception is `border-radius:50%` on the circular `.seal` badge element (`styles.css` line 1 block, `.seal` rule).
- **Shadows** — used sparingly for a few "lifted" surfaces only: `box-shadow:0 20px 50px #00000015` (hero portrait frame), `0 15px 30px #0003` (floating stat card), `0 20px 50px #00000012` (map frame). Never used on buttons or nav.
- Inline styles are almost nonexistent in the markup: only `style="border:0"` on the map `iframe` (`index.html:210`), plus one JS-injected inline `background-image` for insight thumbnails (`script.js:43`). Everything else is class-based.

## 7. Constraints

- **i18n/RTL:** none. `lang="en"` on every page, no Urdu text, no `dir="rtl"`, no i18n library, no locale switcher. Not a constraint on this redesign.
- **Auth/CMS:** none. No login area, no auth guards, no headless CMS, no admin UI. Content is either hardcoded in HTML or fetched client-side from two flat local JSON files (`articles.json`, `books.json`); `books.json` has no admin UI and must be hand-edited.
- **JS ↔ markup coupling to respect:**
  - `script.js:1` toggles the mobile nav by directly setting **inline styles** on `.nav nav` (display/position/top/right/background/padding/flexDirection/border) rather than toggling a class. Any nav markup restructuring must either preserve the `.nav nav` selector or update this line in the same commit.
  - `script.js:6-7,66` targets `#insight-grid`, `#insight-updated`, `#book-grid` by ID, and the generated markup hardcodes `.insight-image`, `.insight-meta`, `.book-card`, `.book-cover`, `.book-info` class names that `styles.css` must keep matching.
  - `practice.html` / `practice/*.html` already added `id="primary-nav"` + `aria-expanded`/`aria-controls` to the mobile menu button that `index.html` lacks — worth fixing for real (not preserving the inconsistency) since it's an a11y gap, not a deliberate difference.
- **Contact form** (`index.html:191-197`): no `action`, no `method`, no `name` attribute on any field; `onsubmit` just shows a demo `alert()`. Per `README.txt:15`, this is intentional — "connect this to your backend/email service" is explicitly future work, out of scope for a visual redesign. There is nothing to preserve on the field-naming front since none exist today; Phase 3 will add sensible `name` attributes as a markup-completeness fix without wiring a real submission target.
- **Third-party embeds:** Google Fonts preconnect/stylesheet, a Google Maps `iframe` pointing at the real office address, outbound links to `fbr.gov.pk`. No analytics/tracking scripts anywhere.
- **Structural risk:** because there's no templating layer, every shared-markup change (header, footer, practice-detail skeleton) must currently be hand-propagated across all 12 files. This is the single biggest maintainability risk in the current codebase and will be called out again with a proposed (opt-in) fix in the Phase 2 direction doc.

---

Next: Phase 2 direction doc at `docs/redesign/01-direction.md`, proposing the design direction directly (per your call), grounded in the real firm identity and constraints captured above.
