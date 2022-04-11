import React from "react";
import { Badge, Box, SvgIcon } from "@mui/material";
import { BasketIcon, OctopusLogo } from "../../../assets";
import { ProductImage } from "../ProductImage";
import { CartItems } from "../../../types";
import { theme } from "../../../theme";

interface Props {
  cartItems: CartItems;
  imageUrl: string | "";
}
export const Header: React.FC<Props> = ({ cartItems, imageUrl }) => {
  const totalCartItems = cartItems?.length;
  const has = {
    cartItem: !!totalCartItems,
  };
  const { palette } = theme;

  return (
    <Box>
      <Box
        sx={{
          paddingTop: 1,
          display: "flex",
          width: "100%",
          background: palette.primary.main,
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
          sx={{
            marginY: 0.75,
            marginX: 2,
            marginLeft: "auto",
            color: "white",
          }}
        >
          <SvgIcon>
            <BasketIcon />
          </SvgIcon>
        </Badge>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ background: palette.primary.main }}
      >
        <ProductImage imageUrl={imageUrl} />
      </Box>
    </Box>
  );
};
