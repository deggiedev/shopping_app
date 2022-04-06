import React from "react";
import { screen, render } from "@testing-library/react";
import { Specifications } from "./Specifications";
import { mockSpecifications } from "./Specifications.mockData";

describe("Specifications", () => {

    it("should render <Specifications /> component with the correct title", async () => {
        // Arrange
        render(<Specifications specification={mockSpecifications.specifications}></Specifications>);
    
        // Act
    
        // Assert
        const title = screen.getByText('Specifications')
        expect(title).toBeInTheDocument();
      });
  it("should render <Specifications /> component with the correct data for a product specification", async () => {
    // Arrange

    render(<Specifications specification={mockSpecifications.specifications}></Specifications>);

    // Act

    // Assert
    const specifications = mockSpecifications.specifications;

    const specificationKeys = Object.keys(specifications);
    const specificationVals = Object.values(specifications);

    // 
    specificationVals.map(val => expect(screen.getByText(val)).toBeInTheDocument())
  });
});
