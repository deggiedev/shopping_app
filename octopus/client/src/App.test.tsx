import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { screen, render  } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { GET_PRODUCT } from "./graphql/typeDefs";

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
describe("App", () => {
  test("should be able to increase product quantity", async () => {
    // Arrange

    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    // Act

    // Assert
    const plusButton = screen.getByLabelText("add");
    userEvent.click(plusButton);
    const quantity = screen.getByTestId("quantity");
    expect(quantity).toHaveTextContent('2'); //check
  });

  test("should be able to decrease product quantity", async () => {
    // Arrange
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    // Act

    // Assert
    const plusButton = screen.getByLabelText("add");
    userEvent.click(plusButton);
    const minusButton = screen.getByLabelText("minus");
    userEvent.click(minusButton);
    const quantity = screen.getByTestId("quantity");
    expect(quantity).toHaveTextContent('1'); //check
  });

  test("should be able to add items to the basket", async () => {
    // Arrange
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    // Act
    const addToCartButton = screen.getByText('Add to cart');
    await userEvent.click(addToCartButton);
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveTextContent('1');
  });
});
