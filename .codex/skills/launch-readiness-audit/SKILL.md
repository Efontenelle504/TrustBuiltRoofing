---
name: launch-readiness-audit
description: Final go/no-go launch audit for premium websites and landing pages. Use before launch, publish, commit, client delivery, or deployment to verify UX, conversion, visual quality, mobile layout, forms, links, SEO/AEO, accessibility basics, performance basics, and launch blockers.
---

# Launch Readiness Audit

Run this as the final gate. Be strict.

## Checks

Verify:
- homepage first impression,
- mobile first impression,
- CTA visibility,
- form clarity and submit path,
- navigation and internal links,
- service-page usefulness,
- image realism and alt text,
- typography and spacing,
- no overlap or horizontal overflow,
- schema and metadata presence,
- sitemap and robots/llms files when applicable,
- accessibility basics,
- performance basics,
- build/test status,
- console or asset errors when visible.

## Output

Return:
- verdict: `Blocked`, `Conditionally launchable`, or `Launchable`,
- launch blockers,
- polish blockers,
- accepted risks,
- tests/checks run,
- exact fixes required,
- owner for each fix.

## Gate

If `$hyper-critique` would reject the page, this audit must be `Blocked`.
