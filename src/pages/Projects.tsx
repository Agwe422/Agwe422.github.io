import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { sortProjectsByEndDate } from "../utils/projects";

export default function Projects() {
  usePageTitle(content.pageTitles.projects);
  const projects = sortProjectsByEndDate(content.projects);

  return (
    <Container className="space-y-10">
      <SectionHeading title={content.pageTitles.projects} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}