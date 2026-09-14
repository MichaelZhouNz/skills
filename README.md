# skills

Agent skills for understanding, reviewing and describing code changes.

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
```

## Licence

MIT
