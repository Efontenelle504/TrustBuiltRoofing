# Codex Cloud Handoff

This file is the portable context for continuing the Trust Built Roofing project in ChatGPT Codex Cloud.

The live local Codex desktop conversation cannot be moved into the cloud directly. Use this repo plus this handoff file as the cloud resume point.

## Cloud Start Prompt

Paste this into the new Codex Cloud task:

```text
Continue the Trust Built Roofing website project from this repository.

Read CODEX_HANDOFF.md first, then README.md, then inspect simple.html and PHOTO_SHOT_LIST.md.

Goal: finish a premium, high-converting, launch-ready static roofing website for trustbuiltroofing.com. Treat this like a $100k turnkey website project: conversion strategy, premium visual design, strong copy, local SEO/AEO, believable photo placeholders, mobile polish, and critique gates after major design changes.

Do not use WordPress. Do not remove placeholder images unless the replacement is more believable or gives clearer real-photo direction. Keep the site static unless told otherwise.

Source of truth is simple.html. Run npm run build before claiming completion.
```

## Repository

- GitHub: `https://github.com/Efontenelle504/TrustBuiltRoofing`
- Branch: `main`
- Local path: `C:\Users\emusi\Documents\eriehome-clone`
- Deploy output: `dist/`

## Run Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Local dev server normally runs at:

```text
http://localhost:4321/
```

## Source Of Truth

- Homepage source: `simple.html`
- Static build sync: `scripts/sync-static-site.mjs`
- Service page generator: `scripts/build-static-pages.mjs`
- Photo replacement plan: `PHOTO_SHOT_LIST.md`
- Cloud handoff: `CODEX_HANDOFF.md`
- Repo-preserved skill stack: `.codex/skills/`

`npm run build` runs Astro, syncs `simple.html` into `dist/index.html`, copies assets, then generates static service, service-area, privacy, and thank-you pages.

## Brand

- Business: Trust Built Roofing Co.
- Domain: `trustbuiltroofing.com`
- Phone: `(504) 285-7707`
- Email: `info@trustbuiltroofing.com`
- Service area: South Louisiana and Mississippi
- Tagline: `Built on trust. Backed by experience.`
- Colors:
  - Deep navy: `#1B2D4B`
  - Antique bronze: `#B08A4E`
  - Soft charcoal: `#3B3B3B`
- Style: industrial, strong, high-contrast, local contractor trust brand.

## User Preferences

- No WordPress.
- No generic template look.
- Keep wording professional and homeowner-focused.
- Be highly critical on UX, aesthetics, conversion, copy, SEO, and trust.
- Use believable placeholder images as shot-direction scaffolds.
- Every image should answer: what real Trust Built job/customer photo replaces this later?
- Make every major section create value, build trust, and lead toward an appointment.
- Avoid sticky header unless explicitly requested.
- Conserve high-reasoning usage. Use harder thinking only for strategy, design critique, debugging, and final QA.

## Current Site Intent

The site should sell a no-obligation roofing inspection/estimate with clear paths for:

- active leaks,
- storm damage,
- roof replacement planning,
- repair vs. replacement guidance,
- material comparison,
- photo-documented roof checks,
- South Louisiana and Mississippi service-area validation.

Core CTA language should stay practical:

- schedule inspection,
- request roof check,
- call now,
- send roof photos,
- talk through options.

## Important Current Modules

- Hero and estimate-flow content near the top should stay conversion-first.
- "What you receive" belongs close to the hero flow, but must not feel crowded or jumbled.
- Material section should work as a good / better / best comparison for metal, asphalt, and stone-coated steel with useful buying criteria such as lifespan, maintenance, ROI, storm performance, curb appeal, and cost tier.
- Service area section should use useful customer actions, not fluff cards.
- Footer should feel complete and credible, with contact, service links, domain consistency, privacy, and local relevance.

## Skill Stack

Use the repo-preserved skills in `.codex/skills/` when helpful:

- `$turnkey-website`: master website operating system.
- `$hyper-critique`: 10/10 critique gate.
- `$ux-aesthetic-critic`: UX and visual critique.
- `$brandscape-ingestor`: brand rules.
- `$offer-architect`: commercial offer and CTA hierarchy.
- `$cro-wireframe`: conversion-first page flow.
- `$premium-ui-director`: premium visual direction.
- `$photo-shot-director`: believable photo and shot direction.
- `$local-seo-ai-search`: local SEO and AI-search structure.
- `$launch-readiness-audit`: final launch review.
- `$postlaunch-cro`: growth plan after launch.

Use high reasoning only where it matters. Coding and straightforward edits should use normal/medium execution.

## SEO And AI Search

Maintain:

- canonical metadata for `trustbuiltroofing.com`,
- `robots.txt`,
- `sitemap.xml`,
- `llms.txt`,
- JSON-LD for local roofing contractor, website, page, FAQ, and breadcrumbs,
- clear headings and internal links,
- distinct value on each service page.

Do not invent unsupported claims about licenses, reviews, ratings, warranties, financing, manufacturer credentials, addresses, or hours.

## Placeholder Image Rules

Do not delete placeholders just because they are placeholders.

Replace only when the new asset is more believable, more local, or clearer as shot direction. Avoid fake-looking crew shots, fake customers, bad logos, or over-polished AI stock visuals.

Each image slot should map to a real future shot:

- finished roof,
- roof material detail,
- storm damage detail,
- active repair detail,
- organized jobsite,
- yard sign at real house,
- homeowner handoff,
- before / after comparison.

Use `PHOTO_SHOT_LIST.md` as the field guide.

## Verification

Before claiming completion:

```bash
npm run build
```

Then check:

- homepage loads,
- service pages load,
- mobile has no horizontal overflow,
- forms still exist,
- photo upload remains where intended,
- CTAs are visible,
- no text overlap,
- schema remains valid JSON,
- generated `dist/` contains `/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, service pages, service-area pages, privacy page, and thank-you page.

## Commit Rules

Use Lore-style commit messages with this trailer:

```text
Co-authored-by: OmX <omx@oh-my-codex.dev>
```

Keep commits focused and reversible.
