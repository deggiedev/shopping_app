import React from "react";
import { Box, Button } from "@mui/material";
import { theme } from "../../../theme";
import { ButtonSection } from "./ButtonSection/ButtonSection";

interface Props {
  handleClick: () => void;
}

export const CustomButton: React.FC<Props> = ({ handleClick }) => {

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginX: 4,
        marginTop: 2,
        [theme.breakpoints.up("lg")]: {
          marginLeft: "auto",
          minWidth: 200,
        },
      }}
    >
      <ButtonSection variant={"top"} />
      <Button
        sx={{
          position: `absolute`,
          color: "white",
          lineHeight: "1.25",
          fontSize: "24px",
          fontWeight: 900,
          textTransform: "none",
          width: "100%",
        }}
        variant="text"
      >
        Add to cart
      </Button>
      <ButtonSection variant={"bottom"} />
    </Box>
  );
};
