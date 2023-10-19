import { DefaultTheme } from "styled-components";
import { colors } from "./colors";

const fonts = {
  primary: 'Better Vinegar Demo',
  secondary: 'Open Sans'
};

export interface CustomTheme {
  colors: typeof colors,
  fonts: typeof fonts;
}

export const theme: DefaultTheme = {
  colors,
  fonts: fonts
};