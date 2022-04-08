import React from "react";
import { screen, render } from "@testing-library/react";
import { CustomButton as Button } from "./Button";

describe("Button", () => {
  it("should render <Button /> component showing the correct text", async () => {
    // Arrange
    const expectedText = 'Add to cart';
    render(<Button handleClick={jest.fn}></Button>);

    // Act

    // Assert
    expect(
      screen.getByText('Add to cart')
    ).toHaveTextContent(expectedText);
  });
});
