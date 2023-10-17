import 'styled-components';
import { CustomTheme } from '@shared/styles/index';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}