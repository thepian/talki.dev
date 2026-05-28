---
version: alpha
name: Thepia Design System
description: Consumer-mobile-first design system for Thepia products, talki.dev case-study islands, and Thepia marketing pages — warm, considered, lavender-led
colors:
  brand-lavender:
    50:   "#F7F5FC"
    100:  "#ECE8F6"
    200:  "#DCD5EF"
    300:  "#C3B8E3"
    400:  "#ADA0D8"
    500:  "#988ACA"
    600:  "#826FB7"
    700:  "#6F5A9F"
    800:  "#5D4D83"
    900:  "#4E4470"
    950:  "#2E273F"
  warm-neutral:
    50:   "#FAFAF9"
    100:  "#F5F5F4"
    200:  "#E7E5E4"
    300:  "#D6D3D1"
    400:  "#A8A29E"
    500:  "#78716C"
    600:  "#57534E"
    700:  "#44403C"
    800:  "#292524"
    900:  "#1C1917"
    950:  "#0C0A09"
  semantic:
    success: "#16A34A"
    warning: "#CA8A04"
    error:   "#DC2626"
    info:    "{colors.brand-lavender.500}"
typography:
  display-xl:
    fontFamily: "EB Garamond"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.02em
  display-lg:
    fontFamily: "EB Garamond"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.02em
  display-md:
    fontFamily: "EB Garamond"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.015em
  title-lg:
    fontFamily: "EB Garamond"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.005em
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.04em
    textTransform: uppercase
rounded:
  xs:   4px
  sm:   8px
  md:   12px
  lg:   16px
  xl:   24px
  2xl:  32px
  full: 9999px
spacing:
  0:    0
  1:    4px
  2:    8px
  3:    12px
  4:    16px
  5:    20px
  6:    24px
  8:    32px
  10:   40px
  12:   48px
  16:   64px
  20:   80px
  24:   96px
  32:   128px
shadow:
  e0: "none"
  e1: "0 1px 2px -1px rgba(0,0,0,0.04), 0 1px 1px 0 rgba(0,0,0,0.05)"
  e2: "0 2px 4px -2px rgba(0,0,0,0.06), 0 4px 6px -1px rgba(0,0,0,0.05)"
  e3: "0 4px 6px -2px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.08)"
  e4: "0 10px 20px -4px rgba(0,0,0,0.08), 0 20px 40px -8px rgba(0,0,0,0.12)"
motion:
  ease-soft:   "cubic-bezier(0.16, 1, 0.3, 1)"
  ease-spring: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  ease-snappy: "cubic-bezier(0.4, 0, 0.2, 1)"
  duration-fast:     140ms
  duration-standard: 220ms
  duration-hero:     360ms
---

## Overview

Thepia Design System is the consumer-mobile-first language for **Thepia products**,
**talki.dev case-study islands**, and **Thepia marketing pages**. It is named after
the parent brand (Thepia GmbH), not after any individual product, because the same
visual language should appear consistently across all three surfaces.

