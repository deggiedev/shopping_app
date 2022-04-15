import { screen, render } from "@testing-library/react";
import { ShoppingCart } from "./ShoppingCart";
import { mockCartItems } from "../../mockData";

describe("Shopping Cart", () => {
  it("should render ShoppingCart component with the correct number of cart items", async () => {
    // Arrange
    const expectedCartItems = 3;
    render(
      <ShoppingCart cartItems={mockCartItems}></ShoppingCart>
    );

    // Act

    // Assert
    const cartItems = screen.getByLabelText("badge");
    expect(cartItems).toHaveTextContent("3");
  });
});
