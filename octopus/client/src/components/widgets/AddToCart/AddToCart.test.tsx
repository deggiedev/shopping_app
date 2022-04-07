import React from "react";
import { screen, render } from "@testing-library/react";
import { AddToCart } from "./AddToCart";
import { mockProduct } from "../../mockData";

describe("Add To Cart", () => {
  it("should render <AddToCart /> component with correct price", async () => {
    // Arrange
    const expectedPrice = "12.99";

    render(
      <AddToCart
        quantity={1}
        handleIncrease={() => null}
        handleDecrease={() => null}
        handleAddToCart={() => null}
        product={mockProduct}
      ></AddToCart>
    );

    // Act

    // Assert
    const price = screen.getByText(12.99);
    expect(price).toHaveTextContent(expectedPrice);
  });

  it("should render <AddToCart /> component with a button showing the correct text", async () => {
    // Arrange

    render(
      <AddToCart
        quantity={1}
        handleIncrease={() => null}
        handleDecrease={() => null}
        handleAddToCart={() => null}
        product={mockProduct}
      ></AddToCart>
    );

    // Act

    // Assert
    expect(
      screen.getByRole("button", { name: 'add-to-cart'})
    ).toBeInTheDocument();
  });

  it("should render <AddToCart /> component with a <QuantityActions /> child component", async () => {
    // Arrange

    render(
      <AddToCart
        quantity={1}
        handleIncrease={() => null}
        handleDecrease={() => null}
        handleAddToCart={() => null}
        product={mockProduct}
      ></AddToCart>
    );

    // Act

    // Assert
    const quantityActions = screen.getByTestId("quantity-actions");
    expect(quantityActions).toBeInTheDocument();
  });
});
