import React, { useState } from "react";
import { ProductView } from "../views";

export type CartItems = Array<ProductItem>;

export type ProductItem = {
  name: string;
  price: number;
  quantity: number;
} | null;

export const ProductContainer: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItems>([]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (productItem: ProductItem) => {
    if (quantity > 0) {
      setCartItems([...cartItems, productItem]);
    }
  };

  return (
    <>
      <ProductView
        cartItems={cartItems}
        quantity={quantity}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleAddToCart={handleAddToCart}
      ></ProductView>
    </>
  );
};
