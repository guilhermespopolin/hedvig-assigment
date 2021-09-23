import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      fontFamily: string;
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
      };
      lineHeight: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
      };
      fontWeight: {
        regular: number;
        medium: number;
        bold: number;
      };
    };
    colors: {
      white: string;
      black: string;
    };
    shape: {
      borderRadius: string;
    };
    responsive: {
      breakpoints: {
        sm: string;
        md: string;
        lg: string;
      };
      mediaQueries: {
        minWidthSm: string;
        minWidthMd: string;
        minWidthLg: string;
      };
    };
  }
}
