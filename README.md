# Josh Hall Portfolio

Replace the placeholder resume file at `public/Josh_Hall_Resume.pdf` with your real PDF (keep the same filename so the site and download link keep working).

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment (GitHub Pages)

1. Push to the `main` branch.
2. In your repository settings, go to **Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will build and deploy automatically on each push to `main`.

## Content updates

Edit all site content in `src/content/content.ts`. The data in that file drives every page, including project detail routes, skills, education, and contact info.

## Notes

- The site uses Vite + React + TypeScript, Tailwind CSS, and React Router with HashRouter for GitHub Pages compatibility.
- Replace `public/og.png` with your own Open Graph image if desired.