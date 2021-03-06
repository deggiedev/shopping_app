import React from "react";
import { Box } from "@mui/material";
import { QuantityActions } from "../QuantityActions";
import { Product } from "../../../types";
import { Price } from "../Price";
import { theme } from "../../../theme";
import { formatPrice } from "../../../utils";
import { Button } from "../../common";

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

  const handleClick = () => {
    handleAddToCart(product, quantity);
  };

  const { palette } = theme;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingX: 2,
        paddingBottom: 2.5,
        paddingTop: 1,
        color: "white",
        background: palette.primary.main,
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
      <Button handleClick={handleClick} />
    </Box>
  );
};
