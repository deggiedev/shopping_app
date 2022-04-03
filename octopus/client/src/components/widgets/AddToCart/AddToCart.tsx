import React from "react";
import { Box } from "@mui/material";

interface Props {
  price: string;
}
export const AddToCart: React.FC<Props> = ({ price }) => {
  return (
    <Box sx={{ background: "#050f2a" }}>
      AddToCart implementation to be made
    </Box>
  );
};
