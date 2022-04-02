import React from "react";
import { Box, SvgIcon } from "@mui/material";
import { BasketIcon, OctopusLogo } from "../../../assets";

export const Header: React.FC = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", background: "#050f2a" }}>
      <SvgIcon
        sx={{ marginY: 1, width: 200, color: "white" }}
        viewBox="0 0 470.6667 64"
      >
        <OctopusLogo />
      </SvgIcon>
      <SvgIcon sx={{ marginY: 1, marginX: 2, marginLeft: 'auto', color: "white" }}>
        <BasketIcon />
      </SvgIcon>
    </Box>
  );
};
