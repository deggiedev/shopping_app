import React from "react";
import { Box } from "@mui/material";
import { theme } from "../../../../theme";

interface Props {
  variant: string;
}

export const ButtonSection: React.FC<Props> = ({ variant }) => {
  const is = {
    topVariant: variant === "top",
    bottomVariant: variant === "bottom",
  };
  const { palette } = theme;
  return (
    <Box
      aria-label={"button-section"}
      sx={{
        background: [
          is.topVariant
            ? palette.success.light
            : palette.success.main,
        ],
        height: "50%",
        padding: 1.5,
        borderTopLeftRadius: [is.topVariant ? "3px" : "none"],
        borderTopRightRadius: [is.topVariant ? "3px" : "none"],
        borderBottomLeftRadius: [is.bottomVariant ? "3px" : "none"],
        borderBottomRightRadius: [is.bottomVariant ? "3px" : "none"],
        width: "100%",
      }}
    ></Box>
  );
};
