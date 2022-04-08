import React from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Specification } from "../../../types";
import { theme } from "../../../theme";

interface Props {
  specification: Specification;
}

export const Specifications: React.FC<Props> = ({ specification }) => {
const { palette } = theme;
  return (
    <Box sx={{ background: palette.background.darkBlue, padding: 2 }}>
      <Typography
        variant="h6"
        sx={{
          lineHeight: "1.25",
          fontFamily: "Gotham",
          fontWeight: 900,
          marginLeft: 2.5,
          color: palette.text.white,
        }}
      >
        Specifications
      </Typography>
      <Box
        sx={{
          color: palette.text.white,
          background: palette.background.darkBlue,
          paddingY: 2,
          paddingX: 2.5,
        }}
      >
        <Table
          sx={{ color: palette.text.white, background: palette.background.darkBlue }}
          aria-label="specification-table"
        >
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"Brand"}
              </TableCell>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {specification?.brand}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"item weight"}
              </TableCell>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {specification?.weight}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"Dimensions"}
              </TableCell>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {specification?.dimensions}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"Item model number"}
              </TableCell>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {specification?.modelNumber}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {"colour"}
              </TableCell>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {specification?.colour}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
