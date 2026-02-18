# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **pnpm** as the package manager.

```bash
pnpm dev        # Start development server
pnpm build      # Type-check (astro check) then build static site
pnpm preview    # Serve the built dist/ folder locally
```

There are no test or lint commands configured. Formatting uses Prettier (with astro and tailwindcss plugins).

## Architecture Overview

This is an **Astro 5** static portfolio site for designer/developer Henrik Vendelbo, deployed to GitHub Pages via GitHub Actions.

### Routing & Pages

File-based routing under [src/pages/](src/pages/):
- `/` → `index.astro` (home)
- `/case-studies/[...page]` → paginated listing
- `/case-studies/[...id]` → individual case study detail
- `/h5/portfolio` → portfolio demo page

### Content: Case Studies

Case studies are the primary content type, managed via two parallel systems that must stay in sync:

1. **Astro Content Collections** — Markdown files in [src/content/caseStudies/](src/content/caseStudies/) loaded with type-safe Zod schemas defined in [src/content.config.ts](src/content.config.ts)
2. **Keystatic CMS** — Schema defined in [keystatic.config.ts](keystatic.config.ts) for editing via a local UI (`/keystatic` route in dev). Keystatic is **commented out** of `astro.config.mjs` for static builds; re-enable when using the CMS editor.

The front matter schema includes: `title`, `description`, `cardImage`, `greyImage`, `heroImage`, `roles[]`, `introduction`, `aboutProject` (leftCol/rightCol HTML), `whatWeDid` (leftCol/rightCol HTML), `images[]`, `clientFeedback[]`.

### Layouts

Three layout variants in [src/layouts/](src/layouts/):
- `LayoutDesign.astro` — main layout used for most pages
- `CaseStudyLayout.astro`, `CaseStudyDesignLayout.astro`, `CaseStudyCodeLayout.astro` — case study variants

### Component Structure

- [src/components/ui/](src/components/ui/) — reusable primitives: `Section`, `Row`, `Col` (12-column grid), `Button`, `Slider` (Swiper), `NavigationBar`, `ModeSwitcher`
- [src/components/blocks/](src/components/blocks/) — larger composable sections (head, footer)
- [src/components/scripts/](src/components/scripts/) — Google Analytics, GTM, Search Console, Partytown integration components

### Static Data

Non-content data lives in [src/data/json-files/](src/data/json-files/): navigation, experience, testimonials, demo data. Site-level config (title, description, SEO) is in [src/config/config.ts](src/config/config.ts).

### Styling

TailwindCSS 3 with custom config in [tailwind.config.mjs](tailwind.config.mjs):
- Custom fonts: Nunito Sans, Playfair Display, Roboto Mono, Ubuntu
- Purple primary color scale
- Grid column classes `col-span-1` through `col-span-12` are safelisted (used dynamically)
- Light/dark mode via CSS custom properties; background images at `/bgs/milo-bg-light.webp` and `/bgs/milo-bg-dark.webp`
- Global styles in [src/styles/global.css](src/styles/global.css)

### Environment Variables

- `PUBLIC_GA_TRACKING_ID` — Google Analytics measurement ID (optional)

### Key Config Files

- [astro.config.mjs](astro.config.mjs) — integrations: TailwindCSS, astro-icon, sitemap, Lottie, Partytown, React, Markdoc
- [keystatic.config.ts](keystatic.config.ts) — CMS schema; cloud project is `milo-astro-theme/milo-astro-theme`
- [.github/workflows/](.github/workflows/) — GitHub Actions deployment pipeline targeting GitHub Pages
