<div align="center">
  <img alt="iT logo" src="./src/assets/it-logo.png" width="80" />
</div>

# Ian Taylor — Portfolio

Personal portfolio site: professional work at Zam on Wowhead and Fanbyte, experience, and contact links.

**Live at https://itaylorcodes.com**

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

The site is hosted on GitHub Pages at https://itaylorcodes.com and deploys automatically:

- **Pull requests:** `.github/workflows/deploy.yml` runs lint, tests, and a production build.
- **Push to `main`:** the same checks run, then `dist/` is deployed to Pages. The site updates about a minute after a merge.
- **Manual redeploy:** run the "Build and deploy" workflow from the Actions tab, or `gh workflow run deploy.yml --ref main`.

### Custom domain

- **Registrar:** the domain is registered with Squarespace, which also hosts its DNS.
- **GitHub settings:** in the repo's Settings → Pages, Source is set to **GitHub Actions**, the custom domain is `itaylorcodes.com`, and **Enforce HTTPS** is on.
- **HTTPS certificate:** issued by Let's Encrypt for `itaylorcodes.com` and `www.itaylorcodes.com`, and renewed automatically by GitHub.

DNS records in Squarespace (Domains → itaylorcodes.com → DNS Settings → Custom Records):

| Type  | Name  | Data                     |
| ----- | ----- | ------------------------ |
| A     | `@`   | `185.199.108.153`        |
| A     | `@`   | `185.199.109.153`        |
| A     | `@`   | `185.199.110.153`        |
| A     | `@`   | `185.199.111.153`        |
| CNAME | `www` | `itaylorcodes.github.io` |

The "Squarespace Defaults" DNS preset has been deleted. Don't re-add it; it points the domain back at a Squarespace website.

### Troubleshooting HTTPS

If the certificate ever needs to be re-issued (for example after changing DNS), GitHub only requests one when the custom domain is saved, and the request fails if any DNS resolver still has old records cached. Wait until the old records' TTL has expired (it was 4 hours on Squarespace), then remove and re-add the custom domain in Settings → Pages. The certificate usually arrives within a few minutes, after which Enforce HTTPS can be turned back on.
