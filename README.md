# skills

Agent skills for understanding, reviewing and describing code changes, and for designing phone-app screens in one house style.

## Install

With the [`skills`](https://skills.sh) CLI:

```bash
npx skills add MichaelZhouNz/skills
```

Or a single skill:

```bash
npx skills add MichaelZhouNz/skills --skill pr-brief
```

As a Claude Code plugin:

```
/plugin marketplace add MichaelZhouNz/skills
/plugin install mz-skills
```

## Skills

### `pr-brief`

Turns a pull request into a self-contained interactive HTML page for the person about to review it.

```bash
/pr-brief 5753                 # a PR number
/pr-brief master...HEAD        # or a ref range, for unpushed work
/pr-brief 5753 --tier 3        # force a deeper pass
```

**What the page gives you**

- **TL;DR** with a call-tree diagram of the change, annotated in place.
- **Behaviour-named sections** — "Missing customer row no longer crashes the cost preview", not `GetCostPreviewQuery.cs`. Diff on the left, explanation on the right.
- **Two voices.** Every explanation is written twice and toggled by the reader: *explain to an 18-year-old*, or a technical read that names types and cites `file:line`.
- **Review findings inline**, in the section they belong to, each with **Why** and **How** — and an example fix written against the real file, not the conventional pattern.
- **Callers and consumers** of every changed symbol, with **reachability** marked, so you can see which call sites the change can actually reach.
- **GitHub-style Viewed toggles** and a sticky section rail, so a long brief can be worked through and ticked off. State persists per brief.

**How it stays cheap**

The page's CSS and JS live in `template.html` and are never regenerated. Each run emits only a body fragment, which `render.mjs` splices in — so a UI improvement costs template bytes once, not tokens per PR, and every previously generated brief gains it on re-render.

Before reading anything, a triage step scores the diff on two axes — how hard it is to follow, and how bad it would be if wrong — and picks one of four effort tiers. A version bump gets a skim; a change with a deploy-ordering constraint gets three reviewer sub-agents. Findings then pass an admission gate (grounded, triggerable, not the linter's job, not already disclosed by the author, actionable) before they are allowed onto the page.

### `generate-pr-description`

Every PR body Claude Code creates must have four sections, in this order:

1. **TLDR** — what the change does, written for an 18-year-old with no context.
2. **Technical Description** — what it does in engineering terms.
3. **Affected Projects** — every project that consumes the change, and how (table).
4. **Testing** — what was actually run, as a table.

The skill holds the template and the fact-gathering procedure (grep sibling repos for consumers,
report `not run` honestly). The bundled `check-pr-description` PreToolUse hook enforces it: any
`gh pr create` whose body is missing a heading, or whose Testing section has no table, is denied
with a message naming the missing sections and pointing Claude at the skill. It only fires when
`gh pr create` is in command position, so mentioning it in text does not trip it.

Installed as a plugin, the hook is registered automatically. To use the hook standalone, add to
`~/.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{ "type": "command", "command": "node \"/path/to/hooks/check-pr-description.mjs\"", "timeout": 10 }]
    }]
  }
}
```

### `warm-mobile-design`

The house style for phone-app screens, as a skill: warm cream and deep green, Figtree, Phosphor icons, bold titles, one helper line, one main button, an even 20/16/24/8 spacing rhythm, short addresses, full-width sheets, maps that look like maps, and the 15-second rule on every screen. It came out of the Dream House Hunt v2 design and a review of its 130 screens.

Use it when designing, redesigning or reviewing a mobile screen, an onboarding or intro flow, a sheet, an empty state or a settings page, on a Claude Design canvas or in React Native.

**What's in it**

- `SKILL.md`: the taste in five judgments, the order of work for a new screen, the recurring moves, how to present options under originals on a canvas, and the pitfalls seen in the wild.
- `references/tokens.md`: every colour (light and dark), the Figtree type scale, spacing, radii, sizes and the fit-ring geometry.
- `references/components.md`: the catalogue with exact sizes (chrome, buttons, cards, rows, sheets, chips, badges, maps, the mark).
- `references/patterns.md`: whole-screen recipes (onboarding step, intro page, tab screen, pushed screen, sheet, empty state, detail page, forms, field screens, compare, dark twins).
- `references/words.md`: the voice, the agreed vocabulary, sample-data rules, and the three-language workflow.
- `references/review.md`: how to review screens (yardsticks, measuring screenshots, verdicts, stickies, canvas layout).
- `assets/base.css` (the classes behind the components, light and dark), `assets/mark.svg` (the house-with-a-heart mark), `assets/map-art.svg` (the stylised map).
- `evals/`: three test prompts in the `claude plugin eval` layout.

## Layout

```
hooks/
├── hooks.json                     plugin hook registration
└── check-pr-description.mjs       PreToolUse gate for gh pr create
skills/
└── engineering/
    ├── pr-brief/
    │   ├── SKILL.md        the skill
    │   ├── template.html   all CSS + JS, {{TITLE}} and {{BODY}} placeholders
    │   └── render.mjs      splices a body fragment into the template
    └── generate-pr-description/
        └── SKILL.md        template + procedure for the four-section PR body
└── design/
    └── warm-mobile-design/
        ├── SKILL.md        the taste, the order of work, the recurring moves
        ├── references/     tokens, components, patterns, words, review
        ├── assets/         base.css, mark.svg, map-art.svg
        └── evals/          three test prompts
```

## Licence

MIT
