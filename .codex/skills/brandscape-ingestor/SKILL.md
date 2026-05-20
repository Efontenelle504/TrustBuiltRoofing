---
name: brandscape-ingestor
description: Convert brand boards, logos, screenshots, colors, typography notes, domain names, and business identity into enforceable website brand rules. Use before designing or rebranding a website, when brand assets are provided, or when another agent needs clear design tokens, voice, image style, and anti-patterns.
---

# Brandscape Ingestor

Turn raw brand material into web-ready rules another agent can execute.

## Inputs

Use whatever exists:
- logo images or brandscape screenshots,
- colors and font names,
- domain and business name,
- slogans and offer language,
- existing site screenshots,
- target competitors or inspiration.

If exact values are missing, infer cautiously from visible evidence and mark them as assumptions.

## Output

Return:
- brand name and domain,
- color tokens with roles, not just swatches,
- typography direction for display, headings, body, labels, and buttons,
- logo usage rules,
- tone of voice,
- image style,
- UI texture and shape rules,
- what must never appear because it cheapens the brand,
- open questions that materially affect design.

## Quality Bar

The output must be concrete enough that a frontend executor can style a page without inventing brand direction. End with `$hyper-critique` risk notes if the brand inputs are weak, inconsistent, or likely to make the site feel cheap.
