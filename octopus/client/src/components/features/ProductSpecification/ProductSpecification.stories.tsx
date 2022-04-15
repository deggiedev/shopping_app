import { mockSpecifications } from "../../mockData";
import { ProductSpecification } from "./ProductSpecification";

export default {
  title: "ProductSpecification",
  component: ProductSpecification,
};

export const Default = () => <ProductSpecification specifications={mockSpecifications} />;

