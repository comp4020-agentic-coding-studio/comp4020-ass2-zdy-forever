---
title: Cryptocurrency Markets
description:
  Applies the course's ideas about markets, leverage and risk to
  cryptocurrency, rather than treating it as a separate topic
week: 11
date: 2027-05-03
teachers:
  - marisol-quaye
slides: /decks/week-11/
related:
  - sessions/11-cryptocurrency-markets
---

Cryptocurrency markets get their own week not because the underlying ideas
change, but because the details do: different exchange structures, different
custody risks, and leverage that is often offered at levels a stock broker
never would. The lecture applies Weeks 1–10's market-mechanics and
risk-and-leverage ideas here rather than starting over.

## The question this week answers

Which of this semester's ideas about markets, leverage and risk carry
straight over to cryptocurrency, and which details actually change?

## By the end of this lecture

- compare a cryptocurrency exchange's structure to the stock exchange from
  Week 2
- explain what custody means and why it matters differently here than for
  stocks
- explain how leverage in crypto markets relates to Weeks 8–9's margin and
  leverage mechanics
- calculate a liquidation price for a simulated leveraged crypto position

## Key ideas

A cryptocurrency exchange performs the same core job as the stock exchange
from Week 2 — matching buyers and sellers — but typically operates 24/7, with
no scheduled close, and often with far less standardisation between
platforms than regulated stock exchanges have.

**Custody** describes who actually controls an asset: on many crypto
exchanges, an asset held "in the app" is legally and technically controlled
by the exchange, not the trader (**exchange custody**); an asset moved to a
wallet the trader alone controls the keys for is **self-custody**. This
distinction has no direct stock-market equivalent, and it changes what "the
position is safe" actually means.

Leverage on crypto exchanges is often offered at ratios far beyond what a
stock broker's margin account allows, using the same underlying logic as
Weeks 8–9: more leverage means a smaller price move triggers forced closure.
Here that forced closure is usually called a **liquidation** rather than a
margin call, but it's the identical mechanism — the position is closed once
losses consume the margin backing it.

## A worked example

A **simulated** trader opens a long position on a cryptocurrency priced at
$30,000, using 10x leverage, meaning the required margin is one-tenth of the
position's value.

## The numbers

A simplified liquidation-price estimate (ignoring fees and funding costs) for
a long position is:

liquidation price ≈ entry price × (1 − 1 ÷ leverage)

For this position:

30,000 × (1 − 1 ÷ 10) = 30,000 × 0.9 = $27,000

A drop of only 10% from the entry price is enough to liquidate a 10x
leveraged long — an even smaller move than the 33.3% margin-call trigger
from Week 8's 2x-leveraged stock example, because the leverage ratio here is
five times larger. Real platforms' liquidation formulas include fees and
maintenance-margin buffers this simplified version leaves out, but the
core relationship — higher leverage means a smaller adverse move causes
forced closure — holds regardless.

## What a diagram would show

A **concept diagram** with two boxes side by side, "exchange custody" and
"self-custody," each listing what the trader does and doesn't control,
making the distinction concrete rather than abstract.

## Try it yourself

:::tip
For a **simulated** long position entered at $2,000 with 5x leverage,
calculate the approximate liquidation price using the formula above, and
compare the percentage drop required to the 10x example worked through above.
:::

## The takeaway

Crypto markets don't require a new theory of risk — they require applying
Weeks 8 and 9's leverage mathematics to a market where higher leverage
ratios and custody arrangements make the same mechanics bite faster and
harder. Week 12 is where all of this, across every instrument covered, gets
turned into a personal set of rules.
