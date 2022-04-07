import React from "react";
import { screen, render } from "@testing-library/react";
import { Specifications } from "./Specifications";
import { mockSpecifications } from "../../mockData";

describe("Specifications", () => {

    it("should render <Specifications /> component with the correct title", async () => {
        // Arrange
        render(<Specifications specification={mockSpecifications}></Specifications>);
    
        // Act
    
        // Assert
        const title = screen.getByText('Specifications')
        expect(title).toBeInTheDocument();
      });
  it("should render <Specifications /> component with the correct data for a product specification", async () => {
    // Arrange

    render(<Specifications specification={mockSpecifications}></Specifications>);

    // Act

    // Assert
    const specifications = mockSpecifications;

    const specificationKeys = Object.keys(specifications);
    const specificationVals = Object.values(specifications);

    // 
    specificationVals.map(val => expect(screen.getByText(val)).toBeInTheDocument())
  });
});
