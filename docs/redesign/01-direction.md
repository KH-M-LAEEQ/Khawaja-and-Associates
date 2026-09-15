# Direction — Khawaja & Associates

## Why the current design reads as generic

1. **The palette + display face combo is one of the three current AI-design defaults, almost exactly.** `styles.css:1` sets `--paper:#f7f5f0` (warm cream) paired with Playfair Display for every headline (`index.html:40`, `.hero h1`; `.section h2` throughout). Cream background + serif display + a warm metallic/earth accent is the single most common "elegant law/finance" AI output right now. Nothing here is wrong on its own — it's just the default, not a choice made for this chamber specifically.
2. **Decorative sequence numbers on content that isn't a sequence.** `practice.html:45-54` numbers the ten practice areas `01` through `10`. Income Tax isn't "before" Sales Tax in any real sense — the numbering implies an order that doesn't exist. This is exactly the pattern the frontend-design skill flags: numbered markers are only honest when the content is actually ordered.
3. **A floating stat card that carries no real information.** `index.html:57-59`, `.floating-card` — "01 / Tax Litigation / Representation before relevant authorities & courts" — is a generic "elevated card over the hero image" template move. It's not wrong content, but it's decorative, not structural: it doesn't use anything specific to this firm.
4. **Credentials are formatted as marketing bullets, not as what they actually are: a bar register.** `index.html:86-93` lists Khawaja Mahmood Ayaz's credentials as a `<ul>` with a badge `<div>` — generic "feature list" styling applied to what is, in substance, a dated professional record (enrolled 1995, elected to specific Bar offices). The real structure — dates, offices, institutions — is flattened into undifferentiated bullet text.
5. **Typography has only one register.** Serif for headings, one sans for everything else. There's no third voice for the things that are actually data in this content: dates, enrollment years, phone numbers, case-adjacent labels. Everything reads at the same typographic "volume."

None of this is bad taste — the existing prototype already avoids the worse clichés (no gradient hero, no glassmorphism, no fake testimonials, no invented stats, real restraint on shadows/radii). The direction below keeps that discipline and pushes it further: toward something that could only be this chamber's site, not a template with its name swapped in.

## Direction: "The Register"

A tax chamber's real currency is dates, enrollments, and standing — not brand energy. The direction treats the site's credential and practice content the way a bar association's own roll or a gazette would: hairline-ruled entries, dates set apart in a distinct utility face, a single recurring seal mark used as an actual mark of record rather than decoration, and practice areas organized by real jurisdiction rather than arbitrary sequence.

