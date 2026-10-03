# web-pablosarasqueta

Astro project scaffolded from the `init-astro-project` template.

## Stack

Astro (fully static) · Tailwind CSS · TypeScript strict · astro-icon · animejs ·
Content Collections + Zod · `@astrojs/sitemap` · Prettier ·
GitHub Actions CI (build / format / audit) · Dependabot.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run format    # Prettier (CI runs format:check)
npm run build     # static build to dist/ (serve it with any static server)
```

## Conventions

All project conventions live in the project-scoped skill:

```
/astro-implement
```

Use it whenever you add or modify a page, component, content collection, script or any other
piece of this codebase so the result stays consistent with the established style.

## Setup checklist

See `TODO.md` for the remaining setup tasks (assets, production URL, page-level copy schema,
home / 404 page implementation, SEO helpers, ...).
