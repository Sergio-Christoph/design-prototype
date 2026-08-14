# Sergio Christoph — Lab Diamond · Website Prototype

Prototype for a client presentation. **No real data** — all copy, prices and most
photography are placeholders. Built from the original design-system export, then
reformatted so the markup is readable and easy to tweak.

---

## ▶ How to view it (important)

These pages use a small runtime (`support.js`) that calls `fetch()`, which browsers
block on the `file://` scheme. So **don't just double-click the `.html` files** —
serve the folder over HTTP. Pick whichever you already have:

```bash
# Option A — Python (already installed on this machine)
python -m http.server 8765
#   then open:  http://127.0.0.1:8765/Homepage.dc.html

# Option B — VS Code
#   Right-click Homepage.dc.html  →  "Open with Live Server"
```

Then click through the nav. The filenames keep the `.dc.html` extension on
purpose — every internal link (e.g. `href="Collections.dc.html"`) depends on it,
so **don't rename the files**.

---

## 📁 What's in here

```
Homepage.dc.html        ← start here
Collections.dc.html     rings · earrings · necklaces · bracelets
Shop.dc.html
The Lab.dc.html         certification / process
Bespoke Studio.dc.html  build-your-own-ring
Viewing Room.dc.html

admin.html              ← CMS prototype (add items & categories) · opens at /admin.html

support.js              runtime that powers the page (leave alone)

assets/                 page images (cert-gia.png, cert-igi.png)
_ds/sergio-christoph-design-system-…/   ← the design system (see below)
```

The original, un-beautified export and source PDFs live in your
`Downloads/Sergio Christoph Lab Diamond Website_instant/` folder — not copied here.

---

## ✏️ Where to tweak what

| You want to change… | Edit this |
|---|---|
| **Words / copy** (headings, paragraphs, buttons) | the text directly inside each `.dc.html` |
| **Links** (nav, footer, social) | `href="…"` on the `<a>` tags |
| **Product photos / hero images** | `src="…"` on `<img>` tags (placeholders use `https://images.unsplash.com/…`) |
| **Colors** (white / cream / gold / ink) | `_ds/…/tokens/colors.css` |
| **Fonts** | `_ds/…/tokens/fonts.css` and `typography.css` |
| **Spacing / container width** | `_ds/…/tokens/spacing.css` |
| **Animations, breakpoints per page** | the `<style>` block near the top of each `.dc.html` |
| **Buttons, inputs, cards (shared)** | `_ds/…/components/components.css` (`.sc-btn`, `.sc-product-card`, …) |

The token CSS files are short, clean and commented — changing one value (e.g.
`--gold-500`) updates the whole site at once.

---

## 🧭 Reading a page (a quick tour of the markup)

Each page was reformatted so that **one element = one block**, with its CSS written
one property per line. Section banners help you jump around:

```html
<!-- ======  HEADER  ====== -->
<header data-screen-label="Header" style="
  position:fixed;
  top:0;
  ...
">
```

The pages are exported from a design tool, so you'll see a few non-standard things.
They're all load-bearing — **leave them as-is** unless you know what they do:

| You'll see | What it is |
|---|---|
| `{{ headerBg }}`, `{{ navColor }}`, … | placeholders filled in at runtime by the script block at the bottom of the page |
| `<sc-if value="{{ … }}">…</sc-if>` | show/hide block (e.g. dark vs. light header on scroll) |
| `style-hover="color:var(--gold-500)"` | the gold hover state (custom attribute; keep it on one line) |
| `<x-import …>` | a design-system component (heading, button, product card) |
| `<style>` / `<script>` blocks | page CSS animations + the runtime logic — already readable, best left untouched |

The big `<script type="text/x-dc"> … </script>` at the bottom of each page is the
logic that resolves the `{{ }}` values (sticky-header behaviour, mobile menu, etc.).
It's plain, readable JavaScript — handy to read, rarely needs editing for a copy tweak.

---

## 📱 Responsive

Already handled — the design system uses fluid units (`clamp()`, `%`, `svh`) and each
page has its own breakpoints in its `<style>` block (e.g. the 4-column category grid
drops to 2 columns ≤ 960 px and 1 column ≤ 600 px; the nav collapses to a hamburger).
Verified at 1440 px and 390 px.

---

## Notes

- Fonts: display serif is **Cambria** (system) with **Caladea** as the free Google
  fallback; body is **Hanken Grotesk**. Swap the `@import` in `tokens/fonts.css` to
  use licensed brand fonts later.
- Photography is all placeholder (Unsplash + gradient washes with the sparkle mark).
- Brief spells the name "Cristoph"; the logo reads **CHRISTOPH** — the site follows
  the logo.
