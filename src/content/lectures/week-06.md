---
title: Swing Trading
description:
  Swing trading as a case study in multi-day exposure — overnight gaps,
  event risk and capital tied up across days — built on Weeks 4–5
week: 6
date: 2027-03-29
teachers:
  - idris-fenn
slides: /decks/week-06/
related:
  - sessions/06-swing-trading
---

Swing trading is the course's first case study in **multi-day exposure**: a
position held over days or weeks sits through market closes it can't react
to, meaning overnight gaps and scheduled events can move price before a
stop even gets the chance to trigger at the level it was set. It leans
directly on Week 4's chart vocabulary and Week 5's risk toolkit — a moving
average here is introduced as a lagging summary of trend, not a standalone
buy or sell signal — and every worked example pairs an entry idea with the
stop and position size Week 5 already covered.

## The question this week answers

A position held overnight is exposed to prices the account never got to
react to. What does a complete swing trade plan look like once that
exposure, Week 4's chart vocabulary and Week 5's risk toolkit are combined?

## By the end of this lecture

- define swing trading by its typical holding period
- explain why a moving average is a lagging summary of trend, and what that
  limits it from doing
- build a full entry–invalidation–size–exit plan for a simulated setup
- explain what changes when the same idea is compressed into day-trading
  holding periods (Week 7)

## Key ideas

**Swing trading** holds positions from a few days to a few weeks — long
enough that intraday noise from Week 7 matters less, short enough that
Week 3's investing-style patience doesn't apply either. Every one of those
overnight closes is capital tied up and exposed while the market isn't
open: a stop set at $45 assumes the next available price is near $45, but a
gap caused by news released after the close can open well below it, and
the stop fills at whatever price is available next, not the price it was
set at.

A **moving average**, introduced in Week 4's arithmetic, is a **lagging**
summary: because it's an average of past closes, it only reflects a change in
trend after that change has already been underway. This course treats it as
one input for describing trend, not a trigger that says "buy" or "sell" on
its own — the strategy structure below is what actually turns an observation
into a plan.

Every swing setup in this course is described with Week 5's six parts:
observation, assumption, entry, invalidation, risk, exit. Skipping any one
of them is treated as an incomplete plan, not a shortcut.

## A worked example

A **simulated** watchlist entry, "Fernbridge Retail":

- **observation**: price has been in an uptrend for three weeks and the
  20-day moving average is sloping upward
- **assumption**: the uptrend continues rather than reverses
- **entry**: buy on a pullback to $48, near a previously observed support
  zone
- **invalidation**: a daily close below $45 would mean the support zone
  failed
- **risk**: sized per Week 5's method, at 1% of account risk
- **exit**: sell at a target of $54 (a previously observed resistance zone),
  or on the invalidation being hit, whichever comes first

## The numbers

Applying Week 5's position-sizing formula to this setup, for a $10,000
account risking 1%:

10,000 × 0.01 = $100 risk budget

Stop distance is entry minus invalidation: 48 − 45 = $3.

100 ÷ 3 = 33.3 → 33 shares

If the target of $54 is reached: reward per share is 54 − 48 = $6, so
total reward is 33 × 6 = $198 against 33 × 3 = $99 risked —
an **R-multiple** (reward divided by risk) of roughly 2:1. The R-multiple
doesn't say the trade will work; it says what's being risked relative to
what's being sought if it does.

## What a diagram would show

A **concept diagram** overlaying the four plan stages — entry, invalidation,
risk, target — directly onto a **simulated candlestick chart** with a moving
average line, so the abstract observation/assumption/entry/invalidation/
risk/exit structure and the actual price levels sit in one picture.

## Try it yourself

:::tip
Given a **simulated** setup with an entry of $30, an invalidation at $28, a
target of $35 and a $15,000 account risking 0.5% per trade, work out the
position size, the dollar risk, and the R-multiple to the target.
:::

## The takeaway

A moving average describes a trend that has already been forming — it
doesn't call a turn in advance. What makes a swing trade a plan rather than a
guess is the full structure around it: a stated invalidation and a size set
by Week 5's method, not the indicator alone. None of that structure removes
the multi-day exposure itself — a gap can still fill a stop somewhere other
than where it was set — which is exactly the risk Week 7's shorter holding
period is built to avoid. Week 7 keeps this same structure and compresses
the holding period down to hours.
