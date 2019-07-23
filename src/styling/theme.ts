export const colors = {
  black: '#000000',
  white: '#ffffff',
  green: '#6ac6b1',
  blue: '#406ba9',
  red: '#ec2874',
  grey: '#929292',
  greyLightest: '#fbfbfb',

  primary: '#20a9d4',
  disableWhite: '#71ceeb',
  lightBlue: '#c6cee5',
  disablePrimary: '#0f7aa5',
  darkBlue: '#000b35',
  lighterBlue: '#e9effb',
  border: '#647378',
};

export const breakpoints = {
  zero: 0,
  xs: 321,
  s: 480,
  m: 768,
  md: 1024,
  l: 1190,
  xl: 1400,
  xxl: 1920,
  infinity: Infinity,
};

export const media = {
  exactS: `@media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px)`,
  exactM: `@media screen and (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.md - 1}px)`,
  exactL: `@media screen and (min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.xl - 1}px)`,
  exactXl: `@media screen and (min-width: ${breakpoints.xl}px)`,
  exactXs: `@media screen and (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.s - 1}px)`,
  exactxxl: `@media screen and (min-width: ${breakpoints.xxl}px)`,
  maxL: `@media screen and (max-width: ${breakpoints.l - 1}px)`,
  maxM: `@media screen and (max-width: ${breakpoints.m - 1}px)`,
  maxMD: `@media screen and (max-width: ${breakpoints.md - 1}px)`,
  maxS: `@media screen and (max-width: ${breakpoints.s - 1}px)`,
  maxXl: `@media screen and (max-width: ${breakpoints.xl - 1}px)`,
  maxXs: `@media screen and (max-width: ${breakpoints.xs - 1}px)`,
  retina: '@media (-webkit-min-device-pixel-ratio: 2)',
  s: `@media screen and (min-width: ${breakpoints.s}px)`,
  l: `@media screen and (min-width: ${breakpoints.l}px)`,
  m: `@media screen and (min-width: ${breakpoints.m}px)`,
  md: `@media screen and (min-width: ${breakpoints.md}px)`,
  xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
  xs: `@media screen and (min-width: ${breakpoints.xs}px)`,
  xxl: `@media screen and (min-width: ${breakpoints.xxl}px)`,
  zero: `@media screen and (min-width: ${breakpoints.zero}px)`,
};

export const fontSizeBase = 16;
export const defaultTransitionTime = 0.3;

// helper functions
export function em(val: number, base = fontSizeBase) {
  return `${Math.round((val / base) * 10000) / 10000}em`;
}

export function rem(val: number) {
  return `${Math.round((val / fontSizeBase) * 10000) / 10000}rem`;
}

export interface Colors {
  primary: string;
  white: string;
  disableWhite: string;
  lightBlue: string;
  disablePrimary: string;
  darkBlue: string;
  lighterBlue: string;
  border: string;
}

export interface Media {
  xxl: string;
  xl: string;
  l: string;
  m: string;
  md: string;
  s: string;
  xs: string;
  exactxxl: string;
  exactXl: string;
  exactL: string;
  exactM: string;
  exactS: string;
  exactXs: string;
  maxXl: string;
  maxL: string;
  maxM: string;
  maxMD: string;
  maxS: string;
  maxXs: string;
  retina: string;
  zero: string;
}

export interface Theme {
  colors: Colors;
  media: Media;
  em: (val: number, base: number) => string;
  rem: (val: number) => string;
}

export const theme: Theme = {
  colors,
  em,
  media,
  rem,
};
