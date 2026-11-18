# Refonte du site — TODO

Objectif : mise en ligne fin novembre 2026. Stack : Astro, site statique, français uniquement.
Méthode : petites étapes, plan validé avant chaque étape, relecture du code avant de passer à la suivante.

Les étapes 1 à 6 sont terminées (voir « Fait » en bas). Ce qui reste est classé par priorité, en vue du salon du **19 novembre 2026**.

## 🔴 Avant le salon (19 novembre)

Classé par impact : ce qu'un visiteur du salon verra en premier, c'est ton profil LinkedIn.

- [x] **LinkedIn, l'essentiel** (≈ 30 min) : appliquer la section 1 de `knowledge-refonte-site/audit-profils.md`
  - [x] Nouvelle bannière : `knowledge-refonte-site/linkedin-banniere.png`
  - [x] Nouveau titre (« Livrer sereinement… » au lieu de « sans stress »)
  - [x] Nouveau résumé (sans le « 3 à 4 fois », prix en HT, session stratégie ajoutée), en vérifiant les retours à la ligne
- [x] **Décider : mettre le nouveau site en ligne avant le salon, ou juste après.** Mis en ligne le 2026-11-18, avant le salon. L'ancien site contredit le nouveau positionnement, mais un jour de plus est acceptable. Si mise en ligne, il faut d'abord régler ces bloquants (≈ 1 à 2 h) :
  - [x] **Le « ×3–4 » non sourcé** : remplacé le 2026-11-18 par une tendance (« Plus vite pour coder. Davantage de features demandées… »)
  - [x] **Le NDA promis** : adouci le 2026-11-18 (« Si vous le souhaitez, on signe votre accord de confidentialité… ») dans le déroulé de l'audit et la FAQ de Démarrer
  - [x] **Le téléphone de Netlify** : introuvable (ni dans le compte, ni auprès de leur support) ; mentions légales : « Téléphone : non communiqué par l'hébergeur » (2026-11-18)
  - [x] **`npm audit`** : vérifié le 2026-11-18. Faille ReDoS de picomatch (≤ 4.0.7), utilisé seulement au build par Vite et Astro ; aucun correctif publié, rien n'est livré aux visiteurs (site statique). Non bloquant : revérifier après une mise à jour d'Astro
  - [x] Fusionner la branche dans main, déployer, vérifier le site sur ton téléphone (fait le 2026-11-18, avec message de test et aperçu LinkedIn rafraîchi)
