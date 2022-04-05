import React, { useState } from "react";
import { ProductView } from "../views";

export const ProductContainer: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ProductView
      quantity={quantity}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
    ></ProductView>
  );
};
