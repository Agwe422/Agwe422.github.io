import { Link } from "react-router-dom";
import Chip from "../components/Chip";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { formatDateRange } from "../utils/formatDateRange";
import { sortProjectsByEndDate } from "../utils/projects";

export default function Experience() {
  usePageTitle(content.pageTitles.experience);
  const projects = sortProjectsByEndDate(content.projects);

  return (
    <Container className="space-y-10">
      <SectionHeading title={content.pageTitles.experience} />
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
    </Container>
  );
}