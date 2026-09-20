# Your harness

This file is yours. The rules you hold the agent to are part of what gets
marked, so they should be rules you decided on.

Nothing about the starter is recorded here. What the repo ships --- where the
data lives, what a stack swap has to keep, and what the checks run --- is
documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or build;
what the agent needs to carry from either is your call.

## How to work in here

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
- Run `pnpm check` before you push.
- Open the page in a browser and look at it. The rendered page is the truth;
  your mental model of it isn't.
- When a check fails, read its output before you change anything.
- Never commit a red state.

## Background processes (pnpm/node)

- At the start of every conversation, check for stray background processes
  left running from earlier sessions before starting new ones:
  `ps -eo pid,etime,command | grep -E 'pnpm|astro|node' | grep -v grep`.
- Only one `pnpm dev` should be running for this repo at a time. Check the
  dev port isn't already bound (`lsof -i :4321`) before starting another.
- Kill any `pnpm`/`astro`/`node` background process for this repo that's been
  idle for more than 15 minutes (no recent log output, no one actively using
  it) instead of leaving it running indefinitely.

## Two CSS transitions added on the same tick can silently race

Two classes toggled together in the same frame can interact in ways that
aren't obvious from each transition's own duration: a faster transition
(e.g. a 0.25s grow) can finish before a slower one on the same element
(e.g. a 0.35s fade-in) even completes, so the fast one plays out while the
element is still mostly in its start state --- it reads as having *appeared*
already changed, not as *transitioning*. A `transition-delay` on the faster
property, so it only starts once the slower one is mostly done, is one fix.
When two state changes can land in the same tick, checking that each
transition *individually* fires isn't enough --- check what the combination
looks like against the clock (`getComputedStyle` sampled every frame, not
just before/after).

## A `width:100%; height:auto` SVG's rendered height depends on content width, not its `width`/`height` props

On astromotion's fixed 1280x720 deck canvas, a slide has a fixed vertical
budget (720px minus top/bottom padding) shared by heading, prose, and any
diagram. An SVG component styled `width:100%; height:auto` uses its
`width`/`height` props only to fix the *aspect ratio* --- actual rendered
height is `contentWidth * (height/width)`, not the prop value itself. A
component authored with a tall default aspect ratio (e.g. 640x320) can render
far taller than intended once placed at full slide width, overflowing the
budget --- and this only shows up at viewports with little scale-to-fit slack
(e.g. exactly 1.5x canvas), not at every viewport, so a quick mobile check can
miss it. Fixed once in `Candles.astro`, then carried forward as a verified-safe
640x140 default when writing `Payoff.astro`. When adding a new deck visual
component: pick an aspect ratio against the actual budget, not an arbitrary
default, and check it at a no-slack viewport, not just mobile.

## The same scaled-SVG risk also shrinks fixed-px text, not just height

Same root cause as the note above, different symptom: a `width:100%; height:auto`
SVG scales *everything* inside it by `renderedWidth / viewBoxWidth`, including
any `font-size` set in raw px on an in-SVG `<text>` element --- that px number
is a viewBox-space magnitude, not a CSS pixel, so it rides the same scale
factor as the diagram's geometry. On the three interactive lecture-diagram
components (`RiskSizing.astro`, `LeverageAmplifier.astro`, `OptionsPayoff.astro`,
all viewBox width 640), the site's own responsive layout narrows the panel
below the viewBox width at the 390px marking viewport, giving a render scale
of ~0.48 --- a label declared at `font-size: 9px` was rendering at an
*effective* ~4.3 CSS pixels on screen, illegible, while looking fine on the
1920px desktop viewport (scale ~1.33, effective ~12px) where the panel is
wider than the viewBox. A build, a typecheck, and even a static screenshot at
only one viewport all miss this --- it only showed up by opening the two
actual marking viewports and reading the text, then confirming the number
with `getComputedStyle(el).fontSize * (svg.getBoundingClientRect().width /
svg.viewBox.baseVal.width)`. Fixed with a `@media (width < 640px)` override
per label class, sized so the effective on-screen size matches what the same
label already renders at on desktop, rather than guessing a bigger number.
When adding a new SVG diagram styled `width:100%; height:auto`: any fixed-px
value on anything inside it (font-size, stroke-width without
`vector-effect: non-scaling-stroke`, etc.) is exposed to this, and needs the
same narrow-viewport check as the height budget above --- not just "does the
diagram fit," but "is everything inside it still legible at the smallest
marking viewport."

