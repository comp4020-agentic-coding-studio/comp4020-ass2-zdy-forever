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
    standing: "Where a small account first leaks money",
    summary:
      "Why limited capital and its costs bite harder than they look — how an order actually fills, why the displayed price isn't the executable one, and why holding period decides which costs and risks apply at all.",
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
    standing: "Where the exit is decided before the entry",
    summary:
      "Chart structure exists here to set entries, invalidations and stop levels, not to predict direction. Paired with the risk toolkit every later week assumes: position sizing, drawdown asymmetry, and risk of ruin.",
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
    standing: "Where shorter holds multiply the cost of getting in and out",
    summary:
      "Swing trading first, as a case study in multi-day exposure — gaps, event risk, capital tied up across days — then day trading, where liquidity and slippage turn execution friction into a real share of the outcome.",
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
    standing: "Where the account can be closed out from under you",
    summary:
      "Margin and forced exits enter on an ordinary stock, then reappear built into futures, options and crypto — each instrument shortening, in its own way, the distance between an account and a liquidation.",
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
    standing: "Every way to lose, converted into a rule against it",
    summary:
      "A synthesis week: every survival mechanism from the semester — sizing, leverage limits, instrument restrictions, and the conditions that stop trading altogether — converted into rules a small account would actually hold to.",
    weeks: [{ week: 12, slug: slug(12), title: "The Small-Account Survival Rulebook" }],
  },
];
