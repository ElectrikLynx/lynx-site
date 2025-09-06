import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    shikiConfig: { theme: 'github-dark' }, // example
    syntaxHighlight: 'shiki', 
    remarkPlugins: [],
    rehypePlugins: [],
    gfm: true,
    // 👇 this is the key
    drafts: false,
    smartypants: true,
    // allow raw HTML
    markdownIt: (md) => md.set({ html: true }),
  },
});