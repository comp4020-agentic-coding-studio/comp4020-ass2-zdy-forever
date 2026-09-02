---
title: Futures
description:
  The first derivative instrument, introduced before the more complex payoff
  structure of options in Week 10
week: 9
date: 2027-04-19
teachers:
  - marisol-quaye
slides: /decks/week-09/
related:
  - sessions/09-futures
---

Futures are introduced as a contract, not a stock: an obligation to buy or
sell at a set price on a set date, built on top of the margin and leverage
mechanics from Week 8. Deliberately covered before options, since a futures
contract's payoff is a straight line — the simplest possible setup for the
kinked payoff options introduce next week to be compared against.

## The question this week answers

What is a futures contract actually obligating a trader to do, and how does
the leverage from Week 8 show up here without a separate margin account
decision?

## By the end of this lecture

- define a futures contract as an obligation, not a choice to act
- explain how Week 8's margin and leverage concepts apply to a futures
  position
- explain contract size, expiry and rollover in plain terms
- calculate the leverage multiple implied by a futures contract's margin
  requirement
- explain why a futures payoff is linear

## Key ideas

A **futures contract** is a standardised agreement to buy or sell a set
quantity of something at a set price on a set future date — unlike a stock,
there's no ownership changing hands today, only an obligation that settles
later (or is closed out before then). Futures exist on far more than
physical goods; this course treats them generically, as a contract shape,
not a commodities course.

Futures don't use a margin *account setting* the way Week 8's stock example
did — the required margin (called **initial margin** here) is set by the
exchange as a fraction of the contract's total value, and it's typically a
much smaller fraction than stock margin allows, which is why futures
leverage is usually far higher by default. **Contract size** is the quantity
one contract represents; **expiry** is the date the obligation settles;
**rollover** is closing a contract before expiry and opening an equivalent
one with a later expiry, to keep a position open without taking delivery.

A futures contract's payoff is **linear**: profit or loss moves by a fixed
amount for every unit the price moves, in either direction, without limit —
the simplest payoff shape this course covers, and the baseline Week 10
compares an option's payoff against.

## A worked example

A **simulated** futures contract represents 100 units of an underlying
priced at $50, for a notional value of $5,000. The exchange requires $500 of
initial margin to hold one contract.

## The numbers

**Notional value and leverage multiple.**

notional value = 100 × $50 = $5,000

leverage multiple = notional value ÷ margin required = 5,000 ÷ 500 = 10x

**Effect of a price move.** If the underlying moves $2 (a 4% move):

P/L = 100 × $2 = $200

That $200 is 200 ÷ 500 = 40% of the margin actually put up — a 4%
move in the underlying produced a 40% move relative to the trader's own
capital, which is the leverage multiple doing exactly what it says.

## What a diagram would show

A **payoff diagram**: a single straight line running through the entry price
on the horizontal axis, profit above and loss below, with no bend anywhere
along it — deliberately the simplest payoff shape in the course, so Week 10's
kinked line stands out by contrast.

## Try it yourself

:::tip
For a **simulated** contract representing 50 units of an underlying priced
at $80, requiring $400 initial margin, calculate the notional value, the
leverage multiple, and the dollar P/L from a $3 move in the underlying.
:::

## The takeaway

A futures contract's leverage is fixed by its margin requirement, not chosen
account-by-account the way Week 8's stock margin was — and its payoff is a
straight line, moving by a constant amount per unit of price change in
either direction. Week 10 keeps the obligation-versus-right distinction in
view while introducing a payoff that bends.
