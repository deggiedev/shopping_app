import React from "react";
import { Box } from "@mui/material";
import { theme } from "../../../theme";

interface Props {
  iconLeft: any;
  iconRight?: any;
}
export const Header: React.FC<Props> = ({ iconLeft, iconRight }) => {
  const { palette } = theme;

  return (
    <Box>
      <Box
        sx={{
          paddingTop: 1,
          display: "flex",
          width: "100%",
          background: palette.primary.main,
        }}
      >
        {iconLeft}
        {iconRight}
      </Box>
    </Box>
  );
};
