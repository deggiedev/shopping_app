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
      sx={{
        display: "flex",
        justifyContent: "center",
        background: palette.primary.main,
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
