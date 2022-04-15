import React from "react";
import { Box } from "@mui/material";
import {
  AddToCart,
  Description,
  Footer,
  Header,
  ProductImage,
  ProductSpecification,
  ProductTitle,
} from "../components/features";
import { CartItems, Product, Specifications } from "../types";
import { OctopusLogo } from "../assets";
import { ShoppingCart } from "../components/features/ShoppingCart.tsx";

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
      <Header
        iconLeft={<OctopusLogo />}
        iconRight={<ShoppingCart cartItems={cartItems}></ShoppingCart>}
      ></Header>
      <ProductImage imageUrl={product?.imgUrl || ""} />
      <ProductTitle title={product?.name || null} subTitle={subTitle || null} />
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
