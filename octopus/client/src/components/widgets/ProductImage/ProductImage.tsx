import React from "react";
import { Box, CardMedia } from "@mui/material";

type Image = {
  src: string;
  alt: string;
};

interface Props {
  image: Image;
}

export const ProductImage: React.FC<Props> = ({ image }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 50,
        right: 50,
        top: 50,
        bottom: -30,
        textAlign: "center",
        background: "white",
      }}
    >
      <CardMedia
        component="img"
        src={image.src}
        alt={image.alt}
      ></CardMedia>
    </Box>
  );
};
