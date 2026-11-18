// Structured data (schema.org JSON-LD) read by search engines and AI assistants.
// It must only describe what visitors can see on the site.

const site = 'https://www.guillaumecasbas.fr';
const personId = `${site}/#person`;

/** Who runs the site: added to every page by BaseLayout. */
export const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: 'Guillaume Casbas',
  url: `${site}/`,
  image: `${site}/signature/avatar.png`,
  jobTitle: 'Lead tech freelance',
  description:
    'Livrer sereinement, même quand l’IA écrit le code. Je remets le contrôle dans vos livraisons : des process, des tests et du jugement.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toulouse',
    addressRegion: 'Occitanie',
    addressCountry: 'FR',
  },
  knowsAbout: ['TDD', 'ATDD', 'CI/CD', 'Tests automatisés', 'Revue de code', 'Clean architecture'],
  sameAs: [
    'https://www.linkedin.com/in/guillaumecasbas/',
    'https://github.com/guillaumecasbas',
    'https://bsky.app/profile/guillaumecasbas.fr',
  ],
};

/** A fixed-price entry offer, VAT excluded. */
const pricedOffer = (name: string, description: string, price: number, url: string) => ({
  '@type': 'Offer',
  url,
  priceSpecification: {
    '@type': 'UnitPriceSpecification',
    price,
    priceCurrency: 'EUR',
    valueAddedTaxIncluded: false,
  },
  itemOffered: { '@type': 'Service', name, description },
});

/** A mission quoted case by case: no public price, on purpose. */
const quotedOffer = (name: string, description: string) => ({
  '@type': 'Offer',
  url: `${site}/demarrer/`,
  description: 'Chiffré après l’audit ou la session : périmètre écrit, prix ferme.',
  itemOffered: { '@type': 'Service', name, description },
});

/** Everything Guillaume offers, as shown on the Démarrer page. */
export const services = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Accompagnement des livraisons logicielles',
  description:
    'Remettre le contrôle dans les livraisons des équipes de développement, même quand l’IA écrit le code : tests, pipeline, revues de code.',
  provider: { '@id': personId },
  areaServed: 'FR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Offres',
    itemListElement: [
      pricedOffer(
        'Session stratégie',
        '90 minutes à distance pour prendre du recul sur votre façon de livrer, avec un compte rendu écrit.',
        300,
        `${site}/demarrer/#session`,
      ),
      pricedOffer(
        'Audit de livraison',
        '1 jour, sur place ou à distance : constats factuels, plan d’action priorisé, checklists et restitution orale.',
        700,
        `${site}/demarrer/#audit`,
      ),
      quotedOffer(
        'Pipeline et tests critiques',
        'Une CI/CD complète et les tests qui protègent votre métier.',
      ),
      quotedOffer(
        'ATDD',
        'Des tests écrits à partir des critères de votre équipe produit, qui valident le code généré par IA.',
      ),
      quotedOffer(
        'Partenaire de livraison',
        'Votre lead tech à temps partiel, présent pour vos mises en prod, avec un bilan chiffré chaque mois.',
      ),
    ],
  },
};