Concretely, this shows up as:
- **Real dates and years become a structural device**, set in a monospace utility face, wherever the underlying fact is actually dated (enrollment year, founding year, credential year). Sequence numbers that aren't real sequences (the 01–10 practice grid) are removed, replaced by jurisdiction grouping (Federal / Provincial & Sector / Litigation & IP) — true information the reader can actually use to navigate, which also directly serves the brief's "clear practice-area navigation" priority.
- **The existing `.seal` circular gold ring becomes a real recurring mark** — a simple K&A monogram in a double ring — used at low frequency in specific, meaningful spots (near "Senior Counsel," near "Est. 1964," in the footer) rather than as a one-off badge.
- **Credentials render as register rows**, not bullet lists: hairline rule between entries, the year right-aligned in mono, the institution/office in body text. This is a direct typographic consequence of what the content actually is (a dated record), not a stylistic flourish.
- **A cooler, denser palette** than the flagged cream-and-brass default — the paper tone shifts from a bright warm cream toward a duller "stone," and a second accent (a restrained oxblood, evoking a registrar's stamp) is introduced for the seal mark and one or two structural accents per page, used sparingly enough that it never becomes a second "brand color" competing with brass.

## Tokens

### Color

| Name | Hex | Usage |
|---|---|---|
| `ink` | `#14181d` | Primary text, nav text, default body copy on light backgrounds. Cooler/darker than the current `#121922` — reads as graphite, not warm black. |
| `graphite` | `#565f68` | Secondary text, captions, muted paragraph copy. |
| `stone` | `#eeece4` | Page background. Deliberately duller/cooler than the current `#f7f5f0` cream to move away from the AI-default warm-cream tone — reads as stone/limestone, not paper. |
| `parchment` | `#f8f7f3` | Card/surface background one step lighter than `stone`, for anything that needs to sit visually "on" the page (cards, form, header bar). |
| `brass` | `#a9824f` | Primary accent: the seal mark, hairline highlights, hover states, link underlines. Darkened/desaturated from the current `#b89452` so it reads as aged metal rather than bright gold. |
| `oxblood` | `#6e2a26` | Secondary accent, used sparingly (max 1-2 touches per page): the seal mark's ring, a single "Former Members" or "notice" marker. Evokes a registrar's ink stamp — never used for large fills or backgrounds. |
| `line` | `#d9d5c9` | Hairline rules and borders — the primary separator device, used instead of shadows wherever possible. |
| `dark` | `#0e1216` | Topbar/footer background (near-black, cooler than current `#0c1218`). |

Rule: brass is the workhorse accent; oxblood is a condiment, not a sauce — if a page has more than two oxblood touches, cut one.

### Type

Three roles, each doing one job:

- **Display — Newsreader** (serif, regular/medium, roman + italic). Headlines (`h1`/`h2`) and pull-quotes only. Replaces Playfair Display: Newsreader has an editorial/gazette character suited to "official record" material and is far less reached-for than Playfair in this space.
- **Body — DM Sans** (kept from the current site — already legible, not over-used to Inter's degree; no reason to change it). Paragraph copy, nav, buttons, form labels.
- **Utility — IBM Plex Mono** (new). Section eyebrows, dates, enrollment years, phone numbers, jurisdiction tags. This is the signature typographic move: anything in the content that is actually a discrete data point (a year, a phone number, a category tag) is set in mono, everything that is prose is not. That distinction is new — the current site sets everything in either the display or body face regardless of what kind of content it is.

Google Fonts import (replaces the current DM Sans + Playfair Display link):
```
family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500
&family=DM+Sans:wght@400;500;600;700
&family=IBM+Plex+Mono:wght@400;500
```

Type scale (Tailwind `fontSize` tokens, `[size, {lineHeight}]`):

| Token | Size | Line-height | Face | Use |
|---|---|---|---|---|
| `display-xl` | clamp(2.75rem, 5vw, 4.75rem) | 1.05 | Newsreader 500 | Hero `h1` |
| `display-l` | clamp(2rem, 3.5vw, 3.25rem) | 1.1 | Newsreader 500 | Section `h2` |
| `display-m` | 1.5rem | 1.25 | Newsreader 500 | Card/subsection `h3` |
| `body-l` | 1.125rem | 1.6 | DM Sans 400 | Lead paragraphs |
| `body-m` | 0.9375rem | 1.65 | DM Sans 400 | Default paragraph |
| `label` | 0.6875rem | 1.4 | IBM Plex Mono 500, uppercase, tracking `0.12em` | Eyebrows, section labels |
| `meta` | 0.75rem | 1.4 | IBM Plex Mono 400 | Dates, years, phone numbers, tags |

### Spacing

Section padding: `py-24`/`px-[7vw]` desktop → `py-16`/`px-[6vw]` at `≤560px` (matches the current site's rhythm, formalized into the Tailwind scale rather than hand-tuned pixel values). Container max-width `1320px`. Standard content gaps: `gap-6`/`gap-8`/`gap-[8vw]` depending on context — kept consistent with what's already there rather than invented fresh.

### Radii and borders/shadows

- **Radius: 0 everywhere except the seal mark**, which is a true circle (`rounded-full`). This is a direct continuation of the current site's one deliberate exception and stays that way — no `rounded-xl`/`rounded-2xl` creep.
- **Borders (hairline, `line` color) are the primary separator**, used in place of shadows for cards, the register rows, and grid dividers.
- **Shadow is reserved for the two or three genuinely "lifted" objects** (the seal mark's subtle depth, the map frame) — kept as understated as the current `#00000012`-style values, never applied uniformly to every surface.

## Reference notes: how this plays out

**Practice-area card** (`practice.html:45-54` today → redesigned): today, a flat 4-column grid of 10 items, each with an arbitrary `01`–`10` marker, hover-fills solid brass. Redesigned: three grouped sections with real headers — *Federal Taxation* (Income Tax, Sales Tax, Withholding Tax, FBR Matters, Customs & Duties), *Provincial & Sector-Specific* (Provincial Taxes, Banking Taxes), *Litigation & Intellectual Property* (Tax Litigation, Trademark Registration). Each card shows the practice name in Newsreader, its one-line description in DM Sans, and a small mono jurisdiction tag (`FEDERAL`, `PROVINCIAL`, `LITIGATION`) in place of the decorative number — real navigational information instead of a fake sequence.

**Lawyer credential block** (`index.html:80-95` today → redesigned): today, a `<ul>` of bullet points plus a separate badge `<div>` repeating one credential. Redesigned: a register — each credential is a hairline-ruled row with the year in mono, right-aligned ("1995" next to "Enrolled as an Advocate"), read top-to-bottom like an actual bar roll entry. The one-off badge box is dropped; the seal mark appears once, next to the "Senior Counsel" role label, as the actual mark of standing.

**Hero** (`index.html:37-60` today → redesigned): today, a split hero (headline/copy/CTA left, portrait placeholder + a generic floating "01 / Tax Litigation" stat card right) — the split layout itself is fine and stays, since it already avoids the centered-hero-two-buttons template. What changes: the floating card is replaced with the seal mark plus "Est. 1964" set in mono, anchored near the portrait — real information (the founding year) delivered through the same signature device used elsewhere, instead of an arbitrary practice-area callout.

## Open item: the 12-file duplication problem

The audit flagged that header, footer, and the practice-detail skeleton are hand-copied across all 12 HTML files with no partial/include mechanism. Fixing that properly (e.g., a small Node build-time include step, using the Tailwind build pipeline we're already adding) is a real scope item beyond the approved Tailwind addition and needs its own sign-off — flagging it here rather than assuming it's in scope. Proceeding with implementation now by hand-applying identical shared markup across the 12 files, same as today, unless told otherwise.
