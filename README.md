# Josh Hall Portfolio

## Content updates

Edit all site content in `src/content/content.ts`. The data in that file drives every page.

- `experience` - professional, research, and team roles (the Experience page, the Home experience cards, and the Projects-page timeline).
- `projects` - course, personal, and side projects (project cards, project detail routes, tag filters, and the timeline).
- `skills` - an ordered array of `{ label, items }` groups, so groups can be added or renamed without touching any page.
- `education`, `leadership`, `person`, `labels`, `nav` - everything else on the site.

Dates use the format `Month YYYY - Month YYYY`; `Present` is supported as an end date and sorts to the top of the timeline.

## Resume

`public/Josh_Hall_Resume.pdf` is the file served by the Resume page, the footer download link, and `/Josh_Hall_Resume.pdf`. Replace that file to publish a new resume, and keep `src/content/content.ts` in sync with it.

## Local development

```
npm ci
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Notes

- The site uses Vite + React + TypeScript, Tailwind CSS, and React Router with HashRouter for GitHub Pages compatibility.
- Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`.
- Replace `public/og.png` with your own Open Graph image if desired.