## Fixing that font-size override can break label spacing that was fine before it

The legibility fix above (`@media (width < 640px)` bumping a label's font-size
to keep it readable) introduces a second-order risk it doesn't itself protect
against: it grows a label's on-screen text *footprint*, but every position
value around that label --- gaps between adjacent labels on the same axis,
row spacing between stacked labels --- stays in viewBox units tuned against
the original, smaller font. A layout with comfortable clearance at 9px can
overlap once that same geometry holds a 25--36px label. This bit all three
of the components in the note above, in three different shapes: `RiskSizing.astro`
had three price labels sharing one horizontal row, spaced closely enough that
the lecture's own default prices (stop $45 / entry $48) collided once the
override widened them --- fixed by staggering the entry label onto its own
row, the same technique `OptionsPayoff.astro` already used for its strike/
breakeven pair. But that pair's own row gap (14 viewBox units, sized for a
9px line) was itself too small for a 25px line, so they overlapped vertically
despite already being "on separate rows" --- fixed by widening the gap to
clear a full line at the override size, not just any nonzero gap.
`LeverageAmplifier.astro` had a percentage label whose position tracked how
far its bar swung, landing right on top of a fixed label (the call-trigger
row, the ×-multiple row) once the bar swung far enough --- fixed by reserving
a fixed vertical budget sized for the override's largest font rather than a
budget derived from the desktop font. In each case `pnpm check` stayed green
throughout; the overlap only showed up by opening the 390px marking viewport
and reading the labels with real slider values, not just glancing at the
diagram's shape. When adding a narrow-viewport font-size override to a label:
check every other label it could now collide with --- on the same row, on an
adjacent row, or fixed nearby --- at *that* font size, not the desktop one.

## The same override can also clip a label against the SVG's own edge, not just against another label

A fourth shape of the same root cause, found after the three above were fixed:
a label near `y="0"` or `y="HEIGHT"` doesn't need a neighbour to collide with
--- the SVG element itself clips it. A `<text>`'s glyphs extend *above* its
baseline by the font's ascent (roughly 0.75--0.9 of the font size) and *below*
it by the descent; a baseline placed a few units down from `y="0"` is safe
for a 9px line's small ascent but not for the same label's 25px override,
whose ascent alone can exceed the distance to the edge. The outermost `<svg>`
clips to its viewBox by default (`overflow: hidden` is the UA default there,
unlike ordinary HTML elements), so the sliced-off pixels don't overflow into
visible space --- they just vanish, reading as a chopped-off word ("strike"
missing its top few pixels) rather than an obviously misplaced one. Found in
`OptionsPayoff.astro`'s strike label (`y="16"`, safe at 9px, clipped at the
25px override) and pre-emptively fixed in the same way in `RiskSizing.astro`
(stop/target labels at `y="8"`) and `LeverageAmplifier.astro` (the call label
at `y="12"`, the ×-multiple label near the bottom edge) before a screenshot
caught them too. Fixed with `overflow: visible` on each `.risk-svg`/`.opt-svg`/
`.lev-svg` rule rather than re-tuning each `y` against a guessed ascent metric
--- letting the overflow render into the empty margin already reserved around
the diagram is robust to whatever the actual font's metrics turn out to be,
where a y-nudge is only as good as the number it was guessed against. When a
label sits within roughly one font-size of `y="0"` or the SVG's bottom edge,
check it at the override's font size specifically, or give the SVG
`overflow: visible` up front instead of waiting to find the clip.

## The same override can also push a label past its neighbour horizontally, not just vertically

