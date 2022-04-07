import React from "react";
import { Box } from "@mui/material";
import {
  Header,
  ProductTitle,
  AddToCart,
  Description,
  Footer,
  Specifications,
} from "../components/widgets";
import { CartItems, Product, Specification } from "../types";

interface Props {
  product: Product;
  specification: Specification;
  quantity: number;
  cartItems: CartItems;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleAddToCart: (product: Product, quantity: number) => void;
}
export const ProductView: React.FC<Props> = ({
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  product,
  specification,
  quantity,
  cartItems,
}) => {
  const subTitle = `${product?.power} // Packet of ${product?.quantity}`;

  return (
    <Box>
      <Header cartItems={cartItems} imageUrl={product?.imgUrl || ""}></Header>
      <ProductTitle title={product?.name || null} subTitle={subTitle || null} />
      <AddToCart
        product={product}
        quantity={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleAddToCart={handleAddToCart}
      />
      <Description description={product?.description || null} />
      <Specifications specification={specification} />
      <Footer />
    </Box>
  );
};
