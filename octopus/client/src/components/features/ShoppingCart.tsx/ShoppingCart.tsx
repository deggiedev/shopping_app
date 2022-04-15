import React from "react";
import { Badge, Box } from "@mui/material";
import { CartItems } from "../../../types";
import { BasketIcon } from "../../../assets";

interface Props {
  cartItems: CartItems;
}
export const ShoppingCart: React.FC<Props> = ({ cartItems }) => {
  const totalCartItems = cartItems?.length;
  const has = {
    cartItem: !!totalCartItems,
  };

  return (
    <Badge
      invisible={!has.cartItem}
      badgeContent={
        <Box aria-label="badge" data-testid="badge">
          {totalCartItems}
        </Box>
      }
      color={"success"}
      sx={{
        marginY: 0.75,
        marginX: 2,
        marginLeft: "auto",
        color: "white",
      }}
    >
      <BasketIcon />
    </Badge>
  );
};
