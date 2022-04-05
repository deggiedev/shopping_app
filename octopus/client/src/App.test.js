import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
describe("App", () => {

    test("should be able to increase product quantity", async () => {
    // Arrange
    render(<App></App>);

    // Act

    // Assert
    const plusButton = screen.getByRole("button", { name: "plus-button" });
    userEvent.click(plusButton);
    const quantity = screen.getByTestId("quantity");
    expect(quantity).toHaveTextContent(2);
  });

  test("should be able to decrease product quantity", async () => {
    // Arrange
    render(<App></App>);

    // Act

    // Assert
    const plusButton = screen.getByRole("button", { name: "plus-button" });
    userEvent.click(plusButton);
    const minusButton = screen.getByRole("button", { name: "minus-button" });
    userEvent.click(minusButton);
    const quantity = screen.getByTestId("quantity");
    expect(quantity).toHaveTextContent(1);
  });

  test("should be able to add items to the basket", async () => {
    // Arrange
    render(<App></App>);

    // Act
    const addToCartButton = screen.getByRole("button", { name: "add-to-cart" });
    userEvent.click(addToCartButton);
    userEvent.click(addToCartButton);
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveTextContent(2);
  });
});
