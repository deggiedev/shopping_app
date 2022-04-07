import React from "react";
import { Badge, Box, SvgIcon } from "@mui/material";
import { BasketIcon, OctopusLogo } from "../../../assets";
import { ProductImage } from "../ProductImage";
import { CartItems } from "../../../types";

interface Props {
  cartItems: CartItems;
  imageUrl: string | "";
}
export const Header: React.FC<Props> = ({ cartItems, imageUrl }) => {
  const totalCartItems = cartItems?.length;

  const has = {
    cartItem: !!totalCartItems,
  };

  return (
    <Box>
      <Box
        sx={{
          paddingTop: 1,
          position: "relative",
          display: "flex",
          width: "100%",
          background: "#050f2a",
        }}
      >
        <SvgIcon
          sx={{ marginY: 1, width: 200, color: "white" }}
          viewBox="0 0 470.6667 70"
        >
          <OctopusLogo />
        </SvgIcon>
        <Badge
          invisible={!has.cartItem}
          badgeContent={<Box data-testid="badge">{totalCartItems}</Box>}
          color={"primary"}
          sx={{ marginY: 0.75, marginX: 2, marginLeft: "auto", color: "white" }}
        >
          <SvgIcon>
            <BasketIcon />
          </SvgIcon>
        </Badge>
      </Box>
      <ProductImage imageUrl={imageUrl || ""} />
    </Box>
  );
};
