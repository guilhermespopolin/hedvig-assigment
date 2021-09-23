import { FunctionComponent, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "../theme";

const AllTheProviders: FunctionComponent<{}> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function customRender(ui: ReactElement, options: RenderOptions) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
