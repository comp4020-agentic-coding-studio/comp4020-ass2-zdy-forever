---
title: Futures
description:
  Pricing and margining a simulated futures contract by hand
week: 9
date: 2027-04-19
teachers:
  - marisol-quaye
spec:
  - states the obligation a simulated futures contract creates, for both sides of the trade
  - calculates the margin and leverage on a simulated futures position, reusing Week 8's method
related:
  - lectures/week-09
---

A worked-calculation session, reapplying Week 8's margin method to a
different instrument: a futures contract's obligation instead of a stock
position's ownership.

## What you're given

A simulated futures contract's terms: contract size, current price of the
underlying, and the initial margin the exchange requires — smaller, as a
fraction of contract value, than the stock margin from Week 8.

## What you do

State the obligation the contract creates for the buyer and for the seller
(neither owns anything today), then calculate the notional value, the
implied leverage multiple, and the profit or loss from a stated price move —
using the same margin logic as Week 8, applied to a contract instead of a
stock.

## What you produce

Worked notional-value, leverage-multiple and profit/loss calculations for
both sides of the contract.

## Why it matters

This contract, and its straight-line payoff, is the reference point Week 10
compares an option against.
