import { Box } from "@mui/material";
import { theme } from "../../../theme";
import { mockCartItems, mockProduct } from "../../mockData";
import { ShoppingCart } from "./ShoppingCart";

export default {
  title: "ShoppingCart",
  component: ShoppingCart,
};

export const Default = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 2,
      background: theme.palette.primary.main,
    }}
  >
    <ShoppingCart cartItems={mockCartItems} />
  </Box>
);
