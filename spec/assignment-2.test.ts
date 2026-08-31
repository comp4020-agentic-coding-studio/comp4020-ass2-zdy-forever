import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("assignment 2 spec", () => {
  it("keeps the SLOPxxx digits the repo was provisioned with", () => {
    expect(api.course.code).toMatch(/^SLOP[124689]007$/);
  });

  it("runs across twelve dated teaching weeks", () => {
    const sessions = byType("sessions");
    expect(sessions).toHaveLength(12);
    const weeks = sessions.map((session) => session.meta?.week).sort((a, b) => Number(a) - Number(b));
    expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    for (const session of sessions) {
      expect(session.meta?.date, `${session.id} has no date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("has at least one lecture carrying a real deck, linked from its page", () => {
    const decked = byType("lectures").filter((lecture) => typeof lecture.meta?.slides === "string");
    expect(decked.length, "no lecture links a deck via meta.slides").toBeGreaterThan(0);
    for (const lecture of decked) {
      const slidesPath = String(lecture.meta?.slides).replace(/^\/|\/$/g, "");
      const deckHtml = resolve("dist", slidesPath, "index.html");
      expect(() => readFileSync(deckHtml, "utf8"), `${lecture.id}'s deck did not build at ${slidesPath}`).not.toThrow();
    }
  });

  it("weights assessments to add up to 100%", () => {
    const assessments = byType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });
});