The aesthetic target is **warm, considered, premium** — opposite to Material's
clinical neutrality and distinct from Apple's cool refinement. The brand accent is
a muted lavender (`#988ACA`) inherited from thepia.com, paired with warm-stone
neutrals (Tailwind's `stone` palette) for a complementary undertone. Display
typography is the classical serif **EB Garamond**, body is **Inter** — a pair that
reads as humane and grown-up rather than corporate or playful.

**Three surfaces, one system:**
1. **Marketing pages** (web, responsive) — landing, pricing, about
2. **Embedded islands** in talki.dev articles — React components mounted via
   the `{% island %}` Markdoc tag per [EXTERNAL-COMPONENTS.md](../../../EXTERNAL-COMPONENTS.md)
3. **Consumer mobile apps** (iOS / Android / PWA) — native or PWA shells

This skill is **separate from** the BUCHI design system in [src/content/buchi/](../buchi/),
which is a client-driven system for the BUCHI Falcon spray-dryer. Thepia and BUCHI
share no tokens.

## System Structure & Reference Data

The system is documented as machine-readable token YAML + human-readable prose:

```
src/content/thepia/
  DESIGN.md                ← this file (also contains the canonical YAML front-matter)
  figma-index.json         ← Figma base libraries (Untitled UI, iOS 26) and Thepia override frames
  tokens/
    color.yaml             ← brand-lavender ramp, warm-neutral ramp, semantic roles
    typography.yaml        ← EB Garamond + Inter type scale
    spacing.yaml           ← 4px-based scale (Tailwind-compatible)
    shape.yaml             ← corner radius scale
    elevation.yaml         ← shadow tokens e0..e4
    motion.yaml            ← easings + duration tiers

src/components/thepia/
  tokens.css               ← CSS custom-property layer (primitives + semantic aliases)

src/pages/thepia/
  index.astro              ← live design-system preview at /thepia/
```

## Base Library Strategy

**Path: free hybrid — evaluate before committing to paid.**

- **Apple iOS 26 UI Kit** (official, free) — used as the **structural and behavioural
  reference for mobile patterns**: touch targets, navigation grammar, list density,
  gesture vocabulary, motion timing baselines. We do **not** inherit its visual style.
  - File: <https://www.figma.com/community/file/1521817992558779733/ios-and-ipados-26>
- **Untitled UI** (community Figma, free tier) — used as the **structural base for
  marketing and application/dashboard patterns**: section layouts, cards, forms, nav
  patterns, tables, modals. The Untitled UI "look" is intentionally thin and washes
  away when the identity layer is applied.
  - Free file: <https://www.figma.com/community/file/1020079203222518115>
- **Identity layer (this is the differentiator)**: Thepia's typography pair,
  lavender palette, warm-neutral undertone, custom motion signature. Replaces the
  visual surface of the base kits while keeping their interaction grammar.

If the free path proves too piecemeal during build, the upgrade is **Untitled UI Pro**
($349 one-time, lifetime updates) which includes a polished Mobile UI kit and
eliminates the iOS-26-bridging work.

## Framework Decision

Interactive Thepia components are implemented in **React** and mounted as Astro
islands per [EXTERNAL-COMPONENTS.md](../../../EXTERNAL-COMPONENTS.md). Static showcase
components stay as `.astro`. Same split rationale as the BUCHI system in
[src/content/buchi/DESIGN.md](../buchi/DESIGN.md#framework-decision):

1. talki.dev island infrastructure provides React/ReactDOM globally; Svelte
   would require bundling its runtime per island.
2. Figma MCP `get_design_context` returns React + Tailwind, reducing translation cost.
3. `@astrojs/react` already installed.

For real consumer mobile apps (PWA / native), React Native is the natural extension
of the same React codebase. PWA via Astro/React; native iOS/Android via Expo when
that surface is needed.

## Colors

The brand accent is **`#988ACA`** — a muted lavender extracted directly from
thepia.com's compiled CSS (`--color-primary: #988aca`). The 50–950 ramp is derived
in HSL space and intended as a starting point — final values should be perceptually
tuned in OKLCH before production.

Warm neutrals use **Tailwind's `stone` palette** verbatim. Stone is battle-tested,
slightly warm-toned, and avoids the cold blue undertone of Tailwind's default
`gray` palette. Using the standard scale also lets the system stay close to
Tailwind ergonomics for engineers.

Semantic colors (success/warning/error) use Tailwind's `green-600`, `amber-600`,
`red-600` defaults — distinctive Thepia accents are reserved for the brand color
only; status colors should read as universally legible, not branded.

**Do**: Always reference colors via CSS variables (`var(--tp-color-lavender-500)` /
`var(--tp-text-primary)`), never raw hex.

**Don't**: Use brand lavender for status states (success/warning/error). Lavender
carries identity; using it for status muddles meaning.

## Typography

Two-face system: **EB Garamond** (display tier, classical serif, weights 400/500/600/700)
and **Inter** (everything else, weights 400/500/600/700). Both are free via Google
Fonts and **already loaded in talki.dev's main bundle** (and in thepia.com's). No
new font dependency required for marketing or island use.

- **Display tier** (display-xl through title-lg): EB Garamond, weight 500.
  Use for hero headlines, section openers, editorial moments.
- **Functional tier** (title-md through caption): Inter.
  Use for UI labels, body copy, navigation, controls.

**Do**: Use the display tier sparingly. EB Garamond is signature; over-use turns
warm into ornamental.

**Don't**: Mix EB Garamond into UI controls (buttons, form labels, navigation).
Display serif in interactive controls reads as decorative and degrades scannability.

## Layout

Mobile-first. Base styles target the narrowest viewport; breakpoint overrides scale up.

Breakpoints (matches Tailwind's defaults to stay ergonomic):
- `sm`: 640px (large mobile / small tablet portrait)
- `md`: 768px (tablet portrait)
- `lg`: 1024px (tablet landscape / small laptop)
- `xl`: 1280px (desktop)
- `2xl`: 1536px (wide desktop)

Container max-width for reading content: **680px** (optimal line length for body-lg).
Container max-width for marketing sections: **1280px** with internal grid.

## Elevation & Depth

Five elevation tokens (`e0`–`e4`). Shadows are **soft and layered** — never a single
hard offset. Each shadow combines a tight inner shadow for contour with a wider
diffuse shadow for distance, in the style of refined consumer products
(Stripe, Linear, Notion) rather than Material's geometric shadows.

## Shapes

The default corner radius is **`md` = 12px**. This is the single most consequential
identity decision after type and color:
- 10px reads as Apple (iOS controls)
- 16px reads as Material (M3 cards)
- 12px is the warm sweet-spot used by Stripe, Vercel, Notion mobile

Use sparingly larger (`xl` 24px) for marketing-section hero cards. Use sharper
(`xs` 4px / `sm` 8px) only for inline controls (chips, badges, tags).

## Motion

Three easings, three durations. Motion is **the most underused identity signal**.

- `ease-soft` `cubic-bezier(0.16, 1, 0.3, 1)` — default for all UI transitions.
  Decisive entry, gentle settle. Distinct from Material's `(0.4, 0, 0.2, 1)`.
- `ease-spring` `cubic-bezier(0.34, 1.56, 0.64, 1)` — for celebratory moments
  (a toast appearing, a check-mark confirming). Slight overshoot.
- `ease-snappy` `cubic-bezier(0.4, 0, 0.2, 1)` — fallback / Material-compatible
  for things that need to feel deliberately mechanical (progress bars, loaders).

Durations: `140ms` (microinteractions), `220ms` (panels), `360ms` (hero reveals).

**Do**: Always pair `transition` declarations with a `prefers-reduced-motion` reset.

**Don't**: Use `ease-spring` for navigation or anything users do hundreds of times.
Springs delight on rare moments and irritate on common ones.

## Components

Per-component anatomies live under `src/content/thepia/components/<family>.md`.
Empty for now (Phase A scope — token foundation only). Build order when components
begin: Button → Input → Card → List item → Badge → Navigation → Modal.

## Do's and Don'ts (system-level)

- **Do** reference every value via CSS custom properties — never raw hex, never magic
  spacing numbers, never inline font sizes.
- **Do** use the Untitled UI free Figma as a starting layout, then override its color,
  type, and radius tokens with Thepia primitives to get the identity layer.
- **Do** test every new component against `prefers-reduced-motion`, `prefers-color-scheme`,
  and at 320px viewport width before declaring it done.
- **Don't** add a second brand color. The lavender is the entire chromatic identity;
  secondary accents come from the warm-neutral ramp.
- **Don't** scope Thepia tokens to `:root`. They live under `.thepia` to avoid
  polluting the talki.dev portfolio palette (purple Tailwind colors).
- **Don't** import Material-3 specs as a reference for Thepia component behaviour.
  The interaction model comes from iOS HIG; the visual surface is Thepia's own.

## Gaps Surfaced During Build

- **Untitled UI free Figma not yet imported** — link recorded in `figma-index.json`
  but the file needs to be opened in your Figma workspace before component inspection
  via the MCP server is possible.
- **Lavender ramp is HSL-derived, not OKLCH-tuned** — perceptual contrast at
  `lavender-700` against `lavender-50` background not yet validated for WCAG AA.
- **Dark mode palette not yet authored.** Thepia's site supports a dark toggle.
  Dark variants (`lavender-dark-50`, etc.) and dark warm-neutrals to be derived
  in a Phase B follow-up.
- **No icon system chosen.** Options: Lucide (open, used by shadcn/ui),
  Phosphor (warm, distinct, free), Heroicons (Tailwind ecosystem). Defer to a
  follow-up decision; iOS SF Symbols cannot be used in non-Apple contexts.
- **Mobile-app surface (iOS/Android/PWA) is named-only.** No PWA scaffolding,
  no React Native scaffolding yet — those surfaces become real when the user
  has a specific product to build.
