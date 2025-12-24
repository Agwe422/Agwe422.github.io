import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Chip from "../components/Chip";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { formatDateRange } from "../utils/formatDateRange";
import { sortProjectsByEndDate } from "../utils/projects";
import { slugify } from "../utils/slugify";

const tagButtonBase =
  "rounded-full border px-3 py-1 text-xs font-semibold transition";

export default function Projects() {
  usePageTitle(content.pageTitles.projects);

  const projects = sortProjectsByEndDate(content.projects);
  const [tagQuery, setTagQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
      project.stack.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const normalizedQuery = tagQuery.trim().toLowerCase();
  const visibleTags = allTags.filter((tag) =>
    tag.toLowerCase().includes(normalizedQuery)
  );

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }
    return projects.filter((project) =>
      selectedTags.every((tag) => project.stack.includes(tag))
    );
  }, [projects, selectedTags]);

  const disciplines = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    projects.forEach((project) => {
      if (!seen.has(project.discipline)) {
        seen.add(project.discipline);
        list.push(project.discipline);
      }
    });
    return list;
  }, [projects]);

  const countsByDiscipline = useMemo(() => {
    const counts: Record<string, number> = {};
    disciplines.forEach((discipline) => {
      counts[discipline] = 0;
    });
    filteredProjects.forEach((project) => {
      counts[project.discipline] = (counts[project.discipline] ?? 0) + 1;
    });
    return counts;
  }, [disciplines, filteredProjects]);

  const groupedProjects = useMemo(
    () =>
      disciplines.map((discipline) => ({
        discipline,
        projects: filteredProjects.filter(
          (project) => project.discipline === discipline
        )
      })),
    [disciplines, filteredProjects]
  );

  const skillsGroups = [
    content.skills.languages,
    content.skills.frameworksTech,
    content.skills.toolsPlatforms
  ];

  const sectionLinks = [
    { id: "projects-disciplines", label: content.labels.disciplines },
    { id: "projects-filters", label: content.labels.filters },
    { id: "projects-list", label: content.pageTitles.projects },
    { id: "projects-timeline", label: content.labels.experienceTimeline },
    { id: "projects-skills", label: content.pageTitles.skills },
    { id: "projects-leadership", label: content.pageTitles.leadership }
  ];

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    element.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start"
    });
  };

  const handleToggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    setTagQuery("");
  };

  const hasFilters = selectedTags.length > 0 || tagQuery.trim().length > 0;

  return (
    <Container className="space-y-12">
      <SectionHeading title={content.pageTitles.projects} />

      <nav
        aria-label={content.labels.onThisPage}
        className="flex flex-wrap items-center gap-2"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
          {content.labels.onThisPage}
        </span>
        {sectionLinks.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollToId(link.id)}
            className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/70 transition hover:border-ink/30 hover:text-ink"
          >
            {link.label}
          </button>
        ))}
      </nav>

      <section id="projects-disciplines" className="space-y-6">
        <SectionHeading title={content.labels.disciplines} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {disciplines.map((discipline) => {
            const count = countsByDiscipline[discipline] ?? 0;
            const isMuted = count === 0;
            const sectionId = `discipline-${slugify(discipline)}`;
            return (
              <button
                key={discipline}
                type="button"
                onClick={() => scrollToId(sectionId)}
                disabled={isMuted}
                className={`rounded-2xl border border-ink/10 bg-white/70 p-5 text-left shadow-soft transition hover:border-ink/30 motion-safe:hover:-translate-y-1 ${
                  isMuted
                    ? "cursor-not-allowed opacity-60"
                    : "hover:bg-white"
                }`}
              >
                <p className="font-display text-lg font-semibold text-ink">
                  {discipline}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  {count} {content.pageTitles.projects}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <section id="projects-filters" className="space-y-6">
        <SectionHeading title={content.labels.filters} />
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <label className="flex w-full flex-col gap-2 text-sm font-semibold text-ink/70 md:max-w-md">
            {content.labels.searchTags}
            <input
              id="tag-search"
              type="text"
              value={tagQuery}
              onChange={(event) => setTagQuery(event.target.value)}
              placeholder={content.labels.searchTagsPlaceholder}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2 text-sm text-ink shadow-soft focus:border-moss focus:outline-none"
            />
          </label>
          <Button
            variant="ghost"
            onClick={handleClearFilters}
            disabled={!hasFilters}
            className={hasFilters ? "" : "opacity-50"}
          >
            {content.labels.clearFilters}
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {visibleTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleToggleTag(tag)}
                className={`${tagButtonBase} ${
                  isSelected
                    ? "border-moss bg-moss text-sand"
                    : "border-ink/15 bg-sand/80 text-ink/70 hover:border-ink/40"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
        {selectedTags.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2 text-sm text-ink/70">
            <span className="font-semibold">{content.labels.selectedTags}</span>
            {selectedTags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        ) : null}
      </section>

      <section id="projects-list" className="space-y-8">
        <SectionHeading title={content.pageTitles.projects} />
        {filteredProjects.length === 0 ? (
          <p className="text-ink/70">{content.labels.noProjects}</p>
        ) : (
          <div className="space-y-10">
            {groupedProjects.map((group) => {
              if (group.projects.length === 0) {
                return null;
              }
              return (
                <div
                  key={group.discipline}
                  id={`discipline-${slugify(group.discipline)}`}
                  className="space-y-4 rounded-2xl border border-ink/10 bg-white/60 p-6 shadow-soft"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {group.discipline}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                      {group.projects.length} {content.pageTitles.projects}
                    </span>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {group.projects.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section id="projects-timeline" className="space-y-8">
        <SectionHeading title={content.labels.experienceTimeline} />
        <ul className="space-y-8 border-l border-ink/10 pl-6">
          {projects.map((project) => (
            <li key={project.slug} className="relative space-y-3">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-moss" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {formatDateRange(project.dates)}
              </p>
              <div className="space-y-1">
                <Link
                  to={`/projects/${project.slug}`}
                  className="font-display text-xl font-semibold text-ink hover:text-moss"
                >
                  {project.title}
                </Link>
                <p className="text-sm text-ink/70">{project.type}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects-skills" className="space-y-8">
        <SectionHeading title={content.pageTitles.skills} />
        <div className="grid gap-6 lg:grid-cols-3">
          {skillsGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects-leadership" className="space-y-6">
        <SectionHeading title={content.pageTitles.leadership} />
        <div className="space-y-4">
          {content.leadership.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-ink/70">{item.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
