// main.ts — The One-Liner Groan-Off entry.
// Writes the entry joke, byte-exact, to /output/entry.txt (UTF-8, no trailing
// newline). No network, no dependencies, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The plumber charged me $180 to tighten one bolt, so now the tap drips in Morse code spelling 'worth every cent'.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outputDir, "entry.txt");

// Gate: entry.txt must be UTF-8 text of 1 to 140 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length ${ENTRY.length} out of range 1-140`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
