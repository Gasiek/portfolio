import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: {
        primary: string;
        secondary: string;
      };
      light: {
        primary: string;
        secondary: string;
      };
      white: string;
      black: string;
    };
  }
}
