import React from "react";
import { Box, CardMedia } from "@mui/material";
import { theme } from "../../../theme";

interface Props {
  imageUrl: string;
}
export const ProductImage: React.FC<Props> = ({ imageUrl }) => {
  const { palette } = theme;
  return (
    <Box
      sx={{
        paddingX: 5,
        paddingBottom: 5,
        background: palette.background.darkBlue,
        marginBottom: -8,
      }}
    >
      <CardMedia component="img" src={imageUrl || ""} alt={'product-image'}></CardMedia>
    </Box>
  );
};
