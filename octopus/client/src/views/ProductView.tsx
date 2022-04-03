import React from "react";
import { Box } from "@mui/material";
import { Header } from "../components/widgets/Header";
import { ProductTitle } from "../components/widgets/ProductTitle";
import { AddToCart } from "../components/widgets/AddToCart/AddToCart";

export const ProductView: React.FC = () => {
  return (
    <Box>
      <Header></Header>
      <ProductTitle
        title={"Energy saving light bulb"}
        subTitle={"25W // Packet of 4"}
      />
      <AddToCart price={'12.99'}/>
    </Box>
  );
};
