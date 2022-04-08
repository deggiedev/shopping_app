import React from "react";
import { screen, render } from "@testing-library/react";
import { ProductSpecification } from "./ProductSpecification";
import { mockSpecifications } from "../../mockData";

describe("Specifications", () => {
  it("should render <Specifications /> component with the correct title", async () => {
    // Arrange
    const expectedText = "Specifications"
    render(
      <ProductSpecification
        specifications={mockSpecifications}
      ></ProductSpecification>
    );

    // Act

    // Assert
    const title = screen.getByText("Specifications");
    expect(title).toHaveTextContent(expectedText);
  });
  it("should render <Specifications /> component with the correct data for a product specification", async () => {
    // Arrange
    render(
      <ProductSpecification
        specifications={mockSpecifications}
      ></ProductSpecification>
    );

    // Act

    // Assert
    const specifications = mockSpecifications;

    //
    specifications.map((s) =>
       expect(screen.getByText(`${Object.keys(s)}`)).toBeInTheDocument()
    );
    specifications.map((s) =>
    expect(screen.getByText(`${Object.values(s)}`)).toBeInTheDocument()
 );
  });
});
