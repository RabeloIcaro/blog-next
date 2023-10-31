import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaltTheme extends Theme {}
}
