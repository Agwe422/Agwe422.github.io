import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Leadership() {
  usePageTitle(content.pageTitles.leadership);

  return (
    <Container className="space-y-10">
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
    </Container>
  );
}