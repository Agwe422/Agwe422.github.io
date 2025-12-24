import Button from "../components/Button";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { sortProjectsByEndDate } from "../utils/projects";

export default function Home() {
  usePageTitle(content.pageTitles.home);

  const featured = sortProjectsByEndDate(content.projects).slice(0, 3);
  const education = content.education;

  return (
    <Container className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6 motion-safe:animate-fade-up">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            {content.person.name}
          </h1>
          <p className="text-lg text-ink/80">{content.heroTagline}</p>
          <div className="flex flex-wrap gap-3">
            {content.ctas.map((cta) =>
              cta.to ? (
                <Button key={cta.label} variant={cta.variant} to={cta.to}>
                  {cta.label}
                </Button>
              ) : (
                <Button
                  key={cta.label}
                  variant={cta.variant}
                  href={cta.href ?? "#"}
                >
                  {cta.label}
                </Button>
              )
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {content.labels.email}
              </p>
              <a
                className="text-sm font-semibold text-ink hover:text-moss"
                href={`mailto:${content.person.email}`}
              >
                {content.person.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {content.labels.phone}
              </p>
              <p className="text-sm font-semibold text-ink">
                {content.person.phone}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {content.labels.location}
              </p>
              <p className="text-sm font-semibold text-ink">
                {content.person.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title={content.labels.about}
          subtitle={<p>{content.aboutText}</p>}
        />
      </section>

      <section className="space-y-8">
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
            <p className="text-base font-semibold text-ink">
              {education.degree}
            </p>
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
      </section>

      <section className="space-y-8">
        <SectionHeading title={content.labels.featuredProjects} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-ink/10 bg-white/70 p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
              {content.labels.cta}
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">
              {content.person.email}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" to="/contact">
              {content.pageTitles.contact}
            </Button>
            <Button variant="ghost" href={content.person.linkedIn}>
              {content.labels.linkedIn}
            </Button>
            <Button variant="ghost" href={content.person.github}>
              {content.labels.github}
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}