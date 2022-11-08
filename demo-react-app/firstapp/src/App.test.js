import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders teach react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Rahel/i);
  expect(linkElement).toBeInTheDocument();
});
