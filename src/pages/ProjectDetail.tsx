import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Chip from "../components/Chip";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { formatDateRange } from "../utils/formatDateRange";
import { getProjectBySlug } from "../utils/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const title = project ? project.title : content.pageTitles.notFound;

  usePageTitle(title);

  if (!project) {
    return (
      <Container className="space-y-6">
        <SectionHeading title={content.pageTitles.notFound} />
        <p className="text-ink/70">{content.labels.notFoundMessage}</p>
        <Button variant="primary" to="/">
          {content.labels.backHome}
        </Button>
      </Container>
    );
  }

  return (
    <Container className="space-y-12">
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            {formatDateRange(project.dates)}
          </p>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {project.title}
          </h1>
          <p className="text-base text-ink/70">{project.type}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" to="/projects">
            {content.pageTitles.projects}
          </Button>
          <Button variant="secondary" to="/contact">
            {content.pageTitles.contact}
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading title={content.labels.highlights} />
        <ul className="space-y-3 text-ink/80">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-moss/70" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <SectionHeading title={content.labels.links} />
        {project.links.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button key={link.url} variant="primary" href={link.url}>
                {link.label}
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-ink/70">{content.labels.linksComingSoon}</p>
        )}
      </section>

      <section className="space-y-4">
        <SectionHeading title={content.labels.media} />
        <div className="rounded-2xl border border-dashed border-ink/20 bg-white/60 p-10 text-center text-ink/60">
          {content.labels.addScreenshots}
        </div>
      </section>
    </Container>
  );
}