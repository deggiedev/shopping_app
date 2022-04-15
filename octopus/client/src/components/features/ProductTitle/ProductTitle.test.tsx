import React from "react";
import { screen, render } from "@testing-library/react";
import { ProductTitle } from "./ProductTitle";
import { mockProduct, mockSubTitle } from "../../mockData";

describe("Product Title", () => {
  it("should render ProductTitle component with a title and subTitle", async () => {
    // Arrange
    
    render(
      <ProductTitle
        title={mockProduct?.name!} // check
        subTitle={mockSubTitle}
      ></ProductTitle>
    );

    // Act

    // Assert
    const title = screen.getByText(mockProduct?.name!); // check
    const subTitle = screen.getByText(mockSubTitle);
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
