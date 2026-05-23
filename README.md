# Trust Built Roofing - Astro + Tailwind Landing Page

Static landing-page wireframe for `trustbuiltroofing.com`, built around the Trust Built Roofing brandscape.

Brand direction:

- Deep navy: `#1B2D4B`
- Antique bronze: `#B08A4E`
- Soft charcoal: `#3B3B3B`
- Tagline: `Built on trust. Backed by experience.`

For the quickest Codex transfer, use `simple.html`. For production-style iteration, use the Astro section files.

## Install and run

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output to dist/
npm run preview   # preview the build
```

## Project structure

```text
src/
  layouts/BaseLayout.astro        # HTML shell and trustbuiltroofing.com metadata
  pages/index.astro               # Assembles all sections in order
  components/sections/
    Header.astro + Header.content.json
    Hero.astro + Hero.content.json
    Services.astro + Services.content.json
    ProductShowcase.astro + ProductShowcase.content.json
    Certifications.astro + Certifications.content.json
    Financing.astro + Financing.content.json
    WhyChooseUs.astro + WhyChooseUs.content.json
    Reviews.astro + Reviews.content.json
    Promotions.astro + Promotions.content.json
    Gallery.astro + Gallery.content.json
    ContactCTA.astro + ContactCTA.content.json
    Footer.astro + Footer.content.json
scripts/
  edit-section.mjs                # CLI stub for LLM rewrites
simple.html                       # Single-file handoff page
CODEX_HANDOFF.md                  # Instructions for the next Codex session
```

## LLM section editing

The Anthropic API is intentionally stubbed until you add your key.

1. Copy `.env.example` to `.env`.
2. Fill in `ANTHROPIC_API_KEY`.
3. Open `scripts/edit-section.mjs` and replace the stub block with the commented API call.
4. Run:

```bash
node scripts/edit-section.mjs Hero "Make the headline more urgent and shorten to 8 words"
node scripts/edit-section.mjs Services "Add a stronger storm-damage path"
```

The script reads the matching `.astro` and `.content.json`, sends both to Claude, and writes the rewritten files back to disk. Each section pair is self-contained, so rewrites stay isolated.
# Trust Built Roofing Static Landing Page

## Source of truth

The launch homepage is `simple.html`.

`npm run build` still runs the Astro build, then `scripts/sync-static-site.mjs` overwrites `dist/index.html` with `simple.html`, copies `assets/`, and copies the public SEO files:

- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`

After that, `scripts/build-static-pages.mjs` generates the static service, service-area, privacy, and thank-you pages in both the project root and `dist/`.

Deploy the `dist/` folder, not the repository root.

## SiteGround form handling

The estimate forms post to `/lead.php`, which is copied from `public/lead.php` into `dist/` during `npm run build`.

The PHP handler:

- sends lead details to `info@trustbuiltroofing.com`
- supports optional roof photo attachments
- uses the existing honeypot field
- redirects successful submissions to `/thank-you/`

Before launch on SiteGround, confirm `info@trustbuiltroofing.com` exists as a working mailbox or forwarder. After upload, submit one test lead and confirm the email arrives. If email deliverability is weak, replace PHP `mail()` with authenticated SMTP.

`netlify.toml` remains in the repo for compatibility, but SiteGround deployment should publish the built `dist/` contents to the domain `public_html` folder.

## SEO and AI discovery files

The generated deploy folder includes:

- `/` from `dist/index.html`
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/roof-repair/`
- `/roof-replacement/`
- `/storm-damage-roofing/`
- `/roof-leak-repair/`
- `/service-areas/south-louisiana/`
- `/service-areas/mississippi/`
- `/privacy/`
- `/thank-you/`

The page includes conservative JSON-LD for `RoofingContractor`, `WebSite`, `WebPage`, `FAQPage`, and `BreadcrumbList`. Do not add address, geo, reviews, ratings, license, warranty, financing, manufacturer credentials, or hours unless the business provides verified details.

## Verification

Run:

```bash
npm run build
```

Then verify `dist/index.html` matches `simple.html`, and check these deployed URLs return 200:

- `https://trustbuiltroofing.com/`
- `https://trustbuiltroofing.com/robots.txt`
- `https://trustbuiltroofing.com/sitemap.xml`
- `https://trustbuiltroofing.com/llms.txt`

## Real photo replacement plan

Use `PHOTO_SHOT_LIST.md` as the field guide for replacing placeholder roof imagery with real Trust Built Roofing job photos. It maps every current image asset to the kind of real photo that should replace it, including crew, completed roof, jobsite, repair detail, before/after, and yard sign shots.
