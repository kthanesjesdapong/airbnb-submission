import { DefaultTheme } from "styled-components";
import { colors } from "./colors";

const fonts = {
  primary: 'Better Vinegar Demo',
  secondary: 'Open Sans',
  content: 'Helvetica Neue'
};

export interface CustomTheme {
  colors: typeof colors,
  fonts: typeof fonts;
}

export const theme: DefaultTheme = {
  colors,
  fonts: fonts
};