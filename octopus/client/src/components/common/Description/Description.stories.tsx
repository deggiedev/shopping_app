import { Description } from "./Description";
import { mockProduct } from "../../mockData";

export default {
  title: "Description",
  component: Description,
};

export const Default = () => <Description description={mockProduct?.description ?? null} />;
