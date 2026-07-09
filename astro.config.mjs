// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/single/',
  build: {
    assets: '_astro' // デフォルトですが明示します
  },
//   outDir: './dist/single/',
  site: 'https://sws.studio-condor.com/',
  vite: {
    plugins: [tailwindcss()]
  }
});