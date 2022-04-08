import React from "react";
import { render, screen } from "@testing-library/react";
import { AddMinus } from "./AddMinus";

describe("AddMinus", () => {
  it("should render <AddMinus /> add variant", async () => {
    // Arrange
    render(<AddMinus handleClick={jest.fn} variant={"add"}></AddMinus>);

    // Act

    // Assert
    expect(screen.getByLabelText("add")).toBeInTheDocument();
  });

  it("should render <AddMinus /> minus variant", async () => {
    // Arrange
    render(<AddMinus handleClick={jest.fn} variant={"minus"}></AddMinus>);

    // Act

    // Assert
    expect(screen.getByLabelText("minus")).toBeInTheDocument();
  });
});
