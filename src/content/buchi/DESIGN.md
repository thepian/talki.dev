---
version: alpha
name: BUCHI Falcon
description: Tablet UI design system for the BUCHI Falcon spray dryer instrument
colors:
  white:                "#FFFFFF"
  surface-soft:         "#F5F5F5"
  border:               "#E5E5E5"
  border-strong:        "#CCCCCC"
  text-primary:         "#1C1847"
  text-on-light:        "#000000"
  action-green:         "#7AB83E"
  alert-gold:           "#E5A923"
  forest-tint:          "#E6EBEA"
typography:
  title-2-semibold:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  title-3-light:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: 0
  title-3-semibold:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  title-4-semibold:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  title-5-light:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: 0
  body-light:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: 0
rounded:
  sm:   6px
  pill: 25px
  full: 9999px
spacing:
  xxs:    2px
  xs:     4px
  sm:     8px
  md:     10px
  lg:     12px
  xl:     16px
  2xl:    20px
  3xl:    32px
shadows:
  card:   "0 4px 20px 0 rgba(0,0,0,0.12)"
  navbar: "0 -10px 20px 0 rgba(0,0,0,0.06)"
layout:
  screen-width: 600px
  screen-height: 1024px
  topbar-height: 203px
  navbar-height: 67px
  card-width: 568px
  card-content-width: 528px
  card-margin-x: 16px
  card-padding-y: 8px
  input-width: 240px
  input-height: 68px
  navbar-item-width: 94px
components:
  falcon-card:
    backgroundColor: "{colors.white}"
    borderColor:     "{colors.border}"
    borderWidth:     "1px"
    rounded:         "{rounded.sm}"
    shadow:          "{shadows.card}"
    paddingY:        "{spacing.sm}"
  falcon-input:
    backgroundColor: "{colors.surface-soft}"
    borderColor:     "{colors.border}"
    borderWidth:     "1px"
    rounded:         "{rounded.sm}"
    height:          "68px"
    width:           "240px"
    typography:      "{typography.title-2-semibold}"
    textColor:       "{colors.text-primary}"
  falcon-check-circle:
    backgroundColor: "{colors.action-green}"
    rounded:         "{rounded.full}"
    size:            "24px"
  falcon-status-badge-warning:
    backgroundColor: "{colors.alert-gold}"
    rounded:         "{rounded.full}"
    size:            "28px"
  falcon-navbar:
    backgroundColor: "{colors.white}"
    borderTopColor:  "{colors.border}"
    height:          "67px"
    shadow:          "{shadows.navbar}"
  falcon-button-secondary:
    backgroundColor: "{colors.forest-tint}"
    rounded:         "{rounded.sm}"
    padding:         "10px"
---

## Overview

The BUCHI Falcon design system governs the tablet UI of a laboratory spray-dryer
instrument. The visual identity is **clinical, calm, and high-contrast**: a near-black
navy (`#1C1847`) on warm whites and pale greys, with `#7AB83E` Action Green reserved
for affirmative states (selection, success, the active nav tab indicator) and
`#E5A923` Gold Tips reserved for cautionary status (e.g. "Preparing").

Components are large by touch standards (44–68px hit targets, 240×68 inputs) because
the device is operated in a lab with gloved hands. Type is heavy on weight contrast —
Light 24 for navigation/section titles and Semi Bold 24 for value labels in the same
row — to keep glanceable hierarchy with no decoration.

This skill is scoped **only** to BUCHI Falcon work and is not a general-purpose design
system for talki.dev.

## System Structure & Reference Data

The BUCHI design surface area spans **two parallel token systems** that are not yet
unified. Both are documented here:

| System | Figma file | Token taxonomy | Status |
|---|---|---|---|
| `buchi-m3` | BUCHI Components (M3) — `5c5M1Ucf0ugpGZCiQKYH95` | M3-aligned: `Buchi/sys/light/*`, `Buchi/sys/dark/*` | Canonical going forward. Subscribes to Google's Material 3 Design Kit. |
| `buchi-falcon` | Falcon — `SDpgguFPiWqfx40uWpgut2` | Brand-categorical: `01. Primary/...`, `02. Alert - Signal/...`, `04. Gradients - {Black\|Forest Green}/...` | Currently implemented in code. Predates or diverges from the M3 redesign. |

The `FalconScreen.astro` component in this repo consumes the `buchi-falcon` tokens
(that is what governs the Falcon Figma frame). Migrating Falcon to M3 BUCHI tokens
is a future task and intentionally **not** done in this iteration — the discrepancy
is real and surfaced rather than papered over.

### File layout

