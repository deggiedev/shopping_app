import React from "react";
import { Box } from "@mui/material";
import { Header } from "../components/widgets/Header";
import { ProductTitle } from "../components/widgets/ProductTitle";
import { AddToCart } from "../components/widgets/AddToCart/AddToCart";
import { mockData } from "../components/widgets/Description/Description.mockData";
import { Description } from "../components/widgets/Description";
import { Footer } from "../components/widgets/Footer/Footer";
import { Specifications } from "../components/widgets/Specifications/Specifications";
import { mockSpecifications } from "../components/widgets/Specifications/Specifications.mockData";

interface Props {
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}
export const ProductView: React.FC<Props> = ({
  handleIncrease,
  handleDecrease,
  quantity,
}) => {
  return (
    <Box>
      <Header></Header>
      <ProductTitle
        title={"Energy saving light bulb"}
        subTitle={"25W // Packet of 4"}
      />
      <AddToCart
        price={"12.99"}
        quantity={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
      <Description description={mockData.description} />
      <Specifications specifications={mockSpecifications.specifications} />
      <Footer />
    </Box>
  );
};
