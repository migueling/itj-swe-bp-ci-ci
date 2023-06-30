import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Bievenidos al curso de Best Practices", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Bievenidos al curso de Best Practices. Saludos!/i
  );
  expect(linkElement).toBeInTheDocument();
});
