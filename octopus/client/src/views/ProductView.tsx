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
import { CartItems, CartItem, Product } from "../containers/ProductContainer";

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
      <Description description={mockData.description} />
      <Specifications specifications={mockSpecifications.specifications} />
      <Footer />
    </Box>
  );
};
