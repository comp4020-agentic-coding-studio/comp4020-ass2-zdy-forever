# Reflection

## What was the breakthrough that moved the work forward?

The breakthrough was catching that pnpm check passing and the site being green tells you almost nothing about whether a page actually works for someone looking at it. A width:100%; height:auto SVG scales everything inside it — font size, spacing, stroke width — by the ratio of rendered width to viewBox width, and that scaling broke a label in four different ways across three components: overflowing its slide, shrinking past legibility, colliding with a neighbour, and getting clipped by the SVG's own edge. Every one of those passed the build. None of them showed up until I opened the actual page at the actual marking viewport and read the text. The fix wasn't a smarter automated check — it was accepting that some defects only exist at the level of "does a human looking at this screen see the right thing," and that no test suite replaces that look.

## What did this change about who I want to be as a developer?

I want to stop treating "tests pass" as a stopping point. The bug that mattered here was invisible to every mechanical check I had and would have shipped straight to a marker's screen. Core functionality isn't just "does the code run" — it's "does the thing a user actually sees work," and that only shows up if I go look, at the sizes and conditions a real user will hit, not the one I happened to check first.