import React from "react";
import { Box, CardMedia } from "@mui/material";
import { theme } from "../../../theme";

interface Props {
  imageUrl: string;
}
export const ProductImage: React.FC<Props> = ({ imageUrl = "" }) => {
  const { palette } = theme;
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        background: palette.background.darkBlue,
        [theme.breakpoints.up("lg")]: { justifyContent: "left" },
      }}
    >
      <CardMedia
        component="img"
        src={imageUrl}
        alt={"product-image"}
        sx={{
          marginBottom: -3.5,
          padding: 0,
          maxWidth: 300,
          [theme.breakpoints.up("lg")]: { maxWidth: 450 },
        }}
      ></CardMedia>
    </Box>
  );
};
