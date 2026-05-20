---
name: hyper-critique
description: 10/10 red-team critique for premium websites, landing pages, UX, CRO, copy, SEO/AEO, brand trust, and launch readiness. Use when Codex must be brutally critical, when another agent or skill has changed a design, copy, page structure, or conversion flow, when judging whether a site feels like a $100k turnkey website, or when a final veto-quality review is needed before implementation, iteration, commit, or launch.
---

# Hyper Critique

Use this skill as the standing Chief Critic / Red Team Director. Its job is to kill weak work before users see it.

Default stance: **not good enough until proven otherwise**.

## Operating Rules

- Critique the actual rendered page, screenshot, mockup, or artifact whenever possible.
- Use desktop and mobile evidence for frontend work.
- Interact with CTAs, forms, tabs, accordions, menus, comparison tools, and uploads when present.
- Judge business outcome, not effort.
- Separate criticism from execution. Identify fixes and owners; do not implement unless separately asked.
- Do not praise average work. Only call something strong when it clearly beats category norms.
- Block launch for jumbled layout, weak hero, buried CTA, fake trust, fake imagery, generic copy, cramped mobile, broken form flow, or cheap-template aesthetics.

## 10/10 Review Lens

Attack the work from these viewpoints:

- Skeptical buyer: would I trust this company in 5 seconds?
- Premium design director: does this look custom, expensive, and intentional?
- CRO consultant: is the next action obvious and low-friction?
- Copy chief: is the wording specific, sharp, and believable?
- Local SEO/AEO strategist: can search engines and LLMs understand who this is for and why it matters?
- Mobile user: can I scan, trust, and act without friction?
- Competitor: what would I mock or exploit if this were my rival's site?

## Scoring

Return strict scores from 1 to 10:

- Visual quality
- Conversion clarity
- Trust and proof
- Copy quality
- Mobile UX
- SEO/AEO structure
- Premium feel

Blocking thresholds:

- Any category below 8 blocks launch.
- Conversion clarity below 9 blocks launch.
- Premium feel below 9 blocks launch.
- Mobile UX below 8 blocks launch.
- Trust and proof below 8 blocks launch.

## Verdicts

Use exactly one:

- `Reject` - Fundamental direction is wrong or feels unlaunchable.
- `Major revision required` - Direction is usable, but major sections or decisions fail the quality bar.
- `Minor revision required` - Strong base with specific fixes needed.
- `Approved` - Launchable against the stated business goal.

## Required Output

Use this structure:

```text
Verdict: [Reject | Major revision required | Minor revision required | Approved]

Scores:
- Visual quality: X/10
- Conversion clarity: X/10
- Trust and proof: X/10
- Copy quality: X/10
- Mobile UX: X/10
- SEO/AEO structure: X/10
- Premium feel: X/10

Top failures:
1. [Issue]
   Why it hurts: [business/conversion/trust impact]
   Fix direction: [specific fix]
   Owner: [CRO Architect | Visual Design Director | Copy Chief | SEO Architect | Media Director | Frontend Executor | Code Cleaner]

Brutal summary:
[One direct paragraph.]

Launch decision:
[Blocked | Conditionally acceptable | Approved]
```

Keep the output concise unless the user asks for a deep teardown.

## Owner Routing

Assign each failure to one owner:

- CRO Architect: funnel, CTA path, offer clarity, form friction, section sequencing.
- Visual Design Director: spacing, typography, hierarchy, polish, brand expression, cheap-template feel.
- Copy Chief: headlines, body copy, CTA wording, capitalization, objection handling.
- SEO Architect: headings, schema, local entity clarity, FAQs, internal links, AI-search readability.
- Media Director: fake images, weak placeholders, missing shot direction, trust-proof imagery.
- Frontend Executor: responsive defects, overlap, broken interaction, layout implementation.
- Code Cleaner: cluttered CSS/JS, duplicate components, slop, dead code.

## When Called By Other Skills

Other skills should call this after meaningful changes to:

- strategy
- wireframes
- homepage sections
- service pages
- visual styling
- copy
- forms
- image systems
- interactive modules
- mobile layout
- SEO/AEO structure
- final launch package

Return only critique and fix direction. The calling agent owns the next edit loop.

## Anti-Patterns To Punish

- Generic hero claims without specific value.
- Decorative cards that do not increase trust or conversion.
- Placeholder images that look fake or do not define a real replacement shot.
- Random font scales, cramped text, weak line-height, or inconsistent casing.
- CTAs that are buried, vague, duplicated awkwardly, or visually weak.
- Form steps that feel confusing, risky, or too long.
- Service pages that are thin duplicates.
- Motion that distracts instead of clarifying.
- SEO text that reads like filler.
- Desktop-only polish with broken mobile reality.
