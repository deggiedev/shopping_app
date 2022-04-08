import React, { Fragment } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { theme } from "../../../theme";

type Data = {};

interface Props {
  data: Data[];
}

export const CustomTable: React.FC<Props> = ({ data }) => {
  const { palette } = theme;

  return (
    <Table
      sx={{
        color: palette.text.white,
        background: palette.background.darkBlue,
      }}
      aria-label="specification-table"
    >
      <TableBody>
        {data?.map((d, idx) => (
          <Fragment key={idx} >
            <TableRow key={idx}>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {Object.keys(d)}
              </TableCell>
              <TableCell
                sx={{
                  color: palette.text.white,
                  borderBottom: "none",
                  fontFamily: "Gotham",
                  padding: 0,
                }}
              >
                {Object.values(d)}
              </TableCell>
            </TableRow>
            <Box marginY={1}></Box>
          </Fragment>
        ))}
      </TableBody>
    </Table>
  );
};
