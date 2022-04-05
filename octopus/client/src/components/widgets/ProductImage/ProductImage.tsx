import React from "react";
import { Box } from "@mui/material";

type Image = {
    src: string;
    alt: string;
};

interface Props {
    image: Image;
}

export const ProductImage: React.FC<Props> = () => {
  return <Box sx={{ background: "white" }}></Box>;
};
