# guillaumecasbas.fr

[![Netlify Status](https://api.netlify.com/api/v1/badges/2da858fa-ba71-4ecf-ab33-9f82cb7047a5/deploy-status)](https://app.netlify.com/projects/guillaumecasbaswebsite/deploys)

Source code of [guillaumecasbas.fr](https://www.guillaumecasbas.fr), the website of Guillaume Casbas, freelance lead tech.

A static site built with [Astro](https://astro.build/): no client-side framework, no cookies, no tracking, and as little JavaScript as possible. The site content is in French.

## Requirements

- Node.js 22.12 or later

## Getting started

```bash
npm install
npm run dev
```

The development server runs on http://localhost:4321.

## Build

```bash
npm run build
```

Checks types with `astro check`, then generates the static site in `dist/`.

```bash
npm run preview
```

Serves the content of `dist/` locally.

## Project structure

```
src/
├── components/   UI components (header, footer, buttons, cards…)
├── config/       Settings for seasonal features (Movember banner)
├── layouts/      Page layouts
├── pages/        One file per page
└── styles/       Global styles and design tokens
public/           Static files served as is
```

## Deployment

Netlify builds and publishes the site on every push to `main`, as configured in `netlify.toml`.
