import { screen, render } from "@testing-library/react";
import { Header } from "./Header";
import { OctopusLogo } from "../../../assets";
import { ShoppingCart } from "../../features/ShoppingCart.tsx";
import { mockCartItems } from "../../mockData";

describe("Header", () => {
  it("should render Header component with octopus logo and basket icon", async () => {
    // Arrange

    render(
      <Header
        iconLeft={<OctopusLogo/>}
        iconRight={<ShoppingCart cartItems={mockCartItems}></ShoppingCart>}
      ></Header>
    );

    // Act

    // Assert
    const octopusLogo = screen.getByTitle("Octopus Energy logo");
    expect(octopusLogo).toBeInTheDocument();

    const BasketIcon = screen.getByTitle("Basket Icon");
    expect(BasketIcon).toBeInTheDocument();
  });
});
