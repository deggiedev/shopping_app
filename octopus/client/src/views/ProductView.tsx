import React from "react";
import { Box } from "@mui/material";
import { Header } from "../components/widgets/Header";
import { ProductTitle } from "../components/widgets/ProductTitle";

export const ProductView: React.FC = () => {
  return (
    <Box>
      <Header></Header>
      <ProductTitle
        title={"Energy saving light bulb"}
        subTitle={"25W // Packet of 4"}
      />
    </Box>
  );
};
