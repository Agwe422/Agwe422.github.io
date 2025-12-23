import { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Resume() {
  usePageTitle(content.pageTitles.resume);
  const [failed, setFailed] = useState(false);

  return (
    <Container className="space-y-10">
      <SectionHeading title={content.pageTitles.resume} />
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" href="./Josh_Hall_Resume.pdf">
          {content.labels.downloadResume}
        </Button>
      </div>
      <div className="rounded-2xl border border-ink/10 bg-white/70 p-4 shadow-soft">
        <div className="aspect-[8.5/11] w-full overflow-hidden rounded-xl bg-white">
          {!failed ? (
            <iframe
              title={content.labels.resumeViewer}
              className="h-full w-full"
              src="./Josh_Hall_Resume.pdf"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-sm text-ink/70">
              <p>{content.labels.resumeFallback}</p>
              <Button variant="secondary" href="./Josh_Hall_Resume.pdf">
                {content.labels.downloadResume}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
