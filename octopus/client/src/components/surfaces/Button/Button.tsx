import React from "react";
import { Box, Button } from "@mui/material";
import { theme } from "../../../theme";

interface Props {
  handleClick: () => void;
}

export const CustomButton: React.FC<Props> = ({ handleClick }) => {
  const { palette } = theme;
  return (
    <Box
      aria-label="add-to-cart"
      onClick={handleClick}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ position: "relative", marginX: 4, marginTop: 2 }}
    >
      <Box
        sx={{
          background: palette.background.secondary,
          height: "50%",
          padding: 1.5,
          borderTopLeftRadius: "3px",
          borderTopRightRadius: "3px",
          width: "100%",
        }}
      ></Box>
      <Button
        sx={{
          position: `absolute`,
          color: palette.text.white,
          lineHeight: "1.25",
          fontSize: "24px",
          fontFamily: "Gotham",
          fontWeight: 900,
          textTransform: "none",
          width: "100%",
        }}
        variant="text"
      >
        Add to cart
      </Button>
      <Box
        sx={{
          background: palette.background.primary,
          height: "50%",
          padding: 1.5,
          borderBottomLeftRadius: "3px",
          borderBottomRightRadius: "3px",
          width: "100%",
        }}
      ></Box>
    </Box>
  );
};
