import React from "react";
import { Typography } from "@mui/material";
import { styledPrice } from "../../../utils";

interface Props {
  price: { pounds: string; pence: string };
}
export const Price: React.FC<Props> = ({ price }) => {
  return (
    <Typography variant="h2" sx={{ color: "white", marginTop: 2.5 }}>
      {styledPrice(price?.pounds, price?.pence)}{" "}
    </Typography>
  );
};
