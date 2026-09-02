import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title?: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);
const weeksOf = (nodes: ApiNode[]) =>
  nodes.map((node) => Number(node.meta?.week)).sort((a, b) => a - b);

describe("assignment 2 spec", () => {
  it("keeps the assigned SLOP code valid and its required digits unchanged", () => {
    // Level digit must be one of the ANU-scheme levels the course schema
    // allows (1,2,3,4,6,8); the last three digits ("007") are the ones this
    // repo was provisioned with and must not change.
    expect(api.course.code).toMatch(/^SLOP[123468]007$/);
  });

  it("has exactly twelve sessions", () => {
    expect(byType("sessions")).toHaveLength(12);
  });

  it("has session weeks running exactly 1 through 12", () => {
    expect(weeksOf(byType("sessions"))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("gives every session a distinct teaching date", () => {
    const dates = byType("sessions").map((session) => {
      const date = String(session.meta?.date).slice(0, 10);
      expect(date, `${session.id} has no date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      return date;
    });
    expect(new Set(dates).size, "two sessions share a teaching date").toBe(dates.length);
  });

  it("has exactly twelve lectures", () => {
    expect(byType("lectures")).toHaveLength(12);
  });

  it("has lecture weeks running exactly 1 through 12", () => {
    expect(weeksOf(byType("lectures"))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("gives every lecture a non-empty, distinct title", () => {
    const titles = byType("lectures").map((lecture) => {
      expect(lecture.title?.trim(), `${lecture.id} has no title`).toBeTruthy();
      return lecture.title;
    });
    expect(new Set(titles).size, "two lectures share a title").toBe(titles.length);
  });

  it("weights assessments to add up to 100%", () => {
    const assessments = byType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("uses the three approved assessment weights (20% / 35% / 45%)", () => {
    const weights = byType("assessments")
      .map((node) => Number(node.meta?.weight))
      .sort((a, b) => a - b);
    expect(weights).toEqual([20, 35, 45]);
  });

  it("gives every lecture a deck path", () => {
    for (const lecture of byType("lectures")) {
      expect(lecture.meta?.slides, `${lecture.id} has no slides field`).toMatch(
        /^\/decks\/[a-z0-9-]+\/$/,
      );
    }
  });

  it("points every lecture at its own week's deck, and no other week's", () => {
    for (const lecture of byType("lectures")) {
      const week = Number(lecture.meta?.week);
      const expected = `/decks/week-${String(week).padStart(2, "0")}/`;
      expect(lecture.meta?.slides, lecture.id).toBe(expected);
    }
  });

  it("builds all twelve deck routes", () => {
    for (let week = 1; week <= 12; week++) {
      const slug = `week-${String(week).padStart(2, "0")}`;
      const deckHtml = resolve("dist", "decks", slug, "index.html");
      expect(() => readFileSync(deckHtml, "utf8"), `deck ${slug} did not build`).not.toThrow();
    }
  });

  it("gives every Week 1-12 lecture a PowerPoint download link", () => {
    for (const lecture of byType("lectures")) {
      const slug = `week-${String(Number(lecture.meta?.week)).padStart(2, "0")}`;
      const html = readFileSync(resolve("dist", "lectures", slug, "index.html"), "utf8");
      expect(html, `${lecture.id} has no PowerPoint download link`).toMatch(
        /href="[^"]*\/slides\/week-\d{2}\.pptx"/,
      );
    }
  });

  it("points every lecture's PowerPoint link at its own week, and no other week's", () => {
    for (const lecture of byType("lectures")) {
      const slug = `week-${String(Number(lecture.meta?.week)).padStart(2, "0")}`;
      const html = readFileSync(resolve("dist", "lectures", slug, "index.html"), "utf8");
      const pptxWeeks = [...html.matchAll(/\/slides\/(week-\d{2})\.pptx/g)].map((m) => m[1]);
      expect(pptxWeeks, lecture.id).toEqual([slug]);
    }
  });

  it("builds all twelve PowerPoint downloads into the site output", () => {
    for (let week = 1; week <= 12; week++) {
      const slug = `week-${String(week).padStart(2, "0")}`;
      const pptxPath = resolve("dist", "slides", `${slug}.pptx`);
      expect(existsSync(pptxPath), `${slug}.pptx is missing from dist/slides`).toBe(true);
    }
  });
});
