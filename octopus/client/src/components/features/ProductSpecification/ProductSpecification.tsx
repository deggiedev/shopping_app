import React from "react";
import { Box, Typography } from "@mui/material";
import { Specifications } from "../../../types";
import { theme } from "../../../theme";
import { Table } from "../../common";


interface Props {
  specifications: Specifications;
}

export const ProductSpecification: React.FC<Props> = ({ specifications }) => {
  const { palette } = theme;
  return (
    <Box sx={{ background: palette.primary.main, padding: 2 }}>
      <Typography
        variant="h6"
        sx={{
          marginLeft: 2.5,
          color: "white",
        }}
      >
        Specifications
      </Typography>
      <Box
        sx={{
          color: "white",
          background: palette.primary.main,
          paddingTop: 2,
          paddingX: 2.5,
        }}
      >
        <Table data={specifications}/>
      </Box>
    </Box>
  );
};
