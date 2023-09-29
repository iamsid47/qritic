import { render, screen } from "@testing-library/react";
import App from "./App";

test("render hello world", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test("render button", () => {
  render(<App />);
  const button = screen.getByTestId("tButton");
  expect(button).toBeInTheDocument();
});
