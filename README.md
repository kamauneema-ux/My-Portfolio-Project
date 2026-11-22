# Grace Muthoni Kamau — Portfolio

A portfolio for service design, product design and UX research work, built for the Digital Portfolio module (Phase 2) at the University of Limerick.

It leads with three Safaricom case studies, each built around one real decision, and keeps assessed coursework in a separate Academic and Creative Projects section.

**Live site:** https://kamauneema-ux.github.io/My-Portfolio-Project/
**Repository:** https://github.com/kamauneema-ux/My-Portfolio-Project

---

## Contents

1. [Running it locally](#running-it-locally)
2. [What is on the site](#what-is-on-the-site)
3. [How the code is organised](#how-the-code-is-organised)
4. [How the interactive parts work](#how-the-interactive-parts-work)
5. [Editing content](#editing-content)
6. [Testing](#testing)
7. [Deployment pipeline](#deployment-pipeline)
8. [Accessibility](#accessibility)
9. [Built with](#built-with)

---

## Running it locally

You need [Node.js](https://nodejs.org/) 20 or newer (`node -v` to check).

```bash
npm install     # first time only
npm run dev     # start the dev server, usually http://localhost:5173
```

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Development server with instant reload             |
| `npm test`        | Runs the automated tests once                      |
| `npm run lint`    | Checks the code with ESLint                        |
| `npm run build`   | Type-checks, then builds the site into `dist/`     |
| `npm run preview` | Serves the built site, to check a production build |

To preview exactly what GitHub Pages serves, including its sub-path:

```bash
npm run build -- --base=/My-Portfolio-Project/
npm run preview -- --base=/My-Portfolio-Project/
```

Then open http://localhost:4173/My-Portfolio-Project/.

> Opening `dist/index.html` by double-clicking shows a blank page. The site uses client-side routing and must be served; use `npm run preview`.

---

## What is on the site

| Address                                  | Page                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------- |
| `/`                                      | Home: introduction, three case studies, Academic and Creative Projects    |
| `/work/capa`                             | Case study: redesigning how Safaricom Business handled billing complaints |
| `/work/digital-sacco`                    | Case study: one digital SACCO app for members of multiple cooperatives    |
| `/work/mpesa-one-app`                    | Case study: why M-PESA One App was hard to activate while roaming         |
| `/about`                                 | About me: approach, background and life beyond work                       |
| `/academic-projects`                     | Academic and Creative Projects overview: one film, two perspectives       |
| `/academic-projects/group-production`    | Blog 1: the film, the group report and the downloadable media references  |
| `/academic-projects/personal-reflection` | Blog 2: personal reflection                                               |

**Contact** is the footer of every main page, reached from the navigation.

Addresses from the Phase 1 site (`/projects`, `/writing`, `/experience` and others) forward to their nearest replacement, so links already shared still work. The table lives in `legacyRedirects` in `src/siteMap.ts`.

---

## How the code is organised

Code is grouped by the menu item it belongs to, so everything for one part of the site sits in one folder.

```
src/
  main.tsx             Entry point: mounts the app inside the router
  App.tsx              Route table: which page shows at which address
  siteMap.ts           Every route, nav item and page title, in one place

  content/             All written content, as typed data (no layout code)
    profile.ts           Name, contact details, hero, About copy
    projects.ts          The three project cards on the home page
    academic.ts          Both blogs, the film, captions and alt text

  components/
    layout/            The page frame used by every main page
      Layout.tsx           Skip link, header, page, footer
      SiteHeader.tsx       Navigation, including the mobile menu
      SiteFooter.tsx       Contact section
      RouteEffects.tsx     Title, scroll and focus on each page change
    ui/                Reusable interactive pieces
      ZoomableFigure.tsx   Image that opens full size
      Disclosure.tsx       Expand/collapse section
      FilmPlayer.tsx       The Cheetah Perfume video
      ScrollProgress.tsx   Reading progress bar on long pages

  features/            One folder per menu item
    home/                Home page and its styles
    work/                The three case studies and their shared frame
    about/               About page
    academic/            Academic projects: own layout, theme and pages
    NotFoundPage.tsx     Shown for unknown addresses

  styles/
    tokens.css           Colours, type sizes and spacing
    global.css           Base styles and shared components

  assets/              Images, video and the media reference PDF, grouped like features/
  test/                Automated tests
```

**Separation of concerns.** Content lives in `content/`, layout in `components/` and `features/`, and visual decisions in CSS custom properties in `styles/tokens.css`. Changing a sentence never means touching a component, and changing a colour never means touching a page.

**Lazy loading.** Only the home page is in the first download. Each other page is fetched when it is first visited (`React.lazy` in `App.tsx`), so the first visit downloads about 90 KB of compressed JavaScript.

---

## How the interactive parts work

| Feature                  | Where                              | Technique                                                                                                |
| ------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Full-size image viewer   | Every case study diagram           | Native `<dialog>` opened with `showModal()`: focus is trapped, Escape closes, focus returns to the image |
| Expandable sections      | Supporting work on each case study | Native `<details>`/`<summary>`, with visible Show/Hide text                                              |
| Mobile menu              | Header, below 860px                | A button with `aria-expanded`; closes on Escape or navigation                                            |
| "In this story" contents | Blog 1                             | `IntersectionObserver` highlights the section being read (`useActiveSection.ts`)                         |
| Video                    | Blog 1                             | Self-hosted MP4 with a poster frame; nothing downloads until play                                        |
| Research map             | M-PESA case study                  | Ordered lists that reflow into a vertical timeline on phones                                             |
| Next case study          | Foot of each case study            | Cycles through the three projects                                                                        |
| Sticky navigation        | Every main page                    | `position: sticky`; `scroll-padding-top` keeps anchored headings and focus below it (WCAG 2.4.11)        |
| Reading progress bar     | Case studies and Academic pages    | Scroll position batched into one update per animation frame (`ScrollProgress.tsx`)                      |
| Scroll reveal            | Home page rows, case study sections | `IntersectionObserver` on the home page (`useReveal.ts`), CSS `animation-timeline: view()` elsewhere; movement only, off for reduced motion |
| Light and dark theme     | Both headers                       | Follows the system setting; the toggle saves a choice to `localStorage` and sets `data-theme` on `<html>` (`useTheme.ts`) |
| Whole-card project links | Home page                          | The card's one link stretches over it with `::after`; the focus ring outlines the whole card (`:has()`)  |
| Media reference download | Blog 1, References                 | `<a download>` to the PDF bundled by Vite; file type and size stated in the link                          |
| Back to top              | Footer                             | In-page link to the main content                                                                         |

Native HTML elements were chosen over custom JavaScript where they exist, because they come with keyboard and screen-reader support built in.

---

## Editing content

| To change…                      | Edit                                    |
| ------------------------------- | --------------------------------------- |
| Hero, About or contact wording  | `src/content/profile.ts`                |
| A project card on the home page | `src/content/projects.ts`               |
| Blog text, captions or alt text | `src/content/academic.ts`               |
| A case study page               | `src/features/work/<Name>CaseStudy.tsx` |
| A page address or tab title     | `src/siteMap.ts`                        |
| A colour or spacing value       | `src/styles/tokens.css`                 |

---

## Testing

```bash
npm test
```

Vitest and Testing Library render the real app in a simulated browser (jsdom) and check:

- every page renders at its address with the correct heading
- each page sets its own browser-tab title
- old Phase 1 addresses forward correctly, and unknown ones show the not-found page
- the CV career history is no longer published
- the group's media reference list is offered as a PDF download
- the image viewer opens the full-size image and returns focus when closed
- expandable sections start collapsed and open

Tests run on every push, and a failure stops deployment.

---

## Deployment pipeline

`.github/workflows/deploy-pages.yml` runs on GitHub Actions.

| Trigger                         | What runs                                              |
| ------------------------------- | ------------------------------------------------------ |
| Push to `main`                  | Install → lint → test → build → deploy to GitHub Pages |
| Pull request to `main`          | Install → lint → test → build (no deploy)              |
| Manual (Actions → Run workflow) | Full pipeline                                          |

Two details make a single-page app work on GitHub Pages:

1. **Sub-path.** Pages serves the site from `/My-Portfolio-Project/`, so the build uses `--base=/<repo-name>/` and the router reads that base from `import.meta.env.BASE_URL` (`src/main.tsx`).
2. **Deep links.** Pages has no rewrite rules, so the `pagePerRoute` plugin in `vite.config.ts` writes an `index.html` into each route's folder, with that page's title. Every page returns HTTP 200, and refreshing `/about` loads the page directly. The pipeline also copies `index.html` to `404.html`, so an unknown address still shows the site's own not-found page.

In GitHub, **Settings → Pages → Source** must stay set to **GitHub Actions**.

---

## Accessibility

- All text colour pairings meet WCAG 2.2 AA. The lowest is sage on off-white in Academic and Creative Projects (4.65:1); the main site's lowest is secondary text at 6.31:1.
- One visible focus style everywhere: dark teal on light backgrounds (7.79:1), pale teal on navy (9.89:1). Gold hover cues are used only for borders and underlines, never behind text.
- A skip link on every page; focus moves to the new page after navigation so screen readers announce it.
- The sticky header never hides a focused element or an anchored heading.
- Every image has alt text, and diagrams can be opened full size.
- Motion is reduced when the visitor's system asks for it: smooth scrolling, transitions and the scroll reveal are all switched off.

---

## Built with

|                            |                                      |
| -------------------------- | ------------------------------------ |
| React 19                   | Interface                            |
| React Router 7             | Client-side routing                  |
| TypeScript 5.8             | Types for all content and components |
| Vite 6                     | Development server and build         |
| Vitest 4 + Testing Library | Automated tests                      |
| ESLint 9                   | Code checks                          |
| GitHub Actions + Pages     | Pipeline and hosting                 |

Three runtime dependencies (React, React DOM, React Router). No UI framework: all styling is hand-written CSS.
