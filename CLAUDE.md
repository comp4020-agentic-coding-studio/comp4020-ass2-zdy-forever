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
