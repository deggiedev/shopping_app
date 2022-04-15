import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../theme";

interface Props {
  description: string | null;
}
export const Description: React.FC<Props> = ({ description }) => {
  const { palette } = theme;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alingContent: "center",
        justifyContent: "center",
        padding: 2,
        background: palette.secondary.main,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginLeft: 2.5,
          marginBottom: 2,
          color: "white",
        }}
      >
        Description
      </Typography>
      <Typography
        component="p"
        variant="body2"
        sx={{
          marginX: 2.5,
          marginBottom: 1,
          color: "white",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