A fifth shape: the override doesn't only grow a label's height, it grows its
width, and a label whose *content* is long text (a phrase, not a number) can
outgrow the horizontal space its column has --- even before the mobile
override, in the wrong content case. `LeverageAmplifier.astro` lays out four
leverage columns side by side, evenly dividing the viewBox width; three of
its four label kinds (`±NNN%`, `N×`) stay short at any input, but the fourth
(`margin call` / `calls at −34.0%`) is long enough, and the columns narrow
enough at four-across, that its rendered width at the 25px override exceeds
a single column's share of the width --- reading as adjacent columns' labels
merging into one run of text. Unlike the vertical cases above, a fixed
`y` nudge or a wider reserved margin doesn't apply --- the label's width
depends on its *content*, which changes with the leverage and the slider
values, not on a fixed geometry constant. Fixed by measuring the rendered
width at runtime (`text.getComputedTextLength()`) after setting the dynamic
text, and only when it exceeds that column's budget, compressing it in place
with SVG's native `textLength`/`lengthAdjust="spacingAndGlyphs"` --- which
keeps the label at the same font-size as its siblings (so it doesn't look
inconsistent) rather than shrinking a phrase-length label down to a size
small enough to fit any input, which would have made it the smallest, hardest
label on the diagram. When a label's text is a phrase rather than a short
fixed-format number, and its column/slot width is shared across several
instances of that label, check the width of its *longest* real content, not
just its height, against the slot it has to fit in.

## This file is yours

A starting point, not a rulebook: what you add to it is the harness, and the
harness is assessed. This file and the sensors you wire into `check` carry
across the course --- both come with you into next week's repo. The prototype
doesn't: source, and the tests answering this week's published spec, stay
behind. `spec/README.md` draws the line.

## Assignment 2 course direction

The course I am building is:

**Retail Market Survival: Risk, Leverage and Execution for Small Accounts**

It is a beginner-friendly course about why and how a small retail trading
account can lose capital or be forced to stop trading — starting from the
first cost a stock order absorbs and moving through drawdowns, leverage, and
the increasingly complex instruments (futures, options, crypto) that shorten
the distance to a forced exit.

The central question is:

> How can a small retail trading account survive execution friction,
> drawdowns, leverage, and increasingly complex instruments?

This was deliberately narrowed from an earlier, broader framing — "from your
first stock order to leveraged markets," a tour of retail-trading instruments
in order — to a single sustained investigation of account survival. Each week
is now a mechanism through which capital is lost or trading is forced to
stop, not one stop on a tour of instruments.

Assume students have no previous finance or trading knowledge.

Do not change the course topic or its central idea unless I explicitly ask.

The current redesign task is about the website's identity and layout. Do not
narrow, rename, or rewrite the course merely to make it seem more niche unless
I explicitly ask for a curriculum/content change.

## Curriculum progression

The course has exactly 12 teaching weeks:

1. The small-account problem — limited capital, drawdowns, costs and forced exits (basic market/asset-class orientation is supporting material, not the subject)
2. Exchanges, brokers, and order types, framed as the first source of execution friction (displayed price vs. executable price)
3. How holding period changes which risks and costs dominate, from investing through swing to day trading
4. Chart structure as a way to define entries, invalidation and risk boundaries — not a prediction tool
5. Risk, drawdowns, stops, position sizing, expected value, and risk of ruin — the course's center of gravity
6. Swing trading as a case study in multi-day exposure: gaps, event risk, stop-execution uncertainty
7. Day trading, liquidity, slippage and VWAP, where execution friction becomes a real share of expected return
8. Short selling, margin and leverage, framed as shortening the distance to a forced exit
9. Futures as a case study in embedded leverage, notional exposure and forced liquidation
10. Options as a case study in nonlinear risk — bounded loss, total premium loss, and misjudged payoffs
11. Cryptocurrency markets as the course's most extreme survival case: 24/7, custody, high leverage/liquidation
12. A small-account survival rulebook, synthesising sizing, leverage limits, instrument restrictions and when to stop trading altogether

Treat this as one semester-long progression, not twelve independent finance topics.

Later weeks should build on concepts introduced earlier. In particular:

* Week 6 should use the chart-reading and risk concepts from Weeks 4–5.
* Week 7 should build on Weeks 4–6.
* Week 8 introduces leverage before leveraged derivatives.
* Week 9 introduces futures before the more complex payoff structure of options.
* Week 12 synthesises ideas from across the whole course.

