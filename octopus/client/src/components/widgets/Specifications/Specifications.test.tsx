import React from "react";
import { screen, render } from "@testing-library/react";
import { Specifications } from "./Specifications";
import { mockData } from "./Specifications.mockData";

describe("Specifications", () => {

    it("should render <Specifications /> component with the correct title", async () => {
        // Arrange
        render(<Specifications specifications={mockData.specifications}></Specifications>);
    
        // Act
    
        // Assert
        const title = screen.getByText('Specifications')
        expect(title).toBeInTheDocument();
      });
  it("should render <Specifications /> component with the correct data for a product specification", async () => {
    // Arrange

    render(<Specifications specifications={mockData.specifications}></Specifications>);

    // Act

    // Assert
    const specifications = mockData.specifications;

    const specificationKeys = Object.keys(specifications);
    const specificationVals = Object.values(specifications);

    specificationKeys.map(key => expect(screen.getByText(key)).toBeInTheDocument())
    specificationVals.map(val => expect(screen.getByText(val)).toBeInTheDocument())
  });
});
