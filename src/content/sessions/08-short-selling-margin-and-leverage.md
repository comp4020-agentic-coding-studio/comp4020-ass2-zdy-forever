---
title: Short Selling, Margin and Leverage
description:
  Working a simulated margin call by hand, so leverage stops being an
  abstract multiplier
week: 8
date: 2027-04-12
teachers:
  - idris-fenn
spec:
  - calculates the margin requirement for a given simulated leveraged position
  - works through a simulated margin call and states what closes the position
---

A risk-analysis session: taking this week's margin and leverage arithmetic
and running it against a position until it actually breaks.

## What you're given

A simulated leveraged long position and a simulated short position, each
with a stated own-money amount, borrowed amount and maintenance-margin
percentage.

## What you do

For the long position, calculate the margin requirement and work out the
price move that triggers a margin call. For the short position, calculate
how the loss grows as the price rises and compare its shape to the long
position's capped downside. State, for both, exactly what closes the
position and when.

## What you produce

Worked margin and margin-call calculations for both positions, plus a short
written comparison of why the short's loss profile looks different from the
long's.

## Why it matters

This arithmetic is reused, not retaught, when Futures and Options apply
margin to derivatives instead of stocks — Week 9 assumes you can already do
this by hand.
