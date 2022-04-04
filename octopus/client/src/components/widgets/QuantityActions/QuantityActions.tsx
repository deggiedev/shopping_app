import React from "react";
import { Box } from "@mui/material";

interface Props {
  quantity: string;
}

export const QuantityActions: React.FC<Props> = ({ quantity }) => {
  return <Box sx={{ background: "white" }}>Actions</Box>;
};
