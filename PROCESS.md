# Process overview

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable. **TODO: re-check this section's length against that
page's word count before submitting — it hasn't been checked against the live
page.**

## What I built

A twelve-week beginner course, *Retail Market Survival: From Your First Stock
Order to Leveraged Markets*, built on the astro-theme-university starter:
lectures, sessions, assessments, staff pages and a matching set of twelve
Reveal.js lecture decks, one per teaching week, all styled from one shared
gold/copper/warm-grey visual system rather than redesigned week to week. The
course runs stocks → styles → risk → strategy → leverage/derivatives →
crypto → a personal synthesis rulebook, and the assessments (Market Mechanics
Notebook 20%, Strategy Lab 35%, Personal Market Rulebook 45%) sit at the
mechanics/strategy/synthesis points of that progression rather than being
independent of it.

## How I got here

`CLAUDE.md` is the harness I actually worked under for this repo — it's the
file the agent read before touching anything, and its rules (protect the
course topic/progression/assessment weights from silent change, run
`pnpm check` before pushing, never commit a red state, prefer bounded changes,
surface a course-level conflict instead of deciding it silently) shaped every
stage below, not just the deck-writing one.

**TODO: paste your own original prompt(s) here if you want that texture** —
the template asks for a curated quote next to each citation; I'm not
inventing one I don't have a verbatim record of. The session transcripts have
the exact wording if you want to pull from them.

The work landed as a sequence of commits, each a stage boundary:

- [`190d545`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/190d545)
  assigns the course its SLOP code, and
  [`d66cb2c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/d66cb2c)
  carries the harness forward from the previous crit — the starting point,
  not new work.
- [`59cf848`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/59cf848)
  adds this assignment's own contract tests to `spec/`, before any content
  changed, so later stages had something to fail against if they broke a
  promise.
- [`977c23d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/977c23d)
  locks in the course direction — topic, 12-week progression, assessment
  names and weights — as the fixed points everything after it had to respect.
- [`edbbb27`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/edbbb27)
  replaces the starter's placeholder content (sessions, assessment briefs,
  staff bios, home page, policies) with the course's own.
- [`2308686`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/2308686)
  establishes the shared deck visual system — the `theme.css` primitives
  (`.risk-callout`, `.calc-block`, `.timeline`, `.comparison-grid`, `.activity`,
  `.recap-list`) and the four `_class` directives every deck uses, built
  *before* any deck content, so no deck had to invent its own styling.
- [`e3e69ed`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/e3e69ed),
  [`9c6d00d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/9c6d00d)
  and
  [`6453928`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/6453928)
  replace the twelve deck scaffolds with real content in three batches
  (Weeks 1–4, 5–8, 9–12), each batch followed by a full browser check —
  1920×1080 and 390×844, title/dense/visual/final slide of every deck in the
  batch — rather than trusting the build succeeding as proof the decks were
  readable.
- [`7ae7844`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/7ae7844)
  records a harness lesson found during that verification (below) so it
  doesn't have to be rediscovered next time a deck component is added.

**How I knew the result was right, beyond `pnpm check` passing:**

1. **The rendered deck is the truth, not the build log.** `pnpm check` was
   green through every stage above, and it still would have been green with
   a defect a build can't see: `Payoff.astro`'s predecessor component
   (`Candles.astro`) used a `width:100%; height:auto` SVG whose *rendered*
   height depends on content width and the prop-set aspect ratio, not the
   height prop's raw number — a tall default aspect ratio overflowed the
   deck's fixed vertical slide budget, but only at viewports with little
   scale-to-fit slack, so a mobile-only check would have missed it. This
   only turned up by opening the actual page and looking, at more than one
   viewport size — caught, fixed, and then deliberately avoided when writing
   `Payoff.astro` from the same verified-safe aspect ratio. Recorded as a
   standing harness rule in
   [`7ae7844`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/7ae7844)
   rather than left as a one-off fix, since it's exactly the kind of defect
   likely to recur the next time a deck gets a new visual component.
2. **A second pass audited what a single-file check can't.** After all
   twelve decks existed, a second read-through checked things that only show
   up when every deck is considered together: terminology drift between
   weeks for the same concept (none found — e.g. "margin call" in Week 8 and
   "liquidation" in Week 11 are deliberately the same mechanism under a
   different label, not drift), duplicated activities disguised as different
   ones (none — the one repeated activity-label, "Calculate," legitimately
   recurs on three different calculations, not the same one three times),
   whether a week's claim about another week's numbers was actually correct
   (checked and correct — e.g. Week 11's citation of Week 8's worked
   example), and whether every deck used only the shared visual primitives
   with no invented per-deck styling (true of all twelve). The same pass
   checked assessment alignment: every concept a brief requires is taught
   before its due date, and the three weights still sum to exactly 100%
   under the approved names.
3. **One course-level observation was flagged, not silently fixed.** Week 1
   frames "leveraged stock positions (margin, short selling)" as one of five
   asset classes, when it's arguably a trading mechanism applied to an asset
   class rather than a class of its own. This touches the course's
   foundational framing rather than being a mechanical slip, so per
   `CLAUDE.md`'s instruction to surface a course-level conflict rather than
   decide it silently, it was left as-is and flagged here for a human call.

## Before you ship

`pnpm check:evidence` verifies that the template comment above is gone, that
citations resolve to real commits, and that `CLAUDE.md` is present; this
repo's reflection check is a no-op (`reflections/`: none needed — an
assignment's written account is this file). It checks that the account is
traceable, not that it is good: that is the marker's call.

**Remaining before submission**: check this file's length against the
assessment page's word-count section (linked above) and trim — it currently
runs a bit long on purpose, to leave you material to cut rather than pad.
