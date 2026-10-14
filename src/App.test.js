import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza la cabecera del sitio", async () => {
  render(<App />);
  const titles = await screen.findAllByText(/Turismo Gijón/i);
  expect(titles.length).toBeGreaterThanOrEqual(1);
  expect(document.querySelector(".site-header__title")).toHaveTextContent(/Turismo Gijón/i);
});
