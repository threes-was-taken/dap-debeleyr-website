import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';

const breakpoints = {
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const defaultFonts = "'Poppins', Arial, sans-serif, 'Noto Color Emoji'";
export const fonts = {
  body: defaultFonts,
  heading: defaultFonts,
  mono: defaultFonts,
};

export const spacing = {
  space: {
    x1: '8px',
    x2: '16px',
    x4: '32px',
    x5: '40px',
    x8: '64px',
    x16: '128px',
  },
};
export const borderRadius = {
  radii: {
    x1: '4px',
    x2: '8px',
    infinite: '1000px',
  },
};

export const theme = extendTheme({
  ...defaultTheme,
  breakpoints,
  fonts,
  spacing,
  borderRadius,
});
