import React from "react";
import { Box } from "@mui/material";
import { AddToCart, Description, Footer, Header, ProductSpecification, ProductTitle } from "../components/widgets";
import { CartItems, Product, Specifications } from "../types";

interface Props {
  product: Product;
  specifications: Specifications;
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
  specifications,
  quantity,
  cartItems,
}) => {
  const subTitle = `${product?.power} // Packet of ${product?.quantity}`;

  return (
    <Box>
      <Header cartItems={cartItems} imageUrl={product?.imgUrl || ""}></Header>
      <ProductTitle title={product?.name || null} subTitle={subTitle} />
      <AddToCart
        product={product}
        quantity={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleAddToCart={handleAddToCart}
      />
      <Description description={product?.description || null} />
      <ProductSpecification specifications={specifications} />
      <Footer />
    </Box>
  );
};
