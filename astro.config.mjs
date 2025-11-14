// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://alicornsolutions.com',
  integrations: [icon(), sitemap(), mdx()],
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())]
  }
});