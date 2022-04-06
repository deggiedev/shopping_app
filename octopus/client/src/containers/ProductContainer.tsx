import React, { useEffect, useState } from "react";
import { ProductView } from "../views";
import { gql, useLazyQuery } from "@apollo/client";
import { Box, CircularProgress } from "@mui/material";

export type Product = {
  id: string;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  modelCode: string;
  colour: string;
  imgUrl: string;
} | null;

export type CartItems = Array<CartItem>;

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
} | null;

export const GET_PRODUCT = gql`
{
  product(productId: 1) {
    id
    name
    power
    description
    price
    quantity
    brand
    weight
    height
    width
    length
    modelCode
    colour
    imgUrl
  }
}
`;

export const ProductContainer: React.FC = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItems>([]);

  const [loadProduct, { loading }] = useLazyQuery(GET_PRODUCT, {
    onCompleted: (data) => {
      if (!data) {
        return;
      }
      if (data) {
        console.log('data', data)
        setProduct(data.product);
      }
    },
  });
  console.log(product);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (cartItem: CartItem) => {
    if (quantity > 0) {
      setCartItems([...cartItems, cartItem]);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const has = {
    product: product,
  };

  const _product = has.product && product;

  return (
    <>
      {loading && (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#050f2a",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!loading && (
        <ProductView
          product={_product}
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
