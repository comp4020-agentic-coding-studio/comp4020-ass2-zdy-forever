---
title: Short Selling, Margin and Leverage
description:
  Introduces leverage on ordinary stocks before the leveraged derivatives in
  Weeks 9–10
week: 8
date: 2027-04-12
teachers:
  - idris-fenn
slides: /decks/week-08/
related:
  - sessions/08-short-selling-margin-and-leverage
---

Short selling and margin are where leverage enters the course, on the
simplest instrument it will ever apply to — an ordinary stock — before Weeks
9 and 10 apply the same idea to futures and options. The lecture treats a
margin call as the mechanical consequence of leverage that it is, not an edge
case, and short selling as a position with a loss that isn't capped at 100%.

## The question this week answers

What does it mean, mechanically, to trade with borrowed money — and at what
exact price does that borrowing force you out of a position?

## By the end of this lecture

- explain how a margin loan works on an ordinary stock position
- explain why a short position's risk profile differs from a long position's
- describe leverage as a multiplier applied to both gains and losses
- calculate the price at which a simulated margin account triggers a margin
  call

## Key ideas

**Margin** means borrowing part of a position's cost from a broker, using
the position (and other account equity) as collateral. **Leverage** is the
resulting ratio between the total position size and the trader's own money
in it — a $10,000 position bought with $5,000 of own money and $5,000
borrowed is 2x leveraged. Leverage does not change the underlying instrument;
it changes how much a given price move affects the trader's own capital.

**Short selling** means borrowing shares, selling them, and later buying
them back to return them — profiting if the price falls. Its risk profile is
shaped differently from a long position: a long position's maximum loss is
capped at 100% (the price can't go below zero), but a short position's loss
is theoretically unbounded, because there's no ceiling on how high a price
can rise before the shares must be bought back.

A **margin call** happens when a leveraged position's value falls far enough
that the account no longer meets the broker's minimum equity requirement
(the **maintenance margin**), forcing the trader to add funds or have the
position closed.

## A worked example

A **simulated** trader buys $10,000 of stock using $5,000 of their own money
and a $5,000 margin loan (2x leverage), against a broker's maintenance margin
requirement of 25% of position value.

## The numbers

**Margin call trigger price.** Equity equals position value minus the loan,
which stays fixed at $5,000. The call triggers when equity falls to 25% of
position value:

position − 5,000 = 0.25 × position

0.75 × position = 5,000

position = 6,666.67

That's 6,666.67 ÷ 10,000 = 66.7% of the original position value — a
33.3% drop in the stock's price is enough to trigger a margin call on this
2x-leveraged position, well before the position would be worth zero.

**Short-sale loss comparison.** A trader shorts 100 shares at $20 (proceeds:
$2,000). If the price doubles to $40, buying the shares back costs $4,000 —
a $2,000 loss, 100% of the original proceeds. If the price instead triples to
$60, the loss is $4,000, or 200% of the original proceeds — there is no price
at which the loss stops growing, unlike a long position bought outright.

## What a diagram would show

A **comparison table**: rows for "long position" and "short position",
columns for "maximum possible gain" and "maximum possible loss", making the
capped-versus-uncapped asymmetry visible in one glance rather than in
prose.

## Try it yourself

:::tip
For a **simulated** $20,000 position bought with $8,000 of own money and
$12,000 margin, and a 30% maintenance margin requirement, calculate the price
level (as a percentage of the original position value) at which a margin
call triggers.
:::

## The takeaway

Leverage doesn't just make gains and losses bigger — it changes the price at
which a trader can be forced out of a position entirely. Weeks 9 and 10 apply
this same margin-and-leverage logic to futures and options, where it arrives
built into the instrument rather than as an optional account setting.