Do not reorder or substantially change the purpose of a week unless I explicitly
ask.

Avoid duplicate learning outcomes, examples, or activities disguised with
different terminology.

## Teaching content

Explain new financial concepts from first principles.

Prefer:

* concrete examples;
* small worked calculations;
* diagrams;
* realistic market scenarios;
* explanations of why a mechanism exists;
* clear descriptions of risks and limitations.

When teaching a trading strategy or indicator, distinguish between:

* observation;
* assumption;
* entry condition;
* invalidation;
* risk;
* exit logic.

Do not present moving averages, VWAP, candlestick patterns, or other indicators
as reliable standalone buy/sell signals.

Clearly label simulated trades and simulated market data as simulated.

Do not invent real-world statistics, historical returns, regulations, citations,
URLs, quotations, or market facts.

## Writing voice

Use a serious educational tone with occasional dry humour.

The site should not sound like:

* a trading guru;
* a brokerage advertisement;
* a crypto promotion;
* a get-rich-quick course.

Do not promise profitability.

Avoid generic AI phrasing such as:

* "In today's rapidly evolving..."
* "This week we will explore..."
* "Unlock the power of..."
* "Master the art of..."
* "It is important to note..."
* vague claims that something is "powerful", "transformative", or "essential".

If a paragraph could be pasted unchanged into an unrelated university course,
make it more specific.

## Website visual direction

The course content is already established. The next design priority is to make
the website feel purpose-built for this course rather than like COMP4020 with
different words.

The site must have its own visual identity and information architecture.

**Core visual idea**

Treat the website as a retail market learning terminal / trading field manual,
not as a generic university course website.

The visual language may borrow from market interfaces and trading workspaces,
but it must remain readable, calm, educational, and clearly distinct from a
brokerage platform.

Useful motifs include:

* market-terminal style information hierarchy;
* compact status labels and metadata;
* restrained chart/grid references;
* week progress presented as progression through market skills;
* small "tools introduced", "market context", or "risk level" metadata where
  it genuinely helps;
* diagrams and market examples integrated into the page rather than
  decorative finance imagery.

Do not turn the site into a fake Bloomberg terminal, casino interface, crypto
exchange, or neon cyberpunk dashboard.

**Do not reproduce COMP4020's layout**

Do not use COMP4020's course site as the default page template.

In particular, avoid solving the redesign by keeping the same:

* homepage composition;
* navigation hierarchy;
* week-list structure;
* repeated lecture-card layout;
* section proportions;
* typography scale;
* spacing rhythm;
* border/card treatment;
* lecture-page composition;

and merely replacing the text, colours, or course name.

The final site should still be recognisably a course website, but a
side-by-side comparison with COMP4020 should show a different design system
and different information architecture, not a reskin.

**Homepage**

The homepage should establish the course idea immediately.

Prefer a strong course overview that communicates:

* the progression from first stock order to leveraged markets;
* the 12-week journey;
* what students will learn to do;
* how risk and execution become more important as complexity increases.

Do not default to a generic hero followed by twelve identical week cards.

A grouped progression is preferable, for example:

* Foundations;
* Reading Markets;
* Trading and Execution;
* Leverage and Derivatives;
* Personal Rulebook.

These groups are presentation structure only. They must not change the
approved Week 1–12 curriculum.

**Week and lecture pages**

Each week should feel like one stage in a progression rather than an isolated
article.

Where useful, week pages may expose compact course-specific metadata such as:

* concepts introduced;
* tools introduced;
* market context;
* prerequisite weeks;
* risk concepts used;
* assessment relevance.

Do not add metadata merely for decoration.

Lecture pages should prioritise learning flow:

* the week's question or problem;
* core explanation;
* worked examples / diagrams;
* risk or limitation;
* activity / application;
* lecture deck access.

This is a content hierarchy, not a mandatory identical visual template for
every page.

**Navigation**

Navigation should be designed around this course rather than copied from the
starter or COMP4020.

It should make it easy to move between:

* course overview;
* the 12-week progression;
* assessments;
* individual lectures/decks.

