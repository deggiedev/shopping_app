import React from "react";
import { Box, Typography } from "@mui/material";
import { Specifications } from "../../../types";
import { theme } from "../../../theme";
import { Table } from "../../common/Table";

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
        <Table data={specifications}/>
      </Box>
    </Box>
  );
};
