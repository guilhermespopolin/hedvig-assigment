import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import PerilGallery from "./components/PerilGallery";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    line-height: ${({ theme }) => theme.typography.lineHeight.xs};
    color: ${({ theme }) => theme.colors.black};

    @media ${({ theme }) => theme.responsive.mediaQueries.minWidthSm} {
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
    }
  }
`;

const Container = styled.main`
  min-height: 100vh;
  padding: 3em 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PerilGallery />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
