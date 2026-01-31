// Centralized brand colors
// Usage (TS): import { colors } from './colors';
// Usage (CSS vars): import { setColorCSSVariables } from './colors'; setColorCSSVariables();

export const colors = {
  primary: '#125759',
  secondary: '#27C0A7',
  disabled: '#0f4748',
} as const

export type ColorKey = keyof typeof colors

export const getColor = (key: ColorKey) => colors[key]

export const setColorCSSVariables = (root: HTMLElement | Document = document) => {
  const el = (root as Document).documentElement ?? (root as HTMLElement)
  el.style.setProperty('--color-primary', colors.primary)
  el.style.setProperty('--color-secondary', colors.secondary)
}
