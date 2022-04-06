import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { QuantityActions } from "../QuantityActions";
import { CartItem } from "../../../containers/ProductContainer";
import { mockProductItem } from "./AddToCart.mockData";
import { formatPrice } from "../../../utils/formatPrice";

interface Props {
  price: number | null | undefined;
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleAddToCart: (cartItem: CartItem) => void;
}
export const AddToCart: React.FC<Props> = ({
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  price,
  quantity,
}) => {
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
        <Typography
          sx={{
            lineHeight: "1.25",
            fontSize: "30px",
            fontFamily: "Gotham",
            fontWeight: 900,
            color: "white",
            marginTop: 2.5,
          }}
        >
          {formatPrice(price as number)}
        </Typography>
        <QuantityActions
          quantity={quantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      </Box>
      <Button
        onClick={() => handleAddToCart(mockProductItem)}
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
