import Button from "../components/Button";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle(content.pageTitles.notFound);

  return (
    <Container className="space-y-6">
      <SectionHeading title={content.pageTitles.notFound} />
      <p className="text-ink/70">{content.labels.notFoundMessage}</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" to="/">
          {content.labels.backHome}
        </Button>
        <Button variant="ghost" to="/projects">
          {content.pageTitles.projects}
        </Button>
      </div>
    </Container>
  );
}