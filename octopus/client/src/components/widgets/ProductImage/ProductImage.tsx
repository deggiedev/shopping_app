import React from "react";
import { Box, CardMedia } from "@mui/material";

interface Props {
  imageUrl: string;
}
export const ProductImage: React.FC<Props> = ({ imageUrl }) => {

  return (
    <Box
      sx={{
        paddingX: 5,
        paddingBottom: 5,
        background: "#050f2a",
        marginBottom: -8,
      }}
    >
      <CardMedia component="img" src={imageUrl || ""} alt={'product-image'}></CardMedia>
    </Box>
  );
};
