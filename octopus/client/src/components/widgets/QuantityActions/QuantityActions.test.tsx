import React from "react";
import { screen, render } from "@testing-library/react";
import { QuantityActions } from "./QuantityActions";
import { mockData } from "./QuantityActions.mockData";

describe("QunatityActions", () => {
  it("should render <QuantityActinos/> componet with two buttons showing the correct plus and minus symbols", async () => {
    // Arrange

    render(<QuantityActions quantity={mockData.quantity}></QuantityActions>);

    // Act

    // Assert
    const plusButton = screen.getByRole("button", { name: "plus-button" });
    const minusButton = screen.getByRole("button", { name: "minus-button" });
    expect(plusButton).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
  });

  it("should render <QuantityActinos/> componet with the correct label", async () => {
    // Arrange
    const expectedText = 'QTY'
    render(<QuantityActions quantity={mockData.quantity}></QuantityActions>);

    // Act

    // Assert
    const text = screen.getByText('QTY')
    expect(text).toBeInTheDocument();
  });

  it("should render <QuantityActinos/> componet with the correct value", async () => {
    // Arrange
    const expectedValue = mockData.quantity
    render(<QuantityActions quantity={mockData.quantity}></QuantityActions>);

    // Act
    
    // Assert
    const quantity = screen.getByText(mockData.quantity);
    expect(quantity).toBeInTheDocument();
  });
});
