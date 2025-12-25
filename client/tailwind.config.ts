import type { Config } from 'tailwindcss';
import { colors, typography, spacing, borderRadius } from './lib/design-system';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.primary,
          soft: colors.primarySoft,
        },
        secondary: {
          DEFAULT: colors.secondary,
        },
        status: {
          available: colors.status.available,
          occupied: colors.status.occupied,
          ordered: colors.status.ordered,
          cleaning: colors.status.cleaning,
          reserved: colors.status.reserved,
        },
        surface: {
          canvas: colors.surface.appCanvas,
          card: colors.surface.cardSurface,
          sidebar: colors.surface.sidebar,
          border: colors.surface.border,
        },
      },
      fontFamily: {
        sans: ['var(--font-urbanist)', 'var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'h1': [typography.h1.fontSize, typography.h1.lineHeight],
        'h2': [typography.h2.fontSize, typography.h2.lineHeight],
        'h3': [typography.h3.fontSize, typography.h3.lineHeight],
        'body': [typography.body.fontSize, typography.body.lineHeight],
        'label': [typography.label.fontSize, typography.label.lineHeight],
      },
      fontWeight: {
        normal: typography.body.fontWeight,
        medium: typography.label.fontWeight,
        semibold: typography.h2.fontWeight,
        bold: typography.h1.fontWeight,
      },
      spacing: {
        ...spacing,
      },
      borderRadius: {
        ...borderRadius,
      },
      boxShadow: {
        card: '0px 4px 6px -1px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;

