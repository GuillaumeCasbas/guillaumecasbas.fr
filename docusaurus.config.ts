import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Guillaume Casbas - Lead Tech & Développeur Web Freelance',
  tagline: 'Expert React / React-native et fervant supporter du TDD, je vous accompagne dans la conception d’application fiables et scalables.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://www.guillaumecasbas.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Guillaume Casbas',
      items: [
        {to: '/experiences', label: 'Expériences', position: 'left'},
        {
          href: 'https://www.linkedin.com/in/guillaumecasbas/',
          label: 'Linkedin',
          position: 'right',
        },
        {
          href: 'https://github.com/guillaumecasbas',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ressources intéressantes',
          items: [
            {
              label: 'Le Craftmanship',
              href: 'https://www.cultura.com/p-coder-proprement-9782326002272.html',
            },
            {
              label: 'Le TDD',
              href: 'https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html',
            },
            {
              label: 'Sur l\'architecture d\'application',
              href: 'https://blog.octo.com/architecture-hexagonale-trois-principes-et-un-exemple-dimplementation',
            },
            {
              label: 'Sur le front-end',
              href: 'https://blog.octo.com/tests-sur-tous-les-fronts-emergence-des-composants-applicatifs',
            }
          ]
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/guillaumecasbas/',
            },
            {
              label: 'Github',
              href: 'https://github.com/guillaumecasbas',
            },
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/guillaumecasbas.fr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Guillaume Casbas. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // future: {
    //   experimental_faster: true,
    // }
  } satisfies Preset.ThemeConfig,
};

export default config;
