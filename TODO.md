# Refonte du site — TODO

Objectif : mise en ligne fin novembre 2026. Stack : Astro, site statique, français uniquement.
Méthode : petites étapes, plan validé avant chaque étape, relecture du code avant de passer à la suivante.

## V1

- [x] **1. Squelette Astro** : remplacer Docusaurus, build qui passe, déploiement de prévisualisation sur Netlify
- [x] **2. Textes** : rédiger en Markdown le texte de chaque page (brief, LinkedIn, existant), validation du fond avant tout design
  - [x] Accueil
  - [x] Démarrer (ex-page Audit : session stratégie, audit, missions, FAQ — 4 réponses de FAQ à valider)
  - [x] Comment je travaille
  - [x] À propos
  - [x] Expériences
  - [x] Contact et mentions légales
- [ ] **3. Pistes visuelles** : 2 ou 3 maquettes de l'accueil sur la palette (vert #276955, orange #ff6f00, bordeaux #6d001b), choix d'une piste
- [ ] **4. Base du design** : couleurs, typographies, espacements, en-tête, pied de page, composant CTA
- [ ] **5. Intégration des pages** (une étape par page)
  - [ ] Accueil
  - [ ] Démarrer (`/demarrer`, ancres `#session` et `#audit`)
  - [ ] Comment je travaille
  - [ ] À propos (parcours, pourquoi, OryxChange, Movember, 2 recommandations)
  - [ ] Expériences (contenu actuel + introduction de lien avec le positionnement)
- [ ] **6. Contact et finitions** : formulaire Netlify (avec « Comment m'avez-vous trouvé ? », et « Ce qui vous amène » présélectionné depuis `?offre=session|audit`), mentions légales et RGPD, redirections des anciennes URLs, page 404, image de partage
- [ ] **7. Mise en ligne** : relecture finale, traiter les vulnérabilités signalées par `npm audit` (picomatch via Vite/Astro), bascule

## À fournir

- [ ] Textes des 2 recommandations LinkedIn, avec nom et poste des auteurs
- [ ] Modèle de NDA prêt à signer pour l'audit (promis sur la page Audit : à avoir avant la mise en ligne)
- [ ] Numéro de téléphone de Netlify pour les mentions légales (depuis le compte Netlify, avant la mise en ligne)
- [x] Preuve « 4 ans en prod » : Medelse, lead tech web et mobile, aucune indisponibilité, tests unitaires et d'intégration + QA

## Après la V1

- Canaux d'acquisition : remplacer le champ libre « Comment m'avez-vous trouvé ? » par une liste de canaux (LinkedIn, salon, bouche-à-oreille, recherche…) pour savoir lesquels fonctionnent
- Grille ou carrousel de témoignages, à partir de 5 recommandations
- Portage de la bannière Movember (feature flag annuel)
- Blog / ressources
- Page dédiée aux TPE
- Migration vers un hébergeur européen (statichost.eu, Bunny…)
- Mesure d'audience sans cookie (GoatCounter, Plausible), si besoin
