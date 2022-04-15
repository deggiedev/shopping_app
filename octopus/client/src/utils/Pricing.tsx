import { Box } from "@mui/material";

export const formatPrice = (price: number) => {
  const decimalPrice = price / 100;
  const poundAndPence = decimalPrice.toString().split(".");
  const formattedPrice = { pounds: poundAndPence[0], pence: poundAndPence[1] };
  return formattedPrice;
};

export const styledPrice = (pounds: any, pence: any) => {
  return (
    <Box display="flex">
      <Box>{pounds}</Box>
      <Box sx={{ marginTop: 0.3 }} fontSize={"25px"}>
        {`.${pence}`}
      </Box>
    </Box>
  );
};
