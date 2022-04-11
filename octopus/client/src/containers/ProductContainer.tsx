import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { Box, CircularProgress } from "@mui/material";
import { GET_PRODUCT } from "../graphql/typeDefs";
import { Product, CartItems, CartItem, Specifications } from "../types";
import { theme } from "../theme";
import { ProductView } from "../views";
import { createSpecifications } from "../utils";
import { createCartItem } from "../utils/createCartItem";

export const ProductContainer: React.FC = () => {
  //state and hooks
  const [product, setProduct] = useState<Product>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItems, setCartItems] = useState<CartItems>([]);
  const [specifications, setSpecifications] = useState<Specifications>([]);
  const { palette } = theme;
  // queries
  const [loadProduct, { loading }] = useLazyQuery(GET_PRODUCT, {
    variables: { productId: 1 },
    onCompleted: (data) => {
      if (!data) {
        return;
      }
      if (data) {
        setProduct(data.product);
        const specifications = createSpecifications(data.product);
        setSpecifications(specifications as Specifications);
      }
    },
  });

  // handlers
  const handleIncrease = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async (product: Product, quantity: number) => {
    const cartItem = await createCartItem(product, quantity);
    setCartItems([...(cartItems as CartItems), cartItem as CartItem]);
  };

  // effects
  useEffect(() => {
    loadProduct();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {loading && (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: palette.primary.main,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!loading && (
        <ProductView
          product={product}
          specifications={specifications}
          cartItems={cartItems}
          quantity={quantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleAddToCart={handleAddToCart}
        ></ProductView>
      )}
    </>
  );
};
