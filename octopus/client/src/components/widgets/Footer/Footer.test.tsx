import React from "react";
import { screen, render } from "@testing-library/react";
import { Footer } from "./Footer";
import { mockData } from "./Footer.mockData";

describe("Header", () => {
  it("should render Footer correct company information", async () => {
    // Arrange
    const companyInfo = mockData.companyInfo;
    render(<Footer></Footer>);

    // Act

    // Assert

    companyInfo.map((companyInfo) =>
      expect(screen.getByText(companyInfo.content)).toBeInTheDocument()
    );
  });
});
