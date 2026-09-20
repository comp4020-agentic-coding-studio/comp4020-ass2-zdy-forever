---
title: Day Trading
description:
  Day trading, liquidity, slippage and VWAP — where execution friction
  becomes a large share of expected return, not a rounding error
week: 7
date: 2027-04-05
teachers:
  - marisol-quaye
slides: /decks/week-07/
related:
  - sessions/07-day-trading
---

Day trading compresses everything Weeks 4–6 covered into a much shorter
holding period, which is why liquidity, slippage and VWAP matter here in a way
they didn't yet at swing-trading speed: a bid/ask spread that was noise over a
week can be the whole trade over an hour. This week's thesis, stated
plainly: as holding periods shorten and turnover rises, execution friction
stops being a rounding error and becomes a real share of expected return.
This lecture also bridges into Week 8, where leverage raises the stakes on
everything covered here.

## The question this week answers

What actually changes, mechanically, when a position is held for hours
instead of days or weeks?

## By the end of this lecture

- explain what changes about execution costs when holding periods shrink to
  intraday
- define liquidity and slippage, and how they relate to the bid/ask spread
  from Week 2
- calculate VWAP from a simulated sequence of intraday prices and volumes
- build a structured day-trade plan and identify common beginner mistakes

## Key ideas

**Liquidity** describes how easily an order can be filled near the quoted
price without moving it — high liquidity means large orders barely move the
price; low liquidity means even modest orders can. **Slippage** is the gap
between the price a trader expected and the price actually filled, and it
grows exactly when liquidity is thin. Week 2's few cents of spread on a
10-share order becomes a much bigger factor once the same spread is paid
dozens of times in a single session.

**VWAP** (volume-weighted average price) is the average price a stock has
traded at during the day so far, weighted by how much volume traded at each
price — unlike Week 4's moving average, it resets every day rather than
running over a fixed number of days. It is used here as a reference point for
where the day's activity has clustered, not as a buy or sell signal on its
own; the same observation/assumption/entry/invalidation/risk/exit structure
from Weeks 5–6 still applies to any day trade built around it.

## A worked example

A **simulated** stock trades three price/volume pairs in the first hour:
$50.00 at 1,000 shares, $50.10 at 1,500 shares, $49.90 at 2,000 shares. A
trader who bought at the day's open quoted at $50.00 gets filled at $50.04
once the order actually executes — a small but real four-cent slip caused by
thin liquidity at that exact moment.

## The numbers

**VWAP** from the three price/volume pairs above:

VWAP = [(50.00 × 1,000) + (50.10 × 1,500) + (49.90 × 2,000)] ÷ (1,000 + 1,500 + 2,000)

= (50,000 + 75,150 + 99,800) ÷ 4,500 = 224,950 ÷ 4,500 ≈ $49.99

**Slippage cost** on the fill described above, for a 500-share order:

500 × (50.04 − 50.00) = $20

That $20 is a real cost paid on entry alone, before the trade has even had a
chance to work — which is exactly why Week 8's leverage makes the same
mechanics matter even more.

## What a diagram would show

A **simulated candlestick chart** covering one trading session with a VWAP
line overlaid, annotated to show a fill above VWAP (paid more than the
session's volume-weighted average) versus a fill below it — a comparison,
not a rule about which side is "correct."

## Try it yourself

:::tip
Given a different **simulated** three-bar intraday price/volume sequence,
calculate VWAP, then compare it to a stated entry price to say whether that
entry was above or below the session's volume-weighted average so far.
:::

## The takeaway

Everything that made spread and execution a minor detail in Week 2 becomes a
much larger share of the outcome once the holding period compresses to
hours. VWAP and intraday candlesticks describe where a session's trading has
clustered — useful context, not a standalone signal — and Week 8 is where
leverage starts multiplying all of these same costs and risks.
