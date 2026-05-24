import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PREMIUM BLACK & GOLD CONSTRUCTION PALETTE
        'gold-primary': '#F5B400',
        'gold-deep': '#C98A00',
        'gold-border': '#D99A00',
        'gold-accent': '#FFD24A',
        'dark-primary': '#050505',
        'dark-secondary': '#0A0A0A',
        'dark-graphite': '#151515',
        'dark-surface': '#1A1A1A',
        'text-white': '#FFFFFF',
        'text-light': '#D1D5DB',
        'text-muted': '#8A8A8A',

        // Legacy aliases (values updated to match new palette)
        'construction-amber': '#F5B400',
        'deep-slate': '#151515',
        'plaster-white': '#fcfcfc',
        'concrete-grey': '#D1D5DB',
        'surface': '#0A0A0A',
        'surface-container-low': '#151515',
        'surface-container': '#1A1A1A',
        'surface-container-high': '#2A2A2A',
        'on-surface': '#FFFFFF',
        'on-surface-variant': '#D1D5DB',
        'primary': '#F5B400',
        'primary-container': '#F5B400',
        'on-primary': '#050505',
        'on-primary-container': '#0A0A0A',
        'secondary': '#8A8A8A',
        'secondary-container': '#2A2A2A',
        'on-secondary': '#FFFFFF',
        'on-secondary-container': '#D1D5DB',
        'tertiary': '#ac330e',
        'tertiary-container': '#ff9477',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#821e00',
        'error': '#ef4444',
        'error-container': '#2A1A1A',
        'on-error': '#FFFFFF',
        'on-error-container': '#ffa8a8',
        'outline': '#D99A00',
        'outline-variant': '#333333',
        'safety-orange': '#d8522c',
      },
      spacing: {
        'container-max': '1200px',
        'section-padding': '80px',
        'gutter': '24px',
        'margin-mobile': '16px',
        'base': '8px',
      },
      borderRadius: {
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'lg': '0.375rem',
        'xl': '0.5rem',
        '2xl': '0.75rem',
      },
      fontFamily: {
        'headline': ['var(--font-headline)', 'sans-serif'],
        'body': ['var(--font-body)', 'sans-serif'],
        'label': ['var(--font-label)', 'monospace'],
      },
      fontSize: {
        'headline-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '1.2', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['14px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '500' }],
        'headline-xl-mobile': ['36px', { lineHeight: '1.1', fontWeight: '800' }],
      },
    },
  },
  plugins: [],
};

export default config;
