import React from "react";
import { render } from "@testing-library/react";
import Hello from "./Hello";

test('renders "Hello" text', () => {
  // Render the Hello component
  const { getByText } = render(<Hello />);

  // Use a query to find the text "Hello" in the component's rendered output
  const helloElement = getByText("Hello");

  // Assert that the text "Hello" is found in the component's output
  expect(helloElement).toBeInTheDocument();
});
