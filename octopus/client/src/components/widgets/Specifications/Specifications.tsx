import React from "react";
import { Box } from "@mui/material";

type Specifications = {
  brand: string;
  weight: string;
  dimensions: string;
  modelNumber: string;
  color: string;
};

interface Props {
  specifications: Specifications;
}

export const Specifications: React.FC<Props>= () => {
  return (
    <Box sx={{ background: "#050f2a" }}>
      Specification implementation to be made
    </Box>
  );
};
