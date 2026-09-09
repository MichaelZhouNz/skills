#!/usr/bin/env node
// Splice a generated body fragment into template.html.
//   node render.mjs <body.html> <out.html> "<Page Title>"
// The template supplies all CSS and JS; the body supplies only content.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const [bodyPath, outPath, title] = process.argv.slice(2);

if (!bodyPath || !outPath || !title) {
  console.error('usage: node render.mjs <body.html> <out.html> "<Page Title>"');
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const template = readFileSync(resolve(here, "template.html"), "utf8");
const body = readFileSync(bodyPath, "utf8");

// Fail loudly rather than emitting a page missing its chrome.
for (const token of ["{{TITLE}}", "{{BODY}}"]) {
  if (!template.includes(token)) {
    console.error(`template.html is missing ${token}`);
    process.exit(1);
  }
}

const panels = (body.match(/class="panel"/g) || []).length;
const opens = (body.match(/<details/g) || []).length;
const closes = (body.match(/<\/details>/g) || []).length;

if (opens !== closes) {
  console.error(`unbalanced <details> in body: ${opens} open, ${closes} close`);
  process.exit(1);
}
if (panels === 0) {
  console.error("body contains no .panel sections — the rail would be empty");
  process.exit(1);
}

const html = template.replace("{{TITLE}}", title).replace("{{BODY}}", body);

mkdirSync(dirname(resolve(outPath)), { recursive: true });
writeFileSync(outPath, html);

console.log(
  `${outPath}  ${html.length} bytes  (template ${template.length - 17}, body ${body.length})  ` +
    `${panels} sections, ${opens} folds`
);
