import React from "react";
import { screen, render } from "@testing-library/react";
import { Header } from "./Header";
import { mockCartItems } from "./Header.mockData";

describe("Header", () => {
  it("should render Header component with octopus logo and basket icon", async () => {
    // Arrange

    render(
      <Header cartItems={mockCartItems}></Header>
    );

    // Act

    // Assert
    const octopusLogo = screen.getByTitle("Octopus Energy logo");
    expect(octopusLogo).toBeInTheDocument();

    const BasketIcon = screen.getByTitle("Basket Icon");
    expect(BasketIcon).toBeInTheDocument();
  });
});
