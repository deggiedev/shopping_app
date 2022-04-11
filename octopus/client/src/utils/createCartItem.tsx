import { Product } from "../../../client/src/types/Product";

export const createCartItem = (product: Product, quantity: number) => {
  return {
    name: product?.name,
    price: product?.price,
    quantity: quantity,
  };
};
