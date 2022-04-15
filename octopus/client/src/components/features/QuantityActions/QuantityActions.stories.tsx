import { Box } from "@mui/material";
import { theme } from "../../../theme";
import { mockProduct } from "../../mockData";
import { QuantityActions } from "./QuantityActions";

export default {
  title: "QuantityActions",
  component: QuantityActions,
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
    <QuantityActions
      quantity={1}
      handleIncrease={() => null}
      handleDecrease={() => null}
    />
  </Box>
);
