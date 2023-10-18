import 'styled-components';
import { CustomTheme } from '@shared/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}