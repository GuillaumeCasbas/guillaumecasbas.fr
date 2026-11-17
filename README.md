# Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/2da858fa-ba71-4ecf-ab33-9f82cb7047a5/deploy-status)](https://app.netlify.com/projects/guillaumecasbaswebsite/deploys)

Site statique construit avec [Astro](https://astro.build/). Suivi de la refonte : [TODO.md](TODO.md).

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

## Build

```bash
npm run build
```

Vérifie les types (`astro check`) puis génère le site dans `dist/`.

```bash
npm run preview
```

Sert localement le contenu de `dist/`.

## Déploiement

Netlify construit et publie le site à chaque push, selon `netlify.toml`.
