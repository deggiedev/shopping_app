import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        color: "#607695",
        background: "#01193b",
        paddingLeft: 2,
        paddingRight: 3,
        paddingY: 3,
      }}
    >
      <Typography sx={{ fontSize: "10px", fontFamily: "Gotham" }}>
        Octopus Energy Ltd is a company registered in England and Wales.
      </Typography>
      <Typography sx={{ fontSize: "10px", fontFamily: "Gotham" }}>
        Registered number: 09263424.Registered office: 33 Holborn.
      </Typography>
      <Typography sx={{ fontSize: "10px", fontFamily: "Gotham" }}>
        London, EC1N 2HT. Trading office: 20-24 Broadwick Street,
      </Typography>
      <Typography sx={{ fontSize: "10px", fontFamily: "Gotham" }}>
        London, W1f 8HT
      </Typography>
    </Box>
  );
};
