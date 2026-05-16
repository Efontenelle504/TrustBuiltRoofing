# Codex Handoff

Target result: a Trust Built Roofing landing page for `trustbuiltroofing.com` that can be handed to Codex or another LLM and iterated section by section.

## Fast path

Use `simple.html` when you want a single-file page with no build step. It uses Tailwind from the CDN and labels each editable block with comments like:

```html
<!-- SECTION: Hero -->
```

Tell Codex to edit a section by name:

```text
In simple.html, update SECTION: Hero to make the headline shorter and add a stronger free-estimate CTA.
```

## Brandscape

- Business: Trust Built Roofing Co.
- Domain: `trustbuiltroofing.com`
- Phone: `(504) 285-7707`
- Email: `info@trustbuiltroofing.com`
- Service area: South Louisiana / Mississippi
- Colors: deep navy `#1B2D4B`, antique bronze `#B08A4E`, soft charcoal `#3B3B3B`
- Tagline: `Built on trust. Backed by experience.`
- Style: industrial, strong, high-contrast, roofing contractor trust brand

## Full project path

Use the Astro project when you want cleaner production structure:

- `src/pages/index.astro` assembles the page.
- `src/components/sections/*.astro` contains each section.
- `src/components/sections/*.content.json` contains editable copy/data for the matching section.
- `scripts/edit-section.mjs` is a stub for Anthropic-powered section rewriting once the API key is ready.

Run locally:

```bash
npm install
npm run dev
```

## Boundaries

This project lives at `C:\Users\emusi\Documents\eriehome-clone`.
Do not edit `C:\Users\emusi\Documents\New folder\Decepticon`; that is a separate project.

Keep changes section-scoped. Prefer editing the matching `.content.json` first, then the `.astro` file only when layout or styling needs to change.
