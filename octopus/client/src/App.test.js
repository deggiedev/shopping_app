import React from "react";
import { screen, render, getByTestId } from "@testing-library/react";
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
    const minusButton = screen.getByRole("button", { name: "minus-button" });
    userEvent.click(minusButton);
    const quantity = screen.getByTestId("quantity");
    expect(quantity).toHaveTextContent(0);
  });

  // test("should be able to add items to the basket", async () => {
  //   // Arrange
  //   render(<App></App>);

  //   // Act

  //   // Assert
  //   expect(true).toBe(false);
  // });
});
