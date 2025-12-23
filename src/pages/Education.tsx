import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Education() {
  usePageTitle(content.pageTitles.education);
  const education = content.education;

  return (
    <Container className="space-y-10">
      <SectionHeading title={content.pageTitles.education} />
      <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft">
        <div className="space-y-3">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-display text-2xl font-semibold text-ink">
              {education.school}
            </h3>
            <p className="text-sm font-semibold text-ink/70">
              {education.dates}
            </p>
          </div>
          <p className="text-sm text-ink/70">{education.location}</p>
          <p className="text-base font-semibold text-ink">{education.degree}</p>
          <p className="text-sm text-ink/70">
            {education.gpa} | {education.honors}
          </p>
        </div>
        <div className="mt-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            {content.labels.coursework}
          </p>
          <ul className="grid gap-2 text-sm text-ink/80 sm:grid-cols-2">
            {education.coursework.map((course) => (
              <li key={course} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-moss/70" />
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
