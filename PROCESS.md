# Process overview

From the brief to the harness behind it.

## What I built

*Retail Market Survival: From Your First Stock Order to Leveraged Markets* —
twelve weeks running from a first stock order to futures, options and crypto,
with one argument underneath: as holding periods shorten and instruments
complicate, price direction stops being the whole problem, and execution,
leverage, sizing and risk take over.

## What I decided a good course looks like, and what I did with it

Four things, settled up front. 

Every week belongs to that one argument rather
than being a standalone finance topic. 

Weeks load onto each other instead of
sitting in parallel. 

No week quietly carries twice another week's weight.


Assessment is answerable from what has already been taught.

The first and fourth went into the harness whole.
[`977c23d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/977c23d)
writes the twelve weeks into `CLAUDE.md` guarded by *do not reorder or
substantially change the purpose of a week unless I explicitly ask*, and fixes
the three assessment names and weights beside *assessment tasks must rely on
concepts taught before they are due*. Their mechanical half went to `spec/`:
[`59cf848`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/59cf848)
added contract tests before any content existed, so later stages had something
to fail against, and `977c23d` sharpened them into what runs now — twelve
lectures and twelve sessions, weeks 1 through 12 exactly once, distinct titles
and teaching dates, weights of 20/35/45 summing to 100, every lecture pointing
at its own week's deck and no other's.

The second went in half, on purpose. `CLAUDE.md` names the dependencies — Week 6
uses Weeks 4–5, Week 8 introduces leverage before the leveraged derivatives in
9–11, Week 12 synthesises — but only their scaffolding is asserted. Whether Week
10 genuinely picks up Week 9's contrast between an obligation and a right is a
reading judgement.

Difficulty I left out deliberately. The twelve lectures do share one
eight-section spine and four or five outcomes each, but I hold that by hand: a
person reads the week, judges the load, then tells the agent what to change. The
machine holds a structure steady once I set it; it does not set it. That is a
standing `CLAUDE.md` rule — no fake automated measures for subjective
qualities — and it governs the redesign in
[`2565c4b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/2565c4b),
which rebuilt the site as a market terminal rather than a COMP4020 reskin and
forbids any test claiming to measure whether it "looks different enough".

Because this is a curriculum, structure preceded content throughout: one shared
deck visual system
([`2308686`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/2308686))
before any deck, the course content
([`edbbb27`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/edbbb27))
before the twelve decks written against it
([`edbbb27...6453928`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/compare/edbbb27...6453928)).

## How I knew the result was right

Three ways, because the promises are three kinds. The structural ones the suite
owns: `pnpm check` runs sixteen of them against the built output. The teaching
ones I read for, since no test separates a genuine callback from a restated one.
The rendered page I open myself — *the rendered page is the truth; your mental
model of it isn't*, carried forward in
[`d66cb2c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/d66cb2c)
— and that is where a green build lies to you.

It did. Three interactive diagrams were garbled at the 390px marking viewport
while the suite stayed green, from one cause: a narrow-viewport font-size
override grows a label's footprint without growing the geometry tuned around it.

![Week 5 risk diagram at 390px, before and after the fix](docs/label-overlap-390.png)

Per `CLAUDE.md`'s triage rule — content, missing rule, or missing check — the
four failure shapes it produces went into the harness
([`be1c716`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/be1c716),
after the aspect-ratio lesson in
[`7ae7844`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-zdy-forever/commit/7ae7844))
rather than three patched diagrams, so the next one is caught before it ships.
