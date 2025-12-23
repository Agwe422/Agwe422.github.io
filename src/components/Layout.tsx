import { NavLink, Outlet } from "react-router-dom";
import { content } from "../content/content";
import Container from "./Container";

const navLinkBase =
  "text-sm font-semibold uppercase tracking-[0.15em] text-ink/70 transition hover:text-ink";

export default function Layout() {
  return (
    <div className="min-h-screen text-ink">
      <a className="skip-link" href="#main-content">
        {content.labels.skipToContent}
      </a>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand/80 backdrop-blur">
        <Container className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <NavLink
              to="/"
              className="font-display text-2xl font-semibold text-ink"
            >
              {content.person.name}
            </NavLink>
          </div>
          <nav aria-label={content.labels.primaryNav} className="flex flex-wrap gap-4">
            {content.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? "text-moss" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </Container>
      </header>
      <main id="main-content" className="py-12">
        <Outlet />
      </main>
      <footer className="border-t border-ink/10 bg-white/70">
        <Container className="flex flex-col gap-6 py-10 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-semibold uppercase tracking-[0.2em] text-moss">
              {content.pageTitles.contact}
            </p>
            <div className="flex flex-col gap-2">
              <a className="hover:text-ink" href={`mailto:${content.person.email}`}>
                {content.person.email}
              </a>
              <a
                className="hover:text-ink"
                href={content.person.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                {content.labels.linkedIn}
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-semibold uppercase tracking-[0.2em] text-moss">
              {content.labels.location}
            </p>
            <p>{content.person.location}</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold uppercase tracking-[0.2em] text-moss">
              {content.pageTitles.resume}
            </p>
            <a
              className="font-semibold text-ink hover:text-moss"
              href="./Josh_Hall_Resume.pdf"
              download
            >
              {content.labels.downloadResume}
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
