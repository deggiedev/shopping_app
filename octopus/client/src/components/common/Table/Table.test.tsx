import React from "react";
import { screen, render } from "@testing-library/react";
import { mockSpecifications } from "../../mockData";
import { Table } from ".";

describe("Table", () => {
    it("should render <Table /> component with the correct data", async () => {
        // Arrange
        render(
          <Table
            data={mockSpecifications}
          ></Table>
        );
    
        // Act
    
        // Assert
        const specifications = mockSpecifications;
    
        //
        specifications.map((s) =>
           expect(screen.getByText(`${Object.keys(s)}`)).toBeInTheDocument()
        );
        specifications.map((s) =>
        expect(screen.getByText(`${Object.values(s)}`)).toBeInTheDocument()
     );
      });
  });