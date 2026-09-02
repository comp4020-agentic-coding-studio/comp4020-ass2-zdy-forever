---
title: Options
description:
  Builds on Week 9's futures groundwork to introduce options and their more
  complex, non-linear payoff structure
week: 10
date: 2027-04-26
teachers:
  - idris-fenn
slides: /decks/week-10/
related:
  - sessions/10-options
---

Options are introduced as a right, not an obligation — the distinction Week
9's futures lecture set up by contrast. This lecture covers calls, puts,
premium and the basic payoff shapes, and is explicit about where a beginner's
intuition from stocks and futures stops transferring cleanly.

## The question this week answers

How does trading a *right* instead of an *obligation* change both the payoff
shape and the risk, compared to the futures contract from Week 9?

## By the end of this lecture

- distinguish a call option and a put option as rights, not requirements, to
  act
- define premium, strike price and expiry
- calculate a call option's payoff and breakeven price at expiry
- compare an option's payoff shape to the linear futures payoff from Week 9
- identify where intuition carried over from stocks or futures tends to
  mislead with options

## Key ideas

A **call option** gives its buyer the right, but not the obligation, to buy
an underlying asset at a set **strike price** on or before **expiry**. A
**put option** gives the right to sell instead. This is the core distinction
from Week 9: a futures contract obligates both sides; an option's buyer can
simply let it expire unused.

That right isn't free — it costs a **premium**, paid upfront, which is also
the buyer's maximum possible loss: if the option expires with no value, the
premium is gone, and nothing further is owed. This bounded-loss property is
a genuine structural difference from Week 8's short position, which had no
loss ceiling at all — but it comes at the cost of the premium being a real,
certain expense regardless of outcome, and a smaller price move than
expected can still mean a total loss of that premium.

## A worked example

A **simulated** trader buys one call option contract (covering 100 shares)
on a stock, with a strike price of $50 and a premium of $2 per share
($200 total for the contract).

## The numbers

**Payoff if the stock is at $55 at expiry:**

(55 − 50) × 100 = $500 intrinsic value, minus the $200 premium paid,
for a net profit of $300.

**Breakeven price** — the price at which the payoff exactly covers the
premium:

breakeven = strike + premium = 50 + 2 = $52

**Payoff if the stock is at $48 at expiry** (below the strike): the option
has no value, and the loss is simply the premium paid, $200 — the same
loss as if the stock had fallen to $30 or to $1. Unlike Week 8's short
position, the loss doesn't grow as the price moves further against the
position; it's capped at what was paid upfront.

## What a diagram would show

A **payoff diagram**: a bent line, flat (at the premium's negative value)
below the strike price and rising at a constant slope above it — plotted
next to Week 9's straight futures payoff line, so the "kink" at the strike is
visibly the structural difference between the two instruments.

## Try it yourself

:::tip
For a **simulated** put option with a strike of $40 and a premium of $1.50
per share, calculate the payoff and profit if the stock is at $35 at expiry,
and the breakeven price below which the position turns a profit.
:::

## The takeaway

An option's bounded loss is a real structural difference from a short stock
position, not a reason to treat options as a lower-risk way to always have a
position on: the premium is a certain cost, time works against a bought
option as expiry approaches, and a right that expires worthless still costs
exactly what was paid for it.
