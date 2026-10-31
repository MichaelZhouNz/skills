# Reviewing screens

How to judge an existing screen (a screenshot of the real app, a prototype board, a competitor) in this taste, and how to present what you find so the owner can choose.

## Before you start
Refine the brief into decisions and get a yes. Big review jobs go wrong when the yardsticks are implicit. State: which screens, which yardsticks (the tokens, the 15-second rule, the word list), what counts as "changed" (a new mockup) versus "fix in code", whether the look stays (tokens, fonts) or may change, where options go (directly under each original), and what is off limits (product rules). The owner answers in a line each; then build.

## Yardsticks
1. **The 15-second rule.** Plain title; one helper; the answer first; one main button; details folded; at most six tappables above the fold. Write the skim line `title · helper · [button]`. If the screen needs more than one, it fails.
2. **Spacing.** Measure, do not eyeball. Expect 20 side padding, 16 between cards, 24 between sections, 8 inside, 12 between option cards, 44 pt targets, 52 buttons, 56 rows, titles at 132 (or 126 pushed). List the gaps you measured as a run ("11 / 22 / 27 / 17 / 36 / 38") so the fault is visible.
3. **Warmth and hierarchy.** Bold title, muted helper, one accent colour for what you can tap, icons beside rows, strong contrast between the answer and its explanation. Empty cream below the fold is cold; so is a wall of explanation above the first choice.
4. **Words.** Every word from the list; the agreed vocabulary; nothing said twice (a score in the ring, in a line, and in a total is three times); no populated helper on an empty screen; no promise without the thing promised.
5. **States.** Empty, loading, picked, ticked, scrolled, error, dark. A state that inserts itself and pushes the list down is a fault.
6. **Product rules.** No listing images; no ads at focus moments; nothing private shown or logged; placeholders until the user's own photo.

## Measuring a screenshot
Screenshots are 402×874 pt at 2x (804×1748 px). Split the image into horizontal bands where rows differ from the page colour; print each band's top, bottom, height, left and right edges in pt and the gap to the band above. A left edge that moves (37 / 121 / 37 inside one card) is a fault even when each value is "right". Read the colour met first on a band's left edge: white means a card, else text or an icon.

## Verdict per screen
- **Passes** (green sticky): nothing to draw. Small things still get listed with numbers ("rows have no chevron; label-to-field gap 6 here but 9 on step 6"), marked "fix in code, no mockup needed".
- **Fix** (orange sticky): draw option A (the smallest change that passes) and, when a different split or structure is plausible, option B. Never more than two.
- **Judged with another screen** (grey sticky): states, scrolled captures, dark twins, dev pages. Say which screen's options apply.

## Drawing the options
- Same tokens, same fonts, same words unless a word is the fault (then flag the new word).
- Build from the catalogue; sample data stays the same as the original so the comparison is fair.
- Render at 2x, measure, read the PNG, fix, repeat. Check HTML: balanced tags, no repeated attributes, no nested anchors, no template holes.
- Dark twins come from the same frame with the dark tokens, not a second drawing.

## Presenting on a canvas
- Originals keep their columns. Under each: the sticky (402 wide), then option A, then B, 120 pt apart; every later row moves down by the same amount so nothing overlaps.
- Section titles 260 above their first row.
- One version per batch, published once; say what changed and give the link.
- The reply lists: the verdict per screen in a table, the patterns that recur across the app, the words and interactions flagged for the owner, and anything found that is a bug rather than design (a known share that differs between screens, a promise with no list).

## After the owner chooses
Record the choices (A everywhere except …) and the owner's feedback as plain facts; apply them to a v2 canvas that mirrors the original grid; then turn each change into a ticket that names the board, the earlier ticket it revises, the files, the words in every language, and the test rows.