```
src/content/buchi/
  DESIGN.md                ← this file: principles, do's/don'ts, framework decision
  figma-index.json         ← every Figma frame we have inspected, with node IDs
  tokens/
    color.yaml             ← both token systems, with Figma-canonical names
    typography.yaml
    shape.yaml
    elevation.yaml

src/components/buchi/
  tokens.css               ← CSS custom-property layer: primitives + semantic aliases
  FalconScreen.astro       ← first implemented screen (Falcon Custom Workflow)

src/pages/buchi/
  index.astro              ← preview page at /buchi/
```

`tokens.css` is structured in two layers — primitive variables that carry the exact
Figma name in a comment (`--bx-color-action-green`, `--bx-color-lcd-blue`, …) and
semantic aliases that name the role (`--bx-success`, `--bx-text`, …). Component CSS
references semantic aliases; primitives are the single point of change when a brand
value moves.

## Framework Decision

Interactive BUCHI components — when needed — are implemented in **React** and mounted
as Astro islands. Reasoning:

1. The talki.dev island infrastructure ([EXTERNAL-COMPONENTS.md](../../../EXTERNAL-COMPONENTS.md))
   provides React and ReactDOM globally and expects ESM bundles to externalise them.
   Adding Svelte would require either bundling its runtime per island (~10KB each)
   or extending the infrastructure to support a second framework.
2. The Figma MCP `get_design_context` tool returns React + Tailwind by default,
   reducing translation cost from design to code.
3. `@astrojs/react` (React 18) is already installed.

**Static showcase components stay as `.astro`.** Roughly 70% of Falcon UI elements
(Badge, Card, List item, label, separator, navbar) are pure visual and ship zero JS.
Only components with genuine state (numpad, dropdowns, sliders, switches) get the
React treatment.

## Colors

- `text-primary` `#1C1847` — all body and label copy; never on darker fills than `surface-soft`.
- `surface-soft` `#F5F5F5` — input field background, page background.
- `border` `#E5E5E5` — card border, separator lines, neutral input border.
- `border-strong` `#CCCCCC` — secondary button border ("Preparing" pill).
- `action-green` `#7AB83E` — exclusively for affirmative state: completed checklist
  pip, the 4px selected-tab indicator under the active navbar item.
- `alert-gold` `#E5A923` — exclusively for status badges that convey caution
  ("Preparing", "Warming up"). Never used as a fill on cards or text.
- `forest-tint` `#E6EBEA` — fill for secondary touch targets (options menu button,
  the back/next arrow buttons flanking the Run number).

## Typography

All faces are Inter (variable). The system uses unitless `lineHeight: 1` everywhere
in the data, but in practice 1.0 produces clipped descenders on multi-line copy.
Code raises this to 1.15 for any text node taller than a single line, and notes the
deviation here. Single-line nodes (every label and value in the current screen)
ship at 1.0 to match Figma exactly.

- **Title 2 Semi Bold 32** — input field values ("25", "60", "100", "20") and the
  "ALL" inside the run-number diamond.
- **Title 3 Light 24** — collapsed section titles ("Sample", "Solvent", "Method parameter").
- **Title 3 Semi Bold 24** — form row labels ("Drying gas", "Inlet temp.", "Pump 1").
- **Title 4 Semi Bold 20** — the centered top-bar title ("Screening").
- **Title 5 Light 18** — secondary button text ("Preparing"), dropdown placeholder
  text ("Select preset"), and the "Sample Name" placeholder.
- **Body Light 16** — unit suffixes under field labels (`m³/h`, `°C`, `L/h`, `mL/min`).

## Layout

The screen is a fixed 600×1024 tablet portrait viewport. Layout is absolute on three
zones; **no responsive behavior is in scope for this design system** (the host is a
fixed-resolution embedded display).

- **Top bar** — absolute, top 0, height 203px, full width. Inner padding 16px.
  Contains the title bar (44px) and the SRP simple-screening control (130px).
- **Card stack** — vertical flex, starts at y=219 (just below the top bar with a 16px
  gap), 16px horizontal margins, 16px gap between cards.
- **Bottom navbar** — absolute, top 957, height 67px, full width. Six equal cells of
  94px separated by 1px vertical dividers.

Cards are 568px wide. Internal content is 528px wide (20px gutter inside).
Form-row inputs are 240px wide and sit right-aligned in the row; labels sit left.

## Elevation & Depth

Two shadow tokens. The system is otherwise flat — no inner shadows, no gradients.
- **card** — `0 4px 20px 0 rgba(0,0,0,0.12)`: every floating card.
- **navbar** — `0 -10px 20px 0 rgba(0,0,0,0.06)`: the bottom navbar's top edge.

z-index: top bar and navbar overlay the scrolling card stack. Within an expanded
card, the title row sits at z:3 above the separator (z:2) above the content
wrapper (z:1) — this preserves the Figma layer order when stroke effects render.

## Shapes

