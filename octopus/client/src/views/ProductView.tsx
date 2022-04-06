import React from "react";
import { Box } from "@mui/material";
import { Header } from "../components/widgets/Header";
import { ProductTitle } from "../components/widgets/ProductTitle";
import { AddToCart } from "../components/widgets/AddToCart/AddToCart";
import { Description } from "../components/widgets/Description";
import { Footer } from "../components/widgets/Footer/Footer";
import { Specifications } from "../components/widgets/Specifications/Specifications";
import { CartItems, CartItem, Product } from "../containers/ProductContainer";
import { createSpecification } from "../utils/createSpecification";

interface Props {
  product: Product;
  quantity: number;
  cartItems: CartItems;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleAddToCart: (cartItem: CartItem) => void
}
export const ProductView: React.FC<Props> = ({
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  product,
  quantity,
  cartItems,
}) => {
  return (
    <Box>
      <Header cartItems={cartItems} imageUrl={product?.imgUrl}></Header>
      <ProductTitle
        title={product?.name}
        subTitle={`${product?.power} // Packet of 4`}
      />
      <AddToCart
        price={product?.price}
        quantity={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleAddToCart={handleAddToCart}
      />
      <Description description={product?.description} />
      <Specifications specification={createSpecification(product)} />
      <Footer />
    </Box>
  );
};
