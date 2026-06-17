export const themes = {
  light: {
    bg: '#FFFFFF',
    surface: '#F9F9FB',
    raised: '#F0F0F5',
    border: '#E4E4E9',
    gold: '#C9A84C',
    goldMuted: '#8A6E30',
    text: '#080808',
    muted: '#6B6B78',
    red: '#C0392B',
  },
  dark: {
    bg: '#080808',
    surface: '#111111',
    raised: '#1A1A1A',
    border: '#242424',
    gold: '#C9A84C',
    goldMuted: '#8A6E30',
    text: '#F5F4F0',
    muted: '#7A7A72',
    red: '#C0392B',
  },
} as const;

export type ThemeType = keyof typeof themes;

export const F = {
  display: "'Cormorant Garamond', serif",
  body: "'Inter', sans-serif",
} as const;
