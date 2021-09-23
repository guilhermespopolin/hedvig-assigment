import { render, screen } from "./test/utils";
import userEvent from "@testing-library/user-event";

import { rentalPerilsResponseMock } from "./test/mock/handlers";

import App from "./App";

describe("<App />", () => {
  beforeEach(() => {
    // "Official" workaround to mock methods that are not implemented in JSDOM
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    // It's necessary because <Peril /> component changes content to be rendered based on
    // scree size and in order to do so, it uses a custom hook that keep track of screen size.
    // Finally, that hook uses `window.matchMedia` API which is not currently implmented in JSDOM
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("should fetch and render a list of perils", async () => {
    render(<App />);

    const firePeril = await screen.findByRole("button", { name: /fire/i });
    expect(firePeril).toBeVisible();
  });

  it("should display its short description when hovering a peril", async () => {
    render(<App />);

    const firePeril = await screen.findByRole("button", { name: /fire/i });
    userEvent.hover(firePeril);
    const shortDescription = await screen.findByText(
      rentalPerilsResponseMock[0].shortDescription
    );
    expect(shortDescription).toBeVisible();
  });
});
