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
import { CartItems, ProductItem } from "../containers/ProductContainer";

interface Props {
  quantity: number;
  cartItems: CartItems;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleAddToCart: (productItem: ProductItem) => void
}
export const ProductView: React.FC<Props> = ({
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  quantity,
  cartItems,
}) => {
  return (
    <Box>
      <Header cartItems={cartItems}></Header>
      <ProductTitle
        title={"Energy saving light bulb"}
        subTitle={"25W // Packet of 4"}
      />
      <AddToCart
        price={"12.99"}
        quantity={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleAddToCart={handleAddToCart}
      />
      <Description description={mockData.description} />
      <Specifications specifications={mockSpecifications.specifications} />
      <Footer />
    </Box>
  );
};
