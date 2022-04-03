import React from "react";
import { screen, render } from "@testing-library/react";
import { ProductTitle } from "./ProductTitle";
import { mockData } from "./ProductTitle.mockData";

describe("Product Title", () => {
  it("should render ProductTitle componet with a title and subTitle", async () => {
    // Arrange
    // const expectedTitle = mockData.title;
    // const expectedSubTitle = mockData.subTitle;

    render(
      <ProductTitle
        title={mockData.title}
        subTitle={mockData.subTitle}
      ></ProductTitle>
    ); 
    
    // Act

    // Assert
    const title = screen.getByText(mockData.title);
    const subTitle = screen.getByText(mockData.subTitle);
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
