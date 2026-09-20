---
title: Risk Before Strategy
description:
  Risk, drawdowns, stops, position sizing and expected value — taught before
  any trading style, on purpose
week: 5
date: 2027-03-22
teachers:
  - marisol-quaye
slides: /decks/week-05/
related:
  - sessions/05-risk-before-strategy
---

Risk is taught here, before Swing Trading and Day Trading, deliberately: a
position-sizing rule and a stop don't depend on which style produced the
trade. This lecture covers drawdowns, stop placement, position sizing and
expected value as the risk toolkit every later strategy lecture assumes is
already in place.

## The question this week answers

Why does this course teach risk management before teaching any actual
trading style?

## By the end of this lecture

- explain what a drawdown does to the gain needed to recover from it
- distinguish a stop from an invalidation
- calculate a position size from account size, risk tolerance and stop
  distance
- calculate the expected value of a simulated trading plan

## Key ideas

A **drawdown** is a decline from a peak account value. Drawdowns are
asymmetric: losing a given percentage requires a larger percentage gain to
get back to even, which is exactly what the numbers below show. That
asymmetry compounds across a sequence of losses, not just one — a string of
losing trades doesn't erode capital in a straight line, it erodes the base
the next loss is measured against, which is why a small account can survive
several ordinary losing trades and still be one more away from a drawdown
it can't recover from. Position sizing exists specifically to keep any
single loss, or a bad run of them, away from that point — what's sometimes
called **risk of ruin**.

A **stop** is a price at which a position is closed to limit further loss.
An **invalidation** is the reason the original idea is wrong — the stop
price is usually set at or near the invalidation level, but they are
conceptually different: a stop is where you exit, an invalidation is why.
From this week on, this course describes any strategy using six explicit
parts: the **observation** (what was noticed), the **assumption** (what it's
taken to imply), the **entry** (when a position is opened), the
**invalidation** (what would prove the idea wrong), the **risk** (how much is
risked and how position size was set), and the **exit** (what closes the
position, win or lose).

**Position sizing** answers "how many shares" using the account and the
stop, not a gut feeling. **Expected value** (EV) combines win rate and
average win/loss size into a single number describing whether a plan is
profitable on average — a plan can win more often than it loses and still
have negative EV, or the reverse, depending on the size of wins versus
losses.

## A worked example

A **simulated** $10,000 account loses 50% in a bad stretch, down to $5,000.
To get back to $10,000, that $5,000 now needs to grow by 100%, not by the
50% that was lost — the same percentage loss and gain are not mirror images
of each other. Five consecutive 10% losses compound to the same place: each
10% is taken off a smaller base than the last, so the account ends near
$5,905, not $5,000 — smaller individual losses, reached faster than a
single number would suggest, and every one of them makes the next loss
proportionally more expensive to recover from.

## The numbers

**Position sizing.** Risking 1% of a $10,000 account on a trade means
risking:

10,000 × 0.01 = $100

If the entry is $48 and the invalidation-based stop is $45, the stop
distance is $3 per share. Position size:

100 ÷ 3 = 33.3 → 33 shares

(rounded down, so the actual risk is $99, not $100).

**Expected value.** A **simulated** plan wins 40% of the time for an average
$150, and loses 60% of the time for an average $80:

EV = (0.40 × 150) − (0.60 × 80) = 60 − 48 = $12

positive, on average, per trade — even though the plan loses more often than
it wins. Flip the numbers (40% win rate, average win $80, average loss $150)
and the same win rate produces a negative EV of (0.40 × 80) − (0.60 × 150)
= 32 − 90 = −$58 per trade. Win rate alone says almost nothing about whether
a plan is worth trading.

## What a diagram would show

A **risk/reward calculation** diagram: a single horizontal bar split into a
risk segment (entry to stop) and a reward segment (entry to target), with the
1% account-risk-to-position-size arithmetic labelled directly on it, so the
size calculation and the visual proportion of risk to reward sit in the same
picture.

## Try it yourself

:::tip
For a **simulated** $20,000 account risking 0.5% per trade, with an entry at
$72 and a stop at $69, calculate the position size and the dollar amount
actually at risk once the share count is rounded down.
:::

## The takeaway

Position size and stops don't depend on which trading style produced the
idea — they depend on account size and the distance to the point that proves
the idea wrong. The reason to get that right isn't tidiness: it's that
drawdown asymmetry and compounding losses turn an undersized position, or a
bad run of them, into risk of ruin. Everything Weeks 6 and 7 do with entries
and charts sits on top of this risk toolkit; none of it works without it.
