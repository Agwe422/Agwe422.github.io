import Button from "../components/Button";
import Chip from "../components/Chip";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { formatDateRange } from "../utils/formatDateRange";
import { sortExperienceByEndDate } from "../utils/projects";

export default function Experience() {
  usePageTitle(content.pageTitles.experience);
  const experience = sortExperienceByEndDate(content.experience);

  return (
    <Container className="space-y-10">
      <SectionHeading title={content.pageTitles.experience} />
      <div className="space-y-6">
        {experience.map((entry) => (
          <article
            key={entry.slug}
            id={entry.slug}
            className="space-y-4 rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {formatDateRange(entry.dates)}
              </p>
              <h3 className="font-display text-2xl font-semibold text-ink">
                {entry.role}
              </h3>
              <p className="text-sm font-semibold text-ink/80">{entry.org}</p>
              <p className="text-sm text-ink/70">
                {entry.location} | {entry.focus}
              </p>
            </div>
            <ul className="space-y-3 text-ink/80">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-moss/70" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {entry.stack.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
            {entry.links.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {entry.links.map((link) => (
                  <Button key={link.url} variant="ghost" href={link.url}>
                    {link.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" to="/projects">
          {content.pageTitles.projects}
        </Button>
        <Button variant="secondary" to="/resume">
          {content.labels.downloadResume}
        </Button>
      </div>
    </Container>
  );
}
