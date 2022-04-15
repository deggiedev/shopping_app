import { mockProduct } from "../../mockData";
import { AddToCart } from "./AddToCart";

export default {
  title: "AddToCart",
  component: AddToCart,
};

export const Default = () => (
  <AddToCart
    handleAddToCart={() => null}
    handleDecrease={() => null}
    handleIncrease={() => null}
    product={mockProduct}
    quantity={1}
  />
);
