# Words

The voice is a friend who has bought a house before: plain, warm, short, honest about what the app does not know.

## Rules
- "You" and "your". Never "the user", never "please".
- One sentence per line. Titles are a question or a plain noun phrase: "Who's buying?", "What's your budget?", "Your places", "Today's route", "Viewing done".
- The helper is one sentence that says what to do or what this is: "Tap a pin to see the house." "2 open homes, numbered in the order you'll visit them."
- Buttons are verbs with an object: "Get started", "Save places", "Start viewing", "Share PDF", "Open phone settings". "Continue" for a step, "Next" for an intro page, "Got it" to close an explanation, "Done" to leave a summary.
- Captions explain once, near the thing: "Known = how much of your priorities we have data for." appears once per screen, as a caption, the first time "Known" is used.
- No exclamation marks. No dashes of any kind; use a full stop, a comma or a middle dot (·). NZ/UK spelling (colour, organise, neighbourhood). Numbers as digits.
- Say what the app is doing with private things in a caption row with a lock: "Private to your house hunt. Never shared with agents."
- Disclaimers are one caption, not a paragraph: "Dashed lines are straight, not the road. The road route shows once it's saved."
- Never promise something the screen does not show ("Here's what you rated lowest" needs the list under it).

## The agreed vocabulary (Dream House Hunt)
- "Priorities" for the tab, "Your priorities" for the title; "priority" for one item.
- "points", never "weights". "34 pts" in pills, "100 points" in prose.
- "fit", "fit score", "Good fit" / "Some gaps" / "Great fit" / "Poor fit".
- "Known" always with its gloss nearby.
- "Home Recipe" only in the one line "We call this your Home Recipe."
- "house hunt" (not project, not search); "co-buyer" (not partner) on screens, "Together" for the combined score.
- "open home" (NZ/AU), "open house" (US/CA), "viewing" (UK/IE): the local word comes from the region pack as a placeholder, so write `{{openHome}}` in a word list, not the word.
- "Check at the viewing" for a priority with no data yet; "Red flag"; "Questions for the agent"; "Gut feel 4 of 5".
- "Add a house" (never import, scrape, fetch); "Check these facts"; "Tap to add"; "More ways".
- "Before you start" for the one permissions sheet; "Camera off" for the denied state.
- "Remove ads", "Ads are not personalised".

## Addresses and sample data
- On screens: street, then suburb ("7 Sample Avenue" / "Mount Eden"). One line in rows: "7 Sample Avenue, Mount Eden". City, postcode and country only in a PDF and in screen-reader labels.
- Mockups that are not reviews of real screenshots use invented places: "7 Sample Avenue", "12 Sample Street", "Sample Suburb". Prices like "Asking NZ$1,150,000" are fine.
- People in samples are first names only ("michael", "Priya"); emails are `name@example.com`.

## Three languages
Dream House Hunt ships English, 简体中文 and 繁體中文. English (`en.json`) is the source. When words change:
1. Change the English keys and delete keys the screen no longer uses.
2. Run `pnpm check-translations --list` to see what needs translating.
3. Write the zh-Hans (mainland) and zh-Hant (Taiwan usage: 登入, 設定, 帳號) lines following the app's `chinese.md`: 你 not 您, full-width punctuation, no exclamation marks or dashes, a half-width space between Chinese and numbers or Latin, every `{{placeholder}}` kept, plurals only as `_other`.
4. Run `pnpm check-translations --mark-translated`.
A line left in English only is not finished, even though the CI check only fails on a placeholder mismatch, a removed key or a `_one` form.

## Writing a review sticky
Under 420 characters. The verdict first ("15 s: Fix." / "15 s: passes."), then the measured faults with numbers ("gaps run 11 / 22 / 27"), then what option A does and what B does, then what is new and flagged for the owner ("'More ways' is a new label, flagged"). No praise, no hedging.
