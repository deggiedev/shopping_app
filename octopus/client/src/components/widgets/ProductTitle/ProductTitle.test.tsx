import React from "react";
import { screen, render } from "@testing-library/react";
import { ProductTitle } from "./ProductTitle";
import { mockData } from "./ProductTitle.mockData";

describe("Header", () => {
  it("should render ProductTitle componet with a title and subTitle", async () => {
    // Arrange
    const _expectedTitle = "Energy saving dimmer switch";
    const _expectedSubTitle = "white // Packet of 4";

    render(
      <ProductTitle
        title={mockData.title}
        subTitle={mockData.subTitle}
      ></ProductTitle>
    ); 
    
    // Act

    // Assert
    const title = screen.getByText(_expectedTitle);
    const subTitle = screen.getByText(_expectedSubTitle);
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
