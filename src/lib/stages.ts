/**
 * Presentation-only grouping of the approved Week 1-12 curriculum into five
 * narrative stages for the homepage. This groups weeks for storytelling; it
 * does not change week numbers, order, titles, or content (see CLAUDE.md,
 * "Homepage").
 */

export interface StageWeek {
  week: number;
  slug: string;
  title: string;
}

export interface Stage {
  key: string;
  index: number;
  label: string;
  range: string;
  standing: string;
  summary: string;
  weeks: StageWeek[];
}

const slug = (week: number) => `week-${String(week).padStart(2, "0")}`;

export const stages: Stage[] = [
  {
    key: "foundations",
    index: 0,
    label: "Foundations",
    range: "Weeks 01–03",
    standing: "Placing a first order",
    summary:
      "What a market is, how a stock order actually fills, and the difference between investing and trading. Slow, mechanical, one instrument at a time.",
    weeks: [
      { week: 1, slug: slug(1), title: "Welcome to the Market" },
      { week: 2, slug: slug(2), title: "How a Stock Trade Actually Happens" },
      { week: 3, slug: slug(3), title: "There Is More Than One Way to Trade" },
    ],
  },
  {
    key: "reading-markets",
    index: 1,
    label: "Reading Markets",
    range: "Weeks 04–05",
    standing: "Reading the chart, sizing the risk",
    summary:
      "A shared vocabulary for price — candlesticks, trend, support and resistance — paired with the risk toolkit taught before any trading style: stops, position sizing, expected value.",
    weeks: [
      { week: 4, slug: slug(4), title: "Reading Price" },
      { week: 5, slug: slug(5), title: "Risk Before Strategy" },
    ],
  },
  {
    key: "trading-execution",
    index: 2,
    label: "Trading and Execution",
    range: "Weeks 06–07",
    standing: "Named styles, shorter holds",
    summary:
      "Swing trading and moving averages first, then day trading, liquidity, slippage and VWAP — holding periods shrink and execution quality starts to matter as much as direction.",
    weeks: [
      { week: 6, slug: slug(6), title: "Swing Trading" },
      { week: 7, slug: slug(7), title: "Day Trading" },
    ],
  },
  {
    key: "leverage-derivatives",
    index: 3,
    label: "Leverage and Derivatives",
    range: "Weeks 08–11",
    standing: "Borrowed money, bent payoffs",
    summary:
      "Margin and leverage enter on an ordinary stock, then apply to futures, options and crypto — each instrument layering more structure, and more ways to lose, on top of the last.",
    weeks: [
      { week: 8, slug: slug(8), title: "Short Selling, Margin and Leverage" },
      { week: 9, slug: slug(9), title: "Futures" },
      { week: 10, slug: slug(10), title: "Options" },
      { week: 11, slug: slug(11), title: "Cryptocurrency Markets" },
    ],
  },
  {
    key: "personal-rulebook",
    index: 4,
    label: "Personal Rulebook",
    range: "Week 12",
    standing: "Everything, written down as rules",
    summary:
      "A synthesis week: every instrument and every risk idea from the semester, converted into the sizing and stop-trading rules you'd actually use before risking real money.",
    weeks: [{ week: 12, slug: slug(12), title: "Build Your Own Market Rulebook" }],
  },
];
