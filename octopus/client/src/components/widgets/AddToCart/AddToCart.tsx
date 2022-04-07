import React from "react";
import { Box, Button } from "@mui/material";
import { QuantityActions } from "../QuantityActions";
import { Product } from "../../../types";
import { formatPrice } from "../../../utils";
import { Price } from "../Price";

interface Props {
  product: Product;
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleAddToCart: (product: Product, quantity: number) => void;
}
export const AddToCart: React.FC<Props> = ({
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  product,
  quantity,
}) => {
  const price = formatPrice(product?.price!);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingX: 2,
        paddingBottom: 2.5,
        paddingTop: 1,
        color: "white",
        background: "#050f2a",
      }}
    >
      <Box
        sx={{
          marginX: 2.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Price price={price} />
        <QuantityActions
          quantity={quantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      </Box>
      <Button
        onClick={() => handleAddToCart(product, quantity)}
        aria-label="add-to-cart"
        size="large"
        sx={{
          textTransform: "none",
          background: "#fb1a7b",
          "&:hover": { background: "#fb1a7b" },
          marginX: 2.5,
          marginTop: 2,
          lineHeight: "1.25",
          fontSize: "24px",
          fontFamily: "Gotham",
          fontWeight: 900,
          color: "white",
        }}
        variant="contained"
      >
        Add to cart
      </Button>
    </Box>
  );
};
