import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()], 
  vite: {
    plugins: [tailwindcss()],    
    css: { transformer: 'postcss' },
    ssr: { noExternal: ['react-icons'] },
  },
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
});
