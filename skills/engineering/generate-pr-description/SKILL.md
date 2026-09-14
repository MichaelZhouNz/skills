---
name: generate-pr-description
description: Use when about to create a pull request (gh pr create, opening a PR, /pr, /ce-commit-push-pr) or when a PR-description hook denied the command for missing sections. Produces the mandatory PR body.
---

# Generate PR Description

Every PR body created from Claude Code MUST contain the four sections below, in this
order, with these exact `##` headings. The `check-pr-description` PreToolUse hook shipped
with this plugin rejects `gh pr create` if any is missing or the Testing section has no table.

## Procedure

1. Gather facts before writing:
   - `git log <base>..HEAD --oneline` and `git diff <base>...HEAD --stat` for what changed.
   - For each changed public symbol / contract / schema / config, grep the repo (and any sibling
     repos in the same workspace) for consumers. This feeds section 3.
   - Recall what was actually run this session: unit tests, builds, manual runs, SQL checks,
     Playwright, etc. Do not invent tests that were not run.
2. Fill the template. Every section is required; write `None` rather than omit a section.
3. Pass the body via `--body-file` (write it to the scratchpad) or a quoted heredoc.

## Template

```markdown
## TLDR

<2-4 plain sentences an 18-year-old with no context could follow. What was broken or
missing, what this changes, and what someone will notice afterwards. No jargon, no
class names.>

## Technical Description

<What the change does in engineering terms: components touched, approach taken, notable
design decisions, migrations/config/flags, backwards-compatibility notes, anything a
reviewer needs to evaluate correctness.>

## Affected Projects

| Project | How it is affected |
|---|---|
| <repo/project name> | <consumes changed API / shares DB table / must redeploy / config change / none beyond this repo> |

## Testing

| Test | Scope | Result |
|---|---|---|
| <e.g. Unit tests: dotnet test Foo.Tests> | <what it covers> | <pass / fail / not run> |
| <e.g. Manual: ran X locally against test DB> | <scenario> | <observed outcome> |
```

## Section rules

- **TLDR**: no identifiers, acronyms unexpanded, or file paths. Explain the user-visible effect.
- **Technical Description**: this is where identifiers belong. Be specific, not exhaustive.
- **Affected Projects**: list every project that consumes the change, including other repos
  and downstream deployables. If genuinely only this repo, one row saying so.
- **Testing**: table is mandatory. Include automated and manual testing. "Not run" is an
  acceptable, honest value.

## Common mistakes

| Mistake | Fix |
|---|---|
| Heading renamed (e.g. `## Summary`) | Hook matches headings by name. Use the template's headings. |
| Testing written as bullets | Must be a markdown table with a `|---|` separator row. |
| Listing only the current repo under Affected Projects without checking | Grep sibling repos for consumers first. |
| Claiming tests passed that were not executed this session | Report `not run`. |
