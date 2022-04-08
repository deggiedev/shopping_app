import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonSection } from "./ButtonSection";

describe("ButtonSection", () => {
  it("should render <ButtonSection /> component", async () => {
    // Arrange
    render(<ButtonSection variant={'top'}></ButtonSection>);

    // Act

    // Assert
    expect(
      screen.getByLabelText('button-section')
    ).toBeInTheDocument();
  });
});
