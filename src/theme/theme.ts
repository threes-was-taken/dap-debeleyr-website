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

const colors = {
  primary: '#192a56',
  secondary: '#273c75',
  tertiary: '#2f3640',
  gray: '#7f8fa6',
  lightGray: '#dcdde1',
  white: '#fff',
  black: '#000',
  success: '#2ecc71',
  danger: '#c0392b',
  warning: '#f39c12',
  info: '#3498db',
  light: '#f5f6fa',
  dark: '#353b48',
  transparent: 'transparent',
};

export const theme = extendTheme({
  ...defaultTheme,
  breakpoints,
  fonts,
  colors,
});
