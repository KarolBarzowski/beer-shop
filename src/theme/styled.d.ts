import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      textSecondary: string;
    },
    fontFamily: {
      rubik: string;
      elite: string;
    },
    fontSize: {
      big: string;
      medium: string;
      small: string;
    }
  }
}