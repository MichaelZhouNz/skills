---
name: pr-brief
description: Explain what a pull request does as an interactive HTML brief - split into behaviour-named sections, each with the diff beside a plain-English explanation (togglable between "explain to an 18-year-old" and a technical read), embedded review findings with example fixes, and the callers and consumers of every changed symbol. Use when asked to explain, understand, walk through, summarise or brief a PR, branch or diff - or when a reviewer needs to see what a change does before reviewing it.
---

# PR Brief

Produce a single self-contained HTML page that explains a pull request to the person about to review it.

Input is a PR number (`/pr-brief 5753`), a GitHub URL, or a git ref range (`/pr-brief master...HEAD`). Optional `--tier N` overrides triage; `--out <path>` overrides the destination.

**The output is a file, not a chat message.** Do not paste the brief into the conversation. Generate the body, render it, open it, and report the path plus the two or three findings worth saying out loud.

## Cost model

The template holds all CSS and JS and is never regenerated. Each run emits **only the body fragment**, then `render.mjs` splices it in. Never rewrite `template.html` to change one brief — if a page needs a new visual feature, that is a template change that benefits every brief, and it is a separate decision.

Read narrowly too: classify files before reading them, and never open a file the diff proves is mechanical.

---

## Stage 1 - Triage

Runs inline on metadata only. No sub-agents, no file reads. If `--tier N` was passed, skip scoring and use it.

```bash
gh pr view <n> --json number,title,body,author,state,baseRefName,headRefName,additions,deletions,changedFiles
gh pr diff <n> --name-only
```

Classify every file first. **Mechanical** files never count toward complexity:

```text
mechanical   *.nuspec, *.csproj version bumps, package-lock.json, *.lock,
             generated/, *.g.cs, *.designer.cs, snapshots, vendored dirs
substantive  everything else
```

Score both axes:

```text
COMPLEXITY                          IMPORTANCE
  substantive files                   risk paths:  auth | payment | pricing |
  substantive +/- lines                 discount | cost | migration | Startup |
  layers touched (Domain /              Module | settings | permission
    Application / Persistence /       caller count of changed symbols
    Presentation / tests)             deploy or ordering note in the PR body
  new file vs edit                    stacked PR or follow-up referenced
  control flow changed?               schema / NOT NULL / config change
                                      PR fixes a production incident
                                        (body cites a live 5xx, App Insights id,
                                         correlation id, or incident ticket)
```

| Tier | Trigger | Review | Sections | Caller grep |
|---|---|---|---|---|
| **0 Skim** | only mechanical files, or <=2 substantive lines | TL;DR only, no findings | 1 | no |
| **1 Light** | 1 layer, <30 substantive lines, no risk path | correctness + standards only | 2-3 | changed symbols |
| **2 Standard** | default | all dimensions, one pass + gate | 3-5 | full |
| **3 Deep** | risk path, or >150 substantive lines, or >3 layers, or a deploy-ordering constraint | 3 sub-agents (correctness / testing / standards), then dedup + promote | 4-6 | full + reverse deps |

Rules:

- **Round up** when borderline. Over-triage is annoying; under-triage misses the finding that mattered.
- **A ref range defaults to Tier 2** - no PR body means importance signals are *unknown*, not low. Say so in the footer.
- **Announce the tier and the reason in one line** before starting, so the choice is arguable:
  `Tier 3 (deep) - deploy ordering + 3 layers + 150 substantive lines. 3 sub-agents. Use --tier 2 for a single pass.`
- Tiers 0-2 proceed without asking. Tier 3 announces its cost and proceeds.
- **Escalation valve:** if the pass surfaces a P0/P1 in a risk area that triage scored low, re-run *that section only* one tier deeper.

## Stage 2 - Gather

```bash
gh pr diff <n>                    # once, not per file
```

Then, for substantive files only, open what the hunks touch. Use `sed -n '<start>,<end>p'` for the surrounding method - never read whole files.

**Callers and consumers.** For each changed public symbol (class, method, flag, enum, const), grep the repo:

```bash
grep -rn "<Symbol>" --include=*.<ext> src | grep -v "<the changed file>"
```

Three rules that decide whether this panel is any good:

1. **You are grepping the base branch, not the PR branch** (unless the branch is checked out). That is correct for "who consumes this", but line numbers for *changed* files must come from the diff, not the grep.
2. **Mark reachability, not just presence.** For each call site, say whether the changed path is actually reachable from it, and why not when it isn't. A list of call sites is data; reachability is the answer.
3. **Cap at 8 sites per symbol**, `file:line` plus one line of context, remainder collapsed as "+N more". Uncapped, a common type swamps the page.

Discard commented-out matches; mark them `n/a` rather than dropping them silently.

## Stage 3 - Split into sections

**Split by behaviour, never by file.**

```text
2-6 sections, named in domain language
  good  "Missing customer row no longer crashes the cost preview"
  bad   "GetCostPreviewQuery.cs"

one file may span two sections; two files may share one
all mechanical files -> ONE section at the end, badged "mechanical"
a section may be non-code: deploy ordering, version bumps, migration sequencing
tests earn their own section when they are >1/3 of the diff, or when the
  finding lives there
if the PR genuinely has one concern -> one section, do not pad
```

