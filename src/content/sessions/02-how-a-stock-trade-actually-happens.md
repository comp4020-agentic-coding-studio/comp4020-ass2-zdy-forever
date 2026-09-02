---
title: How a Stock Trade Actually Happens
description:
  Placing and tracing a simulated stock order end to end, from order type to
  fill
week: 2
date: 2027-03-01
teachers:
  - idris-fenn
spec:
  - places at least one simulated market order and one simulated limit order
  - can explain, for their own simulated order, why it filled where it did
---

An order-diagnosis session applying Week 2's market/limit-order and bid/ask
distinction to two orders you place yourself.

## What you're given

The simulated account from Week 1, live simulated bid/ask quotes on a shared
instrument, and the two order types from this week's lecture: a market order
(fills now, at whatever the best available price is) and a limit order
(fills only at your price, or not at all).

## What you do

Place a simulated market order and a simulated limit order on the same
instrument, then diagnose the gap between them: where each one filled, why
the market order paid the ask rather than the mid-price, and whether the
limit order filled at all.

## What you produce

Both simulated fills (or the limit order's non-fill), plus a short written
diagnosis of why they differ — this is the gap the session exists to make
visible, not a side effect of it.

## Why it matters

That diagnosis feeds directly into the Market Mechanics Notebook, and Week 3
assumes you already have a simulated order to reflect on.
