import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  description: string | null;
}
export const Description: React.FC<Props> = ({ description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alingContent: "center",
        justifyContent: "center",
        padding: 2,
        background: `#01193b`,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          lineHeight: "1.25",
          fontFamily: "Gotham",
          fontWeight: 900,
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
          fontFamily: "Gotham",
          color: "white",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
