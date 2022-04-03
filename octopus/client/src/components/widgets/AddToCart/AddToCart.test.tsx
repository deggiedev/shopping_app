import React from "react";
import { screen, render } from "@testing-library/react";
import { AddToCart } from "./AddToCart";
import { mockData } from "./AddToCart.mockData";

describe("Add To Cart", () => {
  it("should render <AddToCart /> component with correct price", async () => {
    // Arrange
    const expectedPrice = mockData.price;

    render(<AddToCart price={mockData.price}></AddToCart>);

    // Act

    // Assert
    const price = screen.getByText(mockData.price);
    expect(price).toBeInTheDocument;
  });

  it("should render <AddToCart /> component with a button showing the correct text", async () => {
    // Arrange

    render(<AddToCart price={mockData.price}></AddToCart>);

    // Act

    // Assert
    expect(
      screen.getByRole("button", { name: /Add to cart/i }) //fix typing by upgrading react testing library
    ).toBeInTheDocument();
  });

  it("should render <AddToCart /> component with a <QuantityActions /> child component", async () => {
    // Arrange

    render(<AddToCart price={mockData.price}></AddToCart>);

    // Act

    // Assert
    const quantityActions = screen.getByTestId("quantity-actions");
    expect(quantityActions).toBeInTheDocument();
  });
});
