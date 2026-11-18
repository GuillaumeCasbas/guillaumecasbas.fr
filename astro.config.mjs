// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://www.guillaumecasbas.fr',
  integrations: [
    sitemap({
      // Pages kept out of search engines (they are also marked noindex).
      filter: (page) => !page.includes('/contact/merci'),
    }),
  ],
});
