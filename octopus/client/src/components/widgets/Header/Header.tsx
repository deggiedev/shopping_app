import React from "react";
import { Badge, Box, SvgIcon } from "@mui/material";
import { BasketIcon, OctopusLogo } from "../../../assets";
import { ProductImage } from "../ProductImage/ProductImage";
import { mockImage } from "../ProductImage/ProductImage.mockData";
import { CartItems } from "../../../containers/ProductContainer";

interface Props {
  cartItems: CartItems;
}
export const Header: React.FC<Props> = ({ cartItems }) => {
  const has = {
    cartItems: !!cartItems,
  };

  const totalCartItems = has.cartItems ? cartItems?.length : null;

  return (
    <Box
      sx={{
        paddingTop: 1,
        position: "relative",
        display: "flex",
        width: "100%",
        height: "300px",
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
        badgeContent={<Box data-testid="badge">{totalCartItems}</Box>}
        color={"primary"}
        sx={{ marginY: 0.75, marginX: 2, marginLeft: "auto", color: "white" }}
      >
        <SvgIcon>
          <BasketIcon />
        </SvgIcon>
      </Badge>
      <ProductImage image={mockImage} />
    </Box>
  );
};
