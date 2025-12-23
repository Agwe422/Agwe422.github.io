import { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { content } from "../content/content";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Contact() {
  usePageTitle(content.pageTitles.contact);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const email = content.person.email;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Container className="space-y-10">
      <SectionHeading title={content.pageTitles.contact} />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {content.labels.email}
              </p>
              <a
                className="text-base font-semibold text-ink hover:text-moss"
                href={`mailto:${content.person.email}`}
              >
                {content.person.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {content.labels.phone}
              </p>
              <p className="text-base font-semibold text-ink">
                {content.person.phone}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {content.labels.location}
              </p>
              <p className="text-base font-semibold text-ink">
                {content.person.location}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {content.labels.linkedIn}
              </p>
              <a
                className="text-base font-semibold text-ink hover:text-moss"
                href={content.person.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                {content.person.linkedIn}
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-ink">
              {content.person.email}
            </p>
            <p className="text-sm text-ink/70">{content.person.location}</p>
            <Button variant="primary" onClick={handleCopy}>
              {copied ? content.labels.copiedEmail : content.labels.copyEmail}
            </Button>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" href={content.person.linkedIn}>
                {content.labels.linkedIn}
              </Button>
              <Button variant="secondary" to="/resume">
                {content.labels.downloadResume}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}