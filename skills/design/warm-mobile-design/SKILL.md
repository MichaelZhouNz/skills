---
name: warm-mobile-design
description: Design, redesign or review phone-app screens and design-canvas mockups in Michael Zhou's house style, the Dream House Hunt v2 look - warm cream and deep green, Figtree, Phosphor icons, bold titles, one helper line, one main button, an even 20/16/24/8 spacing rhythm, short addresses, full-width sheets, maps that look like maps, and the 15-second rule on every screen. Use this skill whenever the user asks to design, mock up, draft, redesign, tidy, polish, critique or review a mobile screen, onboarding or intro flow, sheet, empty state, settings page, tab, card or component, or mentions "our design", "the v2 look", "same pattern as before", pixel-perfect spacing, warmth, easy to browse, or the 15-second rule - even when they do not name the product, and even when the deliverable is a Claude Design canvas, a React Native screen, or a written design review.
---

# Warm mobile design

The house style for phone apps: warm, calm and quick to read. It grew out of the Dream House Hunt app (a buyer-side house-hunting app for iOS and Android) and a full review of its 130 screens, but it is a taste, not a product skin. Use it for any phone screen the user wants to look and feel like "ours".

Everything measurable lives in `references/`. Read `references/tokens.md` before drawing anything, `references/components.md` when composing, `references/patterns.md` for whole-screen recipes, `references/words.md` for copy, and `references/review.md` when the job is to judge screens rather than make them. `assets/base.css` is the CSS that encodes the components; `assets/mark.svg` and `assets/map-art.svg` are the brand mark and the stylised map.

## The taste in five judgments

