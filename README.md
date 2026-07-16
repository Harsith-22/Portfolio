# Harsith K — Portfolio

A recruiter-ready personal portfolio built with React, TypeScript, Tailwind CSS, and Lucide icons.
All content is sourced from the attached resume — no invented companies, projects, or stats.

## Tech stack
- React 18 + TypeScript
- Vite (build tool / dev server)
- Tailwind CSS
- lucide-react (icons)

## Project structure
```
portfolio/
  public/
    resume.pdf          ← your resume, served for the "Download Resume" button
  src/
    components/         ← one component per section (Navbar, Hero, About, Skills, ...)
    data/
      profile.ts         ← ALL text content lives here — edit this file to update the site
    App.tsx
    main.tsx
    index.css
  index.html
  tailwind.config.js
  package.json
```

## Run locally
1. Install [Node.js](https://nodejs.org) 18+ if you don't have it.
2. In this folder, install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
```
This outputs a static site into `dist/`. Preview it locally with:
```bash
npm run preview
```

## Deploy
The `dist/` folder is a static site and can be deployed anywhere:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
- Drag and drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or
- Connect your GitHub repo and set build command `npm run build`, publish directory `dist`.

**GitHub Pages**
- Push this project to a GitHub repo.
- Run `npm run build`, then deploy the `dist/` folder using the `gh-pages` package or GitHub Actions.

## Things to personalize before publishing
Open `src/data/profile.ts` and update:
- `linkedin` and `github` — currently placeholder `#` links since no URLs were provided.
- Replace `public/resume.pdf` with your latest resume any time (keep the filename `resume.pdf`, or update `resumeFile` in `profile.ts` if you rename it).
- The contact form in `src/components/Contact.tsx` is a visual placeholder — wire it to a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) to actually receive messages.
- Each project card has `github: null` and `demo: null` — add real URLs once available and the buttons will automatically link out instead of showing "placeholder".

## Design notes
- Palette: soft paper background, deep ink text, a deep teal accent, and a muted ochre secondary accent — a calm, technical look rather than a flashy gradient theme.
- Typography: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/tags/code) — reinforcing the data/engineering identity.
- Signature element: the hero's `profile.json` card, echoing structured data / dataframes, which ties directly to Harsith's AI & Data Science focus.
