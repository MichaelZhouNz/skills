# Components

The catalogue, with the sizes that make screens line up. `assets/base.css` holds the classes named here (`.btn`, `.card`, `.row`, `.chip`, `.badge`, `.pts`, `.count`, `.field`, `.tile`, `.iconbtn`, `.rule`); copy it into a mockup's `<helmet><style>` or translate it to StyleSheet values. Icons are Phosphor (regular weight; the fill weight for the active tab and the selected radio), drawn inline as SVG at 24 (rows, nav), 22 (tiles), 20 (chevrons, search), 18 (card links), 16 (captions), 14 (inside chips), 13 (inside badges).

## Chrome

- **Status bar space:** 54 pt, empty (mockups never draw a fake status bar).
- **Nav row:** 44 tall, margin 8 20 0. Left: the back caret as a 44 pt icon button pulled 10 left so the glyph sits on the 20 pt edge. Middle: an optional centred navTitle. Right: a 44 pt slot for one icon button. A pushed screen (settings, a sub-page) adds a hairline 7 under the nav row and starts its title 12 under that.
- **Title block:** screenTitle (or tabTitle on a tab), the helper 6 under in helper type and inkMuted. Nothing between the title and the helper; nothing above the title but the nav row or progress.
- **Progress row (set-up steps):** the back caret, then `n` segments 4 tall with 6 gaps, filled in primary up to the current step, border colour after; gap 22 between caret and segments; 44 tall from 62. The helper repeats "Step 3 of 9." as its first words.
- **Dots (intro carousel):** 8 pt discs with 8 gaps, the current one a 24×8 pill in primary, others in ringKnownTrackLow; "Skip" as a text button at the right of the same row; no Skip on the last page.
- **Footer:** absolute to the bottom, page colour, hairline on top, padding 12 20 46, a column with 12 gaps: an optional note (a caption row), then the one button.
- **Tab bar:** 96 tall (padding 10 8 34), surface, hairline on top; four items 48 tall (icon 24 over a 12/16 label, 2 gap; active in primary with the filled icon, others inkMuted); the raised + in the middle: a 66 pt disc in the page colour lifted 28, holding a 58 pt primary disc with a 26 plus and the raised shadow.

## Buttons

- **Primary:** 52 tall, radius 14, primaryFill, white 16/24 600 label, full width. Disabled at 45% opacity. One per screen.
- **Secondary:** same box, surface with a 1.5 primary border and primary text. Used for "Add photo" on a hero (44 tall there) and the sign-in providers.
- **Text button:** primary text, 44 min height, 10 20 padding, no box. "Skip for now", "Add to calendar", "Reset to NZ defaults".
- **Icon button:** 44 round, transparent (or page colour with the card shadow when it floats on a hero), ink glyph, always with an aria-label.
- **Raised +:** only in the tab bar.

## Containers

- **Card:** surface, 1 pt border, radius 16, the card shadow, 16 padding. Cards hold the one hero item (next open home, the score, the preview) or a settings group; lists inside a screen use rows.
- **Option card:** min 72 tall, padding 14 16, gap 16: a 44 tile (sandSoft, radius 12, or round 22 for people), a bold title over a helper line, then a radio (24 ring, 2 inkMuted border; selected = filled check-circle in primary) when a button confirms the choice, or a chevron when the tap itself navigates. Selected: primarySoft with a 1.5 primary border. 12 apart.
- **Row:** min 56, padding 12 0, gap 12, hairline under (none on the last). Left slot (24 icon in primary, a 48/56 thumb, a 24 numbered label in section type, or a 36 disc), a bold title with an optional helper line, a right slot (chip, value, points pill), a 20 chevron in inkMuted when it navigates.
- **Disclosure row:** padding 14 0, hairline under: a section-type title in primary, a caption or a wrap of value chips 8 under, a 22 caret-down in primary at the right.
- **Section header:** 24 above; an optional 24 icon in primary, the title in section type; an optional right slot (a small link or "7 to ask"); a caption 4 under; a hairline 10 under.
- **Sheet:** scrim over the screen; the sheet is surface, full width, radius 24 on top, a 48×4 grabber in border colour centred 8 under the top, a title row (screenTitle, 44 close icon button at the right), the helper, 20 pt inset content, sized to its content, footer pinned inside the sheet with its own hairline. Opens high enough to show the last item (Status opened too low and cut "Rejected").
- **Hero placeholder:** 240 tall, surface2, a 40 house icon in primary, "Your photos show here after the viewing" in helper type, a 44 "Add photo" secondary button; round Back and Share icon buttons on the page colour with the card shadow at 62 from the top.
- **Field:** 48 tall, radius 12, surface2, 14 side padding, 16 type; label 8 above in small type; a helper 6 under in helper type; a focused area gets a 1.5 primary border. Note areas are 120 tall with 12 padding. Search fields show a 20 magnifying glass and a placeholder, no label.
- **Segmented control:** a 52 pill (radius 14, surface2, 4 padding) with 44 segments (radius 10); the selected one is surface with a soft shadow and primary text.
- **Toggle:** 51×31, radius 16, primaryFill when on, switchTrackOff when off, a 27 white thumb with a soft shadow.
- **Range slider:** a 4 pt track in border colour on the content edge (never inset), the filled part in primary, 28 pt white thumbs with a 2 pt primary border, three tick labels under in caption type.
- **Points stepper row:** name at the left, a 44 minus, the points pill ("34 pts", 26 tall, surface2, 13/18 700, tabular), a 44 plus.
- **Rating pips:** five 48 pt discs 1 to 5, 2 pt inkMuted border, the chosen one filled ink with white; 20/1 700 numbers. A compact form in illustrations: 22 pt discs, the chosen ones filled.

