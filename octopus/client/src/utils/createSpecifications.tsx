import { Product } from "../types/Product";

export const createSpecifications = (product: Product) => {
  if (product) {
    return [
      { brand: product.brand },
      { weight: product.weight },
      { dimensions: `${product.height}x${product.width}x${product.length}` },
      { modelNumber: product.modelCode },
      { colour: product.colour },
    ];
  } else {
    return
  }
};
