import { mockProduct } from "../../mockData";
import { ProductImage } from "./ProductImage";

export default {
  title: "ProductImage",
  component: ProductImage,
};

export const Default = () => (
  <ProductImage imageUrl={mockProduct?.imgUrl || ""} />
);
