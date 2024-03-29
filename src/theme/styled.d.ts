import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      red: string;
      text: string;
      textSecondary: string;
    },
    fontFamily: {
      rubik: string;
      elite: string;
    },
    fontSize: {
      huge: string;
      big: string;
      medium: string;
      small: string;
    },
    fontWeight: {
      bold: number,
      regular: number
    }
  }
}