# Refonte du site — TODO

Objectif : mise en ligne fin novembre 2026. Stack : Astro, site statique, français uniquement.
Méthode : petites étapes, plan validé avant chaque étape, relecture du code avant de passer à la suivante.

## V1

- [x] **1. Squelette Astro** : remplacer Docusaurus, build qui passe, déploiement de prévisualisation sur Netlify
- [x] **2. Textes** : rédiger en Markdown le texte de chaque page (brief, LinkedIn, existant), validation du fond avant tout design
  - [x] Accueil
  - [x] Démarrer (ex-page Audit : session stratégie, audit, missions, FAQ)
  - [x] Comment je travaille
  - [x] Qui je suis (ex-À propos)
  - [x] Expériences
  - [x] Contact et mentions légales
- [x] **3. Pistes visuelles** : 2 ou 3 maquettes de l'accueil sur la palette (vert #276955, orange #ff6f00, bordeaux #6d001b), choix d'une piste
  - [x] Structure retenue : piste B « Affiche » (A et B d'origine écartées), titres plafonnés sur ordinateur
  - [x] Couleurs b6 « Forêt et grenat » (accent #9b1426, primaire #173f33, secondaire #276955, fond #f6f0e4)
  - [x] Portrait : photo détourée en bichromie grenat et crème (filtre SVG)
- [x] **4. Base du design** : couleurs, typographies, espacements, en-tête, pied de page, composant CTA
  - [x] En-tête : sur mobile, les liens passent sur une deuxième ligne sous le nom et le bouton
  - [x] Pied de page : « Pas de cookies, pas de suivi » (à revérifier une fois Netlify Forms en place) et bloc « Conception responsable » avec les badges Ecoindex et kastor.green repris du site actuel (`src/theme/Footer/Layout/index.tsx` sur main ; badges à relancer après la mise en ligne, le nouveau site changera le score)
  - [x] Pied de page : liens LinkedIn, GitHub et Bluesky (repris de `docusaurus.config.ts` sur main), en lien texte plutôt qu'en icônes
- [ ] **5. Intégration des pages** (une étape par page)
  - [x] Accueil (maquettes, composant Affiche et brouillon accueil.md supprimés : le texte vit dans `src/pages/index.astro`)
  - [x] Démarrer (`/demarrer`, ancres `#session` et `#audit` ; brouillon demarrer.md supprimé)
  - [x] Comment je travaille (brouillon supprimé ; critère de réussite : « le vendredi comme un mardi »)
  - [x] Qui je suis (`/qui-je-suis`, ex-`/a-propos` à rediriger à l'étape 6 ; brouillon supprimé ; parcours, pourquoi, OryxChange, Movember, 2 recommandations)
    - [x] Bloc « Mes lectures recommandées » : les 4 ressources du pied de page actuel (Coder proprement, The Cycles of TDD, architecture hexagonale et tests front-end chez OCTO), chacune avec une phrase sur ce qu'elle apporte ; vérifier que les liens fonctionnent toujours
  - [ ] Expériences (contenu actuel + introduction de lien avec le positionnement)
- [ ] **6. Contact et finitions** : formulaire Netlify (avec « Comment m'avez-vous trouvé ? », et « Ce qui vous amène » présélectionné depuis `?offre=session|audit`), mentions légales et RGPD, redirections des anciennes URLs, page 404, image de partage
- [ ] **Bloc « Trois questions » de l'accueil** : gardé pour la V1 ; à repenser avec le ton positif (« ce n'est pas de la prudence, c'est que personne n'a confiance » et « vos tests ne protègent pas ce qui compte » restent accusateurs), ou à retirer pour alléger la page
- [ ] **Ton de la page Démarrer** : revoir en positif les phrases négatives du « Pour qui » de l'audit (« chaque mise en prod se termine en correctifs », « plus personne ne sait vraiment ce qui part en prod ») et l'accroche « Pourquoi vous déboguez en prod »
- [ ] **Ton de la page Comment je travaille** : revoir en positif « ce serait la promesse d'un travail bâclé » (bloc budget), « Pas de devis qui gonfle en cours de route » et « Une usine à gaz ne sera pas maintenue par votre équipe » (principes)
- [ ] **Ton de la page Qui je suis** : revoir en positif « l'accélération a un coût, et ce sont souvent les devs qui le paient » (bloc « Pourquoi je fais ça »)
- [ ] **Passe typographique** : espaces insécables avant « : », « ; », « ? » et « ! » dans les textes des pages (faits pour les guillemets, les prix et une partie des questions)
- [ ] **Taille des titres** : trancher une fois tout le contenu intégré (titres jugés trop gros sur ordinateur et mobile, notamment le CTA de fin de page) ; un seul réglage à revoir, les variables `--fs-*` de `src/styles/global.css`
- [ ] **⚠️ Avant la mise en ligne : le « ×3–4 » du constat n'est pas sourcé.** Il vient du brief, sans source. Soit trouver une étude solide et la citer, soit remplacer les chiffres par une tendance (« plus vite », « toujours plus de features »…). Concerne l'escalier de l'accueil (`src/pages/index.astro`)
- [ ] **7. Mise en ligne** : relecture finale, vérifier que « Pas de cookies, pas de suivi » reste vrai avec Netlify Forms, relancer les audits Ecoindex et kastor.green (nouvel identifiant de badge kastor), traiter les vulnérabilités signalées par `npm audit` (picomatch via Vite/Astro), bascule

## À fournir

- [ ] Textes des 2 recommandations LinkedIn, avec nom et poste des auteurs
- [ ] Modèle de NDA prêt à signer pour l'audit (promis sur la page Audit : à avoir avant la mise en ligne)
- [ ] Numéro de téléphone de Netlify pour les mentions légales (depuis le compte Netlify, avant la mise en ligne)
- [x] Preuve « 4 ans en prod » : Medelse, lead tech web et mobile, aucune indisponibilité, tests unitaires et d'intégration + QA

## Idées de design à explorer (présence humaine)

- Signature manuscrite (prénom) sous le hero ou en fin de bloc
- Annotations au feutre sur l'affiche (flèches, mots entourés), en lien avec la posture de mentor / éducateur

## Après la V1

- FAQ de Démarrer : ajouter « Quand dois-je payer ? » une fois les modalités décidées (piste : session payée à la réservation, audit 50 % à la commande et solde à la remise du compte rendu)
- Canaux d'acquisition : remplacer le champ libre « Comment m'avez-vous trouvé ? » par une liste de canaux (LinkedIn, salon, bouche-à-oreille, recherche…) pour savoir lesquels fonctionnent
- Grille ou carrousel de témoignages, à partir de 5 recommandations
- Portage de la bannière Movember (feature flag annuel)
- Blog / ressources
- Page dédiée aux TPE
- Migration vers un hébergeur européen (statichost.eu, Bunny…)
- Mesure d'audience sans cookie (GoatCounter, Plausible), si besoin
