# Crack The Code — Enterprise Design System

Crack The Code (CTC) is a Latin American EdTech company preparing people and organizations for a world powered by AI. It was originally built to speak to students; its buyers today are B2B and B2G — governments, ministries, corporations, NGOs, foundations, universities and schools. Students remain the beneficiaries, but decision-makers are CEOs, innovation/HR/CSR directors and government education officials. This system evolves CTC's existing identity (created by Anagrama) into a scalable, credible, AI-first design language — it does not replace it.

**Sources provided:** `CTC - Manual de Identidad (3CG)` — Anagrama's 2023 official brand guidelines (62 pages, text-extracted and read in full), `CTC_Isotipo.svg` (logo mark, cleaned into `assets/logos/`), `CTC_Logotipo.pdf` (20-page vector file — image/text extraction failed in this environment; see Caveats), `NTBau-{Regular,Medium,Bold}.otf`, `RocaOne-Lt.ttf`. No component library, codebase, or Figma file was attached — the component set below is a standard enterprise inventory sized to CTC's needs, not copied from an existing product.

## What the manual establishes — preserve vs. evolve

**Preserve (the brand's real DNA):** the dark green `#001F19` as dominant color at a fixed 20% usage weight; the NT Bau / Roca One typeface pairing and their exact usage split (below); the isotipo — a winking happy face inside a rounded square, a nod to web/code/tech; the full 7-hue accent system (not just 4 accents); "plastas" (solid color blocks with centered text, used to both hold text and mask photography) as a structural layout device; a photography direction rooted in real Latin American people in high-contrast, high-energy light.

**Evolve for B2B/B2G (per this brief):** the manual's illustration/iconography direction is built for a youth consumer audience — pixel-art icons, floating 3D rendered objects (headphones, controllers, screens), bouncy playful logo animation, and photography starring children and teens in saturated, high-movement shots. That reads correctly to a teenage learner, not to a ministry director or CSR VP. This system keeps the brand's hues, type and mark intact but retires the pixel/3D-object iconography and youth-only photography direction in favor of a plain outline icon system and an institutional photography direction (adults — teachers, officials, corporate partners — still Latin American, still warm, shot editorially rather than as high-saturation youth lifestyle content). Motion keeps the brand's energy but trades organic bounce for the brief's 150–250ms ease-out (bounce is fine for marketing/logo moments, not for product UI).

## Brand Foundation

**Mission territory:** prepare people and institutions across Latin America for an AI-powered world — literacy, capability and measurable outcomes, not hype.
**Positioning:** the reference visual language for AI education in the region — imagine how a mission-driven OpenAI would look if education and social impact were the product.
**Attributes:** intelligent, human, optimistic, innovative, inclusive, technological, professional, editorial, minimal, confident, future-focused.
**Avoid:** gaming/cyberpunk/neon-tech aesthetics, startup clichés, childish education graphics, cartoon illustration, corporate bureaucracy.
**Visual balance:** 50% technology, 30% humanity, 20% education. Elegant, simple, premium, editorial, timeless — never trendy.
**Design principles:** clarity over decoration · technology with humanity · impact over novelty · systems over isolated designs · accessibility by default · consistency over creativity · timeless over trendy.

## Content Fundamentals

- **Voice:** confident but warm — a credible technical partner, not a hype-driven startup. Write like a policy brief that respects the reader's intelligence, not like a pitch deck.
- **Person:** direct address ("you"/"your organization") in B2B/B2G copy; avoid first-person plural chest-thumping ("we're revolutionizing…").
- **Casing:** NT Bau labels/nav may run in ALL CAPS for structural elements (overlines, nav, tags). Sentence case or Title Case everywhere else — headlines set in Roca One are **never** capitalized.
- **Numbers as heroes:** lead with outcomes — "12,400+ educators trained" rather than adjectives. Statistics get the Roca One treatment (see StatCard).
- **Emoji:** not used. The brand communicates through typography and real photography, not iconography-as-decoration.
- **Tone knobs by audience:** government/education = credibility and measurable impact first; corporate/CSR = ROI and partnership framing; still optimistic, never salesy.
- **Example lines:** "Crack The Code partners with ministries of education to bring AI literacy to public school systems." / "Technology with purpose." / "12,400+ educators trained since 2021."

## Visual Foundations

- **Color:** `#001F19` deep green (Pantone 316) is the dominant, load-bearing color at a fixed **20% usage weight** per the manual — used for primary surfaces, dark hero sections and primary actions, never as an accent. The manual defines **7 accent hues, each at 10%**, not 4: Blue `#5691FF`, Sky/Celeste `#B6E2FF`, Mint `#6BE3D7`, Purple `#756DC8`, Lila `#D6ADFF`, Orange `#FF9C65`, Peach `#FFAF85` (exact hex/Pantone values from the manual's institutional color chart — these superseded a few approximate values used in an earlier pass of this system). **Per-piece accent cap:** every generated document or piece — web included — sticks to dark green plus **at most 2 accent hues (with their tints/shades)**; never all 7 at once in a single piece. Pick the 2 that fit the piece (e.g. the landing page uses blue + mint; the impact report uses mint + peach) rather than reaching across the whole palette. Semantic states (success/warning/danger/info) are an intentional addition layered on top, since the manual defines brand color, not UI-state color. Full ramps with WCAG-AA-checked text pairings live in `tokens/colors.css`; specimens in the Colors group.
- **Type:** two typefaces, two jobs, per the manual's explicit rule. **NT Bau Regular** is body copy only, set in white or dark green only. **NT Bau Medium** is for subtitles only, also white or dark green only. **NT Bau Bold** (this system's addition, matching the weight range the manual describes as "5 pesos" available) covers headings/UI emphasis. NT Bau overall is the functional voice — UI, nav, data, reports — and may run in ALL CAPS for structural labels. **Roca One Light** is the emotional voice — large, short headlines and body copy only (the manual's words: "titulares y cuerpos de texto grandes y cortos") — always Sentence/Title case, never in paragraphs, never in caps, never for UI labels.
- **Spacing/grid:** 4px base unit (4/8/12/16/24/32/48/64/96); editorial container max 1200px, 12-column grid, generous whitespace over dense packing.
- **Backgrounds:** flat color fields (deep green or white/neutral-50) — no gradients, no textures/patterns. Full-bleed dark-green sections are the signature "statement" background for hero/section-break moments; content sections are white or neutral-50.
- **Imagery:** real Latin American people — students, teachers, officials, corporate collaborators — natural light, editorial (not stock-posed) compositions. The manual's own photography direction stars children/teens in high-saturation, high-movement, studio-or-sun-flooded shots — energetic and youth-facing. This system evolves that toward adults in institutional settings (still warm, still LATAM, still high-quality light) since the buyer is no longer the teenage learner. No photography assets were provided; UI kits/templates use `<image-slot>` placeholders labeled with what real photo should go there.
- **Illustration:** flat, minimal, geometric secondary role only — no characters, no cartoon style, no exaggerated gradients. None provided in source material; none invented here.
- **Motion:** subtle, 150–250ms, ease-out only for product UI. Motion clarifies state changes (hover, expand, focus) — it never decorates. The manual's own logo animation is deliberately organic/bouncy ("rebotes suaves y feeling bouncy") across 10 logo variations — that bounce is preserved for marketing/brand moments (the animated logo itself, social content) but does not belong in product interfaces, which use the restrained ease-out above.
- **Hover/press states:** hover = one step darker (buttons) or a light neutral-100 wash (ghost/ links underline); press = scale(0.98) plus a further darken step. No lightening-on-hover, no shadow-lift gimmicks.
- **Borders & shadows:** 1px hairline borders (`--border-subtle` / `--border-default`) are the default separation method. Shadows are reserved for true elevation (modals, popovers) and stay very soft (`--shadow-xs` → `--shadow-lg`) — never a decorative drop shadow on a static card.
- **Radius:** modest, not pill-happy — 4/6/10/16/24px steps, pill reserved for badges, tags and switches. Cards default to `--radius-md` (10px) with a hairline border, no shadow.
- **Transparency/blur:** only on modal scrims (`rgba(8,11,9,.5)` + light blur) — not used decoratively elsewhere.
- **Corner radii on photography:** none — images run full-bleed or in simple rectangular frames, no rounded-photo treatment.
- **Plastas:** the manual's signature layout device — solid color blocks ("plastas") that either hold centered text (dark-green plasta → white text; any other brand hue plasta → dark-green text) or mask/clip a photograph into a shape. Specimen in the Brand group (`brand-plastas.html`).

## Iconography

The manual defines **three** original icon families: solid-stroke/flat icons, pixelated icons, and 3D-modeled floating objects (headphones, game controllers, screens) used as decorative random-placed elements in layouts and photography. None of the three were included as actual asset files in the upload — only described in text. For B2B/B2G, this system carries forward the **flat/solid-stroke family only** — the pixelated and 3D-object families read as youth-consumer/gaming and are intentionally retired for institutional contexts (they remain valid for CTC's own social/marketing channels, just outside this system's scope). **Recommendation updated:** the live production landing (ctc-landing.vercel.app) confirms the real icon set in use is **[Phosphor Icons](https://phosphoricons.com)** — its asset filenames match Phosphor's identifiers exactly (`graduation-cap`, `map-pin`, `hand-coins`, `chart-line-up`, `users-three`, `chats-circle`, `plus`/`minus`), regular weight, in dark green or white on plastas. Use Phosphor (regular weight) going forward instead of Lucide. No icons have been hand-drawn or invented in this system; component demos needing an icon slot show a labeled placeholder instead. Emoji and unicode-as-icon are not part of the brand voice.

## Components

Standard enterprise inventory (no source library existed to copy from — flagged as an intentional, from-scratch build):

- **Core** — `Button` (primary/secondary/ghost/danger × sm/md/lg), `Badge`, `Card`
- **Forms** — `Input`, `Select`, `Checkbox`, `Switch`
- **Feedback** — `Alert`, `Tooltip`, `Accordion`, `Progress`, `Modal`
- **Navigation** — `Tabs`
- **Data** — `Table`, `StatCard` (Roca One headline metric — the report/one-pager building block)

### Intentional additions
`StatCard` — not a "standard" primitive, added because impact-metric reporting (educators trained, schools reached, completion rates) is core to CTC's B2B/B2G sales motion and needed a dedicated place to apply the Roca One + NT Bau pairing correctly. It supports a `tone` prop implementing the brand's "plasta" motif (dark-green plasta → white text; accent plasta → dark-green text) — a real CTC one-pager (Compensar proposal) was used as reference to bring the full 7-accent palette into reports rather than keeping them monochrome.

## Assets

- `assets/logos/ctc-logotipo-black.png` / `-white.png` — the official wordmark ('crack the code' + a winking-face mark built from a stacked-dot "i", a period, and a closing-parenthesis smile). This is Artboard 1 of the brand's logotype file, provided directly as PNG — the primary lockup, used everywhere unless the isotipo alone is specifically called for.
- `assets/logos/ctc-isotipo.svg` and `-white.svg` — cleaned isotipo mark (extracted from the multi-artboard source SVG). Per the manual, the mark depicts a winking happy face inside a rounded square — a nod to web/code/tech — and has minimum-size rules (50px digital / 0.5cm print) and a clear-space rule (space around the mark ≥ the height of its inner semicircle/X).
- `assets/fonts/` — NT Bau Regular/Medium/Bold (OTF), Roca One Light (TTF), wired into `tokens/typography.css`.

## Index

- `styles.css` → `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `components/core/`, `components/forms/`, `components/feedback/`, `components/navigation/`, `components/data/` — see Components above
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups in the Design System tab)
- `templates/landing-page/`, `templates/impact-report/` — starting-point templates (B2B/B2G marketing homepage, institutional impact one-pager)
- `assets/` — logo marks, webfonts
- `SKILL.md` — portable skill file for use in Claude Code

## Caveats — please help iterate

1. **The real logotype is now in the system.** The 20-page `CTC_Logotipo` PDF still can't be rendered in this environment (vector render hangs on every page even after 25s+), but the user supplied the actual Artboard 1 wordmark directly as `CTC_logo-black.png` / `CTC_logo-white.png` — these are now the canonical wordmark assets, used everywhere except when the isotipo alone is specifically requested.
2. **The Anagrama brand manual (`CTC - Manual de Identidad (3CG)`) has been read in full (62 pages)** and this system was corrected against it: 3 accent hex values were fixed to the manual's exact Pantone/RGB chart (Blue, Orange) and 3 accent hues were added that the manual defines but an earlier pass simplified away (Sky/Celeste, Lila, Peach) — see Visual Foundations above.
3. **No icon, illustration, or photography asset files were provided** — the manual describes three icon families (flat, pixel, 3D) and a youth-facing photography direction, none delivered as files. This system carries forward only the flat/outline family (via a Lucide recommendation) and evolves photography toward an institutional adult direction, per the B2B/B2G brief — both are documented recommendations, not real assets. Send real photography, iconography, and the 3D/pixel object library if you want them represented here instead of a placeholder.
4. **No existing product/codebase/Figma was attached**, so the component list is a standard enterprise set sized to CTC's needs rather than copied from a real UI — tell me if there's an existing site, LMS, or dashboard to align to instead.

5. **The live landing page (ctc-landing.vercel.app) was reviewed and its real structure/copy folded into `templates/landing-page/`.** Confirmed patterns now reflected: a numbers-led hero (4 stat chips inline under the headline, not a separate row), a partner-logo marquee ("Nos eligen quienes le apuestan a la innovación educativa"), a stats-driven "brecha digital" context section (dark plasta, 3 large statistics with sources), a 4-card "Por qué Crack The Code" grid (photo + icon + short claim), a "5 caminos de impacto" partnership-model list, a case-study grid with client logos and outcome numbers, a country-presence panel, and a testimonial-video carousel — all now the template's real section set (replacing the earlier generic 3-card "Programas" guess). Copy is adapted to institutional/B2B tone per this system's voice rules rather than copied verbatim. Real photography/video are still placeholders (`<image-slot>`), and the icon set is standardized on Phosphor.

**Ask:** react to the corrected color system (7 accents, not 4), the real wordmark now in place, the component set, and the landing page's updated section structure — send real photography/video assets next so the templates can drop the placeholders.
