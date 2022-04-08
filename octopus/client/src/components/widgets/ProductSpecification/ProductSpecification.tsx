import React from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Specifications } from "../../../types";
import { theme } from "../../../theme";

interface Props {
  specifications: Specifications;
}

export const ProductSpecification: React.FC<Props> = ({ specifications }) => {
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
          paddingTop: 2,
          paddingX: 2.5,
        }}
      >
        <Table
          sx={{
            color: palette.text.white,
            background: palette.background.darkBlue,
          }}
          aria-label="specification-table"
        >
          <TableBody>
            {specifications?.map((specification, idx) => (
              <>
                <TableRow key={idx}>
                  <TableCell
                    sx={{
                      color: palette.text.white,
                      borderBottom: "none",
                      fontFamily: "Gotham",
                      padding: 0,
                    }}
                  >
                    {Object.keys(specification)}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: palette.text.white,
                      borderBottom: "none",
                      fontFamily: "Gotham",
                      padding: 0,
                    }}
                  >
                    {Object.values(specification)}
                  </TableCell>
                </TableRow>
                <Box marginY={1}></Box>
              </>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
