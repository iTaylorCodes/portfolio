<div align="center">
  <img alt="iT logo" src="./src/assets/it-logo.png" width="80" />
</div>

# Ian Taylor — Portfolio

Personal portfolio site: professional work at Zam on Wowhead and Fanbyte, experience, and contact links.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Vitest + Testing Library
- ESLint (typescript-eslint)

## Getting started

Requires Node 22.12+ (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the dev server at http://localhost:5173 |
| `npm run build`     | Typecheck and build to `dist/`                |
| `npm run preview`   | Serve the production build locally            |
| `npm test`          | Run tests once                                |
| `npm run lint`      | Lint                                          |
| `npm run typecheck` | Typecheck only                                |

## Editing content

All copy lives in typed data files under `src/content/`, so updating the site doesn't require touching components:

- `profile.ts`: name, headline, bio, email, social links, and the "open to opportunities" flag
- `work.ts`: projects and the Wowhead tools list (omit `href` for anything that isn't live)
- `experience.ts`: roles and skills

## Deploying

`npm run build` outputs a static site to `dist/` that any static host can serve. For example, with surge:

```bash
npx surge dist itaylorcodes.surge.sh
```
