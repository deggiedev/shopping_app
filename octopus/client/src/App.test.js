import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { screen, render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  {
    product(productId: 1) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      modelCode
      colour
      imgUrl
    }
  }
`;
describe("App", () => {
  test("should be able to increase product quantity", async () => {
    // Arrange

    const mocks = [
      {
        request: {
          query: GET_PRODUCT,
          variables: {
            id: 1,
          },
        },
        result: {
          data: {
            product: {
              name: "bulb",
              power: "25W",
              description: "desc",
              price: 1299,
              quantity: 4,
              brand: "Philips",
              weight: 20,
              height: 20,
              width: 20,
              length: 20,
              modelCode: "E2",
              colour: "white",
              imgUrl: "testurl",
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );

    // Act

    // Assert
    const plusButton = screen.getByRole("button", { name: "plus-button" });
    userEvent.click(plusButton);
    const quantity = screen.getByTestId("quantity");
    expect(quantity).toHaveTextContent(2);
  });

  test("should be able to decrease product quantity", async () => {
    // Arrange
    render(<App />);

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
    render(<App />);

    // Act
    const addToCartButton = screen.getByRole("button", { name: "add-to-cart" });
    userEvent.click(addToCartButton);
    userEvent.click(addToCartButton);
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveTextContent(2);
  });
});
