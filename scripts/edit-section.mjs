#!/usr/bin/env node
/**
 * edit-section.mjs
 * CLI stub for LLM-driven section rewrites.
 *
 * Usage:
 *   node scripts/edit-section.mjs <SectionName> "<prompt>"
 *
 * Example:
 *   node scripts/edit-section.mjs Hero "Make the headline more urgent and add a countdown timer subtext"
 *
 * Once wired, this script will:
 *   1. Read the section's .astro component and .content.json
 *   2. Send both files plus your prompt to the Anthropic API
 *   3. Write the rewritten files back to disk
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SECTIONS_DIR = resolve(__dirname, '../src/components/sections');

const [, , sectionName, userPrompt] = process.argv;

if (!sectionName || !userPrompt) {
  console.error('Usage: node scripts/edit-section.mjs <SectionName> "<prompt>"');
  console.error('Example: node scripts/edit-section.mjs Hero "Make it more urgent"');
  process.exit(1);
}

const astroPath = resolve(SECTIONS_DIR, `${sectionName}.astro`);
const jsonPath = resolve(SECTIONS_DIR, `${sectionName}.content.json`);

let astroSource;
let jsonSource;

try {
  astroSource = readFileSync(astroPath, 'utf-8');
  jsonSource = readFileSync(jsonPath, 'utf-8');
} catch {
  console.error(`Could not read files for section "${sectionName}".`);
  console.error(`Expected:\n  ${astroPath}\n  ${jsonPath}`);
  process.exit(1);
}

// -----------------------------------------------------------------------------
// TODO: call Anthropic API here once ANTHROPIC_API_KEY is available.
//
// Suggested implementation:
//
//   import Anthropic from '@anthropic-ai/sdk';
//   import 'dotenv/config';
//   import { writeFileSync } from 'fs';
//
//   const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
//
//   const systemPrompt = `You are an expert Astro + Tailwind developer.
// You will receive an Astro component and its companion content.json.
// Rewrite BOTH files according to the user's instruction.
// Return a JSON object with two keys: "astro" (string) and "json" (string).
// Preserve the comment block at the top of the .astro file.
// Keep the component under 80 lines.`;
//
//   const response = await client.messages.create({
//     model: 'claude-opus-4-5',
//     max_tokens: 4096,
//     system: systemPrompt,
//     messages: [{
//       role: 'user',
//       content: `Section: ${sectionName}\nInstruction: ${userPrompt}\n\n--- ${sectionName}.astro ---\n${astroSource}\n\n--- ${sectionName}.content.json ---\n${jsonSource}`
//     }]
//   });
//
//   const result = JSON.parse(response.content[0].text);
//   writeFileSync(astroPath, result.astro, 'utf-8');
//   writeFileSync(jsonPath, result.json, 'utf-8');
//   console.log(`Rewrote ${sectionName}.astro and ${sectionName}.content.json`);
// -----------------------------------------------------------------------------

console.log('=== edit-section.mjs (STUB - API not yet wired) ===');
console.log(`Section  : ${sectionName}`);
console.log(`Prompt   : ${userPrompt}`);
console.log('\nFiles that would be sent to the Anthropic API:');
console.log(`  ${astroPath}  (${astroSource.length} chars)`);
console.log(`  ${jsonPath}  (${jsonSource.length} chars)`);
console.log('\nAdd your ANTHROPIC_API_KEY to .env and replace the TODO block to activate.');