Avoid unnecessary navigation items and avoid reproducing another course site's
labels simply because they already exist.

**Visual consistency**

Create one coherent visual system for the whole course and all twelve decks.

Reuse typography, spacing, diagram language, and component patterns
deliberately, but allow different page types to have different compositions.

Consistency does not mean every page must be built from the same card grid.

**Restraint**

The site should feel authored rather than generated.

Avoid:

* excessive gradients;
* decorative stock-price tickers with no teaching purpose;
* fake live market data;
* fake account balances or profit claims;
* large amounts of meaningless dashboard chrome;
* repeated generic feature cards;
* decorative animations that compete with reading;
* visual clutter added only to make the site look "financial".

Prefer fewer, stronger visual decisions.

**Redesign boundary**

When redesigning the site, preserve the approved:

* course topic and central idea;
* Week 1–12 curriculum;
* assessment names and weights;
* lecture/deck mapping;
* assigned SLOP course code;
* factual teaching content.

Layout, component structure, navigation, typography, spacing, and visual
hierarchy may be substantially changed to establish the new course identity.

Before a large visual rewrite, inspect the current site and identify which
structures are inherited from or too similar to COMP4020. Replace those
structures deliberately rather than applying a cosmetic reskin.

Visual distinctness is a judgement call. Do not create a fake automated test
that claims to measure whether the site "looks different enough". Verify it
by opening the rendered site and comparing the actual page structure and
visual hierarchy.

## Assessments

The approved assessment structure is:

* **Market Mechanics Notebook — 20%**
* **Strategy Lab — 35%**
* **Personal Market Rulebook — 45%**

The total must remain exactly 100%.

Do not change assessment names or weights while working on unrelated parts of
the site.

Assessment tasks must rely on concepts taught before they are due.

## Lecture decks

Every teaching week must have its own lecture deck.

There are exactly 12 decks, one for each Week 1–12 lecture.

Each lecture must link to the matching deck, and deck numbering must match the
lecture week.

Final presentation content has been delivered for all 12 weeks as an online
preview only (`src/decks/week-NN.deck.mdx`, rendered at `/decks/week-NN/`,
linked from the matching lecture page). Decks are no longer scaffolds.

There used to also be a downloadable PowerPoint per week
(`public/slides/week-NN.pptx`); that download feature and the files behind it
have been removed. Do not reintroduce a pptx download link or regenerate
`public/slides/*.pptx` unless explicitly asked.

Do not independently redesign deck styling from week to week. All twelve final
decks should share one visual system derived from the finished course website.

## Course-specific checks

Use `spec/` for course promises that are objective and machine-checkable.

Useful checks include:

* exactly 12 teaching weeks;
* week numbers cover 1 through 12 exactly once;
* twelve distinct teaching dates;
* distinct week titles;
* required weekly content exists;
* assessment weights total exactly 100%;
* the assigned SLOP course code remains unchanged;
* the completed Week 7 deck exists;
* Week 7 links to the deck;
* known starter course/person/assessment placeholders no longer ship.

Do not create fake automated measures for subjective qualities such as whether
the course is interesting, coherent, human-sounding, or visually attractive.

Do not weaken or delete a failing test merely to make `pnpm check` pass.

When the same mechanically detectable mistake happens more than once, consider
adding a regression check rather than repeatedly fixing individual instances.

## Protect course-level decisions

Do not silently change:

* the course topic;
* the central idea;
* the 12-week progression;
* assessment names or weights;
* the Week 7 deck choice;
* the assigned SLOP code;
* the course-specific visual direction defined in this file.

If an implementation decision conflicts with one of these, surface the conflict
instead of deciding it silently.

Prefer bounded changes over large unrelated rewrites.

Do not commit or push unless I explicitly ask.

## Harness maintenance

When something goes wrong, do not automatically treat it as a one-off patch.

Ask whether the failure means:

1. the current content needs fixing;
2. a standing rule is missing from this file; or
3. a machine-checkable promise should be added to `spec/`.

Only add rules here when they are likely to remain useful across future work.
Do not turn this file into a log of one-off task instructions.
