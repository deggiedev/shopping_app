import React from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

type Specifications = {
  brand: string;
  weight: string;
  dimensions: string;
  modelNumber: string;
  colour: string;
};

interface Props {
  specifications: Specifications;
}

export const Specifications: React.FC<Props> = ({ specifications }) => {
  const { brand, weight, dimensions, modelNumber, colour } = specifications;

  return (
    <Box sx={{ background: "#050f2a", padding: 2 }}>
      <Typography
        variant="h6"
        sx={{
          lineHeight: "1.25",
          fontFamily: "Gotham",
          fontWeight: 900,
          marginLeft: 2.5,
          color: "white",
        }}
      >
        Specifications
      </Typography>
      <Box
        sx={{
          color: "white",
          background: "#050f2a",
          paddingY: 2,
          paddingX: 2.5,
        }}
      >
        <Table
          sx={{ color: "white", background: "#050f2a" }}
          aria-label="specification-table"
        >
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"Brand"}
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {brand}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"item weight"}
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {weight}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"Dimensions"}
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {dimensions}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"Item model number"}
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {modelNumber}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"colour"}
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {colour}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
