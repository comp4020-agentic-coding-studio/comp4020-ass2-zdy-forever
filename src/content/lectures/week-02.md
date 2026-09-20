---
title: How a Stock Trade Actually Happens
description:
  The first source of execution friction — exchanges, brokers, account types
  and order types, and why the displayed price isn't the executable one
week: 2
date: 2027-03-01
teachers:
  - idris-fenn
slides: /decks/week-02/
related:
  - sessions/02-how-a-stock-trade-actually-happens
---

Walks through what actually happens between placing a stock order and owning
the shares: the exchange that matches it, the broker that routes it, the
difference between a cash and a margin account, and why a market order and a
limit order can fill at different prices in the same second. This is the
course's first source of **execution friction** — a small, recurring cost a
small account pays before any strategy has a chance to work.

## The question this week answers

Between clicking "buy" and actually owning a share, several separate systems
do separate jobs — what are they, and why is the price you see when you click
not necessarily the price you pay?

## By the end of this lecture

- name the separate roles an exchange and a broker each play in a trade
- distinguish a cash account from a margin account
- explain why a market order and a limit order can fill at different prices
- trace a simulated order from click to fill

## Key ideas

A **broker** is who a trader deals with directly — it takes the order and
routes it onward. An **exchange** (or another matching venue a broker routes
to) is where the order actually meets other orders and gets matched. These
are different jobs even when a single app makes them feel like one step.

A **cash account** can only spend money already in it. A **margin account**
can borrow against the value of what's already held, which is what makes
short selling and stock-level leverage possible — mechanics Week 8 covers in
full; for now, the distinction to hold onto is just that margin means
borrowed money is now part of the position.

Every order is quoted against two prices at once: the **bid** (the highest
price a buyer is currently offering) and the **ask** (the lowest price a
seller is currently accepting). A **market order** fills immediately at
whatever the best available bid or ask is — price is not guaranteed. A
**limit order** fills only at a chosen price or better — price is guaranteed,
but the order might never fill at all.

## A worked example

A **simulated** stock "ABC" is quoted with a bid of $50.00 and an ask of
$50.05. A student places a market buy order for 10 shares. Because a market
buy fills against the ask (the price sellers are willing to accept right
now), the order fills at $50.05 a share, not the $50.00 bid and not some
average of the two.

## The numbers

10 shares at the $50.05 ask:

10 × $50.05 = $500.50

Compare that to the **mid-price** — the midpoint between bid and ask, often
mistaken for "the" price of a stock:

(50.00 + 50.05) ÷ 2 = $50.025

10 × $50.025 = $500.25

The market order cost $0.25 more than the mid-price suggested it would. That
$0.25 is the cost of certainty — accepting whatever price was available
rather than waiting for a specific one. It looks trivial on 10 shares; it
stops looking trivial once Week 7 covers trading the same spread dozens of
times a day.

## What a diagram would show

A **simplified market diagram**: a single row showing a ladder of buy orders
stacked below a ladder of sell orders, with the bid and ask labelled at the
point where they nearly meet, and an arrow showing a market order "reaching
across" the gap to hit the ask.

## Try it yourself

:::tip
A **simulated** stock is quoted bid $22.10 / ask $22.16. Work out the total
cost of a 50-share market buy order, then work out what a limit order placed
at $22.12 would need in order to fill (a seller willing to accept $22.12 or
less) — and note that nothing guarantees one will show up.
:::

## The takeaway

The quoted price you see is an observation about where the market currently
is, not a promise about what you'll pay — the gap between the two is
execution friction, and it's the first of several this course tracks. A
market order trades certainty of execution for uncertainty of price; a limit
order trades the reverse. Neither is a signal about whether the stock is a
good idea — that's a different question, and Weeks 3–4 start building the
vocabulary for it.