1. **Warm.** Cream page (#FAF8F4), white cards, deep green (#1F4D3A) for anything you can tap, sand for "planned" and "from the listing". No pure black, no pure grey, no gradients, no emoji. Dark mode is the same warmth in the dark (#111714 page, #86C7A5 green for text and icons).
2. **Easy to browse.** Bold titles, one quiet helper line, section headings with a hairline, icons beside rows, strong contrast between what matters and what explains it. The eye should land on the title, then the answer, then the button, in that order.
3. **The 15-second rule.** A first-time user knows what the screen is for and what to do next within 15 seconds: a plain title, one helper line, the answer first, one main button, details folded away, and at most six tappable things above the fold.
4. **Pixel-perfect rhythm.** 20 pt page padding, 16 between cards, 24 between sections, 8 inside a block, 12 between option cards, 44 pt touch targets, 52 pt buttons, 56 pt list rows. When the gaps read 2, 9.5, 27, 43, something is wrong, and the user will notice before they can say why.
5. **Built from the product's own pieces.** Illustrations are the app's cards, rings and chips, not stock art. Photos are the user's own or a placeholder. Maps look like maps. Sample data is sample data (Sample Avenue, Sample Suburb), never a real address, unless the screen is a review of a real screenshot.

## When you are asked to design a screen

Work in this order; each step is cheap and skipping one is how screens drift.

1. **Say the skim line first.** Before any layout, write the screen as `title · helper · [button]`. If you cannot, the screen is asking more than one question: split it (a second step, a sheet, a folded row). Dream House Hunt's "Who's buying?" asked who, first home and where; v2 asks who, and the region became its own step.
2. **Pick the anatomy** from `references/patterns.md`: onboarding step, intro page, tab screen, pushed screen, sheet, empty state, list, form, map. They fix the chrome (status bar 54, nav row 44 from 62, title at 132) so screens line up when flipped through.
3. **Compose from the catalogue** in `references/components.md` with the exact sizes. Do not invent a new control when a row, chip, option card or disclosure row will do. New components are for things the catalogue genuinely lacks, and then they get the same radii, heights and type.
4. **Put the answer first.** Score, next viewing, the thing the user came for, inside the first 500 pt. Explanation goes under it or behind a disclosure. The "Known = …" gloss appears once, as a caption, near the first "Known".
5. **Fold what is optional.** Agent name and phone, "Add a question", "Another place", your own wrap-up: one row with a chevron or a plus, the form opens on tap.
6. **One main button, pinned.** A filled green button in the footer (hairline above, 12 above the button, 46 below). Secondary actions are text buttons or rows, never a second filled button. Disable the main button until the screen's one required thing is set, rather than letting it fail.
7. **Draw the states.** Empty, loading, picked, ticked, scrolled, error, and the dark twin. An empty state is one message and one button, not a lonely segmented control over 600 pt of cream.
8. **Check it like a reviewer** (`references/review.md`): measure the gaps, count tappables above the fold, read every word, try the dark twin, look at it at 2x.

## Recurring moves that make screens read as "ours"

- **Short addresses.** Street on the title line, suburb on the next, nothing more. Full addresses only in documents meant to leave the phone (a PDF report) and in screen-reader labels.
- **One tap on a card opens it.** No pick-then-confirm. Option cards carry a chevron when they navigate and a radio only when they are a choice that a button confirms.
- **Rows, not cards, for lists inside a screen.** A 56 pt row with a 56 or 48 pt thumbnail placeholder, a bold line, a muted caption, a chevron. Cards are for the one hero item and for grouped settings.
- **Section header, then rule.** 24 above, 19/24 bold title, optional 14/20 caption, a hairline 10 under, the first row straight after.
- **Disclosure rows for "more".** Title in green, caption or value chips under it, caret-down at the right. Values that are a list (NZ$ · m² · km · 12-hour) are chips, not a comma sentence.
- **One sheet style.** Full width, 24 pt top corners, a grabber, a title row with a close button, 20 pt inset, sized to its content, footer pinned inside. Never an 8 pt inset sheet and a full-width sheet in the same app.
- **Counts in fixed slots.** "No red flags yet" / "1 red flag" occupies the same line always, so ticking a row never pushes the list down 38 pt.
- **Maps that read as maps.** A map placeholder is the stylised tile look (grey land, blue-grey harbour, white roads, italic suburb labels, one 11 pt credit pill bottom-left), never a plain grid. A plain grid was read as "there is no map" by the person who asked for the map.
- **The ring and its label.** The fit ring's label must sit clear of the arc: medium ring 120 pt box, 46 radius, 10 stroke, 34 number, 12 label. A label touching the arc is the first thing users complain about.
- **Progress once.** One progress bar per screen. Dots for an intro carousel, segments for a multi-step set-up, never both.

## Words

Plain, warm, short. "You" and "your", never "the user". Titles are questions or plain nouns ("Who's buying?", "Your places"). Helpers are one sentence that says what to do. Buttons are verbs ("Get started", "Save places", "Start viewing"). No exclamation marks, no dashes, NZ spelling. The agreed vocabulary and the rest of the rules are in `references/words.md`; when a product has its own word list (an `i18n` folder), every word on the screen must come from it, in every language the app ships.

## Product-type rules that shaped the taste

These came from a house-hunting app but transfer to anything that handles someone's private life:

- No images you do not own: placeholders until the user takes their own photo.
- Nothing private in logs or analytics; never show a real person's address in a mockup.
- No ads at focus moments (adding something, a checklist in the field, sign-in, partner screens); where ads exist, an "Ad" badge, a "Remove ads" link and a fixed 50 pt slot in a card.
- Permissions are explained once on one "Before you start" sheet; the system prompt still comes on first use.
- Every tappable has a screen-reader label; text grows with the phone's text size.

## Presenting design work

Design work is presented on a Claude Design canvas (or as rendered PNGs) at the phone size the screenshots were taken at (402×874 pt, 2x). Rules that keep a canvas readable:

- **Options go directly under the original.** Keep each original in its column; put a sticky under it (green = passes, orange = changed, grey = judged with another screen), then option A, then option B, each 120 pt below the last. The reader compares by scrolling down one column.
- **One sticky per screen, under 420 characters:** the verdict ("15 s: Fix" / "passes"), the measured faults with numbers, what A and B do, and which words or interactions are new (flagged for the owner to decide).
- **A v2 canvas** (the chosen design) mirrors the original grid: same sections, same 6-per-row order, one artboard per screen, dark twins in their own section, grey stickies where a screen no longer exists.
- **Render before publishing.** Headless Chrome at 2x; measure the bands; read the PNG. Every artboard goes through an HTML check: balanced tags, no repeated `style` attributes, no `<a>` inside `<a>`, no template holes.
- Rationale goes in the reply and in stickies, never inside an artboard.

## Pitfalls seen in the wild

- A caption that shares a flex row with a chip truncates ("Asking NZ$1,150,000 · …"). Give the caption its own line.
- Two left edges inside one card (37 / 121 / 37) look broken even when each is "correct". Align to one content edge.
- A card that repeats the screen title in a sand band is a title said twice.
- A dev-only toggle on a user screen reads as a feature. Keep dev controls in a dev gallery.
- A 600 pt map with two pins and nothing else is not a screen; a 340 pt map with the stops listed under it is.
- "Changed by you on Sat 31 Oct" with no explanation is noise; drop it or fold it.
- The empty state helper must not be the populated one ("Tap a pin to see the house" with no pins).
- Light tokens left behind in dark mode: white round buttons on a dark hero vanish. Put them on the page colour with a shadow.
