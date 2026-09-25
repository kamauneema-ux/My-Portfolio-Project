Grace Muthoni Kamau — Digital Portfolio

A personal portfolio site presenting experience design work, built as Assessment 1 of the Digital Portfolio module.

Two in-depth case studies sit at the centre of the site: an enterprise CAPA (corrective and preventive action) experience, and an enterprise IoT SIM management experience. The rest of the site — background, process, career history, contact — gives those case studies context.

**Repository:** https://github.com/kamauneema-ux/My-Portfolio-Project

---

## Running it locally

You need [Node.js](https://nodejs.org/) 18 or newer. Check with `node -v`.

```bash
npm install     # install dependencies (first time only)
npm run dev     # start the dev server
```

Then open the URL it prints, usually http://localhost:5173.

### Commands

| Command           | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                                          |
| `npm run build`   | Type-check, then build to `dist/`                                   |
| `npm run preview` | Serve the built site locally — use this to check a production build |
| `npm run lint`    | Run ESLint across the project                                       |

`npm run build` runs `tsc -b` first, so a type error fails the build rather than slipping through.

> **Note:** opening `dist/index.html` by double-clicking shows a blank page. The build uses absolute asset paths and client-side routing, so it has to be served. Use `npm run preview` instead.

---

## How the project is organised

```
src/
  main.tsx              entry point — mounts the app inside BrowserRouter
  App.tsx               route table; lazy-loads every route except Home
  index.css             colour palette and base styles
  App.css               component and layout styles

  components/
    Layout.tsx          shared shell — nav, footer, skip link,
                        scroll reset and per-route document titles
    StageExplorer.tsx   accessible tabbed explorer (WAI-ARIA tabs pattern)
    Artefact.tsx        captioned research artefact with privacy note
    CaseStudyHeader.tsx case study title block

  pages/                one file per route, plus the two case studies
  data/                 all written content, as typed TypeScript modules
  assets/               images used by the site
```

### The one idea worth knowing

**Content lives in `src/data/`, not in components.** Every case study, role, process step and skill group is a typed object in a data module, and components read from them.

So:

- To change a project outcome or add a job, edit a file in `src/data/`. No component is touched and the layout cannot break.
- Because the types are enforced, a case study **cannot** be added without supplying every field the design expects. Content and design stay in step.

If you want to change what the site _says_, start in `src/data/`. If you want to change how it _looks_, start in `src/App.css`.

---

## Routes

| Path              | Page                    |
| ----------------- | ----------------------- |
| `/`               | Home                    |
| `/projects`       | Work — case study index |
| `/projects/:slug` | Individual case study   |
| `/how-i-work`     | Design process          |
| `/about`          | Background              |
| `/experience`     | Career history          |
| `/contact`        | Contact                 |
| `*`               | 404                     |

Routing happens in the browser. Because of that, the host must rewrite unmatched paths to `index.html` — otherwise refreshing on `/about` returns a 404. That rule is in `vercel.json` for Vercel and `public/_redirects` for Netlify. **Deploying anywhere else means configuring the equivalent.**



