import { mockProduct } from "../../mockData";
import { ProductTitle } from "./ProductTitle";

export default {
  title: "ProductTitle",
  component: ProductTitle,
};
const subTitle = `${mockProduct?.power} // Packet of ${mockProduct?.quantity}`;
export const Default = () => <ProductTitle title={mockProduct?.name ?? ""} subTitle={subTitle} />;

