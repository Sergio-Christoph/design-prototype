# Sergio Christoph — Design System

**Sergio Christoph · Lab Diamond** — the first lab-grown diamond store in Bali. Luxury-minimalist e-commerce in the register of the great jewelry maisons (bulgari.com, cartier.com, vancleefarpels.com, tiffany.com were the four reference sites): white gallery surfaces with cream punctuation, a classic book serif for titles, a plain modern sans for everything else, and vast breathing room around flawless product photography.

Note: the brief spells "Cristoph"; the supplied logo reads **CHRISTOPH** — this system follows the logo.

## Sources
- `uploads/SC-LOGO-No_Bg-White@4x.png` — the only supplied asset (white wordmark, transparent bg, 2183×647). Black and gold tints were generated from it; the diamond-O and sparkle-O letterforms were extracted as standalone marks (see `assets/`).
- Reference sites (visual direction only, nothing copied): bulgari.com, cartier.com, vancleefarpels.com, tiffany.com.
- No Figma, codebase, photography, or licensed fonts were provided. All type is free Google Fonts; every image area is a placeholder awaiting real photography.

## CONTENT FUNDAMENTALS
- **Voice:** quiet confidence. Short declaratives, no exclamation marks, no urgency ("only 3 left" is forbidden). The stone is the loudest thing on the page.
- **Person:** the house says "we/our"; the customer is "you". Example: "Grown by light, set by hand — for you, in Seminyak."
- **Casing:** sentence case for titles and body ("Grown by science, set by hand"); tracked UPPERCASE only for the micro-voice (eyebrows, buttons, breadcrumbs, badges). Never Title Case Everything.
- **Product naming:** "The" + Balinese place + form — *The Ubud Solitaire*, *Canggu Tennis Bracelet*, *Amed Rivière Necklace*. Specs read as a caption: "1.2ct round brilliant · 18k yellow gold" (middle-dot separators).
- **Facts over adjectives:** lead with certification and process ("IGI certified", "grown in ninety days", "Type IIa carbon"), not "stunning/exquisite". One poetic line per page is the budget, ideally in the Cormorant italic accent.
- **Prices:** written in full — `IDR 24.500.000` (id-ID grouping), never abbreviated. Duties-included noted in micro-caps.
- **Emoji:** never.

