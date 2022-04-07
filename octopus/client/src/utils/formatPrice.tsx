export const formatPrice = (price: number) => {
  const decimalPrice = price / 100;
  const poundAndPence = decimalPrice.toString().split(".");
  const formattedPrice = { pounds: poundAndPence[0], pence: poundAndPence[1] };
  return formattedPrice;
};
