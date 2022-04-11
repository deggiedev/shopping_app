import { Product } from "../../../client/src/types/Product";

export const createSpecifications = (product: Product) => {
  if (product) {
    return [
      { "Brand": product.brand },
      { "Item weight": product.weight },
      { "Dimensions": `${product.height}x${product.width}x${product.length}` },
      { "Item Model Number": product.modelCode },
      { "Colour": product.colour },
    ];
  } else {
    return
  }
};
