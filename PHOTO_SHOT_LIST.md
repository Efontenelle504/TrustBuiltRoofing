# Trust Built Roofing Photo Shot List

Use this as the field guide for replacing placeholder images with real Trust Built Roofing job photos. The goal is not "more photos." The goal is proof: real people, real roofs, real job sites, and real details that help a homeowner trust the estimate.

## Replacement Map

| Current asset | Where it appears | Replace with | Shoot it this way | Trust reason |
| --- | --- | --- | --- | --- |
| `assets/trust-built-completed-roof.webp` | Homepage hero, roof replacement card, direct SEO image, completed roof proof cards | Best finished local roof | Wide exterior or drone-style angle of a clean completed roof. Show enough of the home to feel real, but keep the roof dominant. Shoot in daylight. | Shows the final result a homeowner is considering. |
| `assets/trust-built-roof-jobsite.webp` | Roof replacement page hero, CTA background, jobsite proof cards | Real replacement job in progress | Wide jobsite photo: materials staged neatly, crew working, roof partially complete, home visible. This should communicate "organized and professional." | Proves the company runs a clean, controlled jobsite. |
| `assets/trust-built-pipe-boot-detail.webp` | Roof repair card, roof repair/leak page hero, roof system section, repair proof cards | Real repair detail/problem photo | Close-up of pipe boot failure, flashing issue, nail pop, or a specific leak source. Must be sharp and well-lit. | Shows the exact roof condition behind a repair recommendation. |
| `assets/trust-built-storm-damage-detail.webp` | Storm/leak card, storm damage page hero, repair/storm promo, storm proof cards | Real storm damage detail | Close-up of granule loss, lifted shingle, missing tab, creased shingle, hail mark, or wind damage. Include a wider context shot too. | Helps homeowners understand why a storm check matters without making insurance promises. |
| `assets/trust-built-yard-sign.webp` | Homepage service-area proof | Real yard sign/local proof photo | Trust Built yard sign in front of an actual job with roof or home visible in the background. | Makes the company feel local and physically present. |
| `assets/review-stone-coated-couple.png` | Homepage review placeholder | Real customer testimonial photo with permission | Homeowner couple or customer standing in front of the completed stone-coated steel roof. Keep the roof visible, shoot in daylight, and use only with written permission. | Shows a real homeowner outcome and makes the review section credible. |
| `assets/roof-texture.jpg` | Backup texture/image asset | Real shingle texture | Tight material shot for backgrounds or section texture. Avoid making this the main proof photo. | Supports design texture, not primary proof. |
| `assets/roof-work.jpg` | Backup work image asset | Real repair detail | Technician pointing to or fixing a specific issue. Best if it shows the problem clearly. | Shows field work tied to a specific homeowner problem. |

## Required Launch Photo Set

### 1. Owner or crew trust photo

Use for: homepage trust section, about/trust proof, future review section.

Shot:
- Owner or crew standing in front of a completed roof, truck, trailer, or yard sign.
- Trust Built shirt, hat, or clean branded apparel.
- Eye-level, natural daylight, simple background.
- Horizontal and vertical versions.

Why it matters:
This is the fastest way to make the site feel like a real local company instead of a template.

### 2. Finished roof hero photo

Use for: homepage hero replacement and service cards.

Shot:
- Finished residential roof from front yard, driveway, or drone.
- Clean roof lines, no clutter, no dark filters.
- Include enough home context to feel local and real.
- Horizontal, at least 2000px wide.

Caption direction:
"Completed residential roof replacement by Trust Built Roofing Co."

### 3. Jobsite professionalism photo

Use for: replacement page hero, CTA bands, process sections.

Shot:
- Materials staged neatly.
- Crew working safely.
- Trailer/truck/yard sign visible if possible.
- Avoid messy debris unless it is part of a before/after story.

Caption direction:
"Organized roof replacement jobsite with materials staged before installation."

### 4. Repair/problem detail photos

Use for: roof repair, leak repair, storm damage pages.

Get at least 8:
- Missing shingle.
- Lifted or creased shingle.
- Pipe boot failure.
- Flashing gap or damaged flashing.
- Exposed nail or nail pop.
- Granule loss.
- Ceiling stain.
- Soft decking or water damage if visible and safe.

Shot:
- Fill the frame with the problem.
- Include one photo with a finger/tool pointing at the issue.
- Take one wider context photo so the viewer knows where on the roof it is.

Caption direction:
"Visible roof issue documented before repair recommendation."

### 5. Before and after pair

Use for: future conversion section and gallery.

Shot:
- Same angle before and after.
- Before: damaged roof/problem area.
- After: repaired or replaced section.
- Keep framing consistent.

Caption direction:
"Before and after roof repair showing the damaged area and completed fix."

### 6. Yard sign / local proof photo

Use for: local service area pages and homepage trust proof.

Shot:
- Trust Built yard sign in front of an actual job.
- Home/roof visible in background.
- Phone number and logo readable if possible.

Caption direction:
"Trust Built Roofing Co. serving a local residential roofing project."

### 7. Customer-safe testimonial photo

Use for: future reviews section only with permission.

Shot:
- Homeowner with owner/crew in front of completed roof.
- Only use with written permission.
- If no permission, use the completed roof and quote text without homeowner image.

Caption direction:
"Homeowner after completed roof project." Only if permission exists.

## Minimum Photo Count Before Launch

- 1 owner or crew trust photo.
- 3 finished roof photos.
- 3 jobsite/work-in-progress photos.
- 6 close-up problem/detail photos.
- 2 before/after pairs.
- 1 yard sign/local proof photo.

That is enough to make the site feel real without overloading it.

## Shooting Rules

- Shoot horizontal and vertical whenever possible.
- Keep the lens clean.
- Use daylight; avoid night, rain, and heavy shadows unless documenting storm urgency.
- Do not use fake branded apparel, fake people, or AI-generated customers.
- Do not show license plates, house numbers, children, or customer faces without permission.
- Take a wide shot, medium shot, and close-up at every job.
- Photograph the problem before touching it.
- Photograph cleanup after the work.

## File Naming

Use descriptive lowercase names:

```text
assets/trust-built-owner-front-yard.jpg
assets/completed-roof-metairie-01.jpg
assets/roof-replacement-jobsite-01.jpg
assets/pipe-boot-leak-before-01.jpg
assets/missing-shingle-storm-before-01.jpg
assets/roof-repair-after-01.jpg
assets/trust-built-yard-sign-01.jpg
```

After replacing images, run:

```bash
npm run build
```

Then review:

- `http://127.0.0.1:4173/`
- `http://127.0.0.1:4173/roof-repair/`
- `http://127.0.0.1:4173/storm-damage-roofing/`
- `http://127.0.0.1:4173/roof-replacement/`
