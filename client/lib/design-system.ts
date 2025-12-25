/**
 * RePOS Design System Constants
 * Centralized design tokens for the RePOS application
 */

export const colors = {
  primary: '#FF6B4A',
  primarySoft: '#FFF0ED',
  secondary: '#1E293B',
  
  status: {
    available: '#10B981',
    occupied: '#EF4444',
    ordered: '#F59E0B',
    cleaning: '#94A3B8',
    reserved: '#F59E0B',
  },
  
  surface: {
    appCanvas: '#F8FAFC',
    cardSurface: '#FFFFFF',
    sidebar: '#0F172A',
    border: '#E2E8F0',
  },
} as const;

export const typography = {
  h1: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '1.2',
  },
  h2: {
    fontSize: '22px',
    fontWeight: 600,
    lineHeight: '1.3',
  },
  h3: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '1.4',
  },
  bodyBold: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '1.5',
  },
  body: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '1.5',
  },
  label: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '1.4',
    textTransform: 'uppercase' as const,
  },
} as const;

export const spacing = {
  baseUnit: 8,
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
} as const;

export const borderRadius = {
  sm: '12px',
  md: '16px',
  lg: '20px',
} as const;

export const shadows = {
  card: '0px 4px 6px -1px rgba(0, 0, 0, 0.05)',
} as const;

