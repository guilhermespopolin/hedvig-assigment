import { DefaultTheme } from "styled-components";

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
};

const theme: DefaultTheme = {
  typography: {
    fontFamily: "'Rubik', sans-serif",
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
    lineHeight: {
      xs: "1rem",
      sm: "1.25rem",
      base: "1.5rem",
      lg: "1.75rem",
      xl: "1.75rem",
      "2xl": "2rem",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  colors: {
    white: "#fff",
    black: "#000",
  },
  shape: {
    borderRadius: "4px",
  },
  responsive: {
    breakpoints,
    mediaQueries: {
      minWidthSm: `(min-width: ${breakpoints.sm})`,
      minWidthMd: `(min-width: ${breakpoints.md})`,
      minWidthLg: `(min-width: ${breakpoints.lg})`,
    },
  },
};

export default theme;
