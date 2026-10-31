# Tokens

The exact values. In a React Native app they live in `src/theme/`; in a mockup they are inline styles or the variables in `assets/base.css`. Never type a colour or size that is not here; if a screen needs one, add it to the tokens first and say so.

## Colour, light

| Token | Hex | Use |
|---|---|---|
| bg | #FAF8F4 | the page |
| surface | #FFFFFF | cards, sheets, the tab bar |
| surface2 | #F2EEE6 | fields, tiles, value chips, the hero placeholder, ring track |
| border | #E6E0D4 | hairlines, card borders, the known-ring track |
| ink | #1B1F1D | text, numbers, the filled rating pip |
| inkMuted | #56605B | helpers, captions, inactive tab items |
| onInk | #FFFFFF | text on ink |
| primary / primaryFill | #1F4D3A | links, icons, filled buttons, active tab, progress, the mark's disc |
| onPrimaryFill | #FFFFFF | text on a filled button |
| primarySoft | #E3EDE7 | selected option card, "Viewed", "You rated", "Important" chips |
| sand | #E9DCC3 | the ranking band (avoid; v2 dropped it) |
| sandInk | #5E4A23 | text on sand |
| sandSoft | #F3ECDD | icon tiles, "Planned", "Nice-to-have", "From listing" |
| sandBorder | #B59B66 | dashed edge on sand |
| info / infoInk | #E6EBEE / #3F5563 | "New" status, "Public data" badge |
| warning / warningInk / warningBorder | #FDF1DC / #7A4F05 / #E8C27A | "No viewing planned" chip, cautions |
| dealbreaker | #B3261E | a must-have failed, the error outline |
| dealbreakerSoft / dealbreakerSoftInk | #FBE9E7 / #8C1D18 | "Red flag" chip, "Remove" text |
| scoreGreat / scoreGood / scoreSomeGaps / scorePoor | #2E7D4F / #6E9C6A / #D99A2B / #C0573E | the fit ring, 85+ / 70+ / 50+ / under 50 |
| ringTrack / ringKnownTrack / ringKnownTrackLow | #F2EEE6 / #E6E0D4 / #B9B2A4 | ring tracks; the low track is dashed under 65% known |
| buyerTwo | #7A5BA8 | the co-buyer's colour (place pins, their avatar ring) |
| switchTrackOff | #8A8478 | a toggle that is off |
| cardShadow | 0 1px 2px rgba(27,31,29,.06), 0 6px 20px rgba(27,31,29,.06) | cards |
| raisedShadow | 0 6px 16px rgba(31,77,58,.30) | the raised + button |
| scrim | rgba(27,31,29,.45) | behind a sheet |

Only ink and inkMuted are text colours on bg, surface and surface2. Green text (primary) means "you can tap this".

## Colour, dark

| Token | Hex |
|---|---|
| bg | #111714 |
| surface | #1A221E |
| surface2 | #222B26 |
| border | #2E3833 |
| ink | #ECE8E0 |
| inkMuted | #A9B2AC |
| onInk | #111714 |
| primary (text, icons) | #86C7A5 |
| primaryFill (buttons) | #2F6B52 |
| primarySoft | #1E3229 |
| sand / sandSoft | #3A3427 |
| sandInk | #E9DCC3 |
| sandBorder | #8C7B57 |
| info / infoInk | #22303A / #B8C7D2 |
| warning / warningInk / warningBorder | #33270F / #F1CF8B / #F1CF8B |
| dealbreaker (a background in dark) / dealbreakerSoft / dealbreakerSoftInk | #3B1714 / #3B1714 / #F2B8B5 |
| ringTrack / ringKnownTrack / ringKnownTrackLow | #2A3530 / #2E3833 / #7D8781 |
| switchTrackOff | #6B7570 |
| cardShadow | 0 1px 2px rgba(0,0,0,.3), 0 8px 24px rgba(0,0,0,.28) |
| raisedShadow | 0 6px 16px rgba(0,0,0,.40) |
| scrim | rgba(0,0,0,.6) |

Score bands, buyerTwo and map tiles do not change in dark. Welcome is dark by design in both modes.

## Type (Figtree)

Load with `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap`. Stack: `'Figtree', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif`. Numbers use `font-variant-numeric: tabular-nums`.

| Name | Size / line | Weight | Letter-spacing | Use |
|---|---|---|---|---|
| tabTitle | 30 / 36 | 700 | -0.3 | a tab's title, the intro page title, Welcome's title |
| screenTitle | 28 / 34 | 700 | -0.28 | a pushed screen or step title |
| navTitle | 17 / 22 | 600 | | the centred nav title, the app name under the mark |
| section | 19 / 24 | 700 | | section headers, card titles, sheet titles' smaller cousin |
| body | 16 / 24 | 400 | | paragraphs, option descriptions |
| bodyStrong | 16 / 24 | 600 | | row titles, button labels, links in text |
| helper | 14 / 20 | 400 | | the helper line, captions under rows |
| small | 14 / 20 | 500 | | field labels, "How do you get there?" |
| smallStrong | 14 / 20 | 600 | | "66% known", chip-sized emphasis |
| caption | 13 / 18 | 500 | | the Known gloss, map disclaimers, price · status under a row |
| label / labelStrong | 12 / 16 | 600 / 700 | | tab bar labels, badges |
| overline | 12 / 16 | 600 | 0.48, uppercase | "PREVIEW", "MORE WAYS", "LOCATION" |
| ring numbers | 48 / 34 / 17 | 800 | | inside the lg / md / sm ring |

## Spacing, radius, sizes

- **Space:** xxs 2, xs 4, sm 8, md 12, lg 16, xl 20, xxl 24, xxxl 32.
- **Layout:** screen padding 20, card gap 16, section gap 24, option cards 12 apart, chips 8 apart, title to helper 6, label to field 8, section title to caption 4, caption to rule 10.
- **Radius:** input / banner / thumb 12, segment 10, button 14, card 16, sheet 24, chip 999, tick box 6, the round mark disc 50%.
- **Sizes:** touch 44, button 52, list row 56, thumb 72 (56 compact, 48 in a form), input 48, option card 72, icon tile 44, tab item 48, raised + 58 (in a 66 cream ring, lifted 28), safe top 54, safe bottom 34, chip tier 26, chip status 24, badge 22, points pill 26, count pill 28, toggle 51×31 with a 27 thumb.
- **Chrome:** nav row 44 tall from 62 (8 under the safe top); the title's top at 132 when there is a nav row, 126 on a pushed screen with its hairline; footer = hairline + 12 + 52 button + 46.

## The fit ring

| Size | Box | Radius | Stroke | Known radius | Known stroke | Number | Label | Label gap |
|---|---|---|---|---|---|---|---|---|
| lg | 168 | 62 | 12 | 78 | 3 | 48 | 13 | 4 |
| md | 120 | 46 | 10 | 56 | 2.5 | 34 | 12 | 3 |
| sm | 56 | 21 | 5 | 26.5 | 2 | 17 | none | |

Draw: the known track (dashed `3 5` and the low colour when known < 65), the known arc in primary, the score track, the score arc in the band colour, all rotated -90 so they start at twelve o'clock, round caps. The number and label are centred inside; the label must have at least 8 pt to the inner edge of the score stroke (the reason md grew from 96 to 120).

Bands: 85 and up "Great fit", 70 and up "Good fit", 50 and up "Some gaps", under 50 "Poor fit". The known line reads "66% known", or "Only 33% known" under 65.