Number them `S1`, `S2`, … in reading order, crux first where possible. Mark exactly one section `crux` when a single change carries the PR.

## Stage 4 - Analyse

For each section produce: what it does (two voices), the behaviour delta, and any findings.

### The two voices

Both are written for the *same* page, toggled by the reader.

- **18yo** - no jargon, no type names, explains *why it matters* before *what it is*. Short paragraphs. Never condescending.
- **proper** - precise, names types and members, cites `file:line`, assumes the reader knows the stack.

Write both **only** for section explanations and the TL;DR. Review findings, callers and badges stay single-voice and technical - the reviewer reads those either way.

### Behaviour delta

Two lines per section. Not the diff - the *contract change*:

```text
was   throws InvalidOperationException("Sequence contains no elements") -> 500
now   returns CustomerDiscount.None -> 200, full price
```

If nothing changes at runtime (a version bump), say what changes operationally instead.

### Findings - the admission gate

Generate findings freely, then **drop most of them**. Admit a finding only if **all** hold:

```text
1 GROUNDED     you opened the file, not just the diff hunk
2 TRIGGERABLE  you can name the input or state that produces the bad outcome
3 NOT TOOLING  the compiler / analyzer / linter would not already catch it
4 NOT STATED   the PR description does not already disclose it
5 ACTIONABLE   you can write the fix, or say why it needs a human

fails 2 or 5  -> demote to a Notes line, not a finding
fails 4       -> demote, and credit the author for naming it
fails 1       -> drop, or render explicitly as unverified
fails 3       -> drop
```

Cap `conforms` items at **one per section**. They exist to show the review was not purely negative, not to pad.

At Tier 3 only, three sub-agents produce findings independently; then dedup on `file + line±3 + normalised title`, and promote anything two agents both flagged. At Tiers 0-2 there is one pass and therefore no corroboration - the admission tests are doing the work instead, so apply them strictly.

### Severity and display

| Severity | Meaning | Renders as |
|---|---|---|
| P0/P1 | breaks, or is hit in normal use | `!` `sev-warn` |
| P2/P3 | gap, missing test, unproven assumption | `+` `sev-gap` |
| - | deliberate conformance worth noting | `check` `sev-ok` |

Every finding carries **Why** and **How**. `How` includes an example fix as a `<pre class="fix">` block when a code change is warranted; when it is not, `How` opens with **"No code change."** so the absence reads as deliberate.

**Example fix code must be written against the real file, not the conventional pattern.** Open the target test file or class first. Repos violate their own documented conventions - a plausible-looking snippet that names a type which does not exist is worse than no snippet.

## Stage 5 - Emit the body

Write the body fragment to a temp file. It contains content only - no `<style>`, no `<script>`, no `<html>`.

The template derives the section rail, the Viewed checkboxes and the scroll-spy at runtime by reading the markup, so **these are a contract, not decoration**:

```text
.wrap                     one, wrapping everything
  header.masthead         .eyebrow, h1, .meta, .globalbar with #globalseg
  section.tldr[data-voice="proper"]#tldr
      .tldr-head > .sumlbl + .seg.sm
      .tldr-grid > .tldr-text (.voice.v-eli + .voice.v-proper) + pre.dia
  section.panel[data-voice="proper"]        x2-6
      .panel-head > .sec-no + .sec-title + .badges + .seg.sm
                    ^ rail reads these three
      .split > .left (.lbl + .diff table) + .right (.voice x2 + .delta)
      details.foldbox > summary(.chev + .sumlbl + .counts) + .foldbody
          Review              review-list of .review.sev-*
          Callers & consumers table.callers
          Symbols in play     .symbols of .sym
  footer.note
```

- Every panel needs `.sec-no`, `.sec-title` and one `.badge.r-low|r-med|r-high`, or its rail entry breaks.
- Section markers are `S1`, `S2` - **not** `§`.
- Summary `.counts` chips must stay meaningful when the fold is closed (`1 changed`, `2 left as-is`), because that is what a reader sees after ticking Viewed.
- Escape `<` and `>` in all code, diffs and symbols.
- The diagram in the TL;DR is a `<pre class="dia">` call tree with the changes annotated in place. Do **not** use Mermaid - the output is also a local file, and Mermaid only renders inside the artifact runtime.

## Stage 6 - Render and open

```bash
node <skill-dir>/render.mjs <body.html> .scratch/pr-briefs/pr-<n>.html "<Page Title>"
```

`render.mjs` fails loudly on unbalanced `<details>` or a body with no panels. Then open it:

```bash
start .scratch/pr-briefs/pr-<n>.html      # Windows
open  .scratch/pr-briefs/pr-<n>.html      # macOS
```

Title is a short noun phrase naming the change - `Cost Preview Discount Fix`, not `PR 5784 Review`.

Finally, report in chat: the path, the tier and why, and the two or three findings a reviewer should not miss. Nothing else - the page is the deliverable.

## Honesty rules

- **State what you could not verify.** Symbols from a NuGet package you cannot read, a branch you did not check out, a claim taken from the PR description - say so in the footer. A polished page reads as authoritative even where it guessed.
- **Credit the author.** When the PR description already names a gap, mark it as disclosed rather than presenting it as your discovery.
- **Never invent a `file:line`.** Grep it or leave it out.
