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

## This file is yours

A starting point, not a rulebook: what you add to it is the harness, and the
harness is assessed. This file and the sensors you wire into `check` carry
across the course --- both come with you into next week's repo. The prototype
doesn't: source, and the tests answering this week's published spec, stay
behind. `spec/README.md` draws the line.
## Assignment 2 course direction

The course I am building is:

**Retail Market Survival: From Your First Stock Order to Leveraged Markets**

It is a beginner-friendly course about how retail financial markets work, starting
from buying a first stock and gradually moving toward trading, leverage, futures,
options, and cryptocurrency markets.

The central idea is:

> As holding periods become shorter and financial instruments become more complex,
> price direction becomes only one part of the problem. Execution, leverage,
> position sizing, and risk become increasingly important.

Assume students have no previous finance or trading knowledge.

Do not change the course topic or its central idea unless I explicitly ask.

## Curriculum progression

The course has exactly 12 teaching weeks:

1. Market overview and basic asset classes
2. Stocks, exchanges, brokers, cash/margin accounts, and order types
3. Investing and trading styles
4. Candlesticks, volume, trends, support/resistance, and ranges
5. Risk, drawdowns, stops, position sizing, and expected value
6. Swing trading and moving averages
7. Day trading, liquidity, slippage, and VWAP
8. Short selling, margin, and leverage
9. Futures
10. Options
11. Cryptocurrency markets
12. Building a personal market rulebook

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

The final presentation content will be produced separately after the website
lecture content is complete.

Until then, deck files may contain only the minimum scaffold required for routing
and build verification.

Do not treat scaffolds as completed presentations.

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
* the major visual direction.

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