## VISUAL FOUNDATIONS
- **Color:** 90% of any layout is pure white (`--surface-page`/`--surface-card` #FFFFFF) with cream interludes (`--ivory-100`/`--ivory-200`) used sparingly — one cream section per page and one dark-ink ceremony section (`--surface-dark`) per page (hero, certification band, or footer). Gold (`--gold-500` #A6803C, ramp 200–700) is the only accent — eyebrows, hover states, focus rings, badges; never large fills except the gold Button. Semantic: sage `--success`, oxide `--error`. Max 2 background colors per composition plus dark.
- **Type:** `--font-display` Cambria (with Caladea, its metric-compatible free Google fallback) for h1–h6, product names, ceremonial prices — regular weight, roman. `--font-body` Hanken Grotesk 300/400/500/600 for everything readable. `--font-accent` Cambria italic for one pull-quote or caption per page. Micro-voice: 11–12px, 500, uppercase, tracked `--ls-caps` (+0.22em eyebrows) or `--ls-caps-tight` (+0.14em buttons/breadcrumbs). Scale in `tokens/typography.css` (hero clamp 56–92 → micro 11).
- **Spacing:** luxury = emptiness. Sections breathe at `--space-3xl` (96px) vertically; the container is 1360px with fluid `--container-pad`. **Two modes:** editorial pages are loose and magazine-like (offset splits, centered quotes); shop pages snap to strict 4-column grids with `--gap-grid`.
- **Backgrounds:** flat token colors or photography only. Placeholder image areas use near-white radial/linear gradients with a faint sparkle mark — no patterns, no textures, no blue/purple gradients ever.
- **Imagery:** products — bright, macro, flawless, on bone/cream/skin, 4:5. Lifestyle — MASSIVE: full viewport width and near full-height (Hollywood-scale campaign frames), cinematic warm dusk light, people wearing the pieces; at least one such band per editorial page. Warm grade always; never cool, never desaturated b&w.
- **Animation:** slow and composed. `--ease-luxe` cubic-bezier(.22,.61,.36,1); 180ms color/opacity, 420ms reveals, 900ms image zooms. Fades and small rises only — nothing bounces, nothing spins.
- **Hover:** color shifts to gold (links, icons, product names), 1px gold underlines grow from the left, product photos zoom to 1.045 over 900ms, primary buttons turn gold. Press: no shrink — a slightly deeper shade.
- **Borders & corners:** hairlines everywhere (`--border-hairline`), `--border-mid` for inputs at rest, ink for outline buttons. **Radius 0 on everything** except pill filter chips and the bag-count dot.
- **Shadow:** essentially flat; `--shadow-soft` for sticky nav/drawers, `--shadow-overlay` for dialogs. Cards have no shadow — a hairline or nothing.
- **Transparency & blur:** none. Overlays use the warm scrim `--overlay-scrim`; panels stay opaque.
- **Forms:** underline fields (no boxes) — hairline bottom border that sharpens to ink on focus; micro-caps labels above.
- **Fixed elements:** sticky top nav (announcement bar + 78px bar, hairline bottom); cart is a right slide-over (440px).

## ICONOGRAPHY
- No icon set was provided. **Substitution (flagged):** [Lucide](https://lucide.dev) via CDN (`lucide@0.454.0` UMD), configured to `stroke-width: 1.25`, 20px, ink or muted — reads as thin luxury line-work. Never filled, never multicolor; gold only on hover. Common glyphs: search, heart, shopping-bag, user, menu, x, chevron-down, arrow-right, plus, minus, gem, sparkles, truck, shield-check, ruler.
- **Brand marks** (from the logo, in `assets/`): `mark-diamond-*.png` (diamond-O of SERGIO) and `mark-sparkle-*.png` (sparkle-O of CHRISTOPH), each in white/black/gold. Use the sparkle as favicon, divider glyph (`Divider mark`), image-placeholder watermark, and bag/packaging stamp. The tiny UI chevrons/checks inside Select/Checkbox are inline data-URI strokes matching the 1.1–1.4 weight.
- No emoji, no unicode-as-icon.
- In JSX kits, `LIcon` (exported from `ui_kits/website/NavBar.jsx`) wraps Lucide safely for React re-renders.

## Logo
Three tints of the supplied wordmark, all in `assets/`: `logo-white.png` (on ink/photography), `logo-black.png` (on bone — the default), `logo-gold.png` (packaging, invitations, ceremony). Keep clearspace ≥ the O-height; minimum on-screen width ~140px; never recolor beyond these three, never place on busy imagery without a scrim.

## Components
All in `components/`, exported on `window.SergioChristophDesignSystem_53d2bb` via `_ds_bundle.js`:
- **buttons/** — `Button` (primary/outline/gold/ghost, sm, inverse), `IconButton`
- **forms/** — `Input`, `Select`, `Checkbox`, `Radio` (underline style)
- **display/** — `Badge`, `Divider` (plain or sparkle-marked), `SectionHeading` (eyebrow+title+lede)
- **navigation/** — `Breadcrumbs`, `Accordion`
- **commerce/** — `ProductCard` (4:5, hover zoom, placeholder-aware), `Price` (IDR formatting)
- **overlay/** — `Dialog`
Each has a sibling `.d.ts` (props) and `.prompt.md` (usage). Intentional additions beyond a bare standard set: `Price` (IDR formatting is brand-critical), `SectionHeading`, `Divider mark`, `ProductCard` — all core to a jewelry storefront; Toast/Tooltip/Tabs/Switch were deliberately omitted (no use case on these surfaces yet).

## Index
- `styles.css` — global entry (imports everything below)
- `tokens/` — `fonts.css` (Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css` (resets + `.sc-eyebrow`, `.sc-container`, `.sc-hairline`)
- `components/` — primitives above + `components.css` (all `sc-*` classes, usable from plain HTML too)
- `ui_kits/website/` — interactive storefront recreation: home, shop (strict grid), product page, cart drawer, appointment dialog (`index.html`; see its README)
- `guidelines/` — specimen cards for the Design System tab (Brand / Colors / Type / Spacing / Effects / Icons)
- `assets/` — 3 logo tints + 6 O-marks
- `SKILL.md` — agent-facing entry point
- `thumbnail.html` — homepage tile

## Caveats
- **Fonts:** display serif is Cambria (system font, per direction) with Caladea — its metric-compatible free Google clone — loading from the CDN for machines without Cambria; body is Hanken Grotesk. Supply licensed brand fonts anytime and swap the `@import` + family tokens to upgrade the whole system at once.
- **Icons:** Lucide is a flagged substitution — see ICONOGRAPHY.
- **Photography:** none provided; all image areas are gradient placeholders with the sparkle mark.