- [x] **Bluesky** (≈ 10 min) : nouvelle bio (section 3 de l'audit) et bannière `knowledge-refonte-site/bluesky-banniere.png`
- [x] **Signature email** (≈ 5 min, une fois le site en ligne pour que l'avatar s'affiche) : ouvrir `knowledge-refonte-site/signature-email.html` dans le navigateur, tout copier, coller dans Gmail (Paramètres → Général → Signature)

## 🟠 Juste après le salon (avant fin novembre)

### Audits de site
Le site esst déjà très qualitatif, c'est surtout le SEO qu'il faudra travailler
- [ ] rapport d'audit à challenger (fichier dans le knoledge)

### Profils (suite de `knowledge-refonte-site/audit-profils.md`)

- [ ] LinkedIn (preuve Medelse et bachelor faits le 2026-11-18) : TDD01 en formation (OCTO Academy, 2019), remplacer « React.js » dans les compétences principales, harmoniser les intitulés (Human's Connexion, Go chez Medelse), décider pour OryxChange
- [ ] GitHub : bio, README de profil en français relié au positionnement, description du dépôt du site (« construit avec Astro »)
- [ ] Bluesky : garder le compte actif ou retirer le lien (pied de page du site et LinkedIn) ; supprimer ou non le post « J'ai envie de blogger »

### Textes du site

- [ ] **Modèle de NDA prêt à signer** : une fois prêt, remettre la promesse « j'apporte un NDA prêt à signer » dans le déroulé de l'audit et la FAQ de Démarrer (`src/pages/demarrer.astro`)

- [x] **Ton de l'accueil, bloc « Trois questions »** (revu le 2026-11-18, carte Audit comprise) : à repenser en positif (« ce n'est pas de la prudence, c'est que personne n'a confiance », « vos tests ne protègent pas ce qui compte ») ou à retirer pour alléger la page
- [x] **Ton de Démarrer** (revu le 2026-11-18) : « chaque mise en prod se termine en correctifs », « plus personne ne sait vraiment ce qui part en prod », l'accroche « Pourquoi vous déboguez en prod »
- [x] **Ton de Comment je travaille** (revu le 2026-11-18) : « ce serait la promesse d'un travail bâclé », « Pas de devis qui gonfle en cours de route », « Une usine à gaz ne sera pas maintenue par votre équipe »
- [x] **Ton de Qui je suis** (revu le 2026-11-18) : « l'accélération a un coût, et ce sont souvent les devs qui le paient »
- [ ] **Passe typographique** : espaces insécables avant « : », « ; », « ? » et « ! » (déjà faits pour les guillemets, les prix et une partie des questions)

### Design

- [ ] **Taille des titres** : titres jugés trop gros sur ordinateur et mobile, notamment le CTA de fin de page ; un seul réglage, les variables `--fs-*` de `src/styles/global.css` ; corriger au passage le débordement sur les très petits écrans (320 px : en-tête et certains titres)

### Après la mise en ligne

- [ ] Vérifier sur le site en ligne que « Pas de cookies, pas de suivi » reste vrai (formulaire Netlify testé et fonctionnel le 2026-11-18)
- [x] Relancer les audits Ecoindex et kastor.green (2026-11-18) : [rapport Ecoindex](https://www.ecoindex.fr/resultat/?id=7c299d60-7256-45bc-9f0e-fe6358186a43), [rapport kastor.green](https://kastor.green/simple-audit-result/6mXg8Gab)
- [x] Pied de page : remplacer le lien et l'image du badge kastor.green (branche `fix/kastor-badge`, score 97) (`src/components/Footer.astro`) par ceux du nouvel audit ; récupérer l'adresse de l'image du badge sur kastor.green (le badge Ecoindex, lui, se met à jour tout seul)
- [ ] Début décembre : désactiver le bandeau Movember (`enabled: false` dans `src/config/movember.ts`)
- [ ] Mettre à jour la description du dépôt GitHub du site
- [ ] Réécrire le `README.md` en anglais (le dépôt est public) : présentation courte du site, stack Astro, commandes d'installation, de développement et de build ; ne plus mettre en avant le `TODO.md` (pas de lien vers celui-ci)

## 🟢 Après la V1

- FAQ de Démarrer : ajouter « Quand dois-je payer ? » une fois les modalités décidées (piste : session payée à la réservation, audit 50 % à la commande et solde à la remise du compte rendu)
- Canaux d'acquisition : remplacer le champ libre « Comment m'avez-vous trouvé ? » par une liste de canaux (LinkedIn, salon, bouche-à-oreille, recherche…) pour savoir lesquels fonctionnent
- Grille ou carrousel de témoignages, à partir de 5 recommandations
- Blog / ressources
- Page dédiée aux TPE
- Migration vers un hébergeur européen (statichost.eu, Bunny…) : critère en plus, Netlify ne communique pas de numéro de téléphone, pourtant exigé dans les mentions légales ; choisir un hébergeur qui donne toutes les informations légales (raison sociale, adresse, téléphone)
- Mesure d'audience sans cookie (GoatCounter, Plausible), si besoin

### Idées de design à explorer (présence humaine)

- Signature manuscrite (prénom) sous le hero ou en fin de bloc
- Annotations au feutre sur l'affiche (flèches, mots entourés), en lien avec la posture de mentor / éducateur

## Fait

- [x] **1. Squelette Astro** : remplacer Docusaurus, build qui passe, déploiement de prévisualisation sur Netlify
- [x] **2. Textes** : accueil, Démarrer, Comment je travaille, Qui je suis, Expériences, contact et mentions légales
- [x] **3. Pistes visuelles** : piste B « Affiche », couleurs b6 « Forêt et grenat », portrait en bichromie
- [x] **4. Base du design** : couleurs, typographies, espacements, en-tête, pied de page (badges, réseaux), boutons et CTA
- [x] **5. Intégration des pages** : accueil, Démarrer, Comment je travaille, Qui je suis (avec lectures recommandées), Expériences (Medelse en gras, formation TDD01)
- [x] **6. Contact et finitions** : formulaire Netlify avec présélection `?offre=`, page de remerciement, mentions légales et RGPD (badges tiers mentionnés), page 404, image de partage ; pas de redirection
- [x] Netlify : détection des formulaires, notification email, message de test reçu
- [x] Textes des 2 recommandations LinkedIn intégrés au site
- [x] Preuve « 4 ans en prod » : Medelse, aucune interruption de service
- [x] Bandeau Movember sur l'accueil et Qui je suis : réglages dans `src/config/movember.ts` (mettre à jour km et euros pendant la campagne, `enabled: false` en décembre)
- [x] Favicon « GC » crème sur grenat (`favicon.ico`, `favicon.png`, `apple-touch-icon.png`), validé le 2026-11-18
- [x] Charte graphique : `knowledge-refonte-site/charte-graphique.md`
- [x] Audit des profils LinkedIn, GitHub et Bluesky, bannières LinkedIn et Bluesky : `knowledge-refonte-site/`
