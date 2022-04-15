import { mockPrice } from "../../mockData";
import { Price } from "./Price";
import { theme } from "../../../theme";
import { Box } from "@mui/material";

export default {
  title: "Price",
  component: Price,
};

export const Default = () => (
  <Box sx={{ background: theme.palette.primary.main }}>
    <Price price={mockPrice} />
  </Box>
);
