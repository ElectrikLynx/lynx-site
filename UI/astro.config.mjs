import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind(), react()],
  // remove vite.plugins and css.transformer overrides you added for v4
  markdown: {
    shikiConfig: { theme: 'github-dark' },
    syntaxHighlight: 'shiki',
    remarkPlugins: [],
    rehypePlugins: [],
    gfm: true,
    drafts: false,
    smartypants: true,
    markdownIt: (md) => md.set({ html: true }),
  },
  vite: {
    ssr: { noExternal: ['react-icons'] }, // keep this
  },
});
