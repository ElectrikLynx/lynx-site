/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        body: 'rgba(var(--color-bg))',
        'body-a': 'rgba(var(--color-bg-alpha))',
        'box-bg': 'rgb(var(--color-box))',
        'box-shadow': 'rgb(var(--box-sd))',
        'box-border': 'rgb(var(--box-border))',
        primary: '#1d4ed8',
        'heading-1': 'rgb(var(--heading-1))',
        'heading-2': 'rgb(var(--heading-2))',
        'heading-3': 'rgb(var(--heading-3))',
        'sub-background': 'rgb(var(--sub-background))',
        'elynx-orange': 'var(--elynx-orange)',
      },
      maxWidth: { '50vw':'50vw','60vw':'60vw','70vw':'70vw','80vw':'80vw' },
      screens: { midmd: '880px' },
    },
  },
  plugins: [],
};