- `rounded.sm` `6px` — every card, every button, every input.
- `rounded.pill` `25px` — the checklist circle border.
- `rounded.full` — the green check pip, status badges, and the run-number circles.

The **run-number diamond** ("Run ALL") is a square rotated −45° in a `containerType: size`
flex container so it scales to its parent; the inner text is counter-rotated to read
upright.

## Components

### FalconCard
A white surface with a subtle border and shadow, used to group related fields under a
collapsible section title. Each card consists of a 68px title row, a 1px full-width
separator, and an optional content wrapper. The title row contains a 32×32 checklist
circle (filled green when the section's data is complete) and a chevron that rotates
−90° when expanded.

### FalconInput (read-only / display variant)
Fixed 240×68 grey-filled input. The value is right-aligned, Title 2 Semi Bold 32, in
`text-primary`. This skill ships only the display variant; the editable variant with
the on-screen numpad is out of scope.

### FalconStatusBadge
A 28×28 round badge with an exclamation glyph. Background follows the status:
gold for caution states ("Preparing"). Used in the top-bar Status Indicator.

### FalconRunDiamond
A rotated square (−45°) showing the active run number or "ALL". Default size 84.853px
(non-round in source; preserved exactly). Counter-rotated text inside.

### FalconNavbar
The 67px bottom navigation strip. Six equally sized tap targets, each 94px wide, separated
by 1px dividers. The active tab has a 4px Action Green bar pinned to the top edge of its
cell — this is the only colour in the navbar.

## Do's and Don'ts

- **Do** use `text-primary` for every label, value, and title — there are no exceptions in
  the current screen, including the "Preparing" pill text.
- **Do** keep the run-number diamond perfectly centered; offsetting it breaks the
  symmetric arrow layout on either side.
- **Don't** introduce any colour outside the token palette — the system is intentionally
  small. If you need a new colour, surface it as a DESIGN.md proposal first.
- **Don't** apply `text-primary` to status badges — the badge is the only place where
  background colour carries semantic weight, and the glyph is white.
- **Don't** apply hover/focus styles to elements in this static showcase. The real Falcon
  device is touch-only; hover affordances would misrepresent the product.
- **Don't** add the BUCHI wordmark or any official trademark to this mockup — this is a
  case-study demonstration, not an asset library handoff.
- **Don't** use this skill to build components outside the Falcon namespace. The tokens
  conflict with the talki.dev portfolio palette and must remain scoped under `.buchi-falcon`.

## Gaps Surfaced During Build

Items found in Figma that were not fully resolved and should be confirmed with the
designer before any future iteration:

### System-level

- **Two parallel token systems** (`buchi-m3` vs `buchi-falcon`). Falcon's `LCD Blue`
  (`#1C1847`) has no obvious counterpart in the M3 BUCHI palette extracted so far —
  the M3 file showed `light/error` (`#D15628`), `light/outline-variant` (`#999999`),
  `light/surface` (`#FFFFFF`) but no equivalent dark-navy primary. Until more M3
  BUCHI frames are inspected (Buttons, Inputs, Cards) the mapping from Falcon brand
  colours to M3 sys-tokens cannot be authored.
- **BUCHI Components (M3) frame enumeration** is incomplete. The Figma MCP
  `get_metadata` call without a nodeId returned only the `Splash` canvas; all
  component documentation frames (Badges, Lists, presumably Buttons / Inputs /
  Cards / Chips / etc.) appear to live on the same canvas but weren't enumerated.
  Extending `figma-index.json` requires manual URL collection — paste each
  component page's URL from the Figma sidebar to add it to the index.

### Falcon implementation

- **Inter font dependency** — not yet installed in `package.json`. Component currently
  falls back to system sans on machines without Inter. To remove the gap, add
  `@fontsource-variable/inter` and import its CSS at the page level.
- **Falcon-specific navbar icons** (spray dryer, screening, application notes, run list) —
  approximated with inline SVGs derived from the visual silhouette. Pixel-faithful versions
  would require the official icon set from the BUCHI design library, which is not in
  the public Figma file.
- **Editable input + numpad** — the Numpad component was hidden in this frame. Not yet
  implemented; only the read-only display variant ships.
- **Dropdown states** — only closed/default; open + selected states not in this frame.
- **The `Solvent` section's `Position` dropdown** uses the same visual as `Select preset`
  but a different copy ("Select"); same component re-used. Confirmed via `get_design_context`.
- **Sample card height** — Figma frame shows 274px and a trailing separator inside the
  content wrapper that appears to be visual padding. Reproduced as-is; designer should
  confirm whether the trailing separator is intentional.

### Phase-deferred work

- **Per-component anatomies** (`src/content/buchi/components/<family>.md`) were
  intentionally deferred per the Phase A+B scope chosen during build. The directory
  does not yet exist; create it when the first M3 component is implemented.
