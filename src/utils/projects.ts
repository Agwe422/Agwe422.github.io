import { content } from "../content/content";
import { Project } from "../content/types";

const monthMap: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11
};

function parseMonthYear(value: string): number {
  const cleaned = value.replace(/\s+/g, " ").trim();
  const parts = cleaned.split(" ");
  const monthKey = parts[0]?.toLowerCase() ?? "";
  const year = Number(parts[1]);
  const month = monthMap[monthKey] ?? 0;
  if (Number.isNaN(year)) {
    return 0;
  }
  return new Date(year, month, 1).getTime();
}

function parseEndDate(range: string): number {
  const parts = range.split("-");
  const end = (parts[1] ?? parts[0]).trim();
  return parseMonthYear(end);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return content.projects.find((project) => project.slug === slug);
}

export function sortProjectsByEndDate(projects: Project[]): Project[] {
  return [...projects].sort(
    (a, b) => parseEndDate(b.dates) - parseEndDate(a.dates)
  );
}