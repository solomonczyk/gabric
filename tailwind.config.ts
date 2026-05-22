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
        // Industrial Precision Design System
        'construction-amber': '#f59e0b',
        'deep-slate': '#1f2937',
        'plaster-white': '#fcfcfc',
        'concrete-grey': '#e5e7eb',
        'surface': '#f8f9fb',
        'surface-container-low': '#f3f4f6',
        'surface-container': '#edeef0',
        'surface-container-high': '#e7e8ea',
        'on-surface': '#191c1e',
        'on-surface-variant': '#534434',
        'primary': '#855300',
        'primary-container': '#f59e0b',
        'on-primary': '#ffffff',
        'on-primary-container': '#613b00',
        'secondary': '#555f6f',
        'secondary-container': '#d6e0f3',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#596373',
        'tertiary': '#ac330e',
        'tertiary-container': '#ff9477',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#821e00',
        'error': '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
        'outline': '#867461',
        'outline-variant': '#d8c3ad',
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
