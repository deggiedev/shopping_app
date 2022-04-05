import React from "react";
import { screen, render } from "@testing-library/react";
import { QuantityActions } from "./QuantityActions";

describe("QuantityActions", () => {
  it("should render <QuantityActions/> component with two buttons showing the correct plus and minus symbols", async () => {
    // Arrange

    render(<QuantityActions></QuantityActions>);

    // Act

    // Assert
    const plusButton = screen.getByRole("button", { name: "plus-button" });
    const minusButton = screen.getByRole("button", { name: "minus-button" });
    expect(plusButton).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
  });

  it("should render <QuantityActions/> component with the correct label", async () => {
    // Arrange
    const expectedText = 'QTY'
    render(<QuantityActions></QuantityActions>);

    // Act

    // Assert
    const text = screen.getByText('QTY')
    expect(text).toBeInTheDocument();
  });
});
