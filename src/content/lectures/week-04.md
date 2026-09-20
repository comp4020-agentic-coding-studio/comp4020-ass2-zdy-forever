---
title: Reading Price
description:
  Candlesticks, volume, trends, support/resistance and ranges — how chart
  structure sets entries, stops and invalidation, not predictions
week: 4
date: 2027-03-15
teachers:
  - idris-fenn
slides: /decks/week-04/
related:
  - sessions/04-reading-price
---

Introduces the vocabulary for describing what a price chart is showing:
candlesticks as a compressed record of a period's trading, volume as a
measure of participation, and trends, support and resistance as ways of
describing where price has tended to pause or reverse. None of this is
presented as a signal in itself — its real job is defining where an entry,
a stop, and an invalidation level actually sit, which is what Week 5
needs to size a position and what Weeks 6–7 need to place one.

## The question this week answers

A small account can't just "wait and see" — a position needs a stop before
it needs an opinion. What is a candlestick chart actually recording, and
where in it does an entry, an invalidation level or a stop honestly belong?

## By the end of this lecture

- read what a single candlestick records: open, high, low and close for a
  period
- explain what volume adds that price alone doesn't show
- define trend, range, support and resistance
- explain the difference between observing a pattern and treating it as a
  signal

## Key ideas

A **candlestick** summarises one time period (a day, an hour, a minute — the
course mostly uses daily candles) with four numbers: the **open**, **high**,
**low** and **close**. The "body" shows open versus close; the "wicks" show
how far price moved beyond that range before settling. It's a compression of
a lot of individual trades into one shape, nothing more.

**Volume** — how many shares changed hands in that period — matters because
the same price move on high volume reflects a lot of agreement; on low
volume, it might reflect very little. Neither guarantees the move continues.

A **trend** describes a period where price has been mostly moving in one
direction; a **range** describes a period where it hasn't. **Support** and
**resistance** describe price zones (not exact lines) where price has
previously paused or reversed. All four of these are descriptions of what
already happened on the chart — they are **observations**, not predictions,
and this course will not present them as reliable standalone buy or sell
signals at any point. What they're good for is more specific: a support
zone is a candidate place to put a stop, and a break of it is a candidate
place to decide a trade was simply wrong — boundaries a small account needs
regardless of what happens to be quoted at that moment (Week 2) or how
volatile the fill turns out to be.

## A worked example

A **simulated** five-day sequence of daily closes for stock "Meridian
Supply": $51, 53, 52, 55, 54$. Read as a chart, this is a mild uptrend with
one down day — a description of what happened, which says nothing on its own
about day six.

## The numbers

A simple moving average smooths a run of closes into one number. The 5-day
simple moving average of the sequence above:

(51 + 53 + 52 + 55 + 54) ÷ 5 = 265 ÷ 5 = 53

That single number, $53, is a lagging summary of the last five days — by
construction it always sits behind the most recent price movement, which is
exactly why Week 6 is explicit that a moving average confirms a trend after
the fact rather than calling one in advance.

## What a diagram would show

A **simulated candlestick chart** covering roughly two weeks, with a shaded
band marking an observed support zone and an annotation distinguishing "price
paused here" (an observation) from "therefore price will pause here again"
(an unsupported assumption) — the diagram's whole purpose is to make that
distinction visible.

## Try it yourself

:::tip
Given a **simulated** ten-candle price series, mark where you observe
possible support and resistance zones, and separately write one sentence
about what you would need to see happen next before treating either zone as
meaningful — practising the observation/assumption distinction directly.
:::

## The takeaway

Candlesticks, volume, trend and support/resistance are a shared vocabulary
for describing a chart, not a set of rules for predicting one. What they
settle isn't direction — it's where an entry, a stop and an invalidation
level honestly sit, which is exactly what Week 5 needs to size a position
before either one is decided.
