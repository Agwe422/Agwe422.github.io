import Chip from "../components/Chip";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Skills() {
  usePageTitle(content.pageTitles.skills);

  const groups = [
    content.skills.languages,
    content.skills.frameworksTech,
    content.skills.toolsPlatforms
  ];

  return (
    <Container className="space-y-10">
      <SectionHeading title={content.pageTitles.skills} />
      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((group) => (
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
    </Container>
  );
}