## Small things

- **Chip:** 24 tall (26 for a tier chip, 28 for a status chip with a caret), radius 999, 0 9 padding, 12/16 600, optional 14 icon. Kinds: new (info), planned / nice / from listing (sandSoft), viewed / important / you rated (primarySoft), grey (surface2), red flag / must (dealbreakerSoft).
- **Badge (provenance):** 22 tall, 0 8 padding, 13 icon: "Public data" (info, database icon), "You rated" (primarySoft, eye), "From listing" (sandSoft, file-text). "Ad" is a grey badge.
- **Value chip:** 28 tall, 0 10 padding, surface2, ink, 13/18 600; for lists of values under a disclosure row.
- **Points pill:** "34 pts", 26 tall. **Count pill:** 28 tall, min 28 wide, surface2.
- **Numbered row marker:** the number in section type, inkMuted, 24 wide, centred. **Stop disc:** 36 pt primaryFill disc with a white 15/1 800 number and a 2 pt white border, on a map or a day plan.
- **Caption row:** a 16 icon (lock, bell, microphone, check-circle) and a caption, both inkMuted, 8 gap, used for privacy and permission lines.
- **Credit pill (maps):** bottom-left, 10 in, white at 90%, radius 999, 4 10 padding, 11/14 500, "© OpenStreetMap contributors · OpenFreeMap · © OpenMapTiles", wrapping to two lines on a narrow map.
- **Map pin:** 32 disc in the band colour (score pins) or buyerTwo (a place), 2 pt white border, white 13 800 text; 4 pt ink border when selected; inside a 44 pt target.
- **Place / person discs:** 36 disc, "M" or a user icon, primaryFill; the co-buyer in buyerTwo; an empty slot is a dashed buyerTwo ring with a plus.

## Composite pieces

- **Compact house row** (Home B, Shortlist, pick-house, ranking): 56 thumb placeholder · bold "7 Sample Avenue, Mount Eden" · caption "Asking NZ$1,150,000 · Viewed" · a small ring with "80 · Good fit" beside it and "66% known · Gut feel 4 of 5" under · chevron.
- **Score card** (House page, Why 80?, Viewing done): a card with the md ring and its known line in the left column, then 20 pt, then two or three short lines and one green link ("Why 80?").
- **Hero card** (Home): "Your next open home" with a calendar icon in primary, the street and suburb in section type, the date and time in body, a small ring at the right, "See the plan ›" in bold green.
- **Ad card:** an "Ad" grey badge, "Remove ads" in bold green at the right (44 target), a 50 pt bordered slot "Ad loads here" 12 under.
- **Intro page:** dots + Skip row; a 320 pt surface2 panel (radius 24, 20 padding) centring an illustration built from the pieces above; tabTitle 28 under; body paragraph 10 under in inkMuted; the footer button.
- **The mark:** a white line house with a heart inside, on a primary disc (`assets/mark.svg`): 200 on the loading screen, 120 on Welcome with the app name in navTitle 20 under, 60 with radius 14 as the app icon, 28 in a list.
- **The stylised map** (`assets/map-art.svg`): 362×560 art cropped with `preserveAspectRatio="xMidYMid slice"` into any box; pins and route lines sit on top as absolutely positioned children; the credit pill last.
