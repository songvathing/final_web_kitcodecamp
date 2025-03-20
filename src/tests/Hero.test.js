
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

test("renders welcome message", () => {
  render(<Hero />);
  const linkElement = screen.getByText(/Welcome to Our Website/i);
  expect(linkElement).toBeInTheDocument();
});
