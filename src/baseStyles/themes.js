/**
 * https://www.smooth-code.com/open-source/xstyled/docs/theme-specification/
 */
import { lightColors, darkColors } from './colors';
import fontSizes from './fontSizes';
import BREAKPOINTS from './breakpoinst.js'

export const lightTheme = {
  colors: lightColors,
  fontSizes,
  breakpoints: BREAKPOINTS,
};

export const darkTheme = {
  colors: darkColors,
  fontSizes,
  breakpoints: BREAKPOINTS,
};
