import { Link } from "react-router-dom";
import { content } from "../content/content";
import { Project } from "../content/types";
import { formatDateRange } from "../utils/formatDateRange";
import Chip from "./Chip";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      aria-label={`${content.labels.viewDetailsFor} ${project.title}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-white/75 p-6 shadow-soft backdrop-blur hover:border-ink/20 hover:bg-white motion-safe:transition motion-safe:hover:-translate-y-1"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            {formatDateRange(project.dates)}
          </p>
          <h3 className="font-display text-xl font-semibold text-ink group-hover:text-moss">
            {project.title}
          </h3>
          <p className="text-sm text-ink/70">{project.type}</p>
        </div>
        <ul className="space-y-2 text-sm text-ink/80">
          {project.bullets.slice(0, 2).map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-moss/70" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </Link>
  );
}
