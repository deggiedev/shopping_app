import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../theme";

export const Footer: React.FC = () => {
  const { palette } = theme;
  return (
    <Box
      sx={{
        color: palette.info.main,
        background: palette.secondary.main,
        paddingLeft: 2,
        paddingRight: 3,
        paddingY: 3,
      }}
    >
      <Typography sx={{ fontSize: "12px" }}>
        Octopus Energy Ltd is a company registered in England and Wales.
      </Typography>
      <Typography sx={{ fontSize: "12px" }}>
        Registered number: 09263424.Registered office: 33 Holborn.
      </Typography>
      <Typography sx={{ fontSize: "12px" }}>
        London, EC1N 2HT. Trading office: 20-24 Broadwick Street,
      </Typography>
      <Typography sx={{ fontSize: "12px" }}>
        London, W1f 8HT
      </Typography>
    </Box>
  );
};
