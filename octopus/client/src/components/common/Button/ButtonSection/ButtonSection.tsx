import React from "react";
import { Box } from "@mui/material";

interface Props {
  variant: string;
}

export const ButtonSection: React.FC<Props> = ({ variant }) => {
  const is = {
    topVariant: variant === "top",
    bottomVariant: variant === "bottom",
  };

  return (
    <Box
      aria-label={"button-section"}
      sx={{
        background: [
          is.topVariant
            ? "#ff75b4"
            : "#fb1a7b",
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
