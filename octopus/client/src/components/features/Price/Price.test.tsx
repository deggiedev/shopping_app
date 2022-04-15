import React from "react";
import { screen, render } from "@testing-library/react";
import { Price } from "./Price";
import { mockPrice } from "../../mockData";

describe("Price", () => {
  it("should render Price component with correct values", async () => {
    // Arrange
    const expectedPounds = "12";
    const expectedPence = ".99";
    render(<Price price={mockPrice}></Price>);

    // Act

    // Assert
    const pounds = screen.getByText("12");
    expect(pounds).toHaveTextContent(expectedPounds);
    const pence = screen.getByText('.99');
    expect(pence).toHaveTextContent(expectedPence);
  });
});
