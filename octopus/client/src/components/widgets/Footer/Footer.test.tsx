import React from "react";
import { screen, render } from "@testing-library/react";
import { Footer } from "./Footer";
import { mockCompanyInfo } from "../../mockData";

describe("Footer", () => {
  it("should render Footer correct company information", async () => {
    // Arrange
    const companyInfo = mockCompanyInfo;
    render(<Footer></Footer>);

    // Act

    // Assert

    companyInfo.map((companyInfo) =>
      expect(screen.getByText(companyInfo.content)).toBeInTheDocument()
    );
  });
});